"use client";
import LiquidEther from "../components/LiquidEther";

export default function HeroTag() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <LiquidEther
          colors={["#dfe8f4", "#eef3fa", "#cfddef"]}
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
      <div className="z-10 absolute top-[38%] md:top-[42%] left-1/2 -translate-x-1/2 w-full">
        <h1 className="mx-auto w-[92%] md:w-[80%] lg:w-[68%] xl:w-[60%] text-center font-outfit font-bold leading-[1.1] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="hero-line inline-block will-change-transform">
            Shaping <span className="font-light">Tomorrow&apos;s</span>
          </span>{" "}
          <span className="hero-line hero-line-2 inline-block will-change-transform">
            <span className="font-light">Brands</span> Today
          </span>
        </h1>
      </div>

      <style>{`
        @keyframes heroReveal {
          from { opacity: 0; transform: translate3d(0, 1.6rem, 0); filter: blur(6px); }
          to   { opacity: 1; transform: translate3d(0, 0, 0);      filter: blur(0); }
        }
        .hero-line {
          opacity: 0;
          animation: heroReveal 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
        }
        .hero-line-2 { animation-delay: 0.32s; }
        @media (prefers-reduced-motion: reduce) {
          .hero-line { opacity: 1; animation: none; filter: none; transform: none; }
        }
      `}</style>
    </div>
  );
}
