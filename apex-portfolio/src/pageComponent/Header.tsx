import whiteLogo from "../assets/whiteLogo.svg";
import { useEffect, useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router";

function Header() {
  const [checked, setChecked] = useState(true);
  const [headerColor, setHeaderColor] = useState('')
  const handleClick = () => {
    setChecked(!checked);
    console.log(checked);
  };

   useEffect(() => {
    // Get the computed style of the body element
    const computedStyle = window.getComputedStyle(document.body);
    // Get the background-color property
    const currentBgColor = computedStyle.getPropertyValue('background-color');
    console.log(currentBgColor)
    if(currentBgColor =="white"){

    }
    setHeaderColor(currentBgColor);
  }, []);

  const transitionHeader: string =
    "h-fit hover:translate-x-5 transform transition-transform animate-in fade-in ease-out duration-2000";

  return (
    <div className="">
      <div className=" bg-black fixed right-0 left-0 z-100 border-b-[0px] border-[#7373734f]  w-screen  h-[100px] max-h-[100px] mt-0 px-[5vw] py-auto max sm:px-[2.5vw]  inset-x-0 top-0">
        <div className="flex flex-row h-[inherit] my-auto justify-between items-center ">
          <div className="w-1/5 min-w-[60px] bg-whiteLogo">
            <img src={whiteLogo} alt="" className="h-[80px] " />
          </div>

          <div>
            {checked ? (
              <button
                onClick={handleClick}
                className=" animate-in fade-in-10  duration-1000"
              >
                <FontAwesomeIcon
                  icon={faBars}
                  style={{ color: "#ffffff" }}
                  size="lg"
                />
              </button>
            ) : (
              <button
                onClick={handleClick}
                className=" animate-in fade-in-10  duration-1000 "
              >
                <FontAwesomeIcon icon={faXmark} size="lg" />
              </button>
            )}
          </div>
        </div>
      </div>

      {checked ? null : (
        <div className="z-10 fixed top-[9vh] right-0 left-0 text-white font-semibold h-[91vh] bg-black  duration-1000 animate-in slide-in-from-top-10 ">
          <div
            className={`flex flex-col justify-between items-center py-[300px] h-[inherit]  duration-1000 animate-in slide-in-from-bottom-12 `}
          >
            <div className={transitionHeader}>
              {ActiveLink("/", "Homepage")}
            </div>
            <div className={transitionHeader}>
              {ActiveLink("/services", "Services")}
            </div>
            <div className={transitionHeader}>
              {ActiveLink("/portfolio", "Portfolio")}
            </div>
            <div className={transitionHeader}>
              {ActiveLink("/contact", "Contact")}
            </div>
            <div className={transitionHeader}>
              {ActiveLink("/blog", "Blog")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// This function checks if the link is active
const ActiveLink = (to: string, children: string) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  // console.log(isActive);
  return (
    <Link
      to={to}
      className={` ${
        isActive ? "text-blue-am" : "text-white"
      } text-2xl hover:translate-x-5 hover: `}
    >
      {children}
    </Link>
  );
};

export default Header;
