import React from "react";
import AddProduct from "./AddProduct";
import HomeCards from "./HomeCards";

function Wrapper() {
  return (
    <div className="wrapper">
      <div className="left-side">
        <AddProduct />
      </div>
      <div className="right-side">
        <HomeCards />
      </div>
    </div>
  );
}

export default Wrapper;
