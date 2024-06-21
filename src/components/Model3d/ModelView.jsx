import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import React, { Suspense } from 'react';
import Shoe from './Shoe';
import * as THREE from 'three'

const ModelView = ({groupRef,controlRef, setRotationState }) => {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />

            <ambientLight intensity={2} />

            <OrbitControls 
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={true}
                rotateSpeed={0.8}
                target={new THREE.Vector3(1, 0, 0)}
                onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
            />

            <group ref={groupRef} name={`small`} position={[0, 0, 0]}>
                <Suspense fallback={null}>
                    <Shoe scale={[4, 4, 4]} />
                </Suspense>
            </group>
        </>
    )
}

export default ModelView