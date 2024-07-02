import React, { useEffect, useRef, useState } from "react";
import ShoeCard from "./ShoeCard";
import { HiArrowNarrowRight } from "react-icons/hi";
import MobileShoeCard from "./MobileShoeCard";
import gsap from "gsap";
import "./CardSection.css";
import Tilt from "react-parallax-tilt";


const shoe1 = "https://res.cloudinary.com/difxhccup/image/upload/v1719831391/shoe1_asgdsi.png";
const shoe2 = "https://res.cloudinary.com/difxhccup/image/upload/v1719831392/shoe2_sbvyi9.png";
const shoe3 = "https://res.cloudinary.com/difxhccup/image/upload/v1719831394/shoe3_ljcgv6.png";
const shoe4 = "https://res.cloudinary.com/difxhccup/image/upload/v1719831395/shoe4_ulzyd7.png";

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
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (innerWidth <= 768) {
    return (
      <div className=" w-full text-white flex flex-col items-center gap-[4rem] bg-[#f4f2f0] py-[5rem] relative border  z-[1]">
        <div className="tektur text-center text-[6vw] text-black mb-[10%]">
          "Just do it.
          <br />
          Define your greatness."
        </div>
        <div className="w-[75%] flex gap-[2rem] flex-col items-center z-[22] relative">
          <div className="text-[#eae6e3] font-[800] text-[22vw] z-[20] pointer-events-none absolute top-[-20vw]">
            JORDAN
          </div>
          <MobileShoeCard
            shoe={shoeList[0].shoe}
            title={shoeList[0].title}
            desc={shoeList[0].desc}
          />
          <MobileShoeCard
            shoe={shoeList[1].shoe}
            title={shoeList[1].title}
            desc={shoeList[1].desc}
          />
          <MobileShoeCard
            shoe={shoeList[2].shoe}
            title={shoeList[2].title}
            desc={shoeList[2].desc}
          />
          <MobileShoeCard
            shoe={shoeList[3].shoe}
            title={shoeList[3].title}
            desc={shoeList[3].desc}
          />
        </div>
        <div className="items-center text-[1.2rem] flex gap-[1rem] px-[2rem] py-[1.5rem] border rounded-[35px] bg-[#eb244b] text-white font-bold">
          all shoes <HiArrowNarrowRight className="text-white text-[1.5rem]" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="tektur w-full text-white flex flex-col items-center gap-[4rem] bg-[#f4f2f0] py-[5rem] relative z-[1]">
        <div className="text-center text-[2rem] text-black ">
          "Just do it.
          <br />
          Define your greatness."
        </div>
        <div className="text-[#eae6e3] strokeTextGray absolute font-[800] text-[7rem] top-[11%] z-[20] pointer-events-none">
          JO<span className="">RDANSPO</span>RT
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
        <Tilt>
          <div className="cardSectionShoeButton items-center text-[1.2rem] flex gap-[1rem] px-[2rem] py-[1.5rem] border rounded-[35px]  font-bold">
            all shoes{" "}
            <HiArrowNarrowRight className="shoeBtnRightArrIcon text-white text-[1.5rem]" />
          </div>
        </Tilt>
      </div>
    );
  }
}

export default CardSection;
