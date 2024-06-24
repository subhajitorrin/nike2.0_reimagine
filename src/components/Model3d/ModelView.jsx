import { Html, OrbitControls, View } from "@react-three/drei";
import React, { Suspense } from "react";
import Shoe from "./Shoe";
import Shoe2 from './Shoe2';
import Shoe3 from './Shoe3';
import * as THREE from "three";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
}) => {
  const renderShoe = () => {
    switch(size) {
      case "first":
        return <Shoe scale={[8, 8, 8]} />;
      case "second":
        return <Shoe2 scale={[1.3, 1.3, 1.3]} />;
      case "third":
        return <Shoe3 scale={[1.5, 1.5, 1.5]} />;
      default:
        return <Shoe scale={[8, 8, 8]} />;
    }
  };

  return (
    <View index={index} id={gsapType} className={`w-full h-full`}>
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