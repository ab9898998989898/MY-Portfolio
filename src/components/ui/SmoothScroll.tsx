"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        // Loop optimization: Sync Lenis with GSAP
        // This stops Lenis and GSAP from fighting over the main thread
        function update(time: number) {
            lenis.raf(time * 1000);
        }

        gsap.ticker.add(update);

        // Disable lag smoothing in GSAP to prevent jumps during heavy loads
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(update);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
