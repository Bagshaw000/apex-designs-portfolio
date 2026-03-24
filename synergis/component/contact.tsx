"use client";
import whiteLogo from "../public/Synergis_Full_Black_Transparent.svg";
import Image from "next/image";

export default function HomeFooter() {
  return (
    <div className="h-screen w-[95vw] mx-auto pt-[32%] ">
      <div className="h-fit w-[inherit] ">
        <div className="h-30 w-full md:w-100 overflow-hidden mx-auto  ">
          <Image
            className="h-full w-[inherit] md:scale-100 scale-75  object-cover object-center"
            src={whiteLogo}
            alt=""
          />
        </div>

        <div className="font-semibold text-6xl text-center">
          <h1>Ready when you are</h1>
          <h1 className="text-neutral-500">Book a call</h1>
        </div>
      </div>
    </div>
  );
}
