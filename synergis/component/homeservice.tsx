import Image from "next/image";

const services = [
  {
    title: "Corporate Branding",
    blurb:
      "We help organizations articulate who they are through deliberate design.",
    image: "/work/tona-design/05.jpg",
  },
  {
    title: "Campaign Design",
    blurb: "We turn strategy into creative momentum.",
    image: "/work/confluence-trading-lab/01.jpg",
  },
  {
    title: "Design Consulting",
    blurb:
      "Over 6 years of experience in brand consulting. We evaluate and ensure your brand amplifies the business vision.",
    image: "/work/val-transport/09.jpg",
  },
];

export default function HomeService() {
  return (
    <div className="w-[95vw] mx-auto my-[10vh]">
      <h1 className="font-outfit mb-5 text-lg"> Our services</h1>

      <div className="flex flex-wrap justify-between w-[inherit] gap-5 align-middle ">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative h-[70vh] w-full lg:w-[49%] overflow-hidden rounded-md p-4 text-white"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(min-width: 1024px) 49vw, 95vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/40" />

            <div className="relative flex flex-col justify-between h-full">
              <h1 className="font-bold text-5xl">{service.title}</h1>

              <h1 className="max-w-[60%]">{service.blurb}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
