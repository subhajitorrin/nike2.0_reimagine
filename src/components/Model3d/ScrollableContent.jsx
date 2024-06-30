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
    title: "A Journey Through Time",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nemo illum, sit optio numquam deleniti, ipsam accusamus provident quod iure saepe, repellendus sapiente sunt necessitatibus aperiam adipisci. Nihil unde alias odit quo qui? Unde molestias architecto minima non sequi atque dolor veniam perferendis? Nobis odio corrupti beatae delectus. A, aliquam?",
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
          markers: true,
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
          end: "200% 50%",
          scrub: 1,
          pin: true,
          markers: true,
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
      className="bg-transparent relative border-2 border-red-900 h-[400vh]"
    >
      <div className="">
        <div
          ref={section2Ref}
          className="modelSection2 h-screen border-black border pt-[10rem]"
        >
          <div className="absolute right-0 w-[40vw] h-[40vh] border border-black flex items-center justify-center flex-col">
            <h1 className="TextAnimationSection1 text-[2vw] font-bold tektur">
              {section1.title.split(" ").map((word, index) => (
                <div
                  className="TextAnimationSection1 relative inline-block"
                  key={index}
                >
                  {word}&nbsp;
                </div>
              ))}
            </h1>
            <p>
              {section1.desc.split(" ").map((word, index) => (
                <div
                  className="TextAnimationSection1 relative inline-block"
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
        <div
          ref={section3Ref}
          className="modelSection2 h-screen border-black border pt-[10rem]"
        >
          <div className="w-[40vw] h-[40vh] border border-black flex items-center justify-center flex-col">
            <h1 className="TextAnimationSection2 text-[2vw] font-bold tektur">
              {section1.title.split(" ").map((word, index) => (
                <div
                  className="TextAnimationSection2 relative inline-block"
                  key={index}
                >
                  {word}&nbsp;
                </div>
              ))}
            </h1>
            <p>
              {section1.desc.split(" ").map((word, index) => (
                <div
                  className="TextAnimationSection2 relative inline-block"
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
