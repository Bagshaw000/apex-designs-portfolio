import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faBehance, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router";
import { RevealOnScroll } from "../components/ui/transition";
import { useState } from "react";
import { toast } from "sonner";

function Footer() {
  const transitionElement =
    "transition-opacity duration-1000 animate-in fade-in delay-200 slide-in-from-bottom-8 ease-in-out slide-out-to-top-2 ";

  const [email, setEmail] = useState("");

  const [disable, setDisable] = useState(true);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setDisable(false);
    const date = new Date();

    const inputValue: { [key: string]: string } = {
      Email: email,
      CreatedAt: date.toLocaleString(),
    };

    const APP_ID = import.meta.env.VITE_EMAIL_ID;
    const baseURL = `https://script.google.com/macros/s/${APP_ID}/exec`;
    const formData = new FormData();
    Object.keys(inputValue).forEach((key) => {
      formData.append(key, inputValue[key]);
    });

    try {
      const res = await fetch(baseURL, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setEmail("");

        setDisable(true);
        toast.success("Sucessfully subscribed");
      } else {
        setDisable(true);
        toast.error("Error subscribing");
      }
    } catch (e) {}
  };
  return (
    <div className="bg-[#06071a] flex-col px-[8vw] py-[100px] font-outfit mb-0 w-[100vw] bottom-0 relative">
      <div className="flex flex-col md:flex-row md:justify-between max-w-[1500px] md:mx-auto">
        <div className="flex flex-col justify-between h-[200px] mb-10 md:h-[200px] md:w-[40%]">
          <RevealOnScroll to={transitionElement}>
            <div>
              <h5 className="text-[#d6d6d6] font-medium text-3xl ">
                Synergis Designs Solutions
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
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  id=""
                  placeholder="ENTER YOUR EMAIL"
                  className="w-full min-h-[80px] text-lg bg-[#a7a7a74e] border-[0px] text-[#8c8c8c]  rounded-[35px] pl-[40px] md:min-h-[80px]"
                />
                {disable ? (
                  <button className="w-[50px] h-[50px] bg-amber-500 rounded-[45px]  flex flex-row justify-center items-center absolute bottom-[18px] right-[15px] md:bottom-[15px]">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ color: "black" }}
                    />
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-[50px] h-[50px] bg-amber-500 rounded-[45px]  flex flex-row justify-center items-center absolute bottom-[18px] right-[15px] md:bottom-[15px]"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ color: "black" }}
                    />
                  </button>
                )}
              </form>
            </div>
          </RevealOnScroll>
        </div>
        <div className="flex flex-col justify-between text-xl font-medium h-[250px] md:h-[200px]  md:w-[20%] ">
          <RevealOnScroll to={transitionElement}>
            <div className="h-fit ">{ActiveLink("/", "Home")}</div>
          </RevealOnScroll>

          <RevealOnScroll to={transitionElement}>
            <div className="h-fit ">{ActiveLink("/services", "Services")}</div>
          </RevealOnScroll>

          <RevealOnScroll to={transitionElement}>
            <div className="h-fit">{ActiveLink("/portfolio", "Portfolio")}</div>
          </RevealOnScroll>

          <RevealOnScroll to={transitionElement}>
            <div className="h-fit">{ActiveLink("/contact", "Contact")}</div>
          </RevealOnScroll>

          <RevealOnScroll to={transitionElement}>
            <div className="h-fit hidden">{ActiveLink("/blog", "Blog")}</div>
          </RevealOnScroll>
        </div>
        <div className=" md:w-[20%]">
          <div className="mt-10 md:mt-0">
            <RevealOnScroll to={transitionElement}>
              <div className="flex flex-col justify-between h-[70px]">
                <h2 className="text-lg font-medium ">Address</h2>
                <span className="text-sm text-[#8c8c8c]">
                  2 Ndabangini Sithole Rd Labone Accra P. O. Box AN 6153
                  Accra North, Ghana
                </span>
              </div>
            </RevealOnScroll>
          </div>
          <div className="mt-10 md:mt-10">
            <RevealOnScroll to={transitionElement}>
              <div className="flex flex-row justify-between items-center w-[50px]">
                <a href="https://www.instagram.com/apex.designsolutions/">
                  {" "}
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#ffffff" }}
                    size="1x"
                  />
                </a>

                <FontAwesomeIcon
                  icon={faBehance}
                  style={{ color: "#ffffff" }}
                  size="1x"
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

// This function checks if the link is active
const ActiveLink = (to: string, children: string) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={` ${
        isActive ? "text-amber-500" : "text-white"
      } text-xl transform transition-all  duration-1000 ease-in-out hover:translate-x-5 hover:text-blue-am`}
    >
      {children}
    </Link>
  );
};
