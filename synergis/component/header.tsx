"use client";

import Image from "next/image";
import whiteLogo from "../public/Synergis_Full_Black_Transparent.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const reachedBottom = useIsAtBottom(100);
  useEffect(() => {
    if (reachedBottom) {
      console.log("Reached near the bottom!");
      // Load more items
    }
  }, [reachedBottom]);
  return (
    <div className="w-[90vw] z-100 max-w-125    rounded-2xl font-bitcount fixed top-[2vh]  left-1/2 transform -translate-x-1/2  text-black bg-[#2e2e2e0c]">
      <div className="flex justify-between items-center px-5 h-[7vh] hover:h-[9vh] delay-100 duration-200 md:text-xs">
        <Link href={""}>
          <h1 className=" decoration-black" style={{ color: "black" }}>
            WORK
          </h1>
        </Link>

        <div className="h-10 w-48 overflow-hidden ">
          <Image
            className="h-full w-full md:scale-70 object-cover object-center"
            src={whiteLogo}
            alt=""
          />
        </div>

        <Link href={""}>
          <h1>ABOUT</h1>{" "}
        </Link>
      </div>

      <div className="mt-10">
        <table className="table-fixed w-full font-inter text-center text-sm">
          <tbody className="">
            <tr className="">
              <td className="border p-3 border-l-0"> <Link href={""}>Expertise & Capabilities</Link></td>
              <td className="border p-3 border-r-0"> <Link href={""}>Process & Pricing</Link></td>
            </tr>
            <tr>
              <td className="border p-3 border-l-0"><Link href={""}>Outcomes</Link></td>
              <td className="border p-3 border-r-0"> <Link href={""}>Teams</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Finish the  */}
      <div className="p-5">
        <h1 className="font-bitcount text-sm">
          General Enquires
        </h1>
      </div>
    </div>
  );
}

const useIsAtBottom = (threshold = 0) => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledTo = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;

      setIsBottom(scrolledTo >= totalHeight - threshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isBottom;
};
