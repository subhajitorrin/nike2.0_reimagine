import gsap from "gsap";
import React, { useRef } from "react";
import { GoArrowRight } from "react-icons/go";

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
    <div
      className="bg-white h-[480px] w-[450px] rounded-[20px] overflow-hidden z-[22]"
      onMouseEnter={handelHoverEnter}
      onMouseLeave={handelHoverLeave}
    >
      <div className="h-[70%]  ">
        <img src={shoe} className="relative right-[-10%]" ref={shoeCardRef} />
      </div>
      <div className="h-[30%]  flex justify-between items-center px-[1.7rem] text-black">
        <div className="text-[1.2rem] leading-[100%]">
          <p>{title}</p>
          <p>{desc}</p>
        </div>
        <div className="overflow-hidden relative border border-black border-opacity-[.3] p-[1rem] rounded-[50%] h-[60px] w-[60px] flex items-center justify-center">
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
  );
}

export default ShoeCard;
