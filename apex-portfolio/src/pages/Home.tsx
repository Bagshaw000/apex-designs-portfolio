import About from "../pageComponent/About";
import Footer from "../pageComponent/Footer";
import Header from "../pageComponent/Header";
import HomeTag from "../pageComponent/HomeTag";

function Home() {
  return (
    <>
      <div className="relative ">
        <Header />
        <HomeTag />
        <About/>
        <Footer/>
      </div>
    
    </>
  );
}

export default Home;
