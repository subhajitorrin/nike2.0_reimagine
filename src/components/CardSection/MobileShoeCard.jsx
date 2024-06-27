import React from "react";
import { GoArrowRight } from "react-icons/go";

function MobileShoeCard({ shoe, title, desc }) {
  return (
    <div className="bg-white h-[100vw] w-[100%] rounded-[20px] overflow-hidden pt-[2rem] z-[22]">
      <div className="h-[70%]  ">
        <img src={shoe} className="" />
      </div>
      <div className="h-[30%]  flex justify-between items-center px-[1.7rem] text-black">
        <div className="text-[4vw] leading-[100%]">
          <p>{title}</p>
          <p>{desc}</p>
        </div>
        <div className="overflow-hidden relative border border-black border-opacity-[.3] p-[1rem] rounded-[50%] h-[3vw] w-[3vw] flex items-center justify-center">
          <div className="bg-[#eb244b] h-[60px] w-[100px] rounded-r-[35px] absolute z-[30] right-[100%] transition-all ease-linear"></div>
          <span className="text-black z-[31]">
            <GoArrowRight className=" text-[1.2rem] " />
          </span>
        </div>
      </div>
    </div>
  );
}

export default MobileShoeCard;
