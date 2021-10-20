import React from "react";
import { Link } from "react-router-dom";
import logo from "../SBlogo.svg";

function HomeImage() {
  return (
    <>
      <div className="image">
        <Link to="/">
          <span className="home">Home</span>
        </Link>
        <Link to="/blogs">
          <span className="blog">Blog</span>
        </Link>
      </div>
      <div className="logo">
        <img src={logo} alt="social brothers" />
      </div>
    </>
  );
}

export default HomeImage;
