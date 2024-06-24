import React, { useRef, useState } from "react";
import ModelView from "./ModelView";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import Shoe1img from "./Images/Shoe1img.webp"

const Model = () => {
  const ModelTargets = [
    { label: "Nike TC 7900", url:Shoe1img, value: "first" },
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
    <section className="size-full">
      <div className="size-full">
        <div className="flex flex-col items-center mt-5">
          <div className="w-[100%] h-full md:h-[90vh] overflow-hidden relative ">
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
                bottom: 0,
                right: 0,
                left: 0,
                overflow: "hidden",
                backgroundColor: "black",
                zIndex: -1,
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="absolute z-10 text-white">
          </div>
        </div>
        <div className="flex relative bottom-0 w-full justify-center p-[2rem] gap-6">
          {ModelTargets.map(({ label, url, value }) => (
            <div
              key={label}
              className={`relative w-[5rem] h-[4rem] rounded-xl text-black flex items-center justify-center text-sm font-bold hover:opacity-[0.8] hover:scale-110 transition-all`}
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
    </section>
  );
};

export default Model;
