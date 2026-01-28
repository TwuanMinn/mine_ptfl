import React, { useRef, useState, useMemo, Suspense, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Text, Image, Environment, ScrollControls, Scroll } from '@react-three/drei';
import * as THREE from 'three';

// Error boundary to catch Three.js rendering errors
class Gallery3DErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}

function ProjectPlane({ project, index, ...props }) {
    const mesh = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, hovered ? 0.2 : 0, 0.1);
            mesh.current.position.y += Math.sin(t * 1.5 + index) * 0.002;
        }
    });

    return (
        <group {...props}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh
                    ref={mesh}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                    onClick={() => window.location.hash = `project-${project.id}`}
                >
                    <planeGeometry args={[2.5, 3.5]} />
                    <meshStandardMaterial
                        color="#ffffff"
                        transparent
                        opacity={0.9}
                        emissive={hovered ? "#22d3ee" : "#000000"}
                        emissiveIntensity={hovered ? 0.5 : 0}
                    />
                    <Image
                        url={project.image}
                        transparent
                        opacity={1}
                        scale={[2.3, 3.3]}
                        position={[0, 0, 0.01]}
                    />
                </mesh>
            </Float>

            <Text
                position={[0, -2.2, 0]}
                fontSize={0.2}
                color="white"
            >
                {project.title}
            </Text>
        </group>
    );
}

// Fallback component when 3D fails to load
const Gallery3DFallback = ({ projects }) => (
    <div className="h-[400px] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 relative">
        <div className="absolute top-6 left-6 z-10">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-6 bg-cyan-500 rounded-full" />
                FEATURED PROJECTS
            </h3>
        </div>
        <div className="flex gap-4 p-6 pt-16 overflow-x-auto">
            {projects.slice(0, 4).map((project) => (
                <div key={project.id} className="flex-shrink-0 w-48 bg-white/5 rounded-xl p-3 border border-white/10 hover:border-cyan-400/50 transition-all">
                    <img src={project.image} alt={project.title} className="w-full h-28 object-cover rounded-lg mb-2" />
                    <p className="text-white text-sm font-medium truncate">{project.title}</p>
                </div>
            ))}
        </div>
    </div>
);

export const Gallery3D = ({ projects }) => {
    return (
        <Gallery3DErrorBoundary fallback={<Gallery3DFallback projects={projects} />}>
            <div className="h-[600px] w-full rounded-3xl overflow-hidden bg-slate-950/20 backdrop-blur-sm border border-white/5 relative group">
                <div className="absolute top-8 left-8 z-10">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-8 bg-cyan-500 rounded-full" />
                        3D EXHIBITION
                    </h3>
                    <p className="text-slate-400 text-sm mt-2">Interact with my universe in 3D Space</p>
                </div>

                <Canvas shadows dpr={[1, 2]}>
                    <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} castShadow />
                    <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

                    <Environment preset="city" />

                    <ScrollControls horizontal pages={projects.length / 2} damping={0.1}>
                        <Scroll>
                            {projects.map((project, i) => (
                                <ProjectPlane
                                    key={project.id}
                                    project={project}
                                    index={i}
                                    position={[i * 4 - (projects.length * 2), 0, 0]}
                                />
                            ))}
                        </Scroll>
                    </ScrollControls>
                </Canvas>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400/50 text-xs animate-pulse tracking-widest uppercase font-bold">
                    Drag to explore gallery
                </div>
            </div>
        </Gallery3DErrorBoundary>
    );
};
