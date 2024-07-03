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
    const totalRotation = Math.PI * 14; // Full 360 degree rotation

    // ScrollTrigger for model rotation
    ScrollTrigger.create({
      trigger: "#main",
      start: "top top",
      end: "bottom bottom",
      scrub: 100,
      onUpdate: (self) => {
        if (first.current) {
          const newRotation = self.progress * totalRotation;
          const rotationChange = newRotation - rotationRef.current;
          gsap.to(first.current.rotation, {
            y: `+=${rotationChange}`,
            duration: 0.5,
            ease: "power2.out",
          });
          rotationRef.current = newRotation;
        }
      },
    });

    //ScrollTrigger for scrollable content animation
    ScrollTrigger.create({
      trigger: "#scrollable-content",
      start: "top bottom",
      end: "top top",
      scrub: 100,
      onUpdate: (self) => {
        if (scrollableContentRef.current) {
          gsap.to(scrollableContentRef.current, {
            y: `${-self.progress * 400}vh`,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      },
    });

    //Updated ScrollTrigger for model position
    if (window.innerWidth > 768) {
      ScrollTrigger.create({
        trigger: "#main",
        start: "top top",
        end: "bottom bottom",
        scrub: 100,
        onUpdate: (self) => {
          const progress = self.progress;
          let newX, newZ;

          if (progress < 0.25) {
            newX = gsap.utils.interpolate(-2, 0, progress * 4);
            newZ = 1;
          } else if (progress < 0.46) {
            newX = gsap.utils.interpolate(-1, -2, (progress - 0.25) * 2);
            newZ = gsap.utils.interpolate(0, 1, (progress - 0.25) * 2);
          } else if (progress < 0.65) {
            newX = gsap.utils.interpolate(0.7, 0, (progress - 1) * 2);
            newZ = gsap.utils.interpolate(0, 1, progress - 0.5);
          } else {
            newX = 1;
            newZ = gsap.utils.interpolate(0, 1, (progress - 1) * 2);
          }

          gsap.to(modelPositionRef.current, {
            x: newX,
            y: -1,
            z: newZ,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    
   
      <div className="relative w-full h-[600vh]" id="main">
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
              backgroundColor: "#f4f2f0", //background color of the 3d model
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
          // ref={scrollableContentRef}
          className="absolute top-0 left-0 w-full"
        >
          <ScrollableContent />
        </div>
    
    </div>
  );
};

export default Model;
