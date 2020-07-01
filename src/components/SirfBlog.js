import React from "react";
import "../components/css/blog.css";
import Land from "./Land";
import Navigate from "./Navigate";
import HeadCards from "./HeadCards";

import SubscribeComponent from "./SubscribeComponent";
import FooterComponent from "./FooterComponent";

import BlogPage from "./Blog";

function BlogFinal() {
  return (
    <div className="App">
      <Land />
      <div className="responsive">
        <img
          className="title"
          src={`${process.env.PUBLIC_URL}/images/logo_black_croped2.webp`}
          alt="black logo"
        ></img>
        <Navigate />
      </div>
      <HeadCards />
      <BlogPage />
      <SubscribeComponent />
      <FooterComponent />
    </div>
  );
}

export default BlogFinal;
