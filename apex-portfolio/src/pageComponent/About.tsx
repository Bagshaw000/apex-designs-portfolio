import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { RevealOnScroll } from "../components/ui/transition";

function About() {
  const [isActive, setIsActive] = useState(false);
  const [isIndex, setIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setIsActive(!isActive);
    setIndex(index);
  };

  const transitionElement =
    "animate-in ease-out slide-in-from-bottom-11 duration-700 fade-in";

  const review: number[] = [3, 1, 2];
  return (
    <>
      <div className="text-[#000000] px-[10vw] mb-[20px]">
        <div className="my-16">
          <RevealOnScroll to={transitionElement}>
            <h1 className="text-4xl font-thin">
              <b className={`font-medium`}>Discover Our</b> Agency
            </h1>
          </RevealOnScroll>
        </div>
        <div className="text-sm ">
          <RevealOnScroll to={transitionElement}>
            <h6 className="mb-[35px] text-[#42424298]">
              At <b>Apex Designs</b>, creativity meets strategy. We are a
              passionate collective of visionaries, innovators, and
              problem-solvers driven to turn ideas into impactful realities.
              With expertise spanning design and digital marketing, our diverse
              talents blend seamlessly to craft compelling solutions that
              elevate your brand and engage your audience. Together, we build
              experiences that inspire and deliver measurable success for every
              client we serve
            </h6>
          </RevealOnScroll>

          <RevealOnScroll to={transitionElement}>
            <h6 className="text-[#42424298]">
              Collaboration fuels everything we create. Our strength lies in the
              dynamic synergy sparked by diverse perspectives coming together.
              This vibrant exchange of ideas fosters an atmosphere of boundless
              creativity, where innovation flourishes. By channeling our
              collective expertise, we deliver extraordinary solutions that go
              beyond expectations and drive lasting impact.
            </h6>
          </RevealOnScroll>
        </div>
      </div>
      <RevealOnScroll to={transitionElement}>
        <div className="px-[10vw] flex flex-row justify-start items-center my-[60px]">
          <div className="w-[60px] h-[60px]  min-w-[60px] bg-gray rounded-[40px] mr-[20px]">
            <div></div>
          </div>
          <div className="min-w-[200px]">
            <span className="text-[#000000] text-wrap font-light ">
              <b className="font-medium">Passionately Creating</b> Design
              Wonders: <b className="font-medium">Unleashing</b> Boundless
              Creativity
            </span>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll to={transitionElement}>
        <div className=" w-[80vw] min-h-[600px] bg-greyam mx-[auto] mb-[60px] hover:scale-200 sm:min-h-[700px] md:min-h-[900px]  lg:h-[900px]"></div>
      </RevealOnScroll>

      {/* Services */}
      <div className="bg-black w-[100vw] text-sm  px-[5vw] py-[80px] h-[fit]  ">
        <RevealOnScroll to={transitionElement}>
          <div className="w-[60%] mx-[auto] text-center md:w-[30%]  md:text-right md:mr-24">
            <span className="text-[#e8e8eb70]">
              Professionals focused on helping your brand grow and move forward
            </span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll to={transitionElement}>
          <div className="w-[85vw] mx-auto h-fit mb-[120px]">
            <div className="text-center mb-0 mx-auto md:flex md:flex-row md:items-center md:w-fit md:mx-auto md:mt-[80px]">
              <div className=" hidden md:h-[70px] md:w-[200px] bg-greyam rounded-[40px] md:block md:mr-[20px]"></div>
              <h1 className="sm: font-mono font-thin text-zinc-600 text-4xl w-[inherit] mt-[60px] md:mt-0  md:w-fit  md:text-6xl">
                <b className="font-medium">Unique</b> Ideas
              </h1>
            </div>

            <div className="text-center mt-[20px]  flex flex-col md:flex-row md:justify-center">
              <h1 className="sm: font-mono font-thin text-zinc-600 text-4xl w-[inherit]   mb-[60px] sm:mr-[0px] md:w-fit md:mr-[15px]  md:text-6xl md:mb-0">
                <b className="font-medium"> For Your </b> Business.
              </h1>
              <div className="h-fit ">
                <a
                  href=""
                  className=" py-[auto]  bg-[#8BC6E4] rounded-[40px] text-[bg-black] w-[200px] h-[60px] flex flex-row justify-center mx-[auto]"
                >
                  <div className=" justify-between items-center flex flex-row w-[inherit] px-[10px]">
                    <div className="w-[50%] ml-[30px] ">
                      <span className="text-[12px] font-semibold text-[#000000]">
                        WHAT WE DO
                      </span>
                    </div>

                    <div className="w-[45px] h-[45px] bg-black rounded-[35px]  flex flex-row justify-center items-center ">
                      <FontAwesomeIcon icon={faArrowRight} style={{}} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Service */}
        </RevealOnScroll>

        <RevealOnScroll to={transitionElement}>
          <div className="flex flex-wrap  justify-center h-[700px]   ">
            <RevealOnScroll to={transitionElement}>
              <div className="border-[#e8e8eb29] border-[0.5px] mx-auto  max-w-[80%] sm:w-[400px]">
                <div className="flex flex-col justify-between w-[100%] px-[30px] py-[50px] h-[100%]">
                  <h2 className="text-start font-medium text-base">
                    {" "}
                    Brand and Identity Design
                  </h2>

                  <h5 className="text-start text-sm my-[30px] text-[#e8e8eb70]">
                    Our expert team crafts impactful brand identities, from
                    custom logos to comprehensive brand guides, to help your
                    business thrive.
                  </h5>
                  <div className="w-[45px] h-[45px] bg-purple rounded-[35px]  flex flex-row justify-center items-center ">
                    <FontAwesomeIcon icon={faArrowRight} style={{}} />
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll to={transitionElement}>
              <div className="border-[#e8e8eb29] border-[0.5px] mx-auto max-w-[80%] sm:w-[400px]">
                <div className="flex flex-col justify-between w-[100%] px-[30px] py-[50px] h-[100%]">
                  <h2 className="text-start font-medium text-base">
                    {" "}
                    Digital Marketing
                  </h2>

                  <h5 className="text-start text-sm my-[30px] text-[#e8e8eb70]">
                    Driving growth with SEO optimization, brand strategy, social
                    optimization, content and copywriting, social media
                    management, and paid ads.
                  </h5>
                  <div className="w-[45px] h-[45px] bg-purple rounded-[35px]  flex flex-row justify-center items-center ">
                    <FontAwesomeIcon icon={faArrowRight} style={{}} />
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll to={transitionElement}>
              <div className="border-[#e8e8eb29] border-[0.5px] mx-auto  max-w-[80%] sm:w-[400px]">
                <div className="flex flex-col justify-between w-[100%] px-[30px] py-[50px] h-[100%]">
                  <h2 className="text-start font-medium text-base">
                    {" "}
                    Brand Audit and Consultation
                  </h2>

                  <h5 className="text-start text-sm my-[30px] text-[#e8e8eb70]">
                    We analyze your brand's current positioning and provide
                    expert guidance to enhance its impact and market presence.
                  </h5>
                  <div className="w-[45px] h-[45px] bg-purple rounded-[35px]  flex flex-row justify-center items-center ">
                    <FontAwesomeIcon icon={faArrowRight} style={{}} />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </RevealOnScroll>
      </div>

      {/* Meet the team */}

      <div className="px-[10vw] py-[70px] lg:flex justify-between lg:items-center">
        <div className="mb-[50px] lg:w-[45%]">
          <RevealOnScroll to={transitionElement}>
            <h1 className="text-4xl font-thin text-[#000000] my-12 md:text-5xl ">
              <b className="font-medium">
                Meet <br className="hidden sm:block" />
                Our Team
              </b>
            </h1>
          </RevealOnScroll>

          <div className="text-sm font-thin md:text-base">
            <RevealOnScroll to={transitionElement}>
              <h5 className=" text-[#42424298] mb-[35px]">
                We are talented individuals who are passionate about bringing
                ideas to life. With a diverse range of backgrounds and skill
                sets, we collaborate to produce effective solutions for our
                clients.
              </h5>
            </RevealOnScroll>
            <RevealOnScroll to={transitionElement}>
              <h5 className=" text-[#42424298]">
                Together, our creative team is committed to delivering impactful
                work that exceeds expectations.
              </h5>
            </RevealOnScroll>
          </div>

          <RevealOnScroll to={transitionElement}>
            <div className="mt-[60px]">
              <h5 className="text-[#424242] font-thin text-2xl md:text-3xl">
                We <b className="font-medium">delivering</b>{" "}
                <br className=" hidden md:block" /> exceptional{" "}
                <b className="font-medium">results.</b>
              </h5>
            </div>
          </RevealOnScroll>
        </div>
        <div className="w-[inherit] flex flex-wrap justify-between  h-[2600px] sm:h-[80vh] py-10  sm:flex-wrap sm:items-start lg:w-[46%] lg:h-[700px]">
          <RevealOnScroll to={transitionElement}>
            <div className="w-[80vw] mx-auto  bg-greyam h-[600px] sm:w-[39vw] sm:h-[35vh] lg:w-[210px] lg:h-[300px]"></div>
          </RevealOnScroll>
          <RevealOnScroll to={transitionElement}>
            <div className="w-[80vw] mx-auto  bg-greyam h-[600px] sm:w-[39vw] sm:h-[35vh] lg:w-[210px] lg:h-[300px]"></div>
          </RevealOnScroll>
          <RevealOnScroll to={transitionElement}>
            <div className="w-[80vw] mx-auto  bg-greyam h-[600px] sm:w-[39vw] sm:h-[35vh] lg:w-[210px] lg:h-[300px]"></div>
          </RevealOnScroll>
          <RevealOnScroll to={transitionElement}>
            <div className="w-[80vw] mx-auto  bg-greyam h-[600px] sm:w-[39vw] sm:h-[35vh] lg:w-[210px] lg:h-[300px]"></div>
          </RevealOnScroll>
        </div>
      </div>

      <div className="px-[10vw] bg-[#c4c4c436] py-[70px]">
        <div>
          <RevealOnScroll to={transitionElement}>
            <h5 className="text-[#000000] font-thin text-4xl text-center">
              <b className="font-medium">Customer</b> Voices:{" "}
              <b className="font-medium">Hear What</b> They Say!
            </h5>
          </RevealOnScroll>
        </div>
        <div className="flex flex-wrap justify-center">
          {review.map((key) => (
            <div
              key={key}
              className={`min-w-[70px] min-h-[70px] bg-[#c4c4c475] rounded-[60px] mx-4 my-4 outline-none ${
                isActive && isIndex ? "outline-4 outline-blue-am" : ""
              } `}
              onClick={() => handleClick(key)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
