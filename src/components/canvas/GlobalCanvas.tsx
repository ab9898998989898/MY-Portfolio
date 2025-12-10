"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
    Float, Stars, Environment, MeshTransmissionMaterial, Sparkles, 
    Torus, Sphere, Box, Cylinder, Cone
} from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";

// --- CONFIGURATION ---
const CONFIG = {
    reactColor: "#00d8ff", // Official React Cyan
    globeColor: "#4f46e5",  // Indigo purple
    shipColor: "#e2e8f0",   // Clean white/slate
    engineColor: "#f59e0b", // Orange/Amber for thrusters
    bg: "#050505",
}

// --- REUSABLE MATERIALS ---
const AerogelMaterial = ({ color }: { color: string }) => (
    <MeshTransmissionMaterial
        backside={false}
        samples={4}
        resolution={256}
        thickness={2}
        roughness={0.3}
        anisotropy={0.1}
        chromaticAberration={0.3}
        ior={1.5}
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        toneMapped={false}
    />
);

const TechMaterial = ({ color, emissive = false }: { color: string, emissive?: boolean }) => (
    <meshStandardMaterial 
        color={color}
        metalness={0.8}
        roughness={0.2}
        emissive={emissive ? color : "#000000"}
        emissiveIntensity={emissive ? 2 : 0}
    />
)

// --- CUSTOM COMPONENT: PROCEDURAL REACT LOGO ---
function ReactLogo({ position }: { position: [number, number, number] }) {
    const group = useRef<THREE.Group>(null);
    useFrame((state, delta) => {
       if(group.current) group.current.rotation.y += delta * 0.5
    });

    const torusArgs: [number, number, number, number] = [1.2, 0.15, 64, 128];

    return (
        <group ref={group} position={position} rotation={[0, 0, Math.PI / 6]}>
            <Sphere args={[0.35, 32, 32]}>
                <AerogelMaterial color={CONFIG.reactColor} />
            </Sphere>
            <Torus args={torusArgs}>
                <AerogelMaterial color={CONFIG.reactColor} />
            </Torus>
            <Torus args={torusArgs} rotation={[Math.PI / 3, 0, 0]}>
                <AerogelMaterial color={CONFIG.reactColor} />
            </Torus>
            <Torus args={torusArgs} rotation={[-Math.PI / 3, 0, 0]}>
                <AerogelMaterial color={CONFIG.reactColor} />
            </Torus>
        </group>
    )
}

// --- CUSTOM COMPONENT: HOLOGRAPHIC GLOBE ---
function HologramGlobe({ position }: { position: [number, number, number] }) {
    const group = useRef<THREE.Group>(null);
    useFrame((state, delta) => {
        if(group.current) group.current.rotation.y -= delta * 0.2
     });
 
    return (
        <group ref={group} position={position} scale={1.5}>
            <Sphere args={[0.9, 32, 32]}>
                 <meshBasicMaterial color={CONFIG.globeColor} transparent opacity={0.15} />
            </Sphere>
            <Sphere args={[1, 24, 24]}>
                <meshBasicMaterial color={CONFIG.globeColor} wireframe transparent opacity={0.4} toneMapped={false} />
            </Sphere>
        </group>
    )
}

