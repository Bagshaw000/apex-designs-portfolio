import { useEffect, useState } from "react";
import { client } from "../../portfolio/client";
import Footer from "../pageComponent/Footer";
import Header from "../pageComponent/Header";
import { ImageComponent, postData } from "./Portfolio";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { RevealOnScroll } from "../components/ui/transition";

function Project() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const name = urlParams.get("slug");
  const [post, setPost] = useState<postDataType>();
  const transitionElement =
    "animate-in ease-out slide-in-from-bottom-11 duration-700 fade-in";

  const POSTS_QUERY = `*[
    _type == "post"
    && slug.current == "${name}"
    ]`;

  useEffect(() => {
    const getPosts = async () => {
      const posts = await client.fetch(POSTS_QUERY);

      //   setPost(posts);
      //    console.log(posts[0]);
      setPost(posts[0]);

      // return posts;
    };
    getPosts();
  }, []);
  return (
    <>
      <div className="relative font-outfit">
        <Header />
        <div className="min-h-[90vh] h-fit mt-[150px] px-[10vw] lg:max-w-[950px] 2xl:max-w-[1500px]  lg:px-0  mx-auto">
          <div className="flex flex-row text-black text-[12px] my-[50px] h-[inherit] w-[150px] md:w-[300px] md:text-base font-medium justify-between items-center ">
            <Link to="/" className="">
              HOMEPAGE
            </Link>
            <span> / </span>
            <span className=" text-black">
              {" "}
              <Link to="/portfolio" className="">
                PORTFOLIO
              </Link>
            </span>
            <span> / </span>

            <span className=" text-greyam font-normal">PROJECT</span>
          </div>

          <h2 className=" text-5xl font-thin md:text-7xl h-[fit] mb-[50px] text-black">
            <b>Designing a</b> <br className="hidden md:block" />
            <b>Better</b> World Today
          </h2>
          <RevealOnScroll to={transitionElement}><div className="flex flex-row justify-between text-[12px] md:w-[180px] md:text-xl text-black w-[125px] items-center mb-[50px]">
            <span>READ MORE</span>
            <div className="w-[45px] h-[45px] bg-[#42424255] rounded-[45px]  flex flex-row justify-center items-center ">
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
          </div></RevealOnScroll>

          <div className="flex flex-col lg:flex-row justify-between">
            <div className="lg:w-[30%]">
              <RevealOnScroll to={transitionElement}>
              <table className="table-auto w-[100%] text-xs font-normal text-black md:text-2xl ">
                <tbody>
                  <tr className="border-y border-[#42424226] w-[inherit] h-[40px] align-middle md:h-[60px]">
                    <td>CLIENT: {post?.client}</td>
                  </tr>

                  <tr className="border-y border-[#42424226] w-[inherit] h-[40px] align-middle  md:h-[60px]">
                    <td>DESIGNER: APEX DESIGNS</td>
                  </tr>
                </tbody>
              </table>
              </RevealOnScroll>
              <div className="mt-[50px]">
                <span className="text-greyam font-light text-base md:text-2xl">
                  {post ? post!.desc[0].children[0].text : <span></span>}
                </span>
              </div>
            </div>
            <div className="mt-[50px] flex flex-col  h-fit  mb-[10px] lg:mt-[0px] lg:w-[60%] justify-between items-end">
              {post ? (
                <div className="mb-[10px] w-[100%] min-h-[200px] h-[30%] lg:w-[90%] lg:h-[500px] lg:mb-[50px]">
                  <ImageComponent
                    image={post!.coverImage}
                    key={post!.coverImage.asset._ref}
                  ></ImageComponent>
                </div>
              ) : (
                <span></span>
              )}

              {post ? (
                post!.projectImages.map((element) => (
                  <div  key={element.asset._ref} className="mb-[10px] w-[100%] min-h-[200px] h-[30%] lg:w-[90%] lg:h-[500px] lg:mb-[50px] ">
                    <ImageComponent
                      image={element}
                      key={element.asset._ref}
                    ></ImageComponent>
                  </div>
                ))
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Project;
export type postDataType = {
  _id: string;
  slug: { current: string };
  client: string;
  coverImage: { asset: { _ref: string; type: string } };
  projectImages: Array<{ asset: { _ref: string; type: string } }>;
  desc: Array<{ children: Array<{ text: string; _key: string }> }>;
};
