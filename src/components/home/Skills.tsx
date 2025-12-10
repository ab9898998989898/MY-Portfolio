"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Code2, Server, Layout, Database, Terminal, Cpu } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Engineering",
        icon: <Layout className="text-neon-cyan" size={32} />,
        skills: [
            "React 19 & Next.js 16 (Server Components)",
            "Three.js / React Three Fiber (3D)",
            "GSAP (Advanced Animations)",
            "Tailwind CSS v4 & Framer Motion",
            "TypeScript (Strict Typing)",
            "State Management (Zustand, Redux)"
        ],
        description: " crafting pixel-perfect, responsive, and accessible user interfaces. I specialize in the 'React Ecosystem', leveraging the latest features like Server Actions and Suspense to build blazing-fast apps."
    },
    {
        title: "Backend Architecture",
        icon: <Server className="text-neon-purple" size={32} />,
        skills: [
            "Node.js & Express.js",
            "Bun & Hono (High Performance)",
            "PostgreSQL & MongoDB (Aggregation)",
            "Redis (Caching & Pub/Sub)",
            "GraphQL & REST API Design",
            "Authentication (Auth.js / Clerk)"
        ],
        description: "Building robust, scalable server-side systems. I focus on database optimization, API security, and microservices architecture to ensure your application can scale to millions of users."
    },
    {
        title: "DevOps & Cloud",
        icon: <Terminal className="text-green-400" size={32} />,
        skills: [
            "Docker & Kubernetes",
            "AWS (EC2, S3, Lambda)",
            "CI/CD Pipelines (GitHub Actions)",
            "Vercel & Netlify Deployment",
            "Linux System Administration",
            "Nginx & Reverse Proxies"
        ],
        description: "Ensuring smooth deployment and operation. I automate everything from testing to production builds, ensuring 99.9% uptime and rapid iteration cycles."
    },
    {
        title: "Emerging Tech",
        icon: <Cpu className="text-yellow-400" size={32} />,
        skills: [
            "LLM Integration (Gemini, OpenAI)",
            "Vector Databases (Pinecone)",
            "Web3 & Smart Contracts (Solidity)",
            "WebAssembly (Performance)",
            "Edge Computing",
            "IoT Interfacing"
        ],
        description: "Pushing the boundaries of what web apps can do. I actively experiment with AI agents and decentralized technologies to build the internet of tomorrow."
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold font-space mb-4 text-center">
                    Technical <span className="text-neon-purple">Arsenal</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    A comprehensive overview of the tools and technologies I use to bring ideas to life.
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

                            <div className="flex flex-wrap gap-x-4 gap-y-3">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm font-mono text-gray-300">
                                        <span className="text-neon-cyan">▹</span>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
