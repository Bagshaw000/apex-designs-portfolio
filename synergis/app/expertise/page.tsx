import About from "@/component/about";
import Capabilities from "@/component/capabilities";
import Reveal from "@/component/reveal";
import { LABEL } from "@/lib/ui";
import Link from "next/link";

export const metadata = {
  title: "Expertise & Capabilities — Synergis Design Solutions",
  description:
    "How Synergis works: corporate branding, campaign design and design consulting.",
};

export default function Expertise() {
  return (
    <div className="bg-white text-black w-[92vw] max-w-[1400px] mx-auto pt-[20vh] md:pt-[24vh] pb-[10vh]">
      {/* Header */}
      <Reveal y={12}>
        <p className={LABEL}>Expertise</p>
      </Reveal>
      <Reveal y={28} delay={80}>
        <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] max-w-[20ch]">
          Great design starts with alignment.
        </h1>
      </Reveal>

      <div className="mt-[14vh] md:mt-[18vh]">
        <About />
      </div>

      <div className="mt-[16vh] md:mt-[20vh]">
        <Capabilities />
      </div>

      {/* Statement */}
      <section className="py-[16vh] md:py-[20vh] text-center">
        <Reveal y={32}>
          <p className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15]">
            Strategically sound. Visually compelling.
          </p>
        </Reveal>
      </section>

      {/* Next chapter */}
      <div className="border-t border-neutral-200 pt-10 text-center">
        <Reveal y={24}>
          <Link
            href="/pricing"
            className="group inline-block text-3xl md:text-4xl font-semibold"
          >
            <span className={`${LABEL} block mb-3`}>Next chapter</span>
            <span className="block transition-transform duration-300 group-hover:-translate-y-1">
              Process &amp; Pricing
            </span>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
