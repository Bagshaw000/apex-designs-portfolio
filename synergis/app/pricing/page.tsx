import Process from "@/component/process";
import Link from "next/link";

export default function pricing() {
  return (
    <div className="px-5 bg-blue-800 min-h-fit h-screen">
      <Process />
      <div className="h-[50vh] w-full  mt-[30%] text-center align-middle">
        <Link
          href={""}
          className="text-3xl h-[inherit] align-middle font-semibold"
        >
          <div className="py-auto h-full align-middle">
            <h1 className="text-white ">Next chapter</h1>
            <h1 className="text-neutral-500">Work</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
