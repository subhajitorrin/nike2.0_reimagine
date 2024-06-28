import React, { useEffect, useRef } from "react";
import "./../../../App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import clip from "../../../assets/BackClip/backclip.mov";
import { SiNike } from "react-icons/si";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function UpperFooter() {
  const ref = useRef(null);
  const mainRef = useRef(null);
  const videoRef = useRef(null);
  useGSAP(
    () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "50% 50%",
          end: "250% 50%",
          scrub: 2,
          pin: true,
          markers: true,
        },
      });
      t1.from(
        ".textAnimationStg",
        {
          opacity: 0,
          scale: 7,
          stagger: {
            each: 0.1,
            from: "start", // other options: "center", "end", "edges", etc.
            grid: "auto", // specify rows and columns if needed
            ease: "power2.inOut", // easing function for the stagger timing
          },
        },
        "a"
      );
      t1.from(
        ".textAnimationLeft",
        {
          left: -500,
        },
        "a"
      );
      t1.from(
        ".textAnimationRight",
        {
          right: -500,
        },
        "a"
      );
      t1.from(
        ".top",
        {
          y: -1000,
        },
        "a"
      );
      t1.to(videoRef.current, {
        height: "50vh",
        width: "50vw",
        scale: 2.2,
        position: "relative",
        left: "4.5%",
        top: "0%",
      });
      t1.to(videoRef.current, {
        delay: 1,
        scale: 1.7,
      });
    },
    { scope: ref }
  );
  return (
    <div ref={ref}>
      <div
        ref={mainRef}
        className=" min-h-screen w-full flex items-center justify-center bg-black flex-col gap-8"
      >
        <p className="relative text-center leading-500 text-uppercase">
          <div class="inline-block text-white text-[3.5vw] uppercase  font-bold relative textAnimationStg textAnimationLeft strokeText">
            Even&nbsp;
          </div>
          <div class="inline-block text-white text-[3.5vw] uppercase  font-bold relative textAnimationStg textAnimationRight">
            if&nbsp;
          </div>
          <div class="inline-block text-white text-[3.5vw] uppercase  font-bold relative textAnimationStg strokeText textAnimationLeft">
            it&nbsp;
          </div>
          <div class="inline-block text-white text-[3.5vw] uppercase  font-bold relative textAnimationStg">
            means&nbsp;
          </div>
          <div class="inline-block text-white text-[3.5vw] uppercase  font-bold relative textAnimationStg strokeText textAnimationRight">
            sacrificing.
          </div>
          <br />
          <div class="inline-block text-white text-[3.5vw] uppercase  font-bold relative textAnimationStg  textAnimationLeft">
            Just&nbsp;
          </div>
          <div
            ref={videoRef}
            className="z-[100]  overflow-hidden inline-block h-[50px] w-[300px] rounded-[10px] textAnimationStg top "
          >
            <video
              src={clip}
              muted
              autoPlay
              loop
              className="scale-[1.5] w-full object-contain rounded-[10px]"
            ></video>
          </div>
          <div class="inline-block text-white text-[3.5vw] uppercase  font-bold relative textAnimationStg strokeText textAnimationLeft">
            &nbsp;do&nbsp;
          </div>
          <div class="inline-block text-white text-[3.5vw] uppercase  font-bold relative textAnimationStg strokeText ">
            it.&nbsp;
          </div>
          <div className="top-[20px] inline-block text-white text-[4vw] uppercase  font-bold relative textAnimationStg strokeText ">
            <SiNike />
          </div>
          <br />
          <div class="inline-block text-white text-[3.5vw] uppercase  font-bold relative textAnimationStg strokeText ">
            Believe&nbsp;
          </div>
          <div class="inline-block text-white text-[3.5vw] uppercase  font-bold relative textAnimationStg strokeText">
            in&nbsp;
          </div>
          <div class="inline-block text-white text-[3.5vw] uppercase  font-bold relative textAnimationStg  ">
            something.&nbsp;
          </div>
        </p>
      </div>
    </div>
  );
}

export default UpperFooter;
