import React, { useRef, useState } from "react";
import ModelView from "./ModelView";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

// import { models, sizes } from "../constants";
// import { animateWithGsapTimeline } from "../utils/animations";

const Model = () => {
  const [size, setSize] = useState("small");

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  return (
    <section className="size-full">
      <div className="size-full">
        <div className="flex items-center mt-5">
          <div className="w-[50%] h-full md:h-[90vh] overflow-hidden relative ">
            <ModelView
              index={1}
              groupRef={small}
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
          <div className="w-[50%] flex justify-center flex-col h-[90vh] items-center gap-[5rem]">
            <p className="text-white px-[5rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis consequuntur numquam laborum iusto consequatur vitae
              ipsam vero eveniet! Quisquam consectetur, perspiciatis obcaecati
              molestiae laboriosam iure omnis veniam accusamus numquam. Unde
              nulla cumque velit odit quisquam ipsa laboriosam vitae eius
              voluptatum, sapiente pariatur magni quo. Laudantium facere
              repudiandae explicabo corporis beatae esse corrupti id laboriosam
              tempore obcaecati consequuntur, dolore natus minima aut cumque
              alias dolores, eligendi fugit vero cum quis modi. Aliquid
              consequatur voluptatibus deleniti possimus eaque sit error, alias
              aut recusandae maxime ipsam ipsa corporis dolorum voluptatem porro
              quia doloremque voluptate sint dolores! Temporibus alias expedita,
              nam nulla quis mollitia.
            </p>
            <div className="">
              <p className="text-[15px] font-bold text-center mb-5 text-white">
                This is text
              </p>
              <div className="flex gap-[.5rem] justify-center bg-[#2e2e30] px-[2rem] py-[.5rem] rounded-[20px]">
                <div className="h-[20px] w-[20px] bg-white rounded-[50%] cursor-pointer"></div>
                <div className="h-[20px] w-[20px] bg-red-900 rounded-[50%] cursor-pointer"></div>
                <div className="h-[20px] w-[20px] bg-yellow-300 rounded-[50%] cursor-pointer"></div>
                <div className="h-[20px] w-[20px] bg-lime-400 rounded-[50%] cursor-pointer"></div>
                <div className="h-[20px] w-[20px] bg-green-600 rounded-[50%] cursor-pointer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
