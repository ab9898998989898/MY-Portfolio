"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink, Award } from "lucide-react";

const certifications = [
    {
        title: "Meta Front-End Developer",
        issuer: "Meta (Facebook)",
        date: "2024",
        link: "#",
        color: "text-blue-400",
        description: "Professional certification covering React, JavaScript, and modern frontend development practices."
    },
    {
        title: "Google Data Analytics",
        issuer: "Google",
        date: "2023",
        link: "#",
        color: "text-yellow-400",
        description: "Data analysis, visualization, and insights generation using industry-standard tools."
    },
    {
        title: "Full-Stack Web Development",
        issuer: "Online Learning Platform",
        date: "2023",
        link: "#",
        color: "text-green-400",
        description: "Comprehensive training in MERN stack development, from MongoDB to React."
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 relative z-10" aria-labelledby="certifications-heading">
            <div className="container mx-auto px-6">
                <h2 id="certifications-heading" className="text-4xl md:text-5xl font-bold font-space mb-4 text-center">
                    Certifications & <span className="text-neon-cyan">Credentials</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    Professional certifications that validate my skills and commitment to continuous learning.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <GlassCard key={index} className="group relative overflow-hidden text-center hover:scale-105 transition-transform duration-300">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity" aria-hidden="true">
                                <Award size={100} />
                            </div>

                            <div className="w-16 h-16 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center border border-glass-border group-hover:border-neon-cyan transition-colors">
                                <Award className={cert.color} size={32} aria-hidden="true" />
                            </div>

                            <h3 className="text-xl font-bold font-space mb-2">{cert.title}</h3>
                            <p className="text-gray-400 mb-1">{cert.issuer}</p>
                            <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
                            <p className="text-xs text-gray-500 mb-6 px-4">{cert.description}</p>

                            <a
                                href={cert.link}
                                className="inline-flex items-center gap-2 text-sm text-neon-cyan hover:underline opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                                aria-label={`Verify ${cert.title} credential`}
                            >
                                Verify Credential <ExternalLink size={14} aria-hidden="true" />
                            </a>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
