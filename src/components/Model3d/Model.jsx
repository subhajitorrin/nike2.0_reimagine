import React, { useRef, useState, useEffect } from "react";
import ModelView from "./ModelView";
import ScrollableContent from "./ScrollableContent";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Model = () => {
  const [model, setModel] = useState("first");
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();
  const first = useRef(new THREE.Group());
  const second = useRef(new THREE.Group());
  const third = useRef(new THREE.Group());
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);
  const rotationRef = useRef(0);
  const scrollableContentRef = useRef(null);

  useEffect(() => {
    const totalRotation = Math.PI * 4; // Full 360 degree rotation

    // ScrollTrigger for model rotation
    ScrollTrigger.create({
      trigger: "#main",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        if (first.current) {
          // Calculate the new rotation based on scroll progress
          const newRotation = self.progress * totalRotation;
          // Calculate the rotation change
          const rotationChange = newRotation - rotationRef.current;
          // Update the model's rotation
          first.current.rotation.y += rotationChange;
          first.current.rotation.x += rotationChange;

          // Store the new rotation
          rotationRef.current = newRotation;
        }
      },
    });

    // ScrollTrigger for scrollable content animation
    ScrollTrigger.create({
      trigger: "#scrollable-content",
      start: "top bottom",
      end: "top top",
      scrub: true,
      onUpdate: (self) => {
        if (scrollableContentRef.current) {
          gsap.to(scrollableContentRef.current, {
            y: `${-self.progress * 100}vh`,
            ease: "none",
          });
        }
      },
    });
  }, []);

  return (
    <div className="relative w-full h-[300vh]" id="main">
      <div className="fixed top-0 left-0 w-full h-screen">
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
            backgroundColor: "white",
            zIndex: -1,
          }}
          eventSource={document.getElementById("main")}
        >
          <View.Port />
        </Canvas>
      </div>
      <div 
        id="scrollable-content" 
        ref={scrollableContentRef} 
        className="absolute top-[100vh] left-0 w-full"
      >
        <ScrollableContent />
      </div>
    </div>
  );
};

export default Model;