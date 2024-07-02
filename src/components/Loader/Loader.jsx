import React, { useEffect, useState } from "react";
import "./Loader.css";
import ImgCard from "./ImgCard";
import gsap from "gsap";

function Loader({ isLoading, setisLoading }) {
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    if (counter < 50) {
      setTimeout(() => {
        setcounter((prev) => prev + 1);
      }, 30);
    } else if (counter < 70) {
      setTimeout(() => {
        setcounter((prev) => prev + 1);
      }, 60);
    } else if (counter < 100) {
      setTimeout(() => {
        setcounter((prev) => prev + 1);
      }, 40);
    }
    if (counter === 100) {
      setisLoading(false);
    }
  }, [counter, setisLoading]);

  useEffect(() => {
    if (!isLoading) {
      gsap.to(".loaderContainer", {
        y: "-100%",
        delay: 0.2,
      });
    }
  }, [isLoading]);

  return (
    <div className="loaderContainer">
      <div className="wrapper">
        <h1 className="tektur">{counter}</h1>
        <div className="imglist">
          <ImgCard isLoading={isLoading} />
        </div>
        <div className="loadingbar">
          <div className="loadingFill" style={{ width: `${counter}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
