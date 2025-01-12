import React from "react";
import { Button } from "./button"
import { CircleArrowRight } from "lucide-react"
// import sphere from "../../../src/assets/sphere1 (1).png";

export default function HomeTag() {
  return (
    <div className="sm: h-[90vh] min-h[100vh] bg-black px-[5vw] relative ">
      {/* <div className="sm: z-0 ">
        <img src={sphere} alt="" className="sm: w-[6070px] " />
      </div> */}
      <div className="sm: h-[50vh] z-100  px-[10vw]  absolute bottom-0 left-0 flex-col justify-between">
        
        <h1 className="sm: font-mono font-thin text-zinc-600 text-4xl w-[80vw]  ">
          <b className="font-medium">Shaping</b> Tomorrow’s{" "}
          <b className="font-medium">Brands Today</b>
        </h1>

        <h5
          className="sm: w-[70vw] text-sm mt-	text-zinc-500 font-thin"
        >
          Welcome to our world of endless imagination and boundless creativity.
          Together, let's embark on a remarkable journey where dreams become
          tangible realities.
        </h5>
        <Button className="sm: bg-blue-am px-[30px] py-[20px] h-[fit] rounded-[30px] font-light" >
        WHAT WE DO 
        <CircleArrowRight size={40} strokeWidth={0} fill="#111" color="#3e9392"/>
    </Button>
      </div>
    </div>
  );
}
