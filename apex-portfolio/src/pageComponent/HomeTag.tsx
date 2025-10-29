import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Threads from "../components/Threads";
import BlurText from "../components/BlurText";
// import Header from "./Header";

// import sphere from "../../../src/assets/sphere1 (1).png";

export default function HomeTag() {
  return (
    <div className=" sm:h-screen  w-[100vw] min-h-screen bg-black  mt-0 relative">
      <div
        style={{ position: "absolute" }}
        className="z-10 opacity-50 h-screen w-[inherit] sm:h-screen "
      >
        <Threads amplitude={3} distance={0.5} enableMouseInteraction={true} />
      </div>
      <div className=" pt-14 px-[10vw] sm:pt-0 w-[100%] lg:max-w-full 2xl:max-w-[2500px] mx-auto lg:px-0 xl:px-[15vw] flex flex-col justify-end z-20   items-start   h-[inherit] relative ">
        <p className="w-[inherit] leading-6 flex flex-wrap lg:flex-col  text-white lg:text-7xl 2xl:text-[120px]">
          <p className="sm:font-outfit font-thin text-5xl w-[inherit] mb-[10px] flex flex-wrap">
            <BlurText
              text="Shaping"
              delay={100}
              animateBy="words"
              direction="top"
              onAnimationComplete={undefined}
              className=" lg:mb-[5px] font-semibold mr-2"
            />
            <BlurText
              text=" Tomorrow’s"
              delay={100}
              animateBy="words"
              direction="top"
              onAnimationComplete={undefined}
              className=" lg:mb-[5px] "
            />
          </p>

          <p className="sm:font-outfit font-thin text-5xl w-[inherit] mb-[10px] flex flex-wrap">
            <BlurText
              text="Brands"
              delay={200}
              animateBy="words"
              direction="top"
              onAnimationComplete={undefined}
              className=" lg:mb-[5px] font-semibold mr-2"
            />
            <BlurText
              text=" Today"
              delay={200}
              animateBy="words"
              direction="top"
              onAnimationComplete={undefined}
              className=" lg:mb-[5px] "
            />
          </p>
        </p>

        <p className="sm:text-lg mb-[60px]	text-white font-thin w-[80%] max-w-[inherit]">
          Welcome to our world of endless imagination and boundless creativity.
          Together, let's embark on a remarkable journey where dreams become
          tangible realities
        </p>

        <div className=" flex flex-wrap sm:flex-row justify-between items-center max-w-[430px] mb-[10%]">
          <a
            href="/services"
            className=" py-[auto]  bg-amber-500 rounded-[40px] text-[bg-black] w-[200px] h-[60px] flex flex-row justify-center mb-5 mt-5 hover:scale-110 duration-1000"
          >
            <div className=" justify-between items-center flex flex-row w-[inherit] px-[10px]">
              <div className="w-[50%] ml-[30px]">
                <span className="text-[12px] font-semibold text-black">
                  {" "}
                  WHAT WE DO
                </span>
              </div>

              <div className="w-[45px] h-[45px] bg-black rounded-[35px]  flex flex-row justify-center items-center ">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "orange" }}
                />
              </div>
            </div>
          </a>
          <a
            href="/portfolio"
            className=" py-[auto]  rounded-[40px] text-[bg-black] w-[170px] h-[60px] flex flex-row justify-center mr-[20px]  hover:scale-110 duration-1000"
          >
            <div className=" justify-between items-center flex flex-row w-[inherit] ">
              <div className="w-[50%] ml-[30px]">
                <span className="text-[12px] font-semibold text-white">
                  VIEW WORKS
                </span>
              </div>

              <div className="w-[45px] h-[45px] bg-[#e8e8eb20] rounded-[35px]  flex flex-row justify-center items-center ">
                <FontAwesomeIcon icon={faArrowRight} style={{}} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
