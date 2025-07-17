import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


// import sphere from "../../../src/assets/sphere1 (1).png";

export default function HomeTag() {
  return (
    <div className=" h-screen w-screen min-h-fit bg-black px-[10vw] relative z-0 top-0 xl:px-[15vw]">
      {/* <div className="z-1000 text-pink-500">
        <svg viewBox="0 0 128 128" className="w-8 h-8 fill-gray">
          <path
            d="M106.1,41.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2L116.8,61H11.2l14.9-14.9c1.2-1.2,1.2-3.1,0-4.2
      c-1.2-1.2-3.1-1.2-4.2,0l-20,20c-1.2,1.2-1.2,3.1,0,4.2l20,20c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9c1.2-1.2,1.2-3.1,0-4.2
      L11.2,67h105.5l-14.9,14.9c-1.2,1.2-1.2,3.1,0,4.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l20-20c1.2-1.2,1.2-3.1,0-4.2
      L106.1,41.9z"
            fill="fill-gray"
          />
        </svg>
      </div> */}
      <div className="w-fit lg:max-w-full 2xl:max-w-[2500px] mx-auto lg:px-0  flex flex-col justify-end  bottom-0  items-start   h-[inherit] ">
        <p className="w-[100%] leading-6 flex flex-wrap lg:flex-col  text-white ">
          <h1 className="sm:font-outfit font-thin text-5xl w-full mb-[10px] lg:text-7xl 2xl:text-[120px]  ">
            <b className="font-medium lg:mb-[5px]">Shaping</b> Tomorrow’s
          </h1>
          <h1 className="sm:font-outfit font-thin text-5xl w-full mb-[60px] lg:text-7xl 2xl:text-[120px] ">
            <b className="font-medium"> Brands </b> Today
          </h1>
        </p>

        <h5 className="sm:text-base mb-[60px]	text-[#e8e8eb70] font-light w-[80%] max-w-[inherit] lg:text-2xl lg:w-[60%]">
          Welcome to our world of endless imagination and boundless creativity.
          Together, let's embark on a remarkable journey where dreams become
          tangible realities.
        </h5>

        <div className=" flex flex-wrap sm:flex-row items-center w-[430px] lg:w-[700px] lg: mb-[10%]">
          <a
            href="/services"
            className=" py-[auto]  bg-amber-500 rounded-[40px] text-[bg-black] w-[200px] h-[60px] flex flex-row justify-center mb-5 mt-5 lg:w-[45%] lg:h-[100px] lg:rounded-[50px]"
          >
            <div className=" justify-between items-center flex flex-row w-[80%] px-[10px]">
              <div className=" w-[80%] lg:w-[75%] lg:ml-[30px] ml-[10px] ">
                <span className="text-[12px] font-semibold text-black w-[100%] lg:text-xl ">
                  {" "}
                  WHAT WE DO
                </span>
              </div>

              <div className="w-[45px] h-[40px] bg-black rounded-[35px]  flex flex-row justify-center items-center lg:w-[60px] lg:h-[50px] lg:rounded-[40px] ">
                <FontAwesomeIcon icon={faArrowRight} style={{color:"orange"}} />
              </div>
            </div>
          </a>
          <a
            href="/portfolio"
            className=" py-[auto]  rounded-[40px] text-[bg-black] w-[200px] h-[60px] flex flex-row justify-center mr-[20px] lg:w-[45%]"
          >
            <div className=" justify-between items-center flex flex-row w-[80%] ">
              <div className="w-[50%] ml-[30px] lg:w-[75%] text-left">
                <span className="text-[12px] font-semibold text-white w-[100%] lg:text-xl">
                  VIEW WORKS
                </span>
              </div>

              <div className="w-[45px] h-[45px] bg-[#e8e8eb20] rounded-[35px]  flex flex-row justify-center items-center  lg:w-[60px] lg:h-[50px] lg:rounded-[40px] ">
                
                
                <FontAwesomeIcon icon={faArrowRight} style={{}} />
               
                
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
