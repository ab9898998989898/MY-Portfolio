"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";

export default function Hero() {
    const comp = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                delay: 0.2,
            })
                .from(subtitleRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power4.out",
                }, "-=1.2")
                .from(btnRef.current, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.5)",
                }, "-=0.8");

        }, comp);

        return () => ctx.revert();
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            ref={comp}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
            aria-label="Hero section introducing Abdullah Nadeem"
        >
            {/* 3D Background is now Global */}

            <div className="container px-6 relative z-10 text-center">
                <h1
                    ref={titleRef}
                    className="text-6xl md:text-8xl font-bold font-space bg-gradient-to-r from-white via-neon-cyan to-neon-purple bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                >
                    Abdullah Nadeem
                </h1>

                <p
                    ref={subtitleRef}
                    className="text-xl md:text-2xl text-gray-300 mb-10 font-inter max-w-3xl mx-auto leading-relaxed"
                >
                    I'm a <strong className="text-white">Full-Stack Web Developer</strong> specializing in the{" "}
                    <strong className="text-neon-cyan">MERN Stack</strong> and{" "}
                    <strong className="text-neon-cyan">React.js</strong>. I design and build modern,{" "}
                    high-performance web applications with clean architecture, exceptional user experiences,{" "}
                    and SEO-friendly foundations.{" "}
                    <span className="text-neon-cyan font-semibold block mt-4">
                        Let's bring your vision to life.
                    </span>
                </p>

                <div ref={btnRef} className="flex gap-4 justify-center flex-wrap">
                    <Button
                        size="lg"
                        className="shadow-[0_0_20px_rgba(0,243,255,0.3)]"
                        onClick={() => scrollToSection("projects")}
                        aria-label="View my projects"
                    >
                        View My Projects
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => scrollToSection("contact")}
                        aria-label="Contact me or hire me"
                    >
                        Hire Me
                    </Button>
                </div>
            </div>
        </section>
    );
}
