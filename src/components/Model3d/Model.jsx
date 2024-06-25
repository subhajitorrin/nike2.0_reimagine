import React, { useRef, useState, useEffect } from "react";
import ModelView from "./ModelView";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import Shoe1img from "./Images/Shoe1img.webp";
import Shoe4img from './Images/Shoe4img.jpg';
import Shoe2img from './Images/Shoe2img.jpg';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Model = () => {
  const ModelTargets = [
    { label: "Nike TC 7900", url: Shoe1img, value: "first" },
    { label: "jordan", url: Shoe2img, value: "second" },
    { label: "air2", url: Shoe4img, value: "third" },
  ];

  const [model, setModel] = useState("first");
  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();
  // model
  const first = useRef(new THREE.Group());
  const second = useRef(new THREE.Group());
  const third = useRef(new THREE.Group());
  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  // GSAP animation
  const mainRef = useRef(null);
  const headingRef = useRef(null);
  const models = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: mainRef.current,
        start: "top bottom-=100",
        end: "bottom top+=100",
        onEnter: () => {
          let tl = gsap.timeline();
          
          // Animate heading
          tl.fromTo(headingRef.current,
            { x: -202, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6 }
          );
  
          // Animate models
          tl.fromTo(models.current.children, 
            { y: 30, scale:0 },
            { 
              y: 0, 
              scale:1, 
              duration: 0.4, 
              stagger: 0.1
            },
            "-=0.2"
          );
        },
      });
    });
  
    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <div ref={mainRef} className="relative w-full h-screen overflow-hidden border border-[green]" id="main">
      <div className="absolute inset-0">
        <ModelView
          index={1}
          groupRef={first}
          gsapType="view1"
          controlRef={cameraControlSmall}
          setRotationState={setSmallRotation}
          size={model}
        />
        <Canvas
          className="w-full h-full"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden",
            backgroundColor: "rgba(0, 0, 10, 0.9)",
            zIndex: -1
          }}
          eventSource={document.getElementById("main")}
        >
          <View.Port />
        </Canvas>
        <div ref={headingRef} className="absolute top-0 py-[1rem] px-[2rem]">
          <h1 className="text-zinc-100 text-[4.2rem] font-semibold">Elevate Your Game</h1>
          <p className="text-[#848583] -mt-2 z-[-1]">Get up close and personal with the design excellence of Nike shoes <br /> in a dynamic 3D environment.</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 p-4">
        <div className="flex justify-center gap-4 flex-wrap" ref={models}>
          {ModelTargets.map(({ label, url, value }) => (
            <div
              id="models"
              key={label}
              className="relative top-[-5rem] w-[4rem] h-[4rem] rounded-[100%] text-white flex items-center justify-center text-sm font-bold hover:opacity-[0.8] hover:scale-110 transition-all overflow-hidden border"
              onClick={() => setModel(value)}
            >
              <img src={url} alt="" className="w-full h-full items-center scale-[1.2] relative top-[-3px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Model;