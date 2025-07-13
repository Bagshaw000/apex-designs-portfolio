import { Link } from "react-router";
import Footer from "../pageComponent/Footer";
import Header from "../pageComponent/Header";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RevealOnScroll } from "../components/ui/transition";

function Contact() {
  const transitionElement =
    "animate-in ease-out slide-in-from-bottom-11 duration-700 fade-in";
  return (
    <>
      <div className="relative font-outfit">
        <Header />

        <div className="bg-white mt-[200px] h-fit ">
          {/* <hr className="w-[40vw] h-[0.4px] bg-black my-auto" />  */}
          <RevealOnScroll to={transitionElement}>
            <div className="mb-[50px]">
              <div className="flex flex-row text-black text-[12px] h-fit w-[150px]  mx-auto justify-between items-center ">
                <Link to="/" className="">
                  HOMEPAGE
                </Link>
                <span> / </span>
                <span className="text-greyam ">CONTACT</span>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll to={transitionElement}>
            <div className="mx-auto text-center mb-[50px] lg:text-2xl font-medium ">
              <h1 className="text-black">Get in touch!</h1>
            </div>
          </RevealOnScroll>
          <RevealOnScroll to={transitionElement}>
            <div className="flex flex-row mb-[50px] justify-between text-[12px] text-black w-[135px] items-center mx-auto">
              <span>SEND MESSAGE</span>
              <div className="w-[35px] h-[35px] bg-[#42424245] rounded-[45px]  flex flex-row justify-center items-center ">
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
            </div>
          </RevealOnScroll>

          {/* Embed a map */}

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13357.12620263195!2d-0.20900538583689549!3d5.552580618632729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2snz!4v1751720261674!5m2!1sen!2snz"
              loading="lazy"
              className="w-full h-[600px] border-0"
            ></iframe>
          </div>

          <div className="px-[10vw]">
            <RevealOnScroll to={transitionElement}>
              <div className="text-black mx-auto text-center my-[100px] text-5xl">
                <h2>Let's Talk</h2>
              </div>
            </RevealOnScroll>
            <div>
              <RevealOnScroll to={transitionElement}>
                <form
                  action=""
                  method="post"
                  className="flex flex-col font-light text-xs"
                >
                    <RevealOnScroll to={transitionElement}>
                  <div className="flex flex-col lg:flex-row lg:justify-between">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="WHAT'S YOUR NAME"
                      className="border-0 border-b-[0.2px] h-[70px] py-[auto] text-sm mb-[20px] lg:w-[48%]"
                    />
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="YOUR EMAIL"
                      className="border-0 border-b-[0.2px] h-[70px] text-sm  mb-[20px] lg:w-[48%]"
                    />
                  </div>
                  </RevealOnScroll>
                    <RevealOnScroll to={transitionElement}>
                  <textarea
                    name=""
                    id=""
                    placeholder="TELL US ABOUT YOU PROJECT"
                    className="border-0 border-b-[0.2px] text-sm h-[250px] w-[100%]"
                  ></textarea>
                  </RevealOnScroll>
                    <RevealOnScroll to={transitionElement}>
                  <div className="my-[50px] flex flex-col h-[130px] justify-between lg:items-center lg:my-[20px] lg:flex-row">
                    <span className="text-[#42424298]  text-base">
                      <span className="text-amber-500">*</span>We promise not to
                      disclose your personal information to third parties
                    </span>

                    <button className="w-[250px]  text-black rounded-full bg-amber-500 py-[10px] px-[15px] h-[70px]">
                      {" "}
                      <div className="flex flex-row justify-between items-center">
                        <span className="ml-[20px] text-[15px]">
                          SEND MESSAGE
                        </span>
                        <div className="w-[45px] h-[45px] bg-black rounded-[35px]  flex flex-row justify-center items-center ">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            style={{ color: "orange" }}
                          />
                        </div>
                      </div>{" "}
                    </button>
                  </div>
                  </RevealOnScroll>
                </form>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
