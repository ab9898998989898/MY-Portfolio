"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Cpu, Globe, Zap, Heart } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 relative z-10" aria-labelledby="about-heading">
            <div className="container mx-auto px-6">
                <h2 id="about-heading" className="text-4xl md:text-5xl font-bold font-space mb-16 text-center">
                    About <span className="text-neon-cyan">Me</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Main Bio */}
                    <div className="space-y-8">
                        <GlassCard className="p-8 border-l-4 border-l-neon-purple">
                            <h3 className="text-2xl font-bold font-space mb-4 flex items-center gap-3">
                                <Cpu className="text-neon-purple" aria-hidden="true" /> What I Do
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                I'm <strong className="text-white">Abdullah Nadeem</strong>, a passionate{" "}
                                <strong className="text-neon-cyan">Full-Stack Web Developer</strong> with expertise in the{" "}
                                <strong>MERN Stack</strong>. I design and develop modern, high-performance web applications
                                with a strong focus on user experience, scalability, and clean architecture.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                My approach combines technical excellence with a deep understanding of user needs.
                                Whether I'm building complex dashboards, AI-powered applications, or interactive
                                portfolios with 3D elements, I deliver complete, production-ready solutions that
                                exceed expectations.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                I specialize in <strong className="text-white">React.js</strong>,{" "}
                                <strong className="text-white">Next.js</strong>,{" "}
                                <strong className="text-white">TypeScript</strong>,{" "}
                                <strong className="text-white">Node.js</strong>, and{" "}
                                <strong className="text-white">MongoDB</strong>—the technologies that power
                                today's most successful web applications.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 border-l-4 border-l-neon-cyan">
                            <h3 className="text-2xl font-bold font-space mb-4 flex items-center gap-3">
                                <Globe className="text-neon-cyan" aria-hidden="true" /> My Mission
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                I believe that great web applications should be more than just functional—they
                                should be <strong className="text-white">fast</strong>,{" "}
                                <strong className="text-white">accessible</strong>, and{" "}
                                <strong className="text-white">delightful to use</strong>. Every line of code
                                I write is optimized for performance and maintainability.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                I'm constantly exploring emerging technologies like AI integration, 3D web
                                experiences with Three.js, and advanced animation techniques to create
                                cutting-edge applications that stand out in today's competitive landscape.
                            </p>
                        </GlassCard>
                    </div>

                    {/* Stats / Philosophy */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <GlassCard className="p-6 text-center group hover:border-yellow-400/50 transition-colors">
                                <Zap className="mx-auto text-yellow-400 mb-4 group-hover:scale-110 transition-transform" size={32} aria-hidden="true" />
                                <div className="text-4xl font-bold font-space text-white mb-2">3+</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider">Years of Experience</div>
                            </GlassCard>
                            <GlassCard className="p-6 text-center group hover:border-red-500/50 transition-colors">
                                <Heart className="mx-auto text-red-500 mb-4 group-hover:scale-110 transition-transform" size={32} aria-hidden="true" />
                                <div className="text-4xl font-bold font-space text-white mb-2">25+</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider">Projects Completed</div>
                            </GlassCard>
                        </div>

                        <GlassCard className="p-8">
                            <h3 className="text-xl font-bold font-space mb-6 border-b border-white/10 pb-4">
                                Why Work With Me
                            </h3>
                            <ul className="space-y-6 text-gray-300">
                                <li className="flex items-start gap-4">
                                    <span className="text-neon-cyan mt-1 text-lg" aria-hidden="true">▹</span>
                                    <div>
                                        <div className="font-bold text-white mb-1">Quality-Focused Development</div>
                                        <span className="text-sm text-gray-400">I write clean, maintainable code that's built to scale and easy to understand.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-neon-cyan mt-1 text-lg" aria-hidden="true">▹</span>
                                    <div>
                                        <div className="font-bold text-white mb-1">Performance Obsessed</div>
                                        <span className="text-sm text-gray-400">Fast load times and smooth interactions are non-negotiable in every project I build.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-neon-cyan mt-1 text-lg" aria-hidden="true">▹</span>
                                    <div>
                                        <div className="font-bold text-white mb-1">Clear Communication</div>
                                        <span className="text-sm text-gray-400">I keep you updated throughout the project and explain technical concepts in plain language.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-neon-cyan mt-1 text-lg" aria-hidden="true">▹</span>
                                    <div>
                                        <div className="font-bold text-white mb-1">End-to-End Solutions</div>
                                        <span className="text-sm text-gray-400">From frontend to backend to deployment—I handle the complete development lifecycle.</span>
                                    </div>
                                </li>
                            </ul>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
