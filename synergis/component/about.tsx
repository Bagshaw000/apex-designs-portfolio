import Reveal from "@/component/reveal";
import { LABEL } from "@/lib/ui";

export default function About() {
  return (
    <section className="grid md:grid-cols-[8rem_1fr] gap-x-10 gap-y-5">
      <Reveal y={16}>
        <p className={`${LABEL} md:pt-2`}>About Synergis</p>
      </Reveal>
      <Reveal className="max-w-[58ch]" y={24}>
        <p className="text-lg md:text-2xl text-neutral-700 leading-relaxed">
          At Synergis Design Solutions, we believe great design starts with
          alignment. We focus on uncovering the natural synergy between your
          vision and our creative expertise so every solution we craft not only
          captivates visually but also delivers measurable impact. We collaborate
          with companies, governments, and startups alike, taking the time to
          understand your goals, challenges, and audiences. That understanding
          shapes our process, ensuring every outcome is both strategically sound
          and visually compelling.
        </p>
      </Reveal>
    </section>
  );
}
