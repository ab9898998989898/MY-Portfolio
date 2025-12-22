"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlassCard } from "@/components/ui/GlassCard";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        role: "Full-Stack Web Developer",
        company: "Freelance / Contract",
        period: "2022 - Present",
        description: "Delivering end-to-end web solutions for clients worldwide. I specialize in building custom MERN stack applications, from initial concept through deployment and maintenance.",
        achievements: [
            "Built 15+ production-ready web applications for diverse clients",
            "Developed interactive portfolios with 3D elements using Three.js",
            "Implemented AI-powered features using OpenAI and Gemini APIs",
            "Achieved 95%+ client satisfaction through clear communication"
        ],
        stack: "Next.js, React, Node.js, MongoDB, TypeScript, Tailwind CSS"
    },
    {
        role: "Frontend Developer",
        company: "Web Development Projects",
        period: "2021 - 2022",
        description: "Focused on creating responsive, user-friendly interfaces with modern JavaScript frameworks. Developed expertise in React ecosystem and performance optimization.",
        achievements: [
            "Mastered React.js, Next.js, and TypeScript development",
            "Built reusable component libraries for faster development",
            "Implemented GSAP and Framer Motion animations",
            "Optimized Core Web Vitals for improved SEO performance"
        ],
        stack: "React, JavaScript, CSS3, GSAP, Tailwind CSS"
    },
    {
        role: "Web Development Student",
        company: "Self-Taught & Online Courses",
        period: "2020 - 2021",
        description: "Intensive self-study period focusing on full-stack web development fundamentals. Completed multiple certifications and built foundational projects.",
        achievements: [
            "Completed Meta Front-End Developer certification",
            "Built first portfolio websites and small applications",
            "Learned HTML, CSS, JavaScript, and React basics",
            "Developed problem-solving and debugging skills"
        ],
        stack: "HTML, CSS, JavaScript, React Basics, Git"
    },
];

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray(".experience-item");

            items.forEach((item: unknown) => {
                gsap.from(item as Element, {
                    opacity: 0,
                    x: -50,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item as Element,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                })
            });

            gsap.from(".timeline-line", {
                height: 0,
                duration: 1.5,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" className="py-20 relative z-10" ref={containerRef} aria-labelledby="experience-heading">
            <div className="container mx-auto px-6">
                <h2 id="experience-heading" className="text-4xl md:text-5xl font-bold font-space mb-20 text-center">
                    My <span className="text-neon-cyan">Journey</span>
                </h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Center Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-cyan to-neon-purple transform md:-translate-x-1/2 timeline-line opacity-50" aria-hidden="true" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center experience-item ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Card */}
                                <div className="w-full md:w-1/2">
                                    <GlassCard className="p-8 hover:scale-105 transition-transform duration-300 border-l-4 border-l-neon-cyan">
                                        <h3 className="text-2xl font-bold font-space text-white mb-2">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-neon-cyan mb-4 font-mono text-sm">
                                            <Briefcase size={16} aria-hidden="true" />
                                            <span>{exp.company} | {exp.period}</span>
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        {/* Achievements */}
                                        <ul className="space-y-2 mb-4">
                                            {exp.achievements.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                                                    <span className="text-neon-cyan mt-1" aria-hidden="true">▪</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Stack */}
                                        <div className="pt-4 border-t border-white/10">
                                            <span className="text-xs font-mono text-neon-purple block mb-1">Tech Stack:</span>
                                            <span className="text-xs text-gray-500">{exp.stack}</span>
                                        </div>
                                    </GlassCard>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white rounded-full border-4 border-neon-cyan transform md:-translate-x-1/2 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,243,255,1)]" aria-hidden="true" />

                                {/* Empty Space for Grid */}
                                <div className="hidden md:block w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
