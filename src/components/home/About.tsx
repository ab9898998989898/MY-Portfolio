"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Cpu, Globe, Zap, Heart } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold font-space mb-16 text-center">
                    Behind the <span className="text-neon-cyan">Code</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Main Bio */}
                    <div className="space-y-8">
                        <GlassCard className="p-8 border-l-4 border-l-neon-purple">
                            <h3 className="text-2xl font-bold font-space mb-4 flex items-center gap-3">
                                <Cpu className="text-neon-purple" /> The Architect's Mindset
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                I don't just write code; I engineer digital ecosystems. My journey began with a deep curiosity for how the web works, which quickly evolved into an obsession with performance, scalability, and user-centric design. I believe that a website should be more than a static brochure—it should be an immersive application that feels alive, responding to every interaction with fluid precision.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Every line of code I write is optimized for speed and maintainability. Whether I'm architecting a complex microservices backend using Node.js or tweaking the easing curve of a GSAP animation for that perfect "feel," my goal remains the same: <strong>Perfection</strong>. I treat development not as a job, but as a craft, ensuring that the underlying architecture is as beautiful as the visible interface.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                In an era where user attention spans are measured in milliseconds, performance is not a luxury—it's a necessity. I specialize in optimizing React rendering cycles, minimizing bundle sizes, and leveraging edge computing to ensure content is delivered instantly, anywhere in the world.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 border-l-4 border-l-neon-cyan">
                            <h3 className="text-2xl font-bold font-space mb-4 flex items-center gap-3">
                                <Globe className="text-neon-cyan" /> Focus on Web3 & AI Identity
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                The web is evolving, and I am at the forefront of this shift. I am deeply invested in the intersection of <strong>Artificial Intelligence</strong> and <strong>Web Development</strong>. Integrating LLMs like Gemini and OpenAI into user interfaces isn't just a trend for me—it's the standard for the next generation of apps.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Beyond traditional web apps, I explore the decentralized web. From smart contract integration to building dApps that feel as smooth as Web2 counterparts, I bridge the gap between complex blockchain protocols and intuitive user experiences. My mission is to make the future of technology accessible, engaging, and undeniably human.
                            </p>
                        </GlassCard>
                    </div>

                    {/* Stats / Philosophy */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <GlassCard className="p-6 text-center group hover:border-yellow-400/50 transition-colors">
                                <Zap className="mx-auto text-yellow-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                                <div className="text-4xl font-bold font-space text-white mb-2">3+</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider">Years of Intensive R&D</div>
                            </GlassCard>
                            <GlassCard className="p-6 text-center group hover:border-red-500/50 transition-colors">
                                <Heart className="mx-auto text-red-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
                                <div className="text-4xl font-bold font-space text-white mb-2">50+</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider">Successful Deployments</div>
                            </GlassCard>
                        </div>

                        <GlassCard className="p-8">
                            <h4 className="text-xl font-bold font-space mb-6 border-b border-white/10 pb-4">Core Values & Philosophy</h4>
                            <ul className="space-y-6 text-gray-300">
                                <li className="flex items-start gap-4">
                                    <span className="text-neon-cyan mt-1 text-lg">▹</span>
                                    <div>
                                        <div className="font-bold text-white mb-1">User-Obsessed Design</div>
                                        <span className="text-sm text-gray-400">If it's not intuitive, it's not finished. I obsess over the micro-interactions that make a user smile.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-neon-cyan mt-1 text-lg">▹</span>
                                    <div>
                                        <div className="font-bold text-white mb-1">Performance First</div>
                                        <span className="text-sm text-gray-400">I treat 60fps as a requirement, not a suggestion. Heavy visuals shouldn't mean slow load times.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-neon-cyan mt-1 text-lg">▹</span>
                                    <div>
                                        <div className="font-bold text-white mb-1">Continuous Adaptation</div>
                                        <span className="text-sm text-gray-400">The tech stack changes every week. I adapt faster, constantly learning new paradigms.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-neon-cyan mt-1 text-lg">▹</span>
                                    <div>
                                        <div className="font-bold text-white mb-1">Clean Architecture</div>
                                        <span className="text-sm text-gray-400">writing self-documenting code that scales to millions of users without technical debt.</span>
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
