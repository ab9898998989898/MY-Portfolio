"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Stars(props: any) {
    const ref = useRef<THREE.Points>(null!);

    // Generate random points in a sphere
    const [positions, colors] = useMemo(() => {
        const count = 5000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const r = 10 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            let x = r * Math.sin(phi) * Math.cos(theta);
            let y = r * Math.sin(phi) * Math.sin(theta);
            let z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Neon colors: mix of cyan and purple
            const color = new THREE.Color();
            color.setHSL(Math.random() > 0.5 ? 0.5 : 0.8, 1, 0.5); // Cyan or Purple-ish
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return [positions, colors];
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

export function HeroBackground() {
    return (
        <div className="absolute inset-0 w-full h-full -z-10 bg-deep-black">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
            {/* Gradient Overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-deep-black opacity-80 pointer-events-none" />
        </div>
    );
}
