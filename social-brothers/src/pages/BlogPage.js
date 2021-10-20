import React from "react";
import "../BlogPage.css";
import BlogImage from "../components/BlogImage";
import BlogCards from "../components/BlogCards";
import Footer from "../components/Footer";

function BlogPage() {
  return (
    <>
      <div className="container">
        <BlogImage />
        <BlogCards />
        <Footer />
      </div>
    </>
  );
}

export default BlogPage;
