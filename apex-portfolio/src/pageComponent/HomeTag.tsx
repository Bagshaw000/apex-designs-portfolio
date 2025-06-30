
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


// import sphere from "../../../src/assets/sphere1 (1).png";

export default function HomeTag() {





  return (
    <div className=" h-[90vh] min-h-fit bg-black px-[2.5vw] relative z-0 ">
      {/* <div className="sm: z-0 ">
        <img src={sphere} alt="" className="sm: w-[6070px] " />
      </div> */}
      <div className="mb-[10%] sm: z-100  px-[8vw]  absolute bottom-0 left-0 flex-col justify-between">
        <h1 className="sm: font-mono font-thin text-zinc-600 text-4xl w-[80vw] mb-[60px] ">
          <b className="font-medium">Shaping</b> Tomorrow’s 
          <b className="font-medium"> Brands </b> Today
        </h1>

        <h5 className="sm:  text-base mb-[60px]	text-[#e8e8eb70] font-thin w-[80vw]">
          Welcome to our world of endless imagination and boundless creativity.
          Together, let's embark on a remarkable journey where dreams become
          tangible realities.
        </h5>

        <div className=" flex flex-wrap sm:flex-row justify-between items-center max-w-[430px]">
          <a
            href=""
            className=" py-[auto]  bg-[#8BC6E4] rounded-[40px] text-[bg-black] w-[200px] h-[60px] flex flex-row justify-center mb-5 mt-5"
          >
            <div className=" justify-between items-center flex flex-row w-[inherit] px-[10px]">
              <div className="w-[50%] ml-[30px]">
                <span className="text-[12px] font-semibold text-[#000000]">
                  {" "}
                  WHAT WE DO
                </span>
              </div>

              <div className="w-[45px] h-[45px] bg-black rounded-[35px]  flex flex-row justify-center items-center ">
                <FontAwesomeIcon icon={faArrowRight} style={{}} />
              </div>
            </div>
          </a>
          <a
            href=""
            className=" py-[auto]  rounded-[40px] text-[bg-black] w-[170px] h-[60px] flex flex-row justify-center mr-[20px]"
          >
            <div className=" justify-between items-center flex flex-row w-[inherit] ">
              <div className="w-[50%] ml-[30px]">
                <span className="text-[12px] font-semibold text-[#ffffff]">
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
