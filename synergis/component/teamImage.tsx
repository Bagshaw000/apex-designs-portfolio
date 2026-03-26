"use client";
import Image from "next/image";
import { LogoLoop } from "@/components/LogoLoop";
import team from "../public/download.jpeg";
import nana from "../public/Nana.jpg";
import aaron from "../public/Aaron.jpg";
import justin from "../public/Justin.jpg";
import Link from "next/link";

export default function TeamImage() {
  const imageLogos = [
    {
      src: team,
      alt: "Company 1",
      href: "https://company1.com",
    },
  ];

  return (
    <div className="relative">
      <div
        className="w-full h-screen flex flex-row overflow-x-auto mb-25 bg-neutral-600"
        data-scroll-behavior="smooth"
      >
        {/* {imageLogos.map((element, index) => (
          <Image
            key={index}
            src={element.src}
            alt={""}
            className="h-full w-full object-center object-cover "
          />
        ))} */}
      </div>

      <div className="w-[95vw] mx-auto mb-10">
        <h1 className="text-center text-5xl font-semibold mb-15">Our team</h1>

        <div className="flex flex-row relative">
          <h1 className="text-3xl text-semibold w-[50%] pr-15">
            We are a group of talented individuals who are passionate about
            bringing ideas to life. With a diverse range of backgrounds and
            skill sets, we collaborate to produce effective solutions for our
            clients.
          </h1>

          <div className=" overflow-y-scroll sticky top-0 border-l px-10 border-black border-solid  gap-8 flex flex-col">
            {/* Justin */}
            <div className="flex flex-row ">
              <div className="w-40 h-40 mr-5">
                <Image
                  src={justin}
                  alt={""}
                  className="object-cover object-center rounded-xl w-40 h-40"
                />
              </div>
              <div className="font-medium text-lg w-fit">
                {" "}
                <h1>Justin</h1>
                <span className="text-neutral-500">Co-Founder/CEO</span>
              </div>
            </div>

            {/* Nana */}

            <div className="flex flex-row ">
              <div className="w-40 h-40 mr-5">
                <Image
                  src={nana}
                  alt={""}
                  className="object-cover object-[100%_0%]  rounded-xl w-40 h-40"
                />
              </div>
              <div className="font-medium text-lg w-fit">
                {" "}
                <h1>Alice</h1>
                <span className="text-neutral-500">Head of Marketing</span>
              </div>
            </div>

            {/* Aaron */}

            <div className="flex flex-row ">
              <div className="w-40 h-40 mr-5">
                <Image
                  src={aaron}
                  alt={""}
                  className="object-cover w-40 h-40 object-[100%_30%]  rounded-xl "
                />
              </div>
              <div className="font-medium text-lg w-fit">
                <h1>Aaron</h1>
                <span className="text-neutral-500">
                  Co-founder/Head of Operation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen w-full text-center pt-[20%]">
        <Link href={""} className="my-auto text-3xl font-semibold">
          <h1>Next chapter</h1>
          <h1 className="text-neutral-500">Expertise</h1>
        </Link>
      </div>
    </div>
  );
}
