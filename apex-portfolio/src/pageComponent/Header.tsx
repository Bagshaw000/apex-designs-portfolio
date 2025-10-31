import whiteLogo from "../assets/Synergis_Full_White_Transparent.svg";
import whiteMobileLogo from "../assets/Synergis_Favicon_White_Transparent.svg";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import NotesIcon from "@mui/icons-material/Notes";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [checked, setChecked] = useState(true);
  // const [headerColor, setHeaderColor] = useState("");
  const handleClick = () => {
    setChecked(!checked);
  
  };

  useEffect(() => {
    
    const computedStyle = window.getComputedStyle(document.body);
    const currentBgColor = computedStyle.getPropertyValue("background-color");
   
    if (currentBgColor == "white") {
    }
    // setHeaderColor(currentBgColor);
  }, []);

  const transitionHeader: string =
    "h-fit hover:translate-x-5 transform transition-transform animate-in fade-in ease-out duration-2000";

  return (
    <div className="sticky top-0 z-50 bg-[#06071a]  ">
      <div className=" right-0 left-0 border-b-[0.2px] border-[#7373734f]   h-[100px]  max-h-[100px] mt-0 px-[5vw] py-auto max sm:px-[2.5vw] ">
        <div className="flex flex-row h-[inherit] my-auto justify-between items-center ">
          <div className="sm:w-1/5 max-w-[250px] sm:block hidden bg-white-logo transition-opacity ease-in-out duration-2000">
            <img src={whiteLogo} alt="" className=" w-full " />
          </div>
           <div className="w-1/5 sm:hidden block bg-white-logo transition-opacity ease-in-out duration-2000">
            <img src={whiteMobileLogo} alt="" className=" w-full " />
          </div>

          <div>
            {checked ? (
              <button
                onClick={handleClick}
                className=" transition animate-in  fade-in-10 delay-400 ease-in-out  duration-2000"
              >
                <NotesIcon />
              </button>
            ) : (
              <button
                onClick={handleClick}
                className=" transition animate-in fade-in-10 delay-400 ease-in-out duration-2000 "
              >
                <CloseIcon />
              </button>
            )}
          </div>
        </div>
      </div>

      {checked ? null : (
        <div className="z-10 absolute  right-0 left-0 text-white font-semibold h-[90vh] bg-[#06071a]  duration-1000 animate-in slide-in-from-top-10 ">
          <div
            className={`flex flex-col justify-between items-center py-[300px] lg:py-[220px] h-[inherit]   duration-1000 animate-in slide-in-from-bottom-12  max-h-[1000px]`}
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
            {/* <div className={transitionHeader}>
              {ActiveLink("/blog", "Blog")}
            </div> */}
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
        isActive ? "text-amber-500" : "text-white"
      } text-2xl hover:translate-x-5 hover:text-[#8DB8E8] `}
    >
      {children}
    </Link>
  );
};

export default Header;
