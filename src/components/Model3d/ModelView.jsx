import { Html, OrbitControls, View } from "@react-three/drei";
import React, { Suspense, useEffect, useState } from "react";
import Shoe4 from './Shoe4';
import * as THREE from "three";
import { Audio } from 'react-loader-spinner';

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  modelPosition,
}) => {
  const [scale, setScale] = useState([8, 8, 8]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([5, 5, 5]);
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
      <group ref={groupRef} name={`group-${index}`} position={modelPosition}>
        <Suspense
          fallback={
            <Html>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' , zIndex:100000000 }}>
                <Audio
                  height="100"
                  width="100"
                  radius="9"
                  color="green"
                  ariaLabel="loading"
                  wrapperStyle
                  wrapperClass
                />
              </div>
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