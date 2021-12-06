import React from "react";
import BlogList from "./blogList/blogList";
import HomeHeader from "./homeHeader/homeHeader";
import Footer from "./footer/footer";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <BlogList />
      <Footer />
    </div>
  );
}
