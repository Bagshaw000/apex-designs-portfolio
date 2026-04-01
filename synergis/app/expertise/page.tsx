import About from "@/component/about";
import Capabilities from "@/component/capabilities";
import Link from "next/link";


export default function Expertise() {
  return (
    <div className="bg-black w-screen h-fit px-5 md:px-15 pt-30">
      <About/>
      <Capabilities/>
      <div className="h-[50vh] w-full  mt-[30%] text-center">
        <Link href={""} className="my-auto text-3xl font-semibold">
          <h1 className="text-white">Next chapter</h1>
          <h1 className="text-neutral-500">Process and Pricing</h1>
        </Link>
      </div>
    </div>
  );
}
