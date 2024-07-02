import React from "react";
import "./Product.css";
function Product({ name, img }) {
  return (
    <>
      <div className="product" style={{ backgroundImage: `url(${img})` }}>
        <span className="ProductHeading">{name}</span>
        <span className="SeeMore" data-span="See more">See more</span>
      </div>
    </>
  );
}

export default Product;
