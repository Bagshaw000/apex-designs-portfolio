import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/component/reveal";
import { LABEL } from "@/lib/ui";
import { getNextProject, getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.client} — Synergis Design Solutions`,
    description: project.descriptor,
  };
}


export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(slug);
  const statementAfter = Math.min(2, project.sections.length - 1);

  return (
    <article className="text-black">
      {/* Header */}
      <header className="w-[92vw] max-w-[1400px] mx-auto pt-[18vh] md:pt-[20vh] pb-[6vh] md:pb-[8vh]">
        <Reveal y={12}>
          <Link
            href="/work"
            className={`${LABEL} inline-block hover:text-black transition-colors`}
          >
            ← Work
          </Link>
        </Reveal>
        <Reveal className="mt-8 md:mt-10 flex items-center gap-4" delay={80} y={16}>
          <span className="relative block h-12 w-12 md:h-16 md:w-16 overflow-hidden rounded-2xl shrink-0">
            <Image
              src={project.logo}
              alt={`${project.client} logo`}
              fill
              sizes="64px"
              className="object-cover"
            />
          </span>
          <span className={LABEL}>{project.category}</span>
        </Reveal>
        <Reveal delay={140} y={28}>
          <h1 className="mt-5 md:mt-6 text-[clamp(2.25rem,7.5vw,7rem)] leading-[1.02] sm:leading-[0.98] md:leading-[0.95] font-semibold tracking-tight text-balance">
            {project.client}
          </h1>
        </Reveal>
        <Reveal delay={220} y={20}>
          <p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-neutral-500 max-w-[62ch] leading-relaxed">
            {project.descriptor}
          </p>
        </Reveal>

        {/* Metadata */}
        <Reveal delay={300} y={20}>
          <dl className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-10 gap-y-6 border-t border-neutral-200 pt-6 md:pt-8">
            <dt className={LABEL}>Year</dt>
            <dd className="text-lg -mt-5 sm:mt-0">{project.year}</dd>
            <dt
              className={`${LABEL} sm:border-t-0 border-t border-neutral-200 sm:pt-0 pt-6`}
            >
              Deliverables
            </dt>
            <dd className="text-lg -mt-5 sm:mt-0 flex flex-wrap gap-x-4 gap-y-1">
              {project.deliverables.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </dd>
          </dl>
        </Reveal>
      </header>

      {/* Intro */}
      <section className="w-[92vw] max-w-[1400px] mx-auto pt-[5vh] md:pt-[6vh] pb-[9vh] md:pb-[14vh] grid md:grid-cols-[8rem_1fr] gap-x-10 gap-y-3">
        <p className={`${LABEL} md:pt-3`}>Overview</p>
        <Reveal y={28}>
          <p className="text-xl sm:text-2xl md:text-[2.5rem] font-medium leading-[1.3] md:leading-[1.2] max-w-[34ch] tracking-tight">
            {project.intro}
          </p>
        </Reveal>
      </section>

      {/* Challenge / Solution */}
      <section className="w-[92vw] max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 md:gap-20 pb-[10vh] md:pb-[12vh]">
        {[project.challenge, project.solution].map((block, i) => (
          <Reveal key={block.label} delay={i * 120} y={28}>
            <p className={LABEL}>{block.label}</p>
            <h2 className="mt-3 md:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              {block.heading}
            </h2>
          </Reveal>
        ))}
      </section>

      {/* Hero image */}
      <Reveal
        className="relative w-full aspect-[16/9] bg-neutral-100 overflow-hidden group"
        y={0}
        zoom
        threshold={0.05}
      >
        <Image
          src={project.hero.src}
          alt={project.hero.alt}
          fill
          sizes="100vw"
          priority
          className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
        />
      </Reveal>

      {/* Sections */}
      {project.sections.map((section, i) => (
        <div key={section.label}>
          <section
            className={`w-[92vw] max-w-[1400px] mx-auto ${
              section.heading || section.text
                ? "pt-[9vh] md:pt-[12vh] pb-8 md:pb-14"
                : "pt-[6vh] md:pt-[9vh] pb-5 md:pb-6"
            }`}
          >
            <Reveal
              className="grid md:grid-cols-[8rem_1fr] gap-x-10 gap-y-4 md:gap-y-5"
              y={24}
            >
              <p className={`${LABEL} md:pt-2`}>{section.label}</p>
              {(section.heading || section.text) && (
                <div className="max-w-[52ch]">
                  {section.heading && (
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                      {section.heading}
                    </h2>
                  )}
                  {section.text && (
                    <p className="mt-3 md:mt-4 text-base md:text-lg text-neutral-600 leading-relaxed">
                      {section.text}
                    </p>
                  )}
                </div>
              )}
            </Reveal>
          </section>

          <div
            className={
              section.layout === "pair"
                ? "w-[92vw] max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
                : "w-full"
            }
          >
            {section.images.map((image, j) => (
              <Reveal
                key={image.src}
                delay={j * 120}
                y={40}
                zoom
                className={`relative ${
                  section.layout === "pair" ? "aspect-[4/3]" : "aspect-[16/9]"
                } bg-neutral-100 overflow-hidden group ${
                  section.layout === "pair" ? "rounded-lg" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    section.layout === "pair"
                      ? "(min-width: 640px) 46vw, 92vw"
                      : "100vw"
                  }
                  className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
              </Reveal>
            ))}
          </div>

          {i === statementAfter && (
            <section className="w-[92vw] max-w-[1200px] mx-auto py-[12vh] md:py-[16vh] text-center">
              <Reveal y={40}>
                <p className="text-2xl sm:text-3xl md:text-6xl font-semibold tracking-tight leading-[1.15] md:leading-[1.05]">
                  {project.statement}
                </p>
              </Reveal>
            </section>
          )}
        </div>
      ))}

      {/* Project information */}
      <section className="w-[92vw] max-w-[1400px] mx-auto pt-[11vh] md:pt-[14vh] pb-[8vh] md:pb-[10vh] border-t border-neutral-200">
        <Reveal
          className="grid md:grid-cols-[8rem_1fr] gap-x-10 gap-y-3 md:gap-y-4"
          y={20}
        >
          <p className={`${LABEL} md:pt-2`}>Project Information</p>
          <p className="max-w-[60ch] text-base md:text-lg text-neutral-600 leading-relaxed">
            {project.overview}
          </p>
        </Reveal>
      </section>

      {/* Next project */}
      <Link
        href={next ? `/work/${next.slug}` : "/work"}
        className="group block border-t border-neutral-200 hover:bg-neutral-50 transition-colors duration-300"
      >
        <div className="w-[92vw] max-w-[1400px] mx-auto py-[10vh] md:py-[12vh]">
          <p className={LABEL}>{next ? "Next project" : "More"}</p>
          <div className="mt-5 md:mt-6 flex items-center justify-between gap-4 sm:gap-6">
            <h2 className="text-[clamp(1.75rem,5vw,4.5rem)] font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-2 min-w-0 wrap-break-word">
              {next ? next.client : "See all work"}
            </h2>
            <span className="text-2xl sm:text-3xl md:text-5xl shrink-0 transition-transform duration-300 group-hover:translate-x-3">
              →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