// --- FIXED COMPONENT: PROCEDURAL SPACESHIP ---
// Replaces the broken GLTF download with a custom geometric ship
function ProceduralSpaceship({ position }: { position: [number, number, number] }) {
    const group = useRef<THREE.Group>(null);
    
    useFrame((state) => {
        if(group.current) {
             const t = state.clock.getElapsedTime();
             group.current.position.y = position[1] + Math.sin(t * 1) * 0.2;
             group.current.rotation.z = Math.sin(t * 0.5) * 0.1;
             group.current.rotation.x = Math.sin(t * 0.2) * 0.05;
        }
     });

    return (
        <group ref={group} position={position} rotation={[0, Math.PI, 0]} scale={0.8}>
            {/* Main Hull */}
            <Cone args={[0.7, 3, 32]} rotation={[Math.PI / 2, 0, 0]}>
                 <TechMaterial color={CONFIG.shipColor} />
            </Cone>
            
            {/* Cockpit Glass */}
            <Sphere args={[0.35]} position={[0, 0.2, 0.5]}>
                <meshStandardMaterial color="#000" roughness={0} metalness={1} envMapIntensity={2} />
            </Sphere>

            {/* Wings */}
            <Box args={[3, 0.1, 1.5]} position={[0, -0.2, -0.5]}>
                <TechMaterial color={CONFIG.shipColor} />
            </Box>
            
            {/* Vertical Stabilizers */}
            <Box args={[0.1, 1, 1]} position={[1.2, 0.3, -0.5]} rotation={[0, 0, 0.2]}>
                <TechMaterial color={CONFIG.shipColor} />
            </Box>
            <Box args={[0.1, 1, 1]} position={[-1.2, 0.3, -0.5]} rotation={[0, 0, -0.2]}>
                <TechMaterial color={CONFIG.shipColor} />
            </Box>

            {/* Engine Thrusters */}
            <Cylinder args={[0.2, 0.3, 0.5]} position={[0.6, -0.2, -1.5]} rotation={[Math.PI / 2, 0, 0]}>
                 <TechMaterial color="#333" />
            </Cylinder>
            <Cylinder args={[0.2, 0.3, 0.5]} position={[-0.6, -0.2, -1.5]} rotation={[Math.PI / 2, 0, 0]}>
                 <TechMaterial color="#333" />
            </Cylinder>

            {/* Engine Glow */}
            <Sphere args={[0.18]} position={[0.6, -0.2, -1.7]}>
                 <meshBasicMaterial color={CONFIG.engineColor} toneMapped={false} />
            </Sphere>
            <Sphere args={[0.18]} position={[-0.6, -0.2, -1.7]}>
                 <meshBasicMaterial color={CONFIG.engineColor} toneMapped={false} />
            </Sphere>
        </group>
    );
}

function SceneContent() {
    return (
        <group>
            {/* Top Left: React Logo */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
                <ReactLogo position={[-3, 2.5, -4]} />
            </Float>

            {/* Center Right: The Custom Spaceship */}
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={2} floatingRange={[-0.2, 0.2]}>
                <ProceduralSpaceship position={[3, 0, -3]} />
            </Float>

            {/* Bottom Left: Hologram Globe */}
            <Float speed={1} rotationIntensity={1} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
                <HologramGlobe position={[-2.5, -3, -5]} />
            </Float>

            <Sparkles count={40} scale={10} size={3} speed={0.4} opacity={0.4} color="#ffffff" position={[0, 0, -8]} />
        </group>
    );
}

function Lights() {
    return (
        <>
            <ambientLight intensity={0.1} />
            <spotLight position={[-10, 10, 5]} angle={0.5} penumbra={1} intensity={4} color={CONFIG.reactColor} distance={20} />
            <spotLight position={[10, -10, 5]} angle={0.5} penumbra={1} intensity={4} color={CONFIG.globeColor} distance={20} />
            <spotLight position={[0, 15, 0]} angle={0.3} penumbra={0.5} intensity={2} color="#ffffff" />
        </>
    );
}

export default function GlobalCanvas() {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-black">
            <Canvas
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 8], fov: 35 }}
                gl={{ antialias: false, powerPreference: "high-performance", alpha: false, stencil: false, depth: true }}
            >
                <Lights />
                <Environment preset="city" blur={0.8} /> 
                <Stars radius={60} depth={50} count={4000} factor={4} saturation={0} fade speed={1} />

                <EffectComposer disableNormalPass>
                    <Bloom luminanceThreshold={0.9} mipmapBlur intensity={1.5} radius={0.5} />
                    <Noise opacity={0.04} />
                    <Vignette eskil={false} offset={0.1} darkness={1.1} />
                </EffectComposer>
                
                {/* No Suspense needed anymore since everything is procedural! */}
                <SceneContent />
            </Canvas>
        </div>
    );
}