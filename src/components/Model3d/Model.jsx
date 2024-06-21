import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import ModelView from './ModelView'
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";

const Model = () => {
    const cameraControlSmall = useRef();
    const small = useRef(new THREE.Group());
    const [smallRotation, setSmallRotation] = useState(0);

    useGSAP(() => {
        gsap.to('#heading', {
            y: 0,
            opacity: 1
        })
    }, [])

    return (
        <section className='w-full h-full' id='modelSection'>
            <div className='w-full h-full relative'>
                <div className='flex flex-row items-start gap-20'> 
                    <div className='w-1/2 h-full overflow-hidden relative'>
                        <Canvas
                            className='w-full h-full'
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                height: '100vh',
                                backgroundColor:"black"
                            }}
                            eventSource={document.getElementById('modelSection')}
                        >
                            <ModelView
                                groupRef={small}
                                gsapType="view"
                                controlRef={cameraControlSmall}
                                setRotationState={setSmallRotation}
                            />
                        </Canvas>
                    </div>
                    <div className='bg-gray-500 w-1/2 flex flex-col items-center justify-center'
                        style={{
                            height:"100vh"
                        }}
                    >
                        <h1>3dmodel</h1>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Model