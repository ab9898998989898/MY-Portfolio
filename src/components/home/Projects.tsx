"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github, Layers, Zap } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Next-Gen Portfolio",
        description: "A cutting-edge immersive 3D personal website that pushes the limits of modern browser rendering. This project serves as a comprehensive case study in performance engineering, demonstrating that cinematic web experiences can be both visually stunning and highly performant across devices.",
        techStack: ["Next.js 16", "Three.js / R3F", "GSAP ScrollTrigger", "Tailwind v4", "TypeScript"],
        features: [
            "Procedural 3D Background with Physic-based materials",
            "Context-aware AI Chatbot with Offline Fallback Mode",
            "Butter-smooth Lenis Scroll integration for premium feel",
            "Fully responsive Glassmorphism UI with reactive tilt",
            "Dynamic lighting system reacting to user interaction"
        ],
        image: "https://placehold.co/800x600/050505/00f3ff?text=Next-Gen+Experience",
        preview: "#",
        github: "#"
    },
    {
        title: "E-Commerce Analytics Hub",
        description: "A centralized, mission-critical command center for high-volume e-commerce brands. This dashboard aggregates disparate data streams from Shopify, Google Analytics, and Facebook Ads into a single source of truth, enabling real-time decision making for stakeholders.",
        techStack: ["React 19", "Node.js (NestJS)", "MongoDB Aggregations", "Redis", "Socket.io"],
        features: [
            "Real-time profit tracking via synchronized WebSockets",
            "AI-powered predictive inventory forecasting algorithms",
            "Custom report generator with automated PDF export",
            "Granular Role-based access control (RBAC)",
            "Dark mode tailored for data visualization efficiency"
        ],
        image: "https://placehold.co/800x600/050505/bc13fe?text=Analytics+Hub",
        preview: "#",
        github: "#"
    },
    {
        title: "SaaS Content Generator",
        description: "An innovative AI-powered writing assistant designed specifically for B2B SaaS marketing teams. Unlike generic tools, it understands complex brand voices and technical nuance, generating SEO-optimized articles that require minimal human editing.",
        techStack: ["Next.js 14", "OpenAI GPT-4 API", "Stripe Connect", "PostgreSQL", "Prisma"],
        features: [
            "Advanced Voice Cloning for consistent brand identity",
            "Automatic NLP-based SEO keyword insertion",
            "Multi-tenant architecture with isolated workspaces",
            "Usage-based billing via Stripe subscription metering",
            "Collaborative real-time editor for teams"
        ],
        image: "https://placehold.co/800x600/050505/00ff00?text=AI+SaaS+Platform",
        preview: "#",
        github: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold font-space mb-4 text-center">
                    Featured <span className="text-neon-cyan">Masterpieces</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-20">
                    A selection of complex systems and creative experiences I've engineered.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <GlassCard key={index} className="flex flex-col h-full group overflow-hidden hover:border-neon-cyan/50 transition-colors duration-500">
                            <div className="relative h-56 w-full mb-6 rounded-xl overflow-hidden border border-white/5">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-2xl font-bold font-space text-white mb-1">{project.title}</h3>
                                </div>
                            </div>

                            <div className="px-2 flex-grow">
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-xs font-bold text-neon-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Layers size={14} /> Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map(tech => (
                                            <span key={tech} className="text-xs font-mono bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-xs font-bold text-neon-purple uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Zap size={14} /> Key Features
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                                                <span className="text-neon-purple mt-0.5">▪</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-auto border-t border-white/10 pt-6">
                                <Button variant="outline" size="sm" className="flex-1 gap-2 hover:bg-neon-cyan hover:text-black hover:border-neon-cyan">
                                    <ExternalLink size={16} /> Live Demo
                                </Button>
                                <Button variant="ghost" size="sm" className="flex-1 gap-2">
                                    <Github size={16} /> Code
                                </Button>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
