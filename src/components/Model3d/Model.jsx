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
    const totalRotation = Math.PI * 6; // Full 360 degree rotation

    // ScrollTrigger for model rotation
    ScrollTrigger.create({
      trigger: "#main",
      start: "top top",
      end: "bottom bottom",
      scrub: 3,
      onUpdate: (self) => {
        if (first.current) {
          const newRotation = self.progress * totalRotation;
          const rotationChange = newRotation - rotationRef.current;
          gsap.to(first.current.rotation, {
            y: `+=${rotationChange}`,
            duration: 0.5,
            ease: "power2.out"
          });
          rotationRef.current = newRotation;
        }
      },
    });

    // ScrollTrigger for scrollable content animation
    ScrollTrigger.create({
      trigger: "#scrollable-content",
      start: "top bottom",
      end: "top top",
      scrub: 3,
      onUpdate: (self) => {
        if (scrollableContentRef.current) {
          gsap.to(scrollableContentRef.current, {
            y: `${-self.progress * 300}vh`,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      },
    });

    // Updated ScrollTrigger for model position
    ScrollTrigger.create({
      trigger: "#main",
      start: "top top",
      end: "bottom bottom",
      scrub: 3,
      onUpdate: (self) => {
        const progress = self.progress * 4;
        let newX, newZ;

        if (progress < 1) {
          newX = gsap.utils.interpolate(-2, 0, gsap.utils.clamp(0, 1, progress));
          newZ = 1;
        } else if (progress < 1.5) {
          newX = gsap.utils.interpolate(0, -6, gsap.utils.clamp(0, 1, progress - 1));
          newZ = gsap.utils.interpolate(1, 2, gsap.utils.clamp(0, 1, progress - 1));
        } else if(progress < 2) {
          newX = gsap.utils.interpolate(-2, 4, gsap.utils.clamp(0, 1, progress - 2));
          console.log(progress)
          newZ = 1;
        }
        else {
          newX = gsap.utils.interpolate(0, 4, gsap.utils.clamp(0, 1, progress - 2));
        }

        gsap.to(modelPositionRef.current, {
          x: newX,
          y: -1,
          z: newZ,
          duration: 0.5,
          ease: "power2.out"
        });
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