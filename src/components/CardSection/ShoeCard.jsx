import React from "react";
import { GoArrowRight } from "react-icons/go";

function ShoeCard({ shoe, title, desc }) {
  return (
    <div className="bg-white h-[480px] w-[450px] rounded-[20px] overflow-hidden z-[22]">
      <div className="h-[70%]  ">
        <img src={shoe} className="relative right-[-10%]" />
      </div>
      <div className="h-[30%]  flex justify-between items-center px-[1.7rem] text-black">
        <div className="text-[1.2rem] leading-[100%]">
          <p>{title}</p>
          <p>{desc}</p>
        </div>
        <div className="border border-black border-opacity-[.3] p-[1rem] rounded-[50%] h-[60px] w-[60px] flex items-center justify-center">
          <GoArrowRight className="text-black text-[1.2rem]" />
        </div>
      </div>
    </div>
  );
}

export default ShoeCard;
