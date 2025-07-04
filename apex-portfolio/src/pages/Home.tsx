import About from "../pageComponent/About";
import Footer from "../pageComponent/Footer";
import Header from "../pageComponent/Header";
import HomeTag from "../pageComponent/HomeTag";

function Home() {
  return (
    <>
      <div className="relative font-outfit">
        <Header />
        <HomeTag />
        <About/>
        <Footer/>
      </div>
    
    </>
  );
}

export default Home;
