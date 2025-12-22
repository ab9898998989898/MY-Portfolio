"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Code2, Server, Layout, Database, Terminal, Wrench } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: <Layout className="text-neon-cyan" size={32} aria-hidden="true" />,
        skills: [
            "React.js & Next.js",
            "TypeScript & JavaScript (ES6+)",
            "HTML5 & CSS3",
            "Tailwind CSS",
            "GSAP & Framer Motion",
            "Three.js / React Three Fiber"
        ],
        description: "I craft pixel-perfect, responsive user interfaces with React and Next.js. From interactive 3D experiences to smooth animations, I build frontends that users love."
    },
    {
        title: "Backend Development",
        icon: <Server className="text-neon-purple" size={32} aria-hidden="true" />,
        skills: [
            "Node.js & Express.js",
            "RESTful API Design",
            "MongoDB & Mongoose",
            "NextAuth & Supabase",
            "JWT Authentication",
            "API Integration"
        ],
        description: "I build robust, scalable server-side systems using Node.js and Express. My APIs are secure, well-documented, and designed for performance."
    },
    {
        title: "Database & Storage",
        icon: <Database className="text-green-400" size={32} aria-hidden="true" />,
        skills: [
            "MongoDB (NoSQL)",
            "Mongoose ODM",
            "Database Schema Design",
            "Data Modeling",
            "Query Optimization",
            "Supabase"
        ],
        description: "I design efficient database schemas and implement data solutions that scale. From complex queries to data modeling, I ensure your data is organized and accessible."
    },
    {
        title: "Tools & Workflow",
        icon: <Wrench className="text-yellow-400" size={32} aria-hidden="true" />,
        skills: [
            "Git & GitHub",
            "Docker",
            "Vercel Deployment",
            "VS Code",
            "Postman / API Testing",
            "npm / pnpm"
        ],
        description: "I use modern development tools and workflows to ensure efficient collaboration, version control, and seamless deployments to production."
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative z-10" aria-labelledby="skills-heading">
            <div className="container mx-auto px-6">
                <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold font-space mb-4 text-center">
                    Technical <span className="text-neon-purple">Skills</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    A comprehensive overview of the technologies and tools I use to build modern, high-performance web applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <GlassCard key={index} className="p-8 hover:bg-white/5 transition-colors duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold font-space">{category.title}</h3>
                            </div>

                            <p className="text-gray-400 mb-6 leading-relaxed border-b border-white/10 pb-6">
                                {category.description}
                            </p>

                            <ul className="flex flex-wrap gap-x-4 gap-y-3">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm font-mono text-gray-300">
                                        <span className="text-neon-cyan" aria-hidden="true">▹</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
