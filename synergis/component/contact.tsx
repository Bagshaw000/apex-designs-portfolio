"use client";
import logo from "../public/Synergis_Full_Black_Transparent.svg";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/component/reveal";

export default function HomeFooter() {
  return (
    <div className="min-h-screen w-[92vw] sm:w-[95vw] mx-auto flex flex-col items-center justify-center py-[20vh]">
      <Reveal className="h-fit w-full flex flex-col items-center" y={30}>
        <Link
          href="/"
          className="h-12 sm:h-16 md:h-24 w-full max-w-[280px] md:max-w-[400px] overflow-hidden block transition-opacity duration-200 hover:opacity-70"
          aria-label="Synergis home"
        >
          <Image
            className="h-full w-full object-contain object-center"
            src={logo}
            alt="Synergis Design Solutions"
          />
        </Link>

        <div className="mt-8 font-semibold text-3xl sm:text-4xl md:text-6xl text-center tracking-tight">
          <h1>Ready when you are</h1>
          <a
            href="https://calendar.app.google/7Vr9h6T1i7stfyRu5"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block text-neutral-500 transition-colors duration-300 hover:text-black"
          >
            Book a call
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              {" "}
              →
            </span>
          </a>
        </div>
      </Reveal>
    </div>
  );
}
