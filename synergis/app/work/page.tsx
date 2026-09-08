import Image from "next/image";
import Link from "next/link";
import Reveal from "@/component/reveal";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Work — Synergis Design Solutions",
  description: "Selected branding and design work by Synergis Design Solutions.",
};

export default function Work() {
  return (
    <div className="w-[92vw] sm:w-[95vw] mx-auto pt-[16vh] md:pt-[18vh] pb-[12vh] md:pb-[15vh]">
      <Reveal className="mb-12 md:mb-25" y={20}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold">
          Our work
        </h1>
        <p className="text-neutral-500 text-lg sm:text-xl md:text-2xl mt-4 max-w-[40ch]">
          A selection of identities, campaigns and collateral we have shaped for
          our clients.
        </p>
      </Reveal>

      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 100} y={36}>
            <Link href={`/work/${project.slug}`} className="group block">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-neutral-200">
                <Image
                  src={project.cover}
                  alt={project.client}
                  fill
                  sizes="95vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  priority
                />
              </div>
              <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                <div className="flex items-center gap-3">
                  <span className="relative block h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-xl shrink-0">
                    <Image
                      src={project.logo}
                      alt=""
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    {project.client}
                  </h2>
                </div>
                <span className="text-sm sm:text-base text-neutral-500 md:text-lg pl-11 sm:pl-0">
                  {project.category} · {project.year}
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
