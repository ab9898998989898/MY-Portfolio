"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Code, Rocket, BarChart3, Globe } from "lucide-react";
import Tilt from "react-parallax-tilt";

const services = [
    {
        title: "Full Stack Development",
        icon: <Code size={40} className="text-neon-cyan" />,
        description: "End-to-end web application development.",
        features: ["React/Next.js Architecture", "Database Design (SQL/NoSQL)", "API Development (REST/GraphQL)", "Payment Gateway Integration"]
    },
    {
        title: "Performance Optimization",
        icon: <Rocket size={40} className="text-purple-500" />,
        description: "Making the web fly.",
        features: ["Core Web Vitals Tuning", "Server-Side Rendering (SSR)", "Image Optimization", "Code Splitting & Bundle Analysis"]
    },
    {
        title: "Data-Driven Marketing",
        icon: <BarChart3 size={40} className="text-green-400" />,
        description: "Growth hacking strategies that work.",
        features: ["SEO (Technical & Content)", "Google Ads Management", "Conversion Rate Optimization", "Analytics Dashboard Setup"]
    },
    {
        title: "3D Web Experiences",
        icon: <Globe size={40} className="text-blue-400" />,
        description: "Immersive visuals for the modern web.",
        features: ["Three.js / R3F Scenes", "GLSL Shaders", "Scroll-based Animations", "Interactive 3D Product Viewers"]
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold font-space mb-16 text-center">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">Services</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500}>
                            <GlassCard className="h-full flex flex-col items-center text-center p-8 border-t-2 border-t-white/10 hover:border-t-neon-cyan transition-all duration-300">
                                <div className="mb-6 p-4 bg-white/5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold font-space mb-4">{service.title}</h3>
                                <p className="text-gray-400 text-sm mb-6">{service.description}</p>

                                <ul className="text-left w-full space-y-2">
                                    {service.features.map((f, i) => (
                                        <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                                            <span className="text-neon-cyan">▪</span> {f}
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
}
