import HomeFooter from "@/component/contact";
import Header from "@/component/header";
import HeroTag from "@/component/hero";
import HomeService from "@/component/homeservice";
import MiniAboutUs from "@/component/miniAboutUs";
import Work from "@/component/work";

export default function Home() {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Header />
      <HeroTag />
      <MiniAboutUs />
      <HomeService />
      <Work />
      <HomeFooter />
    </div>
  );
}
