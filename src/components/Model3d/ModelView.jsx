import { Html, OrbitControls, View } from "@react-three/drei";
import React, { Suspense } from "react";
import Shoe from "./Shoe";
import * as THREE from "three";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View index={index} id={gsapType} className={`w-full h-full`}>
      <ambientLight intensity={1.2} />

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

      <group ref={groupRef} name={"small"} position={[0, 0, 0]}>
        <Suspense
          fallback={
            <Html>
              <div>Loading</div>
            </Html>
          }
        >
          <Shoe scale={[7, 7, 7]} item={item} size={size} />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
