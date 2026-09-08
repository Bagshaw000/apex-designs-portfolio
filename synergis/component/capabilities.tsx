import Reveal from "@/component/reveal";
import { LABEL } from "@/lib/ui";

const items = [
  {
    title: "Corporate Branding",
    body: "We help organizations articulate who they are through deliberate design. Combining industry-led intel with creative execution, we craft visual identities that express your mantra and position you for growth. Whether you’re branding up or rebranding, we deliver systems that communicate confidence and consistency at every touchpoint.",
  },
  {
    title: "Campaign Design",
    body: "We turn strategy into creative momentum by aligning your campaign goals with design-led storytelling, targeted visuals, intentional messaging, and experiences that ignite engagement. From concept to execution, we ensure every element — digital, print, or spatial — works cohesively to drive participation, visibility, and measurable results.",
  },
  {
    title: "Design Consulting",
    body: "We examine how your brand performs across various touchpoints — what works, what doesn’t, and why. We then translate these insights into actionable design recommendations that strengthen your visual presence and ensure every creative decision ties into your wider business objectives.",
  },
];

export default function Capabilities() {
  return (
    <section>
      <Reveal y={16}>
        <p className={LABEL}>Capabilities</p>
      </Reveal>

      <div className="mt-10 flex flex-col">
        {items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 100}
            y={24}
            className="grid md:grid-cols-[8rem_1fr] gap-x-10 gap-y-3 py-10 md:py-12 border-t border-neutral-200 group"
          >
            <p className={`${LABEL} md:pt-2 transition-colors group-hover:text-black`}>
              {String(i + 1).padStart(2, "0")}
            </p>
            <div className="max-w-[54ch]">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                {item.title}
              </h2>
              <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
