"use client";
import Link from "next/link";
import { useState } from "react";

export default function process() {
  const services = [
    "Campaign Design",
    "Corporate Branding",
    "Design Consulting",
  ];
  const price = ["30", "10", "15"];
  const [service, setService] = useState(services[0]);
  const [servicePrice, setServicePrice] = useState(price[0]);

  const handleService = (index: number) => {
    setService(services[index]);
    setServicePrice(price[index]);
  };
  return (
    <div className="pt-30  w-full ">
      <h1 className="text-white font-semibold md:w-80 font-sans text-3xl/8">
        Our pricing system is transparent. Explore the perfect solution below.
      </h1>

      <div className="flex flex-row justify-between items-end text-white mt-20">
        <h1 className="text-xs w-[40%] "> SELECT YOUR PROJECT</h1>
        <div>
          <h1 className="text-sm">FROM</h1>
          <h1 className="text-7xl font-semibold">{servicePrice}k</h1>
        </div>
      </div>

      <div className="flex flex-row overflow-auto  w-full scroll-auto  uppercase gap-4 mt-4">
        <Link
          href={""}
          onClick={() => {
            handleService(0);
          }}
        >
          <h1 className="border w-32 text-center  py-2 px-2 rounded-md text-xs text-white">
            Campaign Design
          </h1>
        </Link>
        <Link
          href={""}
          onClick={() => {
            handleService(0);
          }}
        >
          <h1 className="border w-38 text-center  py-2 px-2 rounded-md text-xs text-white">
            Corporate Branding
          </h1>
        </Link>
        <Link
          href={""}
          onClick={() => {
            handleService(0);
          }}
        >
          <h1 className="border w-38 text-center  py-2 px-2 rounded-md text-xs text-white">
            Design Consulting
          </h1>
        </Link>
      </div>

      <div className="w-full h-50 border mt-5 rounded-lg">

      </div>

      <div className="text-white flex flex-row justify-between font-semibold mt-15">
        <div className="border-l-2 pl-2 w-[60%] text-sm/6">
          <Link href={""} className="">
            <h1 className="">British High Commission</h1>
          </Link>
          <Link href={""}>
            <h1>Blinq Finance</h1>
          </Link>

          <Link href={""}>
            <h1>Confluence Trading</h1>
          </Link>
          <Link href={""}>
            <h1>Dimension Studio</h1>
          </Link>
          <Link href={""}>
            <h1>Elevate</h1>
          </Link>
          <Link href={""}>
            <h1>Fefeti</h1>
          </Link>
          <Link href={""}>
            <h1>Hoot</h1>
          </Link>
          <Link href={""}>
            <h1>Krownpay</h1>
          </Link>
        </div>

        <div className="border-l-2 h-fit pl-2 w-[35%] text-sm/6">
          <Link href={""}>
            <h1>La Concierge</h1>
          </Link>
          <Link href={""}>
            <h1>Lunar Tribe</h1>
          </Link>

          <Link href={""}>
            <h1>Tona Design</h1>
          </Link>
          <Link href={""}>
            <h1>Ubora</h1>
          </Link>
          <Link href={""}>
            <h1>Ulani</h1>
          </Link>
          <Link href={""}>
            <h1>Ustun</h1>
          </Link>
          <Link href={""}>
            <h1>Val Transport</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
