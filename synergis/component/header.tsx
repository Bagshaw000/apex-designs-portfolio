"use client";

import Image from "next/image";
import blackLogo from "../public/Synergis_Full_Black_Transparent.svg";
import whiteLogo from "../public/Synergis_Full_White_Transparent.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const reachedBottom = useIsAtBottom(100);
  useEffect(() => {
    if (reachedBottom) {
      console.log("Reached near the bottom!");
      // Load more items
    }
  }, [reachedBottom]);

  const handleShowMenu = () => {
    setMenu(!menu);
  };
  return (
    <div
      onClick={handleShowMenu}
      className="w-[95vw] z-100 max-w-125  backdrop-blur-md  rounded-2xl font-bitcount fixed top-[2vh]  left-1/2 transform -translate-x-1/2  text-black  "
      style={
        reachedBottom
          ? { backgroundColor: "blue", color: "white" }
          : { backgroundColor: "#ffffff33" }
      }
    >
      <div className="flex justify-between items-center px-5 h-[7vh] hover:h-[9vh] delay-100 duration-200 text-xs">
        <Link href={""}>
          <h1 className="">WORK</h1>
        </Link>

        <div className="h-10 w-48 overflow-hidden ">
          {!reachedBottom ? (
            <Image
              className="h-full w-full md:scale-70 object-cover object-center"
              src={blackLogo}
              alt=""
            />
          ) : (
            <Image
              className="h-full w-full md:scale-70 object-cover object-center"
              src={whiteLogo}
              alt=""
            />
          )}
        </div>

        <Link href={""}>
          <h1>ABOUT</h1>{" "}
        </Link>
      </div>

      {!reachedBottom ? (
        menu ? (
          <>
            <div className="mt-10 ">
              <table className="table-fixed w-full font-inter text-center text-sm">
                <tbody className="">
                  <tr className="">
                    <td className="border p-3 border-l-0">
                      {" "}
                      <Link href={""}>Expertise & Capabilities</Link>
                    </td>
                    <td className="border p-3 border-r-0">
                      {" "}
                      <Link href={""}>Process & Pricing</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3 border-l-0">
                      <Link href={""}>Outcomes</Link>
                    </td>
                    <td className="border p-3 border-r-0">
                      {" "}
                      <Link href={""}>Teams</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Finish the  */}
            <div className="p-5 mt-5">
              <h1 className="font-bitcount text-sm">General Enquires</h1>
              <div className="group flex flex-row items-center h-fit">
                <div className="h-2 w-2 bg-blue-900 hidden group-hover:block duration-200 delay-200  ease-in-out"></div>
                <span className="font-semibold  hover:translate-x-3 duration-200 ease-in-out delay-200">
                  info@synergisdesignsolutions.com
                </span>
              </div>

              <div className="group flex flex-row items-center h-fit">
                <div className="h-2 w-2 bg-blue-900 hidden group-hover:block duration-200 delay-100 ease-in-out"></div>
                <Link href={""} className="hover:translate-x-3 font-semibold ">
                  Plan a call
                </Link>
              </div>
            </div>
          </>
        ) : (
          <></>
        )
      ) : (
        <div className="p-5 text-center mt-15 w-fit md:w-[70%] mx-auto">
          <h1 className="text-xl font-bold mb-5">
            {" "}
            Industry insight & agency updates
          </h1>
          <input
            type="text"
            name=""
            id=""
            className="bg-[#b8b8b833] h-10 w-full text-sm p-3 mb-3 rounded-lg text-center border-0 border-transparent active:border-0 focus:border-0"
            placeholder="brandon@synergisdesign.com"
          />
          {/* <input type="button" value="" /> */}
          <Button className="bg-white text-black w-full h-10">Submit</Button>
        </div>
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
