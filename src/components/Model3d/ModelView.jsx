import { Html, OrbitControls, View } from "@react-three/drei";
import React, { Suspense, useEffect, useState } from "react";
import Shoe4 from './Shoe4';
import * as THREE from "three";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
}) => {
  const [scale, setScale] = useState([8, 8, 8]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([4, 4, 4]);
      } else {
        setScale([8, 8, 8]);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <View index={index} id={gsapType} className="w-full h-full">
      <ambientLight intensity={2} />
      <perspectiveCamera makeDefault position={[0, 0, 4]} />
      <group ref={groupRef} name={`group-${index}`} position={[0, 0, 1]}>
        <Suspense
          fallback={
            <Html>
              <div>isLoading</div>
            </Html>
          }
        >
          <Shoe4 scale={[scale[0] * 1.6875, scale[1] * 1.6875, scale[2] * 1.6875]} />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;