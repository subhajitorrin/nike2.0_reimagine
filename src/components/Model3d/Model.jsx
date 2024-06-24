import React, { useRef, useState } from "react";
import ModelView from "./ModelView";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { div } from "three/examples/jsm/nodes/Nodes.js";



const Model = () => {

  const ModelTargets = [
    {label: "air1",url:"",value:"first"},
    {label: "jordan",url:"",value:"second"},
    {label: "air2",url:"",value:"third"},
  ]


  const [size, setSize] = useState("first");

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
              size={size}
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
        <div className="flex relative bottom-0 w-ful justify-center p-[2rem] gap-6">
            {ModelTargets.map( ({label,url,value}) => (
              <div key={label} className={`w-[5rem] h-[4rem] border rounded-xl text-white`}
                style={{
                  backgroundImage:url,
                  backgroundPosition:"center",
                  backgroundSize:"cover",
                  objectFit:"cover"
                }}
                onClick={() => setSize(value)}
              >
                djfjsd
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Model;
