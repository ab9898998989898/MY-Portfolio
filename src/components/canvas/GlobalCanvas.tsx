"use client";

import { useRef, useMemo, Suspense, useEffect, useState } from "react";
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

// --- PERFORMANCE: Check if user prefers reduced motion ---
function useReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return prefersReducedMotion;
}

// --- OPTIMIZED MATERIALS (Reduced samples and resolution) ---
const AerogelMaterial = ({ color }: { color: string }) => (
    <MeshTransmissionMaterial
        backside={false}
        samples={2}           // Reduced from 4 for performance
        resolution={128}      // Reduced from 256 for performance
        thickness={2}
        roughness={0.3}
        anisotropy={0.1}
        chromaticAberration={0.2}  // Reduced from 0.3
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

// --- CUSTOM COMPONENT: PROCEDURAL REACT LOGO (Optimized) ---
function ReactLogo({ position }: { position: [number, number, number] }) {
    const group = useRef<THREE.Group>(null);
    useFrame((state, delta) => {
        if (group.current) group.current.rotation.y += delta * 0.4; // Slightly slower
    });

    // Lower polygon count for torus
    const torusArgs: [number, number, number, number] = [1.2, 0.15, 32, 64]; // Reduced segments

    return (
        <group ref={group} position={position} rotation={[0, 0, Math.PI / 6]}>
            <Sphere args={[0.35, 24, 24]}> {/* Reduced segments from 32 */}
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

// --- CUSTOM COMPONENT: HOLOGRAPHIC GLOBE (Optimized) ---
function HologramGlobe({ position }: { position: [number, number, number] }) {
    const group = useRef<THREE.Group>(null);
    useFrame((state, delta) => {
        if (group.current) group.current.rotation.y -= delta * 0.15; // Slightly slower
    });

    return (
        <group ref={group} position={position} scale={1.5}>
            <Sphere args={[0.9, 24, 24]}> {/* Reduced segments from 32 */}
                <meshBasicMaterial color={CONFIG.globeColor} transparent opacity={0.15} />
            </Sphere>
            <Sphere args={[1, 16, 16]}> {/* Reduced segments from 24 */}
                <meshBasicMaterial color={CONFIG.globeColor} wireframe transparent opacity={0.4} toneMapped={false} />
            </Sphere>
        </group>
    )
}

// --- OPTIMIZED COMPONENT: PROCEDURAL SPACESHIP ---
function ProceduralSpaceship({ position }: { position: [number, number, number] }) {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            const t = state.clock.getElapsedTime();
            group.current.position.y = position[1] + Math.sin(t * 0.8) * 0.15; // Slower, smaller movement
            group.current.rotation.z = Math.sin(t * 0.4) * 0.08;
            group.current.rotation.x = Math.sin(t * 0.15) * 0.04;
        }
    });

    return (
        <group ref={group} position={position} rotation={[0, Math.PI, 0]} scale={0.8}>
            {/* Main Hull - Reduced segments */}
            <Cone args={[0.7, 3, 24]} rotation={[Math.PI / 2, 0, 0]}>
                <TechMaterial color={CONFIG.shipColor} />
            </Cone>

            {/* Cockpit Glass */}
            <Sphere args={[0.35, 16, 16]} position={[0, 0.2, 0.5]}>
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
            <Cylinder args={[0.2, 0.3, 0.5, 16]} position={[0.6, -0.2, -1.5]} rotation={[Math.PI / 2, 0, 0]}>
                <TechMaterial color="#333" />
            </Cylinder>
            <Cylinder args={[0.2, 0.3, 0.5, 16]} position={[-0.6, -0.2, -1.5]} rotation={[Math.PI / 2, 0, 0]}>
                <TechMaterial color="#333" />
            </Cylinder>

            {/* Engine Glow */}
            <Sphere args={[0.18, 12, 12]} position={[0.6, -0.2, -1.7]}>
                <meshBasicMaterial color={CONFIG.engineColor} toneMapped={false} />
            </Sphere>
            <Sphere args={[0.18, 12, 12]} position={[-0.6, -0.2, -1.7]}>
                <meshBasicMaterial color={CONFIG.engineColor} toneMapped={false} />
            </Sphere>
        </group>
    );
}

function SceneContent() {
    return (
        <group>
            {/* Top Left: React Logo */}
            <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8} floatingRange={[-0.08, 0.08]}>
                <ReactLogo position={[-3, 2.5, -4]} />
            </Float>

            {/* Center Right: The Custom Spaceship */}
            <Float speed={1.2} rotationIntensity={0.15} floatIntensity={1.5} floatingRange={[-0.15, 0.15]}>
                <ProceduralSpaceship position={[3, 0, -3]} />
            </Float>

            {/* Bottom Left: Hologram Globe */}
            <Float speed={0.8} rotationIntensity={0.8} floatIntensity={0.4} floatingRange={[-0.08, 0.08]}>
                <HologramGlobe position={[-2.5, -3, -5]} />
            </Float>

            {/* Reduced sparkles for performance */}
            <Sparkles count={20} scale={10} size={2.5} speed={0.3} opacity={0.3} color="#ffffff" position={[0, 0, -8]} />
        </group>
    );
}

function Lights() {
    return (
        <>
            <ambientLight intensity={0.15} />
            {/* Reduced number of spotlights and intensity */}
            <spotLight position={[-10, 10, 5]} angle={0.5} penumbra={1} intensity={3} color={CONFIG.reactColor} distance={20} />
            <spotLight position={[10, -10, 5]} angle={0.5} penumbra={1} intensity={3} color={CONFIG.globeColor} distance={20} />
        </>
    );
}

// Loading fallback for Suspense
function LoadingFallback() {
    return null; // Empty fallback - background loads smoothly
}

export default function GlobalCanvas() {
    const [isMounted, setIsMounted] = useState(false);

    // Only render canvas after component mounts (prevents SSR issues)
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        // Return a placeholder with the same background color
        return (
            <div
                className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-black"
                aria-hidden="true"
            />
        );
    }

    return (
        <div
            className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-black"
            aria-hidden="true"
            role="presentation"
        >
            <Canvas
                dpr={[1, 1.25]}  // Reduced from [1, 1.5] for better mobile performance
                camera={{ position: [0, 0, 8], fov: 35 }}
                gl={{
                    antialias: false,
                    powerPreference: "high-performance",
                    alpha: false,
                    stencil: false,
                    depth: true,
                    failIfMajorPerformanceCaveat: true // Skip on low-end devices
                }}
                frameloop="always" // Consider "demand" for static scenes
            >
                <Suspense fallback={<LoadingFallback />}>
                    <Lights />
                    <Environment preset="city" blur={0.8} />
                    {/* Reduced star count for performance */}
                    <Stars radius={60} depth={50} count={2000} factor={4} saturation={0} fade speed={0.8} />

                    <EffectComposer enableNormalPass={false}>
                        <Bloom luminanceThreshold={0.9} mipmapBlur intensity={1.2} radius={0.4} />
                        <Noise opacity={0.03} />
                        <Vignette eskil={false} offset={0.1} darkness={1.0} />
                    </EffectComposer>

                    <SceneContent />
                </Suspense>
            </Canvas>
        </div>
    );
}