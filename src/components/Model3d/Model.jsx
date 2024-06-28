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
      scrub: 1,
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
      scrub: true,
      onUpdate: (self) => {
        if (scrollableContentRef.current) {
          gsap.to(scrollableContentRef.current, {
            y: `${-self.progress * 200}vh`,
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
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress * 2; // Scale progress to 0-2 range
        let newX, newZ;
    
        if (progress <= 1) {
          // First 100vh: Move left and zoom in
          newX = -2 * progress; // Move from 0 to -6
          newZ = 1 - progress * 0.5; // Zoom in from 1 to 0.5
        } else {
          // Second 100vh: Move right and zoom out
          newX = -2 + (progress - 1) * 12; // Move from -6 to 6
          newZ = 0.5 + (progress - 1) * 0.5; // Zoom out from 0.5 back to 1
        }
    
        modelPositionRef.current.set(newX, -1, newZ);
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