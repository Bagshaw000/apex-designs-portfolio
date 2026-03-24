import Link from "next/link";

export default function Work() {
  return (
    <div className="mx-auto w-[95vw] my-[15vh]">
      <div className="text-5xl font-semibold text-center mb-10">
        <h1> Our work</h1>
        <Link href={""}>
          <h1 className="text-neutral-500"> See all</h1>
        </Link>
      </div>

      {/* Portfolio */}
      <div className="flex flex-col gap-6">
        <Link href={""}>
          <div className="w-full h-screen bg-gray-600 rounded-xl"></div>
        </Link>
        <Link href={""}>
          <div className="w-full h-screen bg-gray-600 rounded-xl"></div>
        </Link>
      </div>
    </div>
  );
}
