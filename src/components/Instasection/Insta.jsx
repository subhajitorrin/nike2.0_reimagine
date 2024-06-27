import React, { useState, useEffect } from "react";
import "./Insta.css";
import img1 from "../../assets/MovingCards/card1.jpg";
import img2 from "../../assets/MovingCards/card2.jpg";
import { FaInstagram } from "react-icons/fa";

const Insta = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="Insta-secContainer h-[170vh] bg-[#e13251]">
      <div className="absolute top-[50vh] left-[35%]">
        <h2
          className="text-[white] text-[3rem] leading-[100%] text-center z-[100]"
          data-scroll
          data-scroll-speed=".5"
          data-scroll-position="bottom"
        >
          Lorem, ipsum dolor <br />
          sit amet consectetur adipisicing <br /> elit. Perspiciatis, quisquam!
        </h2>
      </div>
      <div
        className="absolute top-[90vh] left-[50%] text-white "
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onClick={() => {
          window.open("https://www.instagram.com/nike", "_blank");
        }}
      >
        <div className=" border h-[90px] w-[90px] rounded-[50%] flex items-center justify-center">
          <FaInstagram className="text-[2.7rem]" />
          <div
            style={{
              scale: hover ? "1.5" : "0",
              rotate: hover ? "5deg" : "0deg",
            }}
            className="bg-white h-[100%] w-[100%] absolute rounded-[50%] transitionInsta flex items-center justify-center"
          >
            <FaInstagram className="text-[2.7rem] text-[#545252]" />
          </div>
        </div>
        <div className="rotate-[-5deg] absolute left-[-100%] bottom-[-65%] px-[2rem] py-[1rem] rounded-[20px] text-white bg-[black] text-[1.3rem]">
          @instagram.com/nike
        </div>
      </div>

      <div className="cards img1">
        <img
          src={img1}
          alt="Card 1"
          data-scroll
          data-scroll-speed=".1"
          data-scroll-position="bottom"
        />
      </div>
      <div className="cards img2">
        <img
          src={img1}
          alt="Card 2"
          data-scroll
          data-scroll-speed=".3"
          data-scroll-position="bottom"
        />
      </div>
      <div className="cards img3">
        <img
          src={img2}
          alt="Card 3"
          data-scroll
          data-scroll-speed="1.7"
          data-scroll-position="bottom"
        />
      </div>
      <div className="cards img5">
        <img
          src={img1}
          alt="Card 5"
          data-scroll
          data-scroll-speed="1"
          data-scroll-position="bottom"
        />
      </div>
    </div>
  );
};

export default Insta;
