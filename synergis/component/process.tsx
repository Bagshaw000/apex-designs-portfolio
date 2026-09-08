"use client";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/component/reveal";
import { LABEL } from "@/lib/ui";

const projects = [
  {
    name: "Corporate Branding",
    price: "10",
    time: "4 weeks",
    scope: "Positioning, a full identity system, guidelines and launch collateral.",
  },
  {
    name: "Campaign Design",
    price: "30",
    time: "6 weeks",
    scope: "Concept through to rollout across print, digital and physical space.",
  },
  {
    name: "Design Consulting",
    price: "15",
    time: "3 weeks",
    scope: "An audit of your brand across every touchpoint with a prioritised plan.",
  },
];

// Clients that have a case study on the site link through to it.
const clients: { name: string; href?: string }[] = [
  { name: "British High Commission", href: "/work/london-to-accra" },
  { name: "Blinq Finance" },
  { name: "Confluence Trading", href: "/work/confluence-trading-lab" },
  { name: "Dimension Studio" },
  { name: "Elevate" },
  { name: "Fefeti", href: "/work/fefeti" },
  { name: "Hoot", href: "/work/hoot" },
  { name: "Krownpay" },
  { name: "La Concierge" },
  { name: "Lunar Tribe" },
  { name: "Tona Design", href: "/work/tona-design" },
  { name: "Ubora" },
  { name: "Ulani" },
  { name: "Ustun" },
  { name: "Val Transport", href: "/work/val-transport" },
];

export default function Process() {
  const [selected, setSelected] = useState(0);
  const active = projects[selected];

  return (
    <div className="w-[92vw] max-w-[1400px] mx-auto pt-[20vh] md:pt-[24vh] text-black">
      {/* Statement */}
      <Reveal y={28}>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] max-w-[20ch]">
          We keep things crystal clear — starting with the price.
        </h1>
      </Reveal>

      {/* Selector */}
      <section className="mt-[12vh] md:mt-[16vh] grid md:grid-cols-[8rem_1fr] gap-x-10 gap-y-8">
        <Reveal y={16}>
          <p className={`${LABEL} md:pt-2`}>Select your project</p>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_auto] gap-y-10 lg:gap-x-16 items-start">
          <Reveal>
            <ul>
              {projects.map((project, i) => (
                <li key={project.name}>
                  <button
                    type="button"
                    onClick={() => setSelected(i)}
                    aria-pressed={selected === i}
                    className={`block w-full text-left py-3 border-b border-neutral-200 text-2xl md:text-4xl font-semibold tracking-tight transition-colors duration-200 ${
                      selected === i
                        ? "text-black"
                        : "text-neutral-300 hover:text-neutral-600"
                    }`}
                  >
                    {project.name}
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base md:text-lg text-neutral-600 leading-relaxed max-w-[42ch] transition-opacity duration-300">
              {active.scope}
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:text-right">
            <p className={LABEL}>From</p>
            <p className="text-7xl md:text-8xl font-semibold tracking-tight leading-none mt-2">
              {active.price}
              <span className="text-4xl md:text-5xl align-top">k</span>
            </p>
            <p className="mt-4 text-neutral-600">
              Project time:{" "}
              <span className="text-black font-medium">{active.time}</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* The model */}
      <section className="mt-[16vh] md:mt-[20vh] grid md:grid-cols-[8rem_1fr] gap-x-10 gap-y-5">
        <Reveal y={16}>
          <p className={`${LABEL} md:pt-2`}>Why this price</p>
        </Reveal>
        <div className="max-w-[58ch]">
          <Reveal y={24}>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
              No billable hours. No junior work. No scope creep.
            </h2>
          </Reveal>
          <Reveal y={20} delay={100}>
            <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
              Traditional agencies run on timesheets, layers of account
              management and six-month timelines. We don&apos;t. Synergis works
              as a Design-as-a-Service partner: one flat fee, delivered in
              focused sprints by senior designers who stay on your project from
              first call to final handover. You know the cost and the calendar
              before we start.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Statement */}
      <section className="py-[16vh] md:py-[20vh] text-center">
        <Reveal y={32}>
          <p className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15]">
            One flat fee. Delivered in sprints.
          </p>
        </Reveal>
      </section>

      {/* Clients */}
      <section className="grid md:grid-cols-[8rem_1fr] gap-x-10 gap-y-6 border-t border-neutral-200 pt-10">
        <Reveal y={16}>
          <p className={`${LABEL} md:pt-1`}>Clients</p>
        </Reveal>
        <Reveal
          className="columns-1 sm:columns-2 md:columns-3 gap-x-10 [column-fill:balance]"
          y={20}
        >
          {clients.map((client) =>
            client.href ? (
              <Link
                key={client.name}
                href={client.href}
                className="block py-1.5 text-base md:text-lg transition-colors duration-200 hover:text-neutral-500"
              >
                {client.name}
              </Link>
            ) : (
              <p key={client.name} className="py-1.5 text-base md:text-lg text-neutral-400">
                {client.name}
              </p>
            )
          )}
        </Reveal>
      </section>
    </div>
  );
}
