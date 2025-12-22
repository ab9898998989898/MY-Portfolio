"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github, Layers, Zap } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Interactive 3D Portfolio",
        description: "A cutting-edge immersive portfolio website featuring 3D animations, smooth scroll experiences, and AI-powered chatbot integration. Built with performance optimization ensuring fast load times despite complex visual effects.",
        techStack: ["Next.js", "React Three Fiber", "GSAP", "Tailwind CSS", "TypeScript"],
        features: [
            "Procedural 3D background with physics-based materials",
            "AI-powered chatbot for visitor interaction",
            "Butter-smooth Lenis scroll integration",
            "Fully responsive glassmorphism UI design",
            "SEO-optimized with schema markup"
        ],
        image: "https://placehold.co/800x600/050505/00f3ff?text=3D+Portfolio",
        preview: "#",
        github: "#",
        alt: "Interactive 3D Portfolio Website Preview"
    },
    {
        title: "Full-Stack Admin Dashboard",
        description: "A comprehensive admin panel built with the MERN stack, featuring real-time data visualization, user management, and role-based access control. Designed for scalability and ease of use.",
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js"],
        features: [
            "Real-time data updates via WebSocket",
            "Role-based access control (RBAC)",
            "Interactive charts and analytics",
            "User management with CRUD operations",
            "Dark mode optimized interface"
        ],
        image: "https://placehold.co/800x600/050505/bc13fe?text=Admin+Dashboard",
        preview: "#",
        github: "#",
        alt: "Full-Stack Admin Dashboard Preview"
    },
    {
        title: "AI-Powered Task Manager",
        description: "A smart task management application leveraging AI to help users organize, prioritize, and complete tasks efficiently. Features include natural language processing and intelligent task suggestions.",
        techStack: ["Next.js", "TypeScript", "OpenAI API", "MongoDB", "NextAuth"],
        features: [
            "AI-powered task prioritization",
            "Natural language task creation",
            "Collaborative workspaces for teams",
            "Progress tracking and analytics",
            "Secure authentication with NextAuth"
        ],
        image: "https://placehold.co/800x600/050505/00ff00?text=AI+Task+Manager",
        preview: "#",
        github: "#",
        alt: "AI-Powered Task Management Application Preview"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative z-10" aria-labelledby="projects-heading">
            <div className="container mx-auto px-6">
                <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold font-space mb-4 text-center">
                    Featured <span className="text-neon-cyan">Projects</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-20">
                    A selection of web applications and experiences I've designed and developed from concept to deployment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <GlassCard key={index} className="flex flex-col h-full group overflow-hidden hover:border-neon-cyan/50 transition-colors duration-500">
                            <div className="relative h-56 w-full mb-6 rounded-xl overflow-hidden border border-white/5">
                                <Image
                                    src={project.image}
                                    alt={project.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
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
                                        <Layers size={14} aria-hidden="true" /> Tech Stack
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
                                        <Zap size={14} aria-hidden="true" /> Key Features
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                                                <span className="text-neon-purple mt-0.5" aria-hidden="true">▪</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-auto border-t border-white/10 pt-6">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex-1 gap-2 hover:bg-neon-cyan hover:text-black hover:border-neon-cyan"
                                    aria-label={`View live demo of ${project.title}`}
                                >
                                    <ExternalLink size={16} aria-hidden="true" /> Live Demo
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="flex-1 gap-2"
                                    aria-label={`View source code of ${project.title} on GitHub`}
                                >
                                    <Github size={16} aria-hidden="true" /> Code
                                </Button>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
