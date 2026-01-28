import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color, distort, speed }) {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.cos(t / 4) / 2;
            meshRef.current.rotation.y = Math.sin(t / 4) / 2;
            meshRef.current.position.y += Math.sin(t + position[0]) * 0.002;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={1} floatIntensity={1}>
            <mesh position={position} ref={meshRef}>
                <icosahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                    color={color}
                    distort={distort}
                    speed={speed}
                    transparent
                    opacity={0.15}
                />
            </mesh>
        </Float>
    );
}

export const Floating3DBackground = () => {
    const shapes = useMemo(() => [
        { position: [-8, 4, -5], color: '#22d3ee', distort: 0.3, speed: 2 },
        { position: [10, -5, -8], color: '#3b82f6', distort: 0.5, speed: 1.5 },
        { position: [-12, -8, -10], color: '#8b5cf6', distort: 0.4, speed: 2.5 },
        { position: [8, 8, -12], color: '#06b6d4', distort: 0.2, speed: 1.8 },
        { position: [0, -12, -6], color: '#6366f1', distort: 0.6, speed: 2.2 },
    ], []);

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, 20, 10]} angle={0.15} penumbra={1} />

                {shapes.map((s, i) => (
                    <FloatingShape key={i} {...s} />
                ))}

                <fog attach="fog" args={['#050508', 10, 30]} />
            </Canvas>
        </div>
    );
};
