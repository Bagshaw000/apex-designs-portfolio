import { useEffect } from "react";
import { client } from "../../portfolio/client";
import Footer from "../pageComponent/Footer";
import Header from "../pageComponent/Header";

function Project() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const name = urlParams.get("slug");
  console.log(name)
   const POSTS_QUERY = `*[
  _type == "post"
  && slug.current == "${name}"
]`;

 useEffect(() => {
    const getPosts = async () => {
      const posts = await client.fetch(POSTS_QUERY);

    //   setPost(posts);
      console.log(posts);
      // return posts;
    };
    getPosts();
  }, []);
  return (
    <>
      <div className="relative font-outfit">
        <Header />

        <Footer />
      </div>
    </>
  );
}

export default Project;
