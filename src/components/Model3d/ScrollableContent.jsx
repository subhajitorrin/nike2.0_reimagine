import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const ScrollableContent = () => {
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

  const containerRef = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const section1 = {
    title: "Elevate Your Performance with Nike",
    desc: "Elevate your performance with Nike, where cutting-edge technology meets unparalleled design to enhance your athletic prowess. Whether you're a seasoned athlete or just beginning your fitness journey, Nike's innovative gear and apparel are crafted to support and empower you every step of the way. Experience the perfect blend of comfort, durability, and style, ensuring that you can push your limits and achieve your personal best.",
  };
  const section1Mobile = {
    title: "Elevate Your Performance with Nike",
    desc: "Elevate your performance with Nike, where cutting-edge technology meets unparalleled design to enhance your athletic prowess.",
  };
  const section2 = {
    title: "Transform Your Game with Nike",
    desc: "Nike: The Ultimate Sportswear Experience invites you into a world where style meets performance, crafting a seamless blend of innovation and comfort. From iconic sneakers that redefine streetwear to high-performance activewear designed to enhance your athletic endeavors, Nike sets the benchmark in sportswear excellence. Embrace the energy of Nike's cutting-edge technologies, engineered to support your every movement and elevate your performance.",
  };
  const section2Mobile = {
    title: "Transform Your Game with Nike",
    desc: "Nike: The Ultimate Sportswear Experience invites you into a world where style meets performance, crafting a seamless blend of innovation and comfort.",
  };

  useGSAP(
    () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: section2Ref.current,
          start: innerWidth <= 768 ? "50% 75%" : "50% 50%",
          end: innerWidth <= 768 ? "150% 75%" : "150% 50%",
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
          start: innerWidth <= 768 ? "50% 80%" : "50% 50%",
          end: innerWidth <= 768 ? "200% 80%" : "150% 50%",
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

  if (innerWidth > 768) {
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
              <h1 className="TextAnimationSection1 text-[2.2vw] font-bold tektur text-[#d88719] rounded-[10px] overflow-hidden">
                {section1.title.split(" ").map((word, index) => (
                  <div
                    className="TextAnimationSection1 relative inline-block bg-black"
                    key={index}
                  >
                    {word}&nbsp;
                  </div>
                ))}
              </h1>
              <p className="vtregular text-[1.4vw] font-[300]">
                {section1.desc.split(" ").map((word, index) => (
                  <div
                    className="TextAnimationSection1 relative inline-block text-black"
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
              <h1 className=" TextAnimationSection2 text-[2.2vw] font-bold tektur text-[#d88719] rounded-[10px] overflow-hidden">
                {section2.title.split(" ").map((word, index) => (
                  <div
                    className="TextAnimationSection2 relative inline-block bg-black "
                    key={index}
                  >
                    {word}&nbsp;
                  </div>
                ))}
              </h1>
              <p className="vtregular text-[1.4vw] font-[300]">
                {section2.desc.split(" ").map((word, index) => (
                  <div
                    className="TextAnimationSection2 relative inline-block text-black"
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
  } else {
    return (
      <div
        ref={containerRef}
        className="bg-transparent relative  h-[500vh] px-[1rem]"
      >
        <div className="">
          <div
            ref={section2Ref}
            className="modelSection2 h-screen  pt-[15rem] mt-[20rem]"
          >
            <div className="absolute h-[40vh]  right-0 w-full  flex items-center justify-center flex-col gap-[1rem] ">
              <h1 className="TextAnimationSection1 text-[7vw] font-bold tektur text-[#d88719] rounded-[10px] overflow-hidden">
                {section1Mobile.title.split(" ").map((word, index) => (
                  <div
                    className="TextAnimationSection1 relative inline-block bg-black "
                    key={index}
                  >
                    {word}&nbsp;
                  </div>
                ))}
              </h1>
              <p className="vtregular text-[5vw] font-[300]">
                {section1Mobile.desc.split(" ").map((word, index) => (
                  <div
                    className="TextAnimationSection1 relative inline-block text-black"
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
            <div className="w-full h-[40vh]  flex items-center justify-center flex-col gap-[1rem] ">
              <h1 className="TextAnimationSection2 text-[7vw] font-bold tektur text-[#d88719] rounded-[10px] overflow-hidden">
                {section2Mobile.title.split(" ").map((word, index) => (
                  <div
                    className="TextAnimationSection2 relative inline-block bg-black "
                    key={index}
                  >
                    {word}&nbsp;
                  </div>
                ))}
              </h1>
              <p className="vtregular text-[5vw] font-[300]">
                {section2Mobile.desc.split(" ").map((word, index) => (
                  <div
                    className="TextAnimationSection2 relative inline-block text-black"
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
  }
};

export default ScrollableContent;
