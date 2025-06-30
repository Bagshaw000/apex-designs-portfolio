import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faBehance, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { RevealOnScroll } from "../components/ui/transition";

function Footer() {
  const transitionElement =
    "transition-opacity duration-1000 animate-in fade-in delay-200 slide-in-from-bottom-8 ease-in-out slide-out-to-top-2 ";
  return (
    <div className="bg-black flex-col px-[8vw] py-[100px]">
      <div className="flex flex-col md:flex-row md:justify-between ">
        <div className="flex flex-col justify-between h-[200px] mb-10 md:h-[200px] md:w-[40%]">
          <RevealOnScroll to={transitionElement}>
            <div>
              <h5 className="text-[#d6d6d6] font-bold text-3xl ">
                Apex Designs Solutions
              </h5>
            </div>

            <div>
              <span className="text-md text-[#8c8c8c]">
                Subscribe to our news letter:
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll to={transitionElement}>
            <div className="relative">
              <input
                type="email"
                name=""
                id=""
                placeholder="ENTER YOUR EMAIL"
                className="w-[100%] min-h-[85px] rounded-[50px] pl-[40px] md:min-h-[80px]"
              />
              <div className="w-[50px] h-[50px] bg-purple rounded-[45px]  flex flex-row justify-center items-center absolute bottom-[18px] right-[15px] md:bottom-[15px]">
                <FontAwesomeIcon icon={faArrowRight} style={{}} />
              </div>
            </div>
          </RevealOnScroll>
        </div>
        <div className="flex flex-col justify-between text-xl font-bold h-[250px] md:h-[200px]  md:w-[20%]">
          <RevealOnScroll to={transitionElement}>
            <div className="h-fit">
              <Link to="/services"> Services</Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll to={transitionElement}>
            <div className="h-fit">
              <Link to="/portfolio"> Portfolio</Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll to={transitionElement}>
            <div className="h-fit">
              <Link to="/contact"> Contact</Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll to={transitionElement}>
            <div className="h-fit">
              <Link to="/blog"> Blog</Link>
            </div>
          </RevealOnScroll>
        </div>
        <div className=" md:w-[20%]">
          <div className="mt-10 md:mt-0">
            <RevealOnScroll to={transitionElement}>
              <div className="flex flex-col justify-between h-[70px]">
                <h2 className="text-2xl font-bold">Ghana</h2>
                <span className="text-md text-[#8c8c8c]">Dummy Address</span>
              </div>
            </RevealOnScroll>
          </div>
          <div className="mt-10 md:mt-6">
            <RevealOnScroll to={transitionElement}>
              <div className="flex flex-row justify-between w-[100px]">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#ffffff" }}
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={faBehance}
                  style={{ color: "#ffffff" }}
                  size="2x"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
