import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import ModelView from './ModelView'

import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";


const Model = () => {

    // camera control for the model view
    const cameraControlSmall = useRef();

    // model
    const small = useRef(new THREE.Group());

    // rotation
    const [smallRotation, setSmallRotation] = useState(0);


    useGSAP(() => {
        gsap.to('#heading', {
            y: 0,
            opacity: 1
        })
    }, [])

    return (
        <section className='common-padding' id='modelSection'>
            <div className='screen-max-width'>
                <div className='flex flex-col items-center mt-5'>
                    <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
                        <Canvas
                            className='w-full h-full'
                            style={{
                                position: 'fixed',
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                overflow: 'hidden',
                            }}
                            eventSource={document.getElementById('root')}
                        >
                            <ModelView
                                groupRef={small}
                                gsapType="view"
                                controlRef={cameraControlSmall}
                                setRotationState={setSmallRotation}
                            />
                        </Canvas>
                    </div>
                    <div className='mx-auto w-full'>
                        <p className='text-sm font-light text-center mb-5'></p>
                        <div className='flex-center'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Model
