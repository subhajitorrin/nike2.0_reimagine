import gsap from "gsap";
import React, { useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import Tilt from "react-parallax-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

function ShoeCard({ shoe, title, desc }) {
  const shoeCardRef = useRef(null);
  const circleCoverRef = useRef(null);
  const arrowRef = useRef(null);
  function handelHoverEnter() {
    if (shoeCardRef.current && circleCoverRef.current && arrowRef.current) {
      gsap.to(shoeCardRef.current, {
        x: "-45",
        duration: 0.3,
      });
      gsap.set(circleCoverRef.current, {
        right: "0%",
      });
      gsap.set(arrowRef.current, {
        color: "white",
      });
    }
  }
  function handelHoverLeave() {
    if (shoeCardRef.current && circleCoverRef.current && arrowRef.current) {
      gsap.to(shoeCardRef.current, {
        x: 0,
        duration: 0.3,
      });
      gsap.set(circleCoverRef.current, {
        right: "100%",
      });
      gsap.set(arrowRef.current, {
        color: "black",
      });
    }
  }
  return (
    <Tilt className="z-[22]">
      <div
        className="bg-white h-[25vw] w-[23.5vw] rounded-[20px] overflow-hidden pt-[2rem]"
        onMouseEnter={handelHoverEnter}
        onMouseLeave={handelHoverLeave}
      >
        <div className="h-[70%]  ">
          <img src={shoe} className="relative right-[-10%]" ref={shoeCardRef} />
        </div>
        <div className="h-[30%]  flex justify-between items-center px-[1.7rem] text-black">
          <div className="text-[1.2vw] leading-[100%]">
            <p>{title}</p>
            <p className="text-[#ACA3A3]">{desc}</p>
          </div>
          <div className="overflow-hidden relative border border-black border-opacity-[.3] p-[1rem] rounded-[50%] h-[3vw] w-[3vw] flex items-center justify-center">
            <div
              ref={circleCoverRef}
              className="bg-[#eb244b] h-[60px] w-[100px] rounded-r-[35px] absolute z-[30] right-[100%] transition-all ease-linear"
            ></div>
            <span className="text-black z-[31]" ref={arrowRef}>
              <GoArrowRight className=" text-[1.2rem] " />
            </span>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default ShoeCard;
