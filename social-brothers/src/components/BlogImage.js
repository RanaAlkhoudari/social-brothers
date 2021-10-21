import React from "react";
import { Link } from "react-router-dom";
import "../BlogPage.css";
import logo from "../SBlogo.svg";

function BlogImage() {
  return (
    <>
      <div className="image">
        <h1>Blog</h1>
        <Link to="/">
          <span className="home not-active">Home</span>
        </Link>
        <Link to="/blogs">
          <span className="blog active">Blog</span>
        </Link>
      </div>
      <div className="logo">
        <img src={logo} alt="social brothers" />
      </div>
    </>
  );
}

export default BlogImage;
