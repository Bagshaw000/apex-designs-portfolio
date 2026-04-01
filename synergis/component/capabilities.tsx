export default function Capabilities() {
  return (
    <div className="mt-40">
      <div className="flex flex-col gap-15 lg:flex-row items-center text-white">
        <h1 className="font-semibold">Expertise</h1>
        <div className="text-white gap-15 flex flex-col  lg:flex-row">
          <div className="">
            <h1 className="lg:block hidden mb-5 text-sm">Corporate Branding</h1>
            <div className="border-l-2 pl-5">
              <h1 className="lg:hidden mb-2 text-neutral-600 font-semibold">
                {" "}
                Corporate Branding
              </h1>
              <h1 className="text-xl md:text-md font-medium">
                We help organizations articulate who they are through deliberate
                design. Combining industry led intel with creative execution, we
                craft visual identities that express your mantra and position
                you for growth. Whether you’re branding up or rebranding, we
                deliver systems that communicate confidence and consistency at
                every touchpoint.
              </h1>
            </div>
          </div>

          <div className="">
            <h1 className="lg:block hidden mb-5 text-sm">Campaign Design</h1>
            <div className="border-l-2 pl-5">
              <h1 className="lg:hidden mb-2 text-neutral-600 font-semibold">
                {" "}
                Campaign Design{" "}
              </h1>
              <h1 className="text-xl md:text-md font-medium">
                We turn strategy into creative momentum by aligning your
                campaign goals with design led storytelling, targeted visuals,
                intentional messaging, and experiences that ignite engagement.
                From concept to execution, we ensure every element digital,
                print, or spatial works cohesively to drive participation,
                visibility, and measurable results.
              </h1>
            </div>
          </div>

          <div className="">
            <h1 className="lg:block hidden mb-5 text-sm">Design Consulting</h1>
            <div className="border-l-2 pl-5">
              <h1 className="lg:hidden mb-2 text-neutral-600 font-semibold">
                Design Consulting
              </h1>
              <h1 className="text-xl md:text-md font-medium">
                We examine how your brand performs across various touchpoints
                what works, what doesn’t, and why. We then translate these
                insights into actionable design recommendations that will
                strengthen your visual presence and ensure every creative
                decision ties into your wider business objectives.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
