import React, { useState, useEffect } from "react";
import "./Insta.css";


import img1 from "../../assets/InstaSection/instasection2.jpg"
import img2 from "../../assets/InstaSection/instasection3.jpg"
import img3 from "../../assets/InstaSection/instasection4.jpg"
import img4 from "../../assets/InstaSection/img4.jpg"
import { FaInstagram } from "react-icons/fa";

const Insta = () => {
  const [hover, setHover] = useState(false);
  const [innerWidth, setinnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setinnerWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (innerWidth <= 1000) {
    return (
      <div className="bg-[#e13251] flex flex-col gap-[4rem] py-[5rem] relative ">
        <div className="bg-[#e13251] h-[5vh] w-full absolute top-0 left-0 "></div>
        <div className="relative ">
          <img
            src={img1}
            alt="Card 1"
            className="h-[200px] rounded-[20px] relative right-[-50%]"
          />
        </div>
        <div className="cards img2">
          <img
            src={img2}
            alt="Card 2"
            className="w-[150px] rounded-[20px] relative left-[10%]"
          />
        </div>
        <div className="">
          <h2 className="text-[white] text-[7vw] leading-[120%] text-center z-[100] relative top-[-10vw] left-[3vw]">
          Achieve your best with Nike’s <br /> elite gear designed for champions
          </h2>
        </div>
        <div
          className=" text-white relative left-[40%]"
          onClick={() => {
            window.open("https://www.instagram.com/nike", "_blank");
          }}
        >
          <div className=" border h-[70px] w-[70px] rounded-[50%] flex items-center justify-center">
            <FaInstagram className="text-[2.4rem]" />
          </div>
          <div className="relative left-[-15%] top-[-10px] inline-block rotate-[-5deg] px-[1.5rem] py-[.6rem] rounded-[20px] text-white bg-[black] text-[1rem]">
            @instagram.com/nike
          </div>
        </div>
        <div className="">
          <img
            src={img3}
            alt="Card 3"
            className="w-[250px] rounded-[20px] relative left-[15%]"
          />
        </div>
        <div className="">
          <img
            src={img4}
            alt="Card 5"
            className="h-[250px] rounded-[20px] relative right-[-45%]"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="Insta-secContainer h-[170vh] bg-[#e13251] relative">
        <div className="bg-[#e13251] h-[5vh] w-full absolute top-[-20px] left-0"></div>
        <div className="absolute top-[50vh] left-[35%]">
          <h2
            className="text-[white] text-[3rem] leading-[100%] text-center z-[100]"
            data-scroll
            data-scroll-speed=".5"
            data-scroll-position="bottom"
          >
           Achieve your best with Nike’s <br /> elite gear designed for champions
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
            src={img2}
            alt="Card 2"
            data-scroll
            data-scroll-speed=".3"
            data-scroll-position="bottom"
          />
        </div>
        <div className="cards img3">
          <img
            src={img3}
            alt="Card 3"
            data-scroll
            data-scroll-speed="1.7"
            data-scroll-position="bottom"
          />
        </div>
        <div className="cards img5">
          <img
            src={img4}
            alt="Card 5"
            data-scroll
            data-scroll-speed="1"
            data-scroll-position="bottom"
          />
        </div>
      </div>
    );
  }
};

export default Insta;
