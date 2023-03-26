import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import { personalInfo } from "../../utils";
import { OrbitControls } from "@react-three/drei";

const LogoMesh = (props: any) => {
    const [active, setActive] = useState(false);
    const mesh = useRef<any>();

    useFrame(() => {
        if(active) {
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01
        }
    })

    const texture = useMemo(() => (
        new THREE.TextureLoader().load(personalInfo.img)
    ), [])
  
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={[1.5, 1.5, 1.5]}
            onClick={(e) => setActive(!active)}
        >
            <hemisphereLight intensity={1} groundColor='black' />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
                <primitive
                    attach="map"
                    object={texture}
                    // dispose={null}
                />
            </meshBasicMaterial>
        </mesh>
    )
}

const LogoCanvas = () => {
    return (
        <Canvas>
            {/* <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} intensity={1} /> */}

            <Suspense fallback={<span>...</span>}>
            <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
                <LogoMesh />
            </Suspense>
        </Canvas>
    )
}

export {LogoCanvas}