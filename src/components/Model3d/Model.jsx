import React, { useRef, useState, useEffect } from "react";
import ModelView from "./ModelView";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import Shoe1img from "./Images/Shoe1img.webp"

const Model = () => {
  const ModelTargets = [
    { label: "Nike TC 7900", url: Shoe1img, value: "first" },
    { label: "jordan", url: Shoe1img, value: "second" },
    { label: "air2", url: Shoe1img, value: "third" },
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

  return (
    <div className="relative w-full h-screen overflow-hidden" id="main">
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
            backgroundColor: "rgb(51, 49, 49)",
            zIndex:-1
          }}
          eventSource={document.getElementById("main")}
        >
          <View.Port />
        </Canvas>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
        <div className="flex justify-center gap-4 flex-wrap">
          {ModelTargets.map(({ label, url, value }) => (
            <div
              key={label}
              className="relative w-[5rem] h-[4rem] rounded-xl text-white flex items-center justify-center text-sm font-bold hover:opacity-[0.8] hover:scale-110 transition-all"
              style={{
                backgroundImage: `url(${url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                objectFit: "cover",
              }}
              onClick={() => setModel(value)}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Model;