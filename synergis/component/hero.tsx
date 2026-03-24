"use client";
import LiquidEther from "../components/LiquidEther";
import whiteLogo from "../public/Synergis_Full_Black_Transparent.svg";
import Header from "./header";

export default function HeroTag() {
  return (
    <div className="w-screen h-screen relative">
      <div
        style={{ width: "100%", height: "100%", position: "relative" }}
        className="left-1/2 transform -translate-x-1/2 rounded-5xl"
      >
        <LiquidEther
          colors={["#111111a", "#152331a", "#000000a"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={1}
          autoIntensity={2.2}
          takeoverDuration={0.5}
          autoResumeDelay={1000}
          autoRampDuration={0.6}
        />
      </div>
      <div className="z-10 absolute top-[40%] md:bottom-[50%] md:top-[45%] left-auto right-auto w-[inherit]">
        <div className="flex  flex-col md:flex-row text-4xl  text-center font-outfit font-bold md:text-3xl m-auto w-[90%]  md:w-[60%] lg:w-[50%] will-change-transform justify-between">
          <h1 className="">
            {" "}
            Shaping <span className="font-light">Tomorrow's</span>
          </h1>
          <h1 className="">
            {" "}
            <span className="font-light">Brands</span> Today
          </h1>
        </div>
      </div>
    </div>
  );
}
