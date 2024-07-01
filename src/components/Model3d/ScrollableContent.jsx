import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const ScrollableContent = () => {
  const containerRef = useRef(null);
  const childRef1 = useRef(null);
  const childRef2 = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const section1 = {
    title: "Elevate Your Performance with Nike",
    desc: "Elevate your performance with Nike, where cutting-edge technology meets unparalleled design to enhance your athletic prowess. Whether you're a seasoned athlete or just beginning your fitness journey, Nike's innovative gear and apparel are crafted to support and empower you every step of the way. Experience the perfect blend of comfort, durability, and style, ensuring that you can push your limits and achieve your personal best.",
  };

  useGSAP(
    () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "50% 50%",
          end: "200% 50%",
          scrub: 1,
          pin: true,
        },
      });
      t1.from(".TextAnimationSection1", {
        opacity: 0,
        scale: 3,
        y: function () {
          return Math.random() * 600 - 300;
        },
        stagger: {
          amount: 1,
        },
      });
      t1.to(".TextAnimationSection1", {
        duration: 5,
      });
      t1.to(".TextAnimationSection1", {
        opacity: 0,
        scale: 2,
        y: function () {
          return Math.random() * 200 - 100;
        },
        stagger: {
          amount: 1,
        },
      });
      return () => {
        t1.kill();
      };
    },
    { scope: containerRef }
  );
  useGSAP(
    () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "50% 50%",
          end: "150% 50%",
          scrub: 1,
          pin: true,
        },
      });
      t1.from(".TextAnimationSection2", {
        opacity: 0,
        scale: 3,
        y: function () {
          return Math.random() * 600 - 300;
        },
        stagger: {
          amount: 1,
        },
      });
      t1.to(".TextAnimationSection2", {
        duration: 5,
      });
      t1.to(".TextAnimationSection2", {
        opacity: 0,
        scale: 2,
        y: function () {
          return Math.random() * 200 - 100;
        },
        stagger: {
          amount: 1,
        },
      });
      return () => {
        t1.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="bg-transparent relative  h-[500vh] px-[5rem]"
    >
      <div className="">
        <div
          ref={section2Ref}
          className="modelSection2 h-screen  pt-[15rem] mt-[20rem] "
        >
          <div className="absolute right-0 w-[40vw] h-[40vh]  flex items-center justify-center flex-col gap-[1rem]">
            <h1 className="TextAnimationSection1 text-[2.2vw] font-bold tektur text-[#9e8b5c] rounded-[10px] overflow-hidden">
              {section1.title.split(" ").map((word, index) => (
                <div
                  className="TextAnimationSection1 relative inline-block bg-black text-white "
                  key={index}
                >
                  {word}&nbsp;
                </div>
              ))}
            </h1>
            <p className="vtregular text-[1.4vw] font-[300]">
              {section1.desc.split(" ").map((word, index) => (
                <div
                  className="TextAnimationSection1 relative inline-block text-gray-400"
                  key={index}
                >
                  {word}&nbsp;
                </div>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="modelSection2 h-screen  pt-[10rem]"></div>
      </div>
      <div className="">
        <div
          ref={section3Ref}
          className="modelSection2 h-screen  pt-[10rem] mt-[9rem]"
        >
          <div className="w-[40vw] h-[40vh]  flex items-center justify-center flex-col gap-[1rem]">
            <h1 className="TextAnimationSection2 text-[2.2vw] font-bold tektur text-[#9e8b5c] rounded-[10px] overflow-hidden">
              {section1.title.split(" ").map((word, index) => (
                <div
                  className="TextAnimationSection2 relative inline-block bg-black text-white"
                  key={index}
                >
                  {word}&nbsp;
                </div>
              ))}
            </h1>
            <p className="vtregular text-[1.4vw] font-[300]">
              {section1.desc.split(" ").map((word, index) => (
                <div
                  className="TextAnimationSection2 relative inline-block text-gray-400"
                  key={index}
                >
                  {word}&nbsp;
                </div>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollableContent;
