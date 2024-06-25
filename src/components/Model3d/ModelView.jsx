import { Html, OrbitControls, View } from "@react-three/drei";
import React, { Suspense, useEffect, useState } from "react";
import Shoe from "./Shoe";
import Shoe2 from './Shoe2';
import Shoe3 from './Shoe3';
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

  const renderShoe = () => {
    switch(size) {
      case "first":
        return <Shoe scale={scale} />;
      case "second":
        return <Shoe2 scale={[scale[0] * 0.1625, scale[1] * 0.1625, scale[2] * 0.1625]} />;
      case "third":
        return <Shoe4 scale={[scale[0] * 1.6875, scale[1] * 1.6875, scale[2] * 1.6875]} />;
      default:
        return <Shoe scale={scale} />;
    }
  };

  return (
    <View index={index} id={gsapType} className="w-full h-full">
      <ambientLight intensity={2} />
      <perspectiveCamera makeDefault position={[0, 0, 4]} />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={1}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      <group ref={groupRef} name={`group-${index}`} position={[0, 0, 0]}>
        <Suspense
          fallback={
            <Html>
              <div>Loading</div>
            </Html>
          }
        >
          {renderShoe()}
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;