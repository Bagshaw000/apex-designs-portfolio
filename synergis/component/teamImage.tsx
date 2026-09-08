"use client";
import Image from "next/image";
import nana from "../public/Nana.jpg";
import aaron from "../public/Aaron.jpg";
import justin from "../public/Justin.jpg";
import Link from "next/link";
import Reveal from "@/component/reveal";
import { LABEL } from "@/lib/ui";

const members = [
  { name: "Justin", role: "Co-Founder / CEO", img: justin, pos: "object-center" },
  { name: "Alice", role: "Head of Marketing", img: nana, pos: "object-[100%_0%]" },
  {
    name: "Aaron",
    role: "Co-founder / Head of Operations",
    img: aaron,
    pos: "object-[100%_30%]",
  },
];

export default function TeamImage() {
  return (
    <div className="bg-white text-black">
      {/* Hero montage */}
      <div className="relative w-full h-[58vh] sm:h-[72vh] lg:h-screen overflow-hidden bg-neutral-100">
        <Image
          src="/team-hero.jpg"
          alt="A wall of campaign work by the Synergis team"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-[teamHeroZoom_18s_ease-out_forwards] motion-reduce:animate-none"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <p className="font-mono uppercase tracking-[0.14em] text-[11px] md:text-xs text-white/80">
            Selected work
          </p>
          <h2 className="mt-2 text-white font-semibold text-2xl md:text-4xl max-w-[24ch] leading-tight tracking-tight">
            The people behind the work.
          </h2>
        </div>
      </div>

      <style>{`
        @keyframes teamHeroZoom {
          from { transform: scale(1.08); }
          to   { transform: scale(1); }
        }
      `}</style>

      <div className="w-[92vw] max-w-[1400px] mx-auto pt-[12vh] md:pt-[16vh] pb-[10vh]">
        {/* Header */}
        <Reveal y={12}>
          <p className={LABEL}>Our team</p>
        </Reveal>
        <Reveal y={28} delay={80}>
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] max-w-[16ch]">
            A group of talented individuals.
          </h1>
        </Reveal>

        {/* Who we are */}
        <section className="mt-[12vh] md:mt-[16vh] grid md:grid-cols-[8rem_1fr] gap-x-10 gap-y-5">
          <Reveal y={16}>
            <p className={`${LABEL} md:pt-2`}>Who we are</p>
          </Reveal>
          <Reveal className="max-w-[54ch]" y={24}>
            <p className="text-lg md:text-2xl text-neutral-700 leading-relaxed">
              We are a group of talented individuals who are passionate about
              bringing ideas to life. With a diverse range of backgrounds and
              skill sets, we collaborate to produce effective solutions for our
              clients.
            </p>
          </Reveal>
        </section>

        {/* Leadership */}
        <section className="mt-[14vh] md:mt-[18vh] grid md:grid-cols-[8rem_1fr] gap-x-10 gap-y-8">
          <Reveal y={16}>
            <p className={`${LABEL} md:pt-2`}>Leadership</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {members.map((member, i) => (
              <Reveal key={member.name} delay={i * 120} y={28} className="group">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-100">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className={`object-cover ${member.pos} transition-transform duration-500 ease-out group-hover:scale-105`}
                  />
                </div>
                <h3 className="mt-4 text-lg md:text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-neutral-500 text-sm md:text-base">
                  {member.role}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Statement */}
        <section className="py-[16vh] md:py-[20vh] text-center">
          <Reveal y={32}>
            <p className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15]">
              We collaborate to make effective work.
            </p>
          </Reveal>
        </section>

        {/* Next chapter */}
        <div className="border-t border-neutral-200 pt-10 text-center">
          <Reveal y={24}>
            <Link
              href="/expertise"
              className="group inline-block text-3xl md:text-4xl font-semibold"
            >
              <span className={`${LABEL} block mb-3`}>Next chapter</span>
              <span className="block transition-transform duration-300 group-hover:-translate-y-1">
                Expertise
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
