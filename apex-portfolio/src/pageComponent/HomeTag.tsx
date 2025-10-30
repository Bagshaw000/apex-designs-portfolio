import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Threads from "../components/Threads";

import TextType from "../components/TextType";
import { RevealOnScroll } from "../components/ui/transition";

export default function HomeTag() {
  const transitionElement =
    "animate-in  ease-in-out slide-in-from-bottom-11 duration-1000 fade-in";

  return (
    <div className=" sm:h-[100vh]  w-[100vw] min-h-screen bg-[#06071a]  mt-0 relative">
      <div
        style={{ position: "absolute" }}
        className="z-10 opacity-50 h-screen w-[inherit] sm:h-screen "
      >
        <Threads amplitude={1} distance={0.5} enableMouseInteraction={true} />
      </div>

      <div className=" pt-14 px-[10vw] sm:pt-0 w-[100%] lg:max-w-full 2xl:max-w-[2500px] mx-auto lg:px-0 xl:px-[10vw] flex flex-col justify-center z-20   items-start   h-[inherit] relative ">
        <RevealOnScroll to={transitionElement} from={""}>
          <p className="w-[inherit] leading-6 flex flex-wrap lg:flex-col mb-6 text-white lg:text-7xl 2xl:text-[120px]">
            <span className="sm:font-outfit font-thin text-5xl lg:text-7xl w-[inherit] mb-[10px] flex flex-wrap">
              <b className="font-semibold mr-2">Shaping</b>
              <TextType
                text={["Tomorrow’s", "Tomorrow’s"]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
                showCursor={true}
                cursorCharacter="|"
              />
            </span>

            <span className="sm:font-outfit font-thin text-5xl lg:text-7xl w-[inherit] mb-[10px] flex flex-wrap">
              <b className="font-semibold mr-2">Brands </b>
              {/* <TextType
              text={["Today", "Today"]}
              typingSpeed={150}
              deletingSpeed={50}
              pauseDuration={2300}
              showCursor={true}
              cursorCharacter="|"
            /> */}
              Today
            </span>
          </p>
        </RevealOnScroll>

        <RevealOnScroll to={transitionElement} from={""}>
          <p className="sm:text-lg mb-[60px]	text-white font-thin w-[80%] lg:w-[65%] max-w-[inherit]">
            Welcome to our world of endless imagination and boundless
            creativity. Together, let's embark on a remarkable journey where
            dreams become tangible realities
          </p>
        </RevealOnScroll>
        <RevealOnScroll to={transitionElement} from={""}>
          <div className=" flex flex-wrap sm:flex-row justify-between items-center max-w-[430px] mb-[10%]">
            <a
              href="/services"
              className=" py-[auto]  bg-amber-500 rounded-[40px] text-[bg-black] w-[200px] h-[60px] flex flex-row justify-center mb-5 mt-5 mr-5 hover:scale-110 duration-1000"
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
              className=" py-[auto]  rounded-[40px] text-[bg-black] w-[170px] h-[60px] flex flex-row justify-center mr-[20px]  hover:scale-110 duration-1000 hover:bg-white hover:text-black"
            >
              <div className=" justify-between items-center flex flex-row w-[inherit] ">
                <div className="w-[50%] ml-[30px]">
                  <span className="text-[12px] font-semibold ">
                    VIEW WORKS
                  </span>
                </div>

                <div className="w-[45px] h-[45px] bg-[#e8e8eb20]  rounded-[35px]  flex flex-row justify-center items-center ">
                  <FontAwesomeIcon icon={faArrowRight} style={{}} />
                </div>
              </div>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
