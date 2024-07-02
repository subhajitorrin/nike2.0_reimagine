import React from "react";
import "./Product.css";
import { useExtractColor } from "react-extract-colors";
function Product({ name, img }) {
  const { dominantColor, darkerColor, lighterColor } = useExtractColor(img);
  console.log(dominantColor)
  return (
    <>
      <div className="product" style={{ backgroundImage: `url(${img})`,backgroundColor:`${dominantColor}` }}>
        <span className="ProductHeading ">{name}</span>
        <span className="SeeMore" data-span="See more">See more</span>
      </div>
    </>
  );
}

export default Product;
