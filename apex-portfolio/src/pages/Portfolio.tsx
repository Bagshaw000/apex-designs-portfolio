import { useEffect, useState } from "react";
import Footer from "../pageComponent/Footer";
import Header from "../pageComponent/Header";
import { client } from "../../portfolio/client";
function Portfolio() {
  const [post, setPost] = useState<postData[]>([]);
  const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{ _id,slug, client, coverImage}`;

  const transitionElement =
    "animate-in ease-out slide-in-from-bottom-11 duration-700 fade-in";
  useEffect(() => {
    const getPosts = async () => {
      const posts = await client.fetch(POSTS_QUERY);

      setPost(posts);
      // console.log(post);
      // return posts;
    };
    getPosts();
  }, []);
  // const posts = await client.fetch(POSTS_QUERY);
  return (
    <>
      <div className="relative font-outfit ">
        <Header />
        <div className=" min-h-[90vh] mt-[150px] px-[10vw]">
          <div className="flex flex-row text-black text-[12px] my-[50px] h-[inherit] w-[150px] justify-between items-center ">
            <Link to="/" className="">
              HOMEPAGE
            </Link>
            <span> / </span>
            <span className="text-greyam ">PORTFOLIO</span>
          </div>

          <h2 className=" text-3xl font-thin lg:text-5xl h-[fit] mb-[50px] text-black">
            <b>Designing a</b> <br className="hidden lg:block" />
            <b>Better</b> World Today
          </h2>
          <div className="flex flex-row justify-between text-[12px] text-black w-[135px] items-center mb-[50px]">
            <span>OUR SERVICES</span>
            <div className="w-[35px] h-[35px] bg-[#4242427e] rounded-[45px]  flex flex-row justify-center items-center ">
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between">
            {post.map((element, index) =>
              index % 0 == 0 ? (
                <a
                  key={element._id as string}
                  href={`/project/?slug=${element?.slug.current}`}
                  className="mb-[30px]"
                >
                  <RevealOnScroll to={transitionElement}>
                    <div className="h-[fit] w-[fit]">
                      <div className="w-[100%] min-h-[200px] h-[30%] mb-[10px] md:w-[35vw]">
                        <ImageComponent
                          image={element.coverImage}
                        ></ImageComponent>
                      </div>
                      {/* <h5 className="text-amber-500 "> DESIGN</h5> */}
                      <span className="text-black lg:text-2xl">
                        {element.client}
                      </span>
                    </div>
                  </RevealOnScroll>
                </a>
              ) : (
                <a
                  key={element._id as string}
                  href={`/project/?slug=${element?.slug.current}`}
                  className="mb-[30px]"
                >
                  <RevealOnScroll to={transitionElement}>
                    <div className="h-[fit] w-[fit]">
                      <div className="w-[100%] min-h-[200px] h-[30%] mb-[10px] md:w-[35vw] ">
                        <ImageComponent
                          image={element.coverImage}
                        ></ImageComponent>
                      </div>
                      <h5 className="text-amber-500 text-sm"> DESIGN</h5>
                      <span className="text-black lg:text-2xl">
                        {element.client}
                      </span>
                    </div>
                  </RevealOnScroll>
                </a>
              )
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Portfolio;

type postData = {
  _id: string;
  slug: { current: string };
  client: string;
  coverImage: { asset: { _ref: string; type: string } };
};

// sanityImageUrl.ts
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import type { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { Link } from "react-router";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RevealOnScroll } from "../components/ui/transition";
// import { client } from './client' // see example client config
// Create an image URL builder using the client
const builder = imageUrlBuilder(client);
// Export a function that can be used to get image URLs
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function ImageComponent({ image }: { image: SanityImageObject }) {
  return (
    <img
      src={urlFor(image).url()}
      className="object-cover object-center w-[inherit] h-[inherit]"

      // Depending on your schema, you may need to adjust the alt text location
      // and update types to match your schema.
      // alt={(image) || 'Image'}
    />
  );
}
