"use client";

import Image from "next/image";
import blackLogo from "../public/Synergis_Full_Black_Transparent.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

type SubscribeState = "idle" | "loading" | "success" | "error";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const reachedBottom = useIsAtBottom(100);

  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState<SubscribeState>("idle");

  // Clear the success / error message a few seconds after it shows.
  useEffect(() => {
    if (subscribe !== "success" && subscribe !== "error") return;
    const t = window.setTimeout(() => setSubscribe("idle"), 4000);
    return () => window.clearTimeout(t);
  }, [subscribe]);

  const handleShowMenu = () => {
    setMenu(!menu);
  };

  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (subscribe === "loading" || !email.trim()) return;
    setSubscribe("loading");

    const APP_ID = process.env.NEXT_PUBLIC_EMAIL_ID;
    if (!APP_ID) {
      setSubscribe("error");
      return;
    }

    const baseURL = `https://script.google.com/macros/s/${APP_ID}/exec`;
    // application/x-www-form-urlencoded is CORS-safelisted (no preflight) and
    // avoids the multipart boundary; the Apps Script web app echoes back
    // { result: "success", row: N } with Access-Control-Allow-Origin: *.
    const body = new URLSearchParams({
      Email: email,
      CreatedAt: new Date().toLocaleString(),
    });

    try {
      const res = await fetch(baseURL, { method: "POST", body });
      const data = (await res.json().catch(() => null)) as
        | { result?: string }
        | null;

      if (res.ok && data?.result !== "error") {
        setEmail("");
        setSubscribe("success");
      } else {
        setSubscribe("error");
      }
    } catch {
      setSubscribe("error");
    }
  };

  return (
    <div
      onClick={handleShowMenu}
      onMouseLeave={() => setMenu(false)}
      className="w-[95vw] z-100 max-w-125  backdrop-blur-md  rounded-xl font-bitcount fixed top-[2vh]  left-1/2 transform -translate-x-1/2  text-black transition-colors duration-500 "
      style={
        reachedBottom
          ? { backgroundColor: "#ffffffcc", color: "black" }
          : { backgroundColor: "#ffffff33" }
      }
    >
      <div className="flex justify-between items-center px-5 h-[9vh] hover:h-[9vh] delay-100 duration-200 text-xs ">
        <Link href={"/work"} className="transition-opacity duration-200 hover:opacity-60">
          <h1 className="">WORK</h1>
        </Link>

        <Link
          href="/"
          onClick={(e) => e.stopPropagation()}
          className="h-10 w-48 overflow-hidden block"
          aria-label="Synergis home"
        >
          <Image
            className="h-full w-full md:scale-70 object-cover object-center"
            src={blackLogo}
            alt="Synergis Design Solutions"
          />
        </Link>

        <Link
          href="/expertise"
          className="transition-opacity duration-200 hover:opacity-60"
        >
          <h1>ABOUT</h1>{" "}
        </Link>
      </div>

      {!reachedBottom ? (
        menu ? (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300 ease-out motion-reduce:animate-none">
            <div className="mt-10 ">
              <table className="table-fixed w-full font-inter text-center text-sm">
                <tbody className="">
                  <tr className="">
                    <td className="border p-3 border-l-0">
                      {" "}
                      <Link
                        href={"/expertise"}
                        className="transition-colors duration-200 hover:text-blue-900"
                      >
                        Expertise &amp; Capabilities
                      </Link>
                    </td>
                    <td className="border p-3 border-r-0">
                      {" "}
                      <Link
                        href={"/pricing"}
                        className="transition-colors duration-200 hover:text-blue-900"
                      >
                        Process &amp; Pricing
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3 border-l-0">
                      <Link
                        href={"/work"}
                        className="transition-colors duration-200 hover:text-blue-900"
                      >
                        Outcomes
                      </Link>
                    </td>
                    <td className="border p-3 border-r-0">
                      {" "}
                      <Link
                        href={"/team"}
                        className="transition-colors duration-200 hover:text-blue-900"
                      >
                        Teams
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Finish the  */}
            <div className="p-5 mt-5">
              <h1 className="font-bitcount text-sm">General Enquires</h1>
              <a
                href="mailto:info@synergisdesignsolutions.com"
                className="group flex flex-row items-center h-fit"
              >
                <div className="h-2 w-2 bg-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 ease-in-out"></div>
                <span className="font-semibold transition-transform duration-200 ease-in-out delay-100 group-hover:translate-x-3">
                  info@synergisdesignsolutions.com
                </span>
              </a>

              <a
                href="https://calendar.app.google/7Vr9h6T1i7stfyRu5"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-row items-center h-fit"
              >
                <div className="h-2 w-2 bg-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 ease-in-out"></div>
                <span className="font-semibold transition-transform duration-200 ease-in-out delay-100 group-hover:translate-x-3">
                  Plan a call
                </span>
              </a>
            </div>
          </div>
        ) : null
      ) : (
        <form
          onSubmit={handleSubscribe}
          onClick={(e) => e.stopPropagation()}
          className="p-5 text-center mt-15 w-fit md:w-[70%] mx-auto"
        >
          <h1 className="text-xl font-bold mb-5">
            {" "}
            Industry insight & agency updates
          </h1>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (subscribe !== "loading") setSubscribe("idle");
            }}
            className="bg-[#b8b8b833] h-10 w-full text-sm p-3 mb-3 rounded-lg text-center border-0 border-transparent active:border-0 focus:border-0"
            placeholder="brandon@synergisdesign.com"
          />
          <Button
            type="submit"
            disabled={subscribe === "loading"}
            className="bg-white text-black w-full h-10 disabled:opacity-60"
          >
            {subscribe === "loading" ? "Subscribing…" : "Submit"}
          </Button>
          {subscribe === "success" && (
            <p className="mt-3 text-sm text-green-700">
              Successfully subscribed.
            </p>
          )}
          {subscribe === "error" && (
            <p className="mt-3 text-sm text-red-600">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
}

const useIsAtBottom = (threshold = 0) => {
  const [isBottom, setIsBottom] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrolledTo = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;

      if (pathname === "/") {
        setIsBottom(scrolledTo >= totalHeight - threshold);
      }
      
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isBottom;
};
