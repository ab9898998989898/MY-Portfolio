"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Code, Rocket, Search, Globe } from "lucide-react";
import Tilt from "react-parallax-tilt";

const services = [
    {
        title: "Full-Stack Web Development",
        icon: <Code size={40} className="text-neon-cyan" aria-hidden="true" />,
        description: "Complete web application development from frontend to backend.",
        features: [
            "React.js & Next.js Applications",
            "Node.js & Express.js Backend",
            "MongoDB Database Design",
            "RESTful API Development",
            "Authentication & Security"
        ]
    },
    {
        title: "Frontend Development",
        icon: <Globe size={40} className="text-blue-400" aria-hidden="true" />,
        description: "Beautiful, responsive user interfaces that engage visitors.",
        features: [
            "React Component Development",
            "TypeScript Integration",
            "Responsive Design (Mobile-First)",
            "UI/UX Implementation",
            "Tailwind CSS Styling"
        ]
    },
    {
        title: "Performance Optimization",
        icon: <Rocket size={40} className="text-purple-500" aria-hidden="true" />,
        description: "Making your website fast and SEO-ready.",
        features: [
            "Core Web Vitals Optimization",
            "Image & Asset Optimization",
            "Code Splitting & Lazy Loading",
            "Server-Side Rendering (SSR)",
            "Lighthouse Score Improvement"
        ]
    },
    {
        title: "3D Web Experiences",
        icon: <Search size={40} className="text-green-400" aria-hidden="true" />,
        description: "Immersive 3D visuals that make your site stand out.",
        features: [
            "Three.js / React Three Fiber",
            "Interactive 3D Elements",
            "Scroll-based Animations",
            "GSAP Animation Integration",
            "Performance-Optimized 3D"
        ]
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative z-10" aria-labelledby="services-heading">
            <div className="container mx-auto px-6">
                <h2 id="services-heading" className="text-4xl md:text-5xl font-bold font-space mb-4 text-center">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">Services</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    I offer comprehensive web development services to help bring your vision to life. Here's how I can help you.
                </p>

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
                                            <span className="text-neon-cyan" aria-hidden="true">▪</span> {f}
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        </Tilt>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-6">
                        Have a project in mind? Let's discuss how I can help.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all duration-300"
                        aria-label="Get in touch to discuss your project"
                    >
                        Get a Free Consultation
                    </a>
                </div>
            </div>
        </section>
    );
}
