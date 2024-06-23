import React from "react";
import clip from "../../assets/BackClip/backclip.mov";

function Section1() {
  return (
    <div className="z-[200] h-[950px] overflow-hidden relative top-[-60px]">
      <div className="absolute z-10 top-[40%] left-[5%]">
        <h1 className="text-white text-[80px] uppercase font-[500] leading-[110%]">
          Find Your Greatness
        </h1>
        <p className="text-white text-[20px]">
          - Celebrating the greatness within every individual, not just elite
          athletes.
        </p>
      </div>
      <video
        src={clip}
        muted
        autoPlay
        loop
        className="h-[100%] scale-[1.2]"
      ></video>
    </div>
  );
}

export default Section1;
