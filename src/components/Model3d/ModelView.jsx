import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import React, { Suspense, useEffect } from 'react';
import Shoe from './Shoe';
import * as THREE from 'three'

const ModelView = ({groupRef, controlRef, setRotationState }) => {
    useEffect(() => {
        const controls = controlRef.current;
        if (controls) {
            const handleChange = () => {
                setRotationState(controls.getAzimuthalAngle());
            };
            controls.addEventListener('change', handleChange);
            return () => controls.removeEventListener('change', handleChange);
        }
    }, [controlRef, setRotationState]);

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            
            <ambientLight intensity={2} />
            
            <OrbitControls
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={true}
                rotateSpeed={2}
                target={new THREE.Vector3(0, 0.4, 0)}
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