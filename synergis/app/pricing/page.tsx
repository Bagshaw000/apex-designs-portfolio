import Process from "@/component/process";
import Reveal from "@/component/reveal";
import Link from "next/link";

export const metadata = {
  title: "Process & Pricing — Synergis Design Solutions",
  description:
    "Transparent, flat-fee pricing for brand and campaign design, delivered in sprints.",
};

export default function Pricing() {
  return (
    <div className="bg-white text-black min-h-screen pb-[10vh]">
      <Process />

      <div className="w-[92vw] max-w-[1400px] mx-auto pt-[16vh] md:pt-[20vh] text-center border-t border-neutral-200">
        <Reveal y={24}>
          <Link
            href="/work"
            className="group inline-block text-3xl md:text-4xl font-semibold"
          >
            <span className="block font-mono uppercase tracking-[0.14em] text-xs text-neutral-500 mb-3">
              Next chapter
            </span>
            <span className="block transition-transform duration-300 group-hover:-translate-y-1">
              Work
            </span>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
