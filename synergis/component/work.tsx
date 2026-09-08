import Image from "next/image";
import Link from "next/link";
import Reveal from "@/component/reveal";
import { projects } from "@/lib/projects";

export default function Work() {
  return (
    <div className="mx-auto w-[92vw] sm:w-[95vw] my-[12vh] md:my-[15vh]">
      <Reveal
        className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-8 md:mb-10"
        y={20}
      >
        <h1>Our work</h1>
        <Link href={"/work"}>
          <h1 className="text-neutral-500 transition-colors hover:text-black">
            See all
          </h1>
        </Link>
      </Reveal>

      {/* Portfolio */}
      <div className="flex flex-col gap-8 md:gap-6">
        {projects.slice(0, 2).map((project) => (
          <Reveal key={project.slug} y={40} zoom>
            <Link href={`/work/${project.slug}`} className="group block">
              <div className="relative w-full h-[56vh] sm:h-[72vh] lg:h-screen overflow-hidden rounded-xl bg-gray-600">
                <Image
                  src={project.cover}
                  alt={project.client}
                  fill
                  sizes="95vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                <div className="flex items-center gap-3">
                  <span className="relative block h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-xl shrink-0">
                    <Image src={project.logo} alt="" fill sizes="36px" className="object-cover" />
                  </span>
                  <h2 className="text-xl sm:text-2xl font-semibold">{project.client}</h2>
                </div>
                <span className="text-sm sm:text-base text-neutral-500 pl-11 sm:pl-0">
                  {project.category}
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
