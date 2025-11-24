import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { RevealOnScroll } from "../components/ui/transition";
import ethnic from "../assets/ethnic.jpg";
import people from "../assets/people.jpg";
import studio from "../assets/studio.jpg";
import nana from "../assets/Nana.jpg";
import justin from "../assets/Justin.jpg";
import r1 from "../assets/r1.jpg";
import r2 from "../assets/r2.jpg";
import r3 from "../assets/r3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

function About() {
  const [isActive, setIsActive] = useState(false);
  const [isIndex, setIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setIsActive(!isActive);
    setIndex(index);
  };

  const plugin = useRef(
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const transitionElement =
    "animate-in  ease-in-out slide-in-from-bottom-11 duration-1000 fade-in";

  const review = [{ image: r1 }, { image: r3 }, { image: r2 }];
  return (
    <div className="z-50 ">
      <div className="text-black px-[10vw]  w-[100vw] my-[70px] lg:my-[150px]  mx-auto flex flex-col lg:flex-row lg:justify-between lg:w-screen xl:px-[10vw] lg:items-center 2xl:max-w-[2500px] ">
        <div className="lg:w-[48%]  xl:w-[48%] xl:p-[] ">
          <div className="my-16 lg:w-[100%]">
            <RevealOnScroll to={transitionElement}>
              <h1 className="text-4xl font-thin lg:text-7xl w-[100%] ">
                <b className={`font-medium`}>
                  Discover<br className="hidden lg:block"></br> Our
                </b>{" "}
                Agency
              </h1>
            </RevealOnScroll>
          </div>
          <div className="text-sm font-light lg:text-base lg:max-w-[100%]">
            <RevealOnScroll to={transitionElement} from={""}>
              <h6 className="mb-[35px] text-[#42424298]">
                At <b>Synergis Design Solutions</b>, we believe great design
                starts with alignment. We focus on uncovering the natural
                synergy between your vision and our creative expertise so every
                solution we craft not only captivates visually but also delivers
                measurable impact. We collaborate with companies, governments,
                and startups alike, taking the time to understand your goals,
                challenges, and audiences. That understanding shapes our
                process, ensuring every outcome is both strategically sound and
                visually compelling.
              </h6>
            </RevealOnScroll>

            <RevealOnScroll to={transitionElement} from={""}>
              <h6 className="text-[#42424298]">
                As an end-to-end Design-as-a-Service (DaaS) partner, we support
                you from concept to execution—whether launching something new,
                refining what exists, or scaling for growth. Through agility,
                expertise, and imagination, we help you move forward with
                purpose and precision. At Synergis, design is more than a
                service—it’s a partnership rooted in alignment, collaboration,
                and shared ambition.
              </h6>
            </RevealOnScroll>
          </div>
          <RevealOnScroll to={transitionElement} from={""}>
            <div className=" flex flex-row justify-start items-center my-[60px] max-w-[1500px] ml-0">
              <div className="w-[60px] h-[60px]  min-w-[60px] bg-gray rounded-[40px] mr-[20px] ">
                <img
                  src={ethnic}
                  alt={studio}
                  className="object-cover h-[100%] w-[100%] rounded-[40px]"
                />
              </div>
              <div className="min-w-[200px]">
                <span className="text-black text-wrap font-light ">
                  <b className="font-medium">Passionately Creating</b> Design
                  Wonders: <br className=" hidden lg:block" />{" "}
                  <b className="font-medium">Unleashing</b> Boundless Creativity
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
        <div className="lg:w-[48%]  xl:w-[48%] ">
          <RevealOnScroll to={transitionElement} from={""}>
            <div className="max-w-[1500px] mx-auto">
              <div className=" w-[iherit] hover:scale-105 duration-300 hover:delay-50 hover:rotate-2    bg-greyam mx-auto mb-[60px] hover:scale-200 sm:min-h-[700px] md:min-h-[900px] lg:min-h-[400px]  lg:h-[700px]  lg:w-[450px] lg:max-w-[500px] max-w-[1500px] lg:mb-0">
                <img
                  src={studio}
                  alt={studio}
                  className="object-cover h-[inherit] w-[inherit] "
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Services */}
      <div className="bg-[#06071a] w-screen text-sm lg:text-base px-[5vw] py-[100px] md:py-[150px] h-[fit]   ">
        <RevealOnScroll to={transitionElement} from={""}>
          <div className="w-[60%] mx-auto text-center md:w-[40%] mt-[20px] md:text-right md:mr-[5vw] lg:mr-[1%] lg:w-[400px] xl:mr-[2%] flex flex-row items-center">
            <span className="text-neutral-400 mr-6">
              Professionals focused on helping your brand grow and move forward
            </span>

            <hr className="hidden lg:block lg:w-[90px] text-[#e8e8eb70] " />
          </div>
        </RevealOnScroll>

        <RevealOnScroll to={transitionElement} from={""}>
          <div className="w-[85vw] mx-auto h-fit mb-[120px] lg:mb-[200px]  text-white">
            <div className="text-center  mb-0 mx-auto md:flex md:flex-row md:items-center md:w-fit md:mx-auto md:mt-[80px]">
              <div className=" hidden md:h-[70px] md:w-[200px] bg-greyam rounded-[40px] md:block md:mr-[20px]">
                <img
                  src={people}
                  alt={studio}
                  className="object-cover h-[100%] w-[100%] rounded-[40px]"
                />
              </div>
              <h1 className="sm:  font-thine text-4xl w-[inherit] mt-[60px] md:mt-0  md:w-fit  md:text-6xl">
                <b className="font-medium">Unique</b> Ideas
              </h1>
            </div>

            <div className="text-start mt-[20px]  flex flex-col md:flex-row md:text-center md:justify-center">
              <h1 className="sm:font-thin text-4xl w-[inherit]   mb-[60px] sm:mr-[0px] md:w-fit md:mr-[15px]  md:text-6xl md:mb-0">
                <b className="font-medium"> For Your </b> Business.
              </h1>
              <div className="h-fit ">
                <a
                  href=""
                  className=" py-[auto]    bg-amber-500  rounded-[40px] text-[bg-black] w-[200px] h-[60px] flex flex-row justify-center mx-auto ease-in-out hover:scale-110 duration-1000"
                >
                  <div className=" justify-between items-center flex flex-row w-[inherit] px-[10px]">
                    <div className="w-[50%] ml-[30px] ">
                      <span className="text-[12px] font-semibold text-black">
                        WHAT WE DO
                      </span>
                    </div>

                    <div className="w-[45px] h-[45px] bg-[#06071a] rounded-[35px]  flex flex-row justify-center items-center ">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "" }}
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Service */}
        </RevealOnScroll>

        <RevealOnScroll to={transitionElement} from={""}>
          <div className="flex flex-wrap justify-center md:justify-start  md:w-[660px]  h-[fit] mx-auto max-w-[1200px] lg:w-[900px] xl:w-[1050px] lg:justify-center lg:flex-row lg:mb-0">
            <div className="flex flex-wrap justify-center md:justify-start   max-w-[1200px]  lg:flex-row h-fit">
              <RevealOnScroll to={transitionElement} from={""}>
                <div className="border-[#e8e8eb29] border-[0.5px] mx-auto  max-w-[330px] sm:w-[400px]  lg:max-w-[350px] h-[100%] bg-[#06071a] ease-in-out hover:scale-105 z-0 hover:z-20  duration-500">
                  <div className="flex flex-col justify-between w-full px-[30px] py-[50px] h-full">
                    <h2 className="text-start font-medium text-base lg:text-xl">
                      Corporate Branding
                    </h2>

                    <h5 className="text-start text-sm my-[30px] text-neutral-400 lg:text-base">
                      We help organizations articulate who they are through
                      deliberate design. Combining industry-led intel with
                      creative execution, we craft visual identities that
                      express your mantra and position you for growth. Whether
                      you’re branding up or rebranding, we deliver systems that
                      communicate confidence and consistency at every
                      touchpoint.
                    </h5>
                    <div className="w-[45px] h-[45px] bg-amber-500 rounded-[35px]  flex flex-row justify-center items-center ">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "black" }}
                      />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll to={transitionElement} from={""}>
                <div className="border-[#e8e8eb29] border-[0.5px] mx-auto max-w-[330px] sm:w-[400px] lg:max-w-[350px] h-[100%] bg-[#06071a] ease-in-out hover:scale-105 z-0 hover:z-20  duration-500">
                  <div className="flex flex-col justify-between w-full px-[30px] py-[50px] h-full">
                    <h2 className="text-start font-medium text-base lg:text-xl">
                      Campaign Design
                    </h2>

                    <h5 className="text-start text-sm my-[30px] text-neutral-400 lg:text-base">
                      We turn strategy into creative momentum by aligning your
                      campaign goals with design-led storytelling, targeted
                      visuals, intentional messaging, and experiences that
                      ignite engagement. From concept to execution, we ensure
                      every element— digital, print, or spatial— works
                      cohesively to drive participation, visibility, and
                      measurable results.
                    </h5>
                    <div className="w-[45px] h-[45px] bg-amber-500 rounded-[35px]  flex flex-row justify-center items-center ">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "black" }}
                      />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll to={transitionElement} from={""}>
              <div className="border-[#e8e8eb29] border-[0.5px] mx-auto  max-w-[330px] sm:w-[400px] lg:max-w-[350px] h-[100%] bg-[#06071a] ease-in-out hover:scale-105 z-0 hover:z-20  duration-500">
                <div className="flex flex-col justify-between w-full px-[30px] py-[50px] h-full">
                  <h2 className="text-start font-medium text-base lg:text-xl">
                    Design Consulting
                  </h2>

                  <h5 className="text-start text-sm my-[30px] text-neutral-400 lg:text-base">
                    We examine how your brand performs across various
                    touchpoints—what works, what doesn’t, and why. We then
                    translate these insights into actionable design
                    recommendations that will strengthen your visual presence
                    and ensure every creative decision ties into your wider
                    business objectives.
                  </h5>
                  <div className="w-[45px] h-[45px] bg-amber-500 rounded-[35px]  flex flex-row justify-center items-center ">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ color: "black" }}
                    />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </RevealOnScroll>
      </div>

      {/* Meet the team */}

      <div className="px-[10vw] py-[70px] md:py-[150px] lg:flex lg:flex-row justify-between lg:items-center mx-auto  max-w-[1200px] md:w-screen lg:w-screen 2xl:max-w-[80vw]">
        <div className="mb-[50px] lg:w-[45%] ">
          <RevealOnScroll to={transitionElement} from={""}>
            <h1 className="text-4xl font-thin text-black my-12 md:text-5xl lg:text-6xl ">
              <b className="font-medium">
                Meet <br className="hidden sm:block" />
                Our Team
              </b>
            </h1>
          </RevealOnScroll>

          <div className="text-sm font-light md:text-base lg:max-w-[300px] xl:max-w-[100%]">
            <RevealOnScroll to={transitionElement} from={""}>
              <h5 className=" text-[#42424298] mb-[35px]">
                We are talented individuals who are passionate about bringing
                ideas to life. With a diverse range of backgrounds and skill
                sets, we collaborate to produce effective solutions for our
                clients.
              </h5>
            </RevealOnScroll>
            <RevealOnScroll to={transitionElement} from={""}>
              <h5 className=" text-[#42424298]">
                Together, our creative team is committed to delivering impactful
                work that exceeds expectations.
              </h5>
            </RevealOnScroll>
          </div>

          <RevealOnScroll to={transitionElement} from={""}>
            <div className="mt-[60px]">
              <h5 className="text-greyam font-thin text-2xl md:text-3xl">
                We <b className="font-medium">delivering</b>{" "}
                <br className=" hidden md:block" /> exceptional{" "}
                <b className="font-medium">results.</b>
              </h5>
            </div>
          </RevealOnScroll>
        </div>

        <div className="w-[inherit] flex flex-col justify-between h-[1750px] sm:flex-row sm:h-[1150px] py-15  sm:items-start md:max-w-[80vw] md:max-h-[1200px] lg:w-[50%]  lg:max-w-[50%] lg:h-[700px] lg:py-auto 2xl:max-w-[47%] ">
          <div className="flex flex-col h-[850px] justify-between sm:h-[1125px] lg:h-[625px] lg:w-[48%] lg:items-start ">
            <RevealOnScroll to={transitionElement} from={""}>
              <div className="w-[80vw] mx-auto group bg-[url('../src/assets/Justin.jpg')] bg-cover bg-center bg-no-repeat h-[400px] sm:w-[39vw] sm:max-h-[550px] relative sm:h-[35vh] md:w-[38vw] md:h-[600px] lg:w-[225px] lg:max-w-[95%] lg:h-[300px] hover:scale-110 hover:text-white ease-in-out duration-500">
                {/* <!-- Dark overlay using before pseudo-element with Tailwind --> */}
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-60 transition-opacity duration-500 z-0"></div>

                {/* <!-- Content with higher z-index to appear above overlay --> */}
                <div className="relative z-10 h-full flex flex-col justify-end">
                  {/* <!-- Hidden content that appears on hover --> */}
                  <div className="hidden group-hover:block h-fit absolute bottom-0 px-3 pb-10 duration-100 ease-in-out">
                    <h2 className="text-white font-bold text-xl">
                      Justin Adomakoh
                    </h2>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      CEO
                    </h3>
                    <p className="font-light text-sm sm:text-xs text-white">
                      Creative and visionary Design CEO passionate about
                      innovation, branding, and digital experiences. With a
                      strong eye for detail and strategy, he leads talented
                      teams to craft timeless, user-centered designs that
                      inspire emotion, elevate brands, and drive meaningful
                      business growth across industries.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll to={transitionElement} from={""}>
              <div className="w-[80vw] mx-auto group bg-[url('../src/assets/nana.jpg')] bg-cover bg-center bg-no-repeat h-[400px] sm:w-[39vw] sm:max-h-[550px] relative sm:h-[35vh] md:w-[38vw] md:h-[600px] lg:w-[225px] lg:max-w-[95%] lg:h-[300px] hover:scale-110 hover:text-white ease-in-out duration-500">
                {/* <!-- Dark overlay using before pseudo-element with Tailwind --> */}
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-60 transition-opacity duration-500 z-0"></div>

                {/* <!-- Content with higher z-index to appear above overlay --> */}
                <div className="relative z-10 h-full flex flex-col justify-end">
                  {/* <!-- Hidden content that appears on hover --> */}
                  <div className="hidden group-hover:block h-fit absolute bottom-0 px-3 pb-10 duration-400 ease-in-out">
                    <h2 className="text-white font-bold text-xl">
                      Alice Nana-Adjwoa
                    </h2>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      CMO
                    </h3>
                    <p className="font-light text-sm sm:text-xs text-white">
                      Creative and visionary Design CEO passionate about
                      innovation, branding, and digital experiences. With a
                      strong eye for detail and strategy, he leads talented
                      teams to craft timeless, user-centered designs that
                      inspire emotion, elevate brands, and drive meaningful
                      business growth across industries.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          <div className="flex flex-col justify-between h-[850px] sm:h-[1125px] lg:h-[625px] lg:py-auto lg:w-[48%] lg:items-end">
            <RevealOnScroll to={transitionElement} from={""}>
              <div className="w-[80vw] mx-auto group  bg-cover bg-center bg-no-repeat h-[400px] sm:w-[39vw] sm:max-h-[550px] relative sm:h-[35vh] md:w-[38vw] md:h-[600px] lg:w-[225px] lg:max-w-[95%] lg:h-[300px] hover:scale-110 hover:text-white ease-in-out duration-500">
                {/* <!-- Dark overlay using before pseudo-element with Tailwind --> */}
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-60 transition-opacity duration-500 z-0"></div>

                {/* <!-- Content with higher z-index to appear above overlay --> */}
                <div className="relative z-10 h-full flex flex-col justify-end">
                  {/* <!-- Hidden content that appears on hover --> */}
                  <div className="hidden group-hover:block h-fit absolute bottom-0 px-3 pb-10 duration-400 ease-in-out">
                    <h2 className="text-white font-bold text-xl">
                      Alice Nana-Adjwoa
                    </h2>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      CMO
                    </h3>
                    <p className="font-light text-sm sm:text-xs text-white">
                      Creative and visionary Design CEO passionate about
                      innovation, branding, and digital experiences. With a
                      strong eye for detail and strategy, he leads talented
                      teams to craft timeless, user-centered designs that
                      inspire emotion, elevate brands, and drive meaningful
                      business growth across industries.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll to={transitionElement} from={""}>
              <div className="w-[80vw] mx-auto group  bg-cover bg-center bg-no-repeat h-[400px] sm:w-[39vw] sm:max-h-[550px] relative sm:h-[35vh] md:w-[38vw] md:h-[600px] lg:w-[225px] lg:max-w-[95%] lg:h-[300px] hover:scale-110 hover:text-white ease-in-out duration-500">
                {/* <!-- Dark overlay using before pseudo-element with Tailwind --> */}
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-60 transition-opacity duration-500 z-0"></div>

                {/* <!-- Content with higher z-index to appear above overlay --> */}
                <div className="relative z-10 h-full flex flex-col justify-end">
                  {/* <!-- Hidden content that appears on hover --> */}
                  <div className="hidden group-hover:block h-fit absolute bottom-0 px-3 pb-10 duration-400 ease-in-out">
                    <h2 className="text-white font-bold text-xl">
                      Alice Nana-Adjwoa
                    </h2>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      CMO
                    </h3>
                    <p className="font-light text-sm sm:text-xs text-white">
                      Creative and visionary Design CEO passionate about
                      innovation, branding, and digital experiences. With a
                      strong eye for detail and strategy, he leads talented
                      teams to craft timeless, user-centered designs that
                      inspire emotion, elevate brands, and drive meaningful
                      business growth across industries.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      <div className="px-[10vw] bg-[#c4c4c436] py-[70px] ">
        <div>
          <RevealOnScroll to={transitionElement} from={""}>
            <h5 className="text-black font-thin text-4xl text-center">
              <b className="font-medium">Customer</b> Voices:{" "}
              <b className="font-medium">Hear What</b> They Say!
            </h5>
          </RevealOnScroll>
        </div>
        <div className="flex flex-col justify-center items-center w-[80vw]">
          <div className="flex flex-wrap justify-center">
            {review.map((key, idx) => (
              <div
                key={idx}
                className={`min-w-[70px] h-[70px] w-[70px] min-h-[70px] bg-[#c4c4c475] rounded-[60px] mx-4 my-4 outline-hidden ${
                  isActive && isIndex ? "outline-4 outline-blue-am" : ""
                } `}
                onClick={() => handleClick(idx)}
              >
                {" "}
                <img
                  src={key.image}
                  alt={studio}
                  className="object-cover h-[100%] w-[100%] rounded-[40px]"
                />
              </div>
            ))}
          </div>

          <Carousel
            className=" max-w-[80vw] w-[80vw] mt-10"
            opts={{
              align: "start",
              loop: true,
              duration: 5,
              direction: "ltr",
              slidesToScroll: 1,
            }}
            plugins={[plugin.current]}
          >
            <CarouselContent className="-ml-1 ease-in-out ">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3 "
                >
                  <div>
                    <div
                      className={`min-w-[70px] min-h-[70px] w-[70px] bg-[#c4c4c475] rounded-[60px] mx-auto my-4 outline-hidden ${
                        isActive && isIndex ? "outline-4 outline-blue-am" : ""
                      } `}
                    ></div>

                    <p className="text-black text-center mx-auto">"Review"</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#c4c4c4] hidden" />
            <CarouselNext className="bg-[#c4c4c4] hidden" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default About;
