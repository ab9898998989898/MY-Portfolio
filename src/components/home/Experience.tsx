"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlassCard } from "@/components/ui/GlassCard";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        role: "Senior Full Stack Engineer",
        company: "Quantum Leap Tech",
        period: "2023 - Present",
        description: "Leading the architectural vision for enterprise-grade SaaS solutions. I oversee a squad of 8 senior developers, driving best practices in code quality, CI/CD pipelines, and cloud-native deployments.",
        achievements: [
            "Architected a microservices-based analytics platform serving 50k+ daily users.",
            "Reduced AWS infrastructure costs by 40% through serverless optimization.",
            "Implemented real-time data streaming using WebSockets and Redis.",
            "Mentored junior developers, resulting in a 50% decrease in bug reports."
        ],
        stack: "Next.js 14, Node.js, AWS Lambda, Docker, PostgreSQL"
    },
    {
        role: "Lead Digital Strategist & Developer",
        company: "Neon Horizon Agency",
        period: "2021 - 2023",
        description: "Bridged the gap between marketing initiatives and technical execution. Delivered high-conversion web experiences that directly impacted client revenue streams.",
        achievements: [
            "Spearheaded digital transformation campaigns for Fortune 500 clients.",
            "Increased organic traffic by 450% YOY through programmatic SEO.",
            "Built custom internal tools that automated 30% of agency workflow.",
            "Pioneered the agency's expansion into Web3 marketing services."
        ],
        stack: "React, Gatsby, Shopify Liquid, Python Scripts, Google Cloud"
    },
    {
        role: "UI/UX Developer & Freelancer",
        company: "Self-Employed",
        period: "2019 - 2021",
        description: "Delivered bespoke web solutions for global startups with a focus on animation and interaction design. Created award-winning experiences that set clients apart.",
        achievements: [
            "Developed 'Awwwards' recognized animated websites using Three.js.",
            "Created a proprietary e-commerce boilerplate increasing conversions by 40%.",
            "Collaborated directly with founders to translate vision into reality.",
            "Managed full project lifecycles from wireframing to deployment."
        ],
        stack: "Three.js, GSAP, WebGL, Vanilla JS, SCSS"
    },
];

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray(".experience-item");

            items.forEach((item: any) => {
                gsap.from(item, {
                    opacity: 0,
                    x: -50,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
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
        <section id="experience" className="py-20 relative z-10" ref={containerRef}>
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold font-space mb-20 text-center">
                    Professional <span className="text-neon-cyan">Journey</span>
                </h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Center Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-cyan to-neon-purple transform md:-translate-x-1/2 timeline-line opacity-50" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center experience-item ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Card */}
                                <div className="w-full md:w-1/2">
                                    <GlassCard className="p-8 hover:scale-105 transition-transform duration-300 border-l-4 border-l-neon-cyan">
                                        <h3 className="text-2xl font-bold font-space text-white mb-2">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-neon-cyan mb-4 font-mono text-sm">
                                            <Briefcase size={16} />
                                            {exp.company} | {exp.period}
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        {/* Achievements */}
                                        <div className="space-y-2 mb-4">
                                            {exp.achievements.map((item, i) => (
                                                <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                                                    <span className="text-neon-cyan mt-1">▪</span>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Stack */}
                                        <div className="pt-4 border-t border-white/10">
                                            <span className="text-xs font-mono text-neon-purple block mb-1">Tech Stack:</span>
                                            <span className="text-xs text-gray-500">{exp.stack}</span>
                                        </div>
                                    </GlassCard>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white rounded-full border-4 border-neon-cyan transform md:-translate-x-1/2 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,243,255,1)]" />

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
