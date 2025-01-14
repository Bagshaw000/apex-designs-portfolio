import whiteLogo from "../assets/whiteLogo.svg";
import menu4 from "react-useanimations/lib/menu4";
import UseAnimations from "react-useanimations";
import { useState } from "react";

function Header() {
  const [checked, setChecked] = useState(true);
  return (
    <div className=" sticky z-100 border-b-[0.2px] border-[#7373734f] bg-black w-screen  h-fit mt-0 px-[5vw] py-[2vh] max sm:px-[2.5vw]  inset-x-0 top-0">
      <div className="flex flex-row max-h-[10vh] justify-between items-center ">
        <div className="w-1/5 min-w-[60px] bg-whiteLogo">
          <img src={whiteLogo} alt="" className="h-[80px] " />
        </div>
        {/* <div> */}
        <UseAnimations
          animation={menu4}
          size={30}
          // wrapperStyle={{ padding: 100 }}
          strokeColor="white"
          reverse={checked}
          onClick={() => {
            setChecked(!checked);
            console.log("test");
          }}
        />
        {/* </div> */}
      </div>
    </div>
  );
}

export default Header;
