import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function BackgroundElements() {
    const points = useMemo(() => {
        const p = [];
        for (let i = 0; i < 50; i++) {
            p.push([
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10
            ]);
        }
        return p;
    }, []);

    return (
        <group>
            {points.map((pos, i) => (
                <Float key={i} speed={1} rotationIntensity={2} floatIntensity={2}>
                    <mesh position={pos}>
                        <octahedronGeometry args={[0.1, 0]} />
                        <meshStandardMaterial color="#22d3ee" transparent opacity={0.3} wireframe />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

function HeroSphere() {
    const sphereRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (sphereRef.current) {
            sphereRef.current.rotation.x = t * 0.2;
            sphereRef.current.rotation.y = t * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere ref={sphereRef} args={[1, 100, 100]} scale={1.5}>
                <MeshDistortMaterial
                    color="#1e3a8a"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0}
                    metalness={1}
                />
            </Sphere>

            {/* Outer Glow Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2.2, 0.02, 16, 100]} />
                <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} />
            </mesh>
        </Float>
    );
}

export const Hero3DScene = () => {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />

                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#22d3ee" />

                <HeroSphere />
                <BackgroundElements />

                <fog attach="fog" args={['#050508', 5, 15]} />
            </Canvas>
        </div>
    );
};
