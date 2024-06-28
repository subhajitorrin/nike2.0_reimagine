import React, { useRef, useState, useEffect } from "react";
import ModelView from "./ModelView";
import ScrollableContent from "./ScrollableContent";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ModelWrapper = ({ modelRef, positionRef }) => {
  useFrame(() => {
    if (modelRef.current && positionRef.current) {
      modelRef.current.position.copy(positionRef.current);
    }
  });

  return null;
};

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
  const modelPositionRef = useRef(new THREE.Vector3(0, 0, 1));

  useEffect(() => {
    const totalRotation = Math.PI * 2; // Full 360 degree rotation

    // ScrollTrigger for model rotation
    ScrollTrigger.create({
      trigger: "#main",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
      onUpdate: (self) => {
        if (first.current) {
          const newRotation = self.progress * totalRotation;
          const rotationChange = newRotation - rotationRef.current;
          first.current.rotation.y += rotationChange;
          rotationRef.current = newRotation;
        }
      },
    });

    // ScrollTrigger for scrollable content animation
    ScrollTrigger.create({
      trigger: "#scrollable-content",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      onUpdate: (self) => {
        if (scrollableContentRef.current) {
          gsap.to(scrollableContentRef.current, {
            y: `${-self.progress * 300}vh`,
            ease: "none",
          });
        }
      },
    });

    // Updated ScrollTrigger for model position
    ScrollTrigger.create({
      trigger: "#main",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
      onUpdate: (self) => {
        const progress = self.progress * 3; // Scale progress to 0-3 range (3 sections)
        let newX;
        let newZ;
    
        if (progress < 1) {
          // First section: Move from left to right
          newX = -4 + progress * 6; // Move from -4 to 4
        } else if (progress < 2) {
          // Second section: Move from right to left
          newX = 4 - (progress - 1) * 8; // Move from 4 to -4
          newZ = 1 + (progress - 1) * 1
        } else {
          // Third section: Move from left to right again
          newX = -4 + (progress - 2) * 6; // Move from -4 to 4
        }
    
        modelPositionRef.current.set(newX, -1, newZ);
      },
    });
  }, []);

  return (
    <div className="relative w-full h-[400vh]" id="main">
      <div className="fixed top-0 left-0 w-full h-screen">
        <ModelView
          index={1}
          groupRef={first}
          gsapType="view1"
          controlRef={cameraControlSmall}
          setRotationState={setSmallRotation}
          size={model}
          modelPosition={modelPositionRef.current}
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
          <ModelWrapper modelRef={first} positionRef={modelPositionRef} />
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