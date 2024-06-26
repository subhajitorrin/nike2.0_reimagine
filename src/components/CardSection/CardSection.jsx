import React from "react";
import ShoeCard from "./ShoeCard";
import { HiArrowNarrowRight } from "react-icons/hi";
import shoe1 from "../../assets/ShoeCardImgs/shoe1.png";
import shoe2 from "../../assets/ShoeCardImgs/shoe2.png";
import shoe3 from "../../assets/ShoeCardImgs/shoe3.png";
import shoe4 from "../../assets/ShoeCardImgs/shoe4.png";

const shoeList = [
  { shoe: shoe1, title: "AIR JORDAN 1", desc: "Classic, coveted, enduring." },
  { shoe: shoe2, title: "DUNK", desc: "Iconic, stylish, comfortable." },
  {
    shoe: shoe3,
    title: "NIKE TC 7900",
    desc: "Futuristic, durable, versatile.",
  },
  {
    shoe: shoe4,
    title: "Air Jordan 4 Retro",
    desc: "Stylish, iconic, versatile.",
  },
];

function CardSection() {
  return (
    <div className="w-full text-white flex flex-col items-center gap-[4rem] bg-[#f4f2f0] py-[5rem] relative">
      <div className="text-center text-[2rem] text-black ">
        Responsive Pegasus with <br />
        Air Zoom.
      </div>
      <div className="text-[#eae6e3] absolute font-[800] text-[7rem] top-[11%] z-[22]">
        JORDANSPORT
      </div>
      <div className="h-[110vh] w-[75%] flex gap-[1rem] ">
        <div className=" h-full w-[33%] flex items-center justify-center ">
          <ShoeCard
            shoe={shoeList[0].shoe}
            title={shoeList[0].title}
            desc={shoeList[0].desc}
          />
        </div>
        <div className=" h-full w-[33%] flex flex-col gap-[2rem] justify-center items-center">
          <ShoeCard
            shoe={shoeList[1].shoe}
            title={shoeList[1].title}
            desc={shoeList[1].desc}
          />
          <ShoeCard
            shoe={shoeList[2].shoe}
            title={shoeList[2].title}
            desc={shoeList[2].desc}
          />
        </div>
        <div className="h-full w-[33%] flex items-center justify-center">
          <ShoeCard
            shoe={shoeList[3].shoe}
            title={shoeList[3].title}
            desc={shoeList[3].desc}
          />
        </div>
      </div>
      <div className="items-center text-[1.2rem] flex gap-[1rem] px-[2rem] py-[1.5rem] border rounded-[35px] bg-[#eb244b] text-white font-bold">
        all shoes <HiArrowNarrowRight className="text-white text-[1.5rem]" />
      </div>
    </div>
  );
}

export default CardSection;
