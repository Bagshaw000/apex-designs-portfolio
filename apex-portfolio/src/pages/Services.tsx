import { Link } from "react-router";
import Footer from "../pageComponent/Footer";
import Header from "../pageComponent/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { RevealOnScroll } from "../components/ui/transition";

function Services() {
  const transitionElement =
    "animate-in ease-out slide-in-from-bottom-11 duration-700 fade-in";
  return (
    <>
      <div className="relative font-outfit">
        <Header />
        {/* Tag  */}

        <div className="bg-black h-fit   text-white mt-[100px] px-[10vw]">
          <RevealOnScroll to={transitionElement}>
            <div className="flex flex-col justify-between h-[300px] items-start mb-[50px]">
              {/* Page Tag */}
              <div className="flex flex-row mt-[100px] w-[350px] justify-between items-center">
                <div className="hidden">
                  {" "}
                  <hr className="w-[10px]" />
                </div>
                <div className="flex flex-row text-white text-[12px] h-[inherit] w-[150px] justify-between items-center ">
                  <Link to="/" className="">
                    HOMEPAGE
                  </Link>
                  <span> / </span>
                  <span className="text-greyam ">SERVICES</span>
                </div>
              </div>
              <span className=" text-3xl font-thin ">
                <b>This is</b> what <b>we do</b> best
              </span>

              <div className="flex flex-row justify-between text-[12px] text-amber-500 w-[135px] items-center">
                <span>OUR SERVICES</span>
                <div className="w-[35px] h-[35px] bg-[#4242427e] rounded-[45px]  flex flex-row justify-center items-center ">
                  <FontAwesomeIcon icon={faArrowDown} />
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Services */}

          <div className="flex flex-col h-[fit] justify-between">
            <div className="flex flex-col mb-[50px]">
              <RevealOnScroll to={transitionElement}>
                <div className="flex flex-col h-[220px] justify-between mb-[50px]">
                  <h4>Branding and Identity Design</h4>

                  <span className="text-xs font-medium text-greyam">
                    Our expert team crafts impactful brand identities, from
                    custom logos to comprehensive brand guides, to help your
                    business thrive.
                  </span>

                  <table className="table-auto w-[100%] text-xs font-medium text-greyam">
                    <tbody>
                      <tr className="border-y border-[#42424251] w-[inherit] h-[40px] align-middle">
                        <td>Audit</td>
                      </tr>

                      <tr className="border-y border-[#42424251] w-[inherit] h-[40px] align-middle">
                        <td>Audit</td>
                      </tr>
                      <tr className="border-y border-[#42424251] w-[inherit] h-[40px] align-middle">
                        <td>Audit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </RevealOnScroll>

              <RevealOnScroll to={transitionElement}>
                <div className="flex flex-col h-[220px] justify-between">
                  <h4>Digital Marketing</h4>

                  <span className="text-xs font-medium text-greyam">
                    Driving growth with SEO optimization, brand strategy, social
                    optimization, content and copywriting, social media
                    management, and paid ads. business thrive.
                  </span>

                  <table className="table-auto w-[100%] text-xs font-medium text-greyam">
                    <tbody>
                      <tr className="border-y border-[#42424251] w-[inherit] h-[40px] align-middle">
                        <td>Audit</td>
                      </tr>

                      <tr className="border-y border-[#42424251] w-[inherit] h-[40px] align-middle">
                        <td>Audit</td>
                      </tr>
                      <tr className="border-y border-[#42424251] w-[inherit] h-[40px] align-middle">
                        <td>Audit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </RevealOnScroll>
            </div>

            <div className="">
              <RevealOnScroll to={transitionElement}>
                <div className="flex flex-col h-[220px] justify-between mb-[50px]">
                  <h4>Brand Audit and Consultation</h4>

                  <span className="text-xs font-medium text-greyam">
                    We analyze your brand's current positioning and provide
                    expert guidance to enhance its impact and market presence.
                  </span>

                  <table className="table-auto w-[100%] text-xs font-medium text-greyam">
                    <tbody>
                      <tr className="border-y border-[#42424251] w-[inherit] h-[40px] align-middle">
                        <td>Audit</td>
                      </tr>

                      <tr className="border-y border-[#42424251] w-[inherit] h-[40px] align-middle">
                        <td>Audit</td>
                      </tr>
                      <tr className="border-y border-[#42424251] w-[inherit] h-[40px] align-middle">
                        <td>Audit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </RevealOnScroll>
              <RevealOnScroll to={transitionElement}>
                <div className="flex flex-col h-[220px] justify-between">
                  <h4>Branding and Identity Design</h4>

                  <span className="text-xs font-medium text-greyam">
                    Our expert team crafts impactful brand identities, from
                    custom logos to comprehensive brand guides, to help your
                    business thrive
                  </span>

                  <table className="table-auto w-[100%] text-xs font-medium text-greyam">
                    <tbody>
                      <tr className="border-y border-[#42424251] w-[inherit] h-[40px] align-middle">
                        <td>Audit</td>
                      </tr>

                      <tr className="border-y border-[#42424251] w-[inherit] h-[40px] align-middle">
                        <td>Audit</td>
                      </tr>
                      <tr className="border-y border-[#42424251] w-[inherit] h-[40px] align-middle">
                        <td>Audit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div>
          <div>
            <span>
              Looking to make your mark? We'll help you turn your project into a
              success story
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Services;
