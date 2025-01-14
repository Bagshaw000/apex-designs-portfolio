import About from "../pageComponent/About";
import Header from "../pageComponent/Header";
import HomeTag from "../pageComponent/HomeTag";

function Home() {
  return (
    <>
      <div className="relative ">
        <Header />
        <HomeTag />
        <About/>
      </div>
    
    </>
  );
}

export default Home;
