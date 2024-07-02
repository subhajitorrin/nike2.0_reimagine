import React, { useState, useEffect, useRef } from "react";
import "./Insta.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const img1 = "https://res.cloudinary.com/difxhccup/image/upload/v1719831275/instasection2_dx9obr.jpg";
const img2 = "https://res.cloudinary.com/difxhccup/image/upload/v1719831276/instasection3_w1pkue.jpg";
const img3 = "https://res.cloudinary.com/difxhccup/image/upload/v1719831276/instasection4_qf12jm.jpg";
const img4 = "https://res.cloudinary.com/difxhccup/image/upload/v1719831273/img4_fetm1x.jpg";

import { FaInstagram } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Insta = () => {
  const mainRef = useRef(null);
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
          <h2 className="text-[white] tektur text-[7vw] leading-[120%] text-center z-[100] relative top-[-10vw] left-[3vw]">
            Achieve your best with Nike’s <br /> elite gear designed for
            champions
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
    // useGSAP(
    //   () => {
    //     gsap.from("#instaCard1", {
    //       y: 500,
    //       scrollTrigger: {
    //         trigger: "#instaCard1",
    //         start: "top 80%",
    //         end: "bottom 100px",
    //         scrub: true,
    //         markers: true,
    //       },
    //     });
    //     gsap.from("#instaCard2", {
    //       y: 500,
    //       scrollTrigger: {
    //         trigger: "#instaCard2",
    //         start: "top 80%",
    //         end: "bottom 100px",
    //         scrub: true,
    //         markers: true,
    //       },
    //     });
    //     gsap.from("#instaCard3", {
    //       y: 300,
    //       scrollTrigger: {
    //         trigger: "#instaCard3",
    //         start: "top 80%",
    //         end: "bottom 100px",
    //         scrub: true,
    //         markers: true,
    //       },
    //     });
    //     gsap.from("#instaCard4", {
    //       y: 150,
    //       scrollTrigger: {
    //         trigger: "#instaCard4",
    //         start: "top 80%",
    //         end: "top 100px",
    //         scrub: true,
    //         markers: true,
    //       },
    //     });
    //     gsap.from("#instaText", {
    //       y: 151,
    //       scrollTrigger: {
    //         trigger: "#instaText",
    //         start: "top 80%",
    //         end: "top 100px",
    //         scrub: true,
    //         markers: true,
    //       },
    //     });
    //   },
    //   { scope: mainRef }
    // );

    return (
      <div className="">
        <div
          className="Insta-secContainer h-[170vh] bg-[#e13251] relative"
          ref={mainRef}
        >
          <div className="bg-[#e13251] h-[5vh] w-full absolute top-[-20px] left-0"></div>
          <div className="absolute top-[55vh] left-[35%]">
            <h2
              id="instaText"
              data-scroll
              data-scroll-speed="0.1"
              className="text-[white] text-[3rem] leading-[100%] text-center z-[100] tektur "
            >
              Achieve your best with Nike’s <br /> elite gear designed for
              champions
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

          <div className="cards img1" id="instaCard1">
            <img src={img1} alt="Card 1" data-scroll data-scroll-speed="0.2" />
          </div>
          <div className="cards img2" id="instaCard2">
            <img src={img2} alt="Card 2" data-scroll data-scroll-speed="0.5" />
          </div>
          <div className="cards img3" id="instaCard3">
            <img src={img3} alt="Card 3" data-scroll data-scroll-speed="0.3" />
          </div>
          <div className="absolute bottom-[20%] left-[10%]" id="instaCard4">
            <img
              src={img4}
              alt="Card 3 "
              className="w-[300px] rounded-[20px]"
              data-scroll
              data-scroll-speed="0.2"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Insta;
