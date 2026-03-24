import HomeFooter from "@/component/contact";
import Header from "@/component/header";
import HeroTag from "@/component/hero";
import HomeService from "@/component/homeservice";
import MiniAboutUs from "@/component/miniAboutUs";
import Work from "@/component/work";
import Image from "next/image";

export default function Home() {
  return (
    <div className="    dark:bg-black">
     
      <Header/>
      <HeroTag/>
      <HomeService/>
      <Work/>
      <MiniAboutUs/>
      <HomeFooter />
    </div>
  );
}
