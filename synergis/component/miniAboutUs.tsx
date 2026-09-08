import Reveal from "@/component/reveal";
import { LABEL } from "@/lib/ui";

export default function MiniAboutUs() {
  return (
    <Reveal
      className="mx-auto w-[92vw] sm:w-[95vw] my-[12vh] md:my-[15vh] grid md:grid-cols-[8rem_1fr] gap-x-10 gap-y-6"
      y={28}
    >
      <p className={`${LABEL} md:pt-3`}>About us</p>
      <h2 className="max-w-[24ch] md:max-w-[26ch] text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
        Synergis is an end-to-end Design-as-a-Service (DaaS) partner — we support
        you from concept to execution, whether launching something new, refining
        what exists, or scaling for growth.
      </h2>
    </Reveal>
  );
}
