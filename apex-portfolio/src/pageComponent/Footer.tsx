import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faBehance, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router";
import { RevealOnScroll } from "../components/ui/transition";
import { useState } from "react";

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
    console.log(inputValue);
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
        alert(`Sucessfully subscribed`);
      } else {
        setDisable(true);
        alert(`Error subscribed`);
      }
    } catch (e) {
      console.error("Error during fetch:", e);
    }
  };
  return (
    <div className="bg-black flex-col px-[8vw] py-[100px] font-outfit mb-0 w-[100vw] bottom-0 relative">
      <div className="flex flex-col md:flex-row md:justify-between max-w-[1500px] md:mx-auto">
        <div className="flex flex-col justify-between h-[200px] mb-10 md:h-[200px] md:w-[40%]">
          <RevealOnScroll to={transitionElement}>
            <div>
              <h5 className="text-[#d6d6d6] font-medium text-3xl ">
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
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id=""
                  placeholder="ENTER YOUR EMAIL"
                  className="w-full min-h-[85px] bg-[#a7a7a74e] border-[0px] text-[#8c8c8c]  rounded-[50px] pl-[40px] md:min-h-[80px]"
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
        <div className="flex flex-col justify-between text-xl font-medium h-[250px] md:h-[200px]  md:w-[20%]">
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
            <div className="h-fit">{ActiveLink("/blog", "Blog")}</div>
          </RevealOnScroll>
        </div>
        <div className=" md:w-[20%]">
          <div className="mt-10 md:mt-0">
            <RevealOnScroll to={transitionElement}>
              <div className="flex flex-col justify-between h-[70px]">
                <h2 className="text-2xl font-medium ">Ghana</h2>
                <span className="text-md text-[#8c8c8c]">Dummy Address</span>
              </div>
            </RevealOnScroll>
          </div>
          <div className="mt-10 md:mt-6">
            <RevealOnScroll to={transitionElement}>
              <div className="flex flex-row justify-between w-[50px]">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#ffffff" }}
                  size="1x"
                />
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
  // console.log(isActive);
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
