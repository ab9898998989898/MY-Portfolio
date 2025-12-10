"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "CTO, FinTech Global",
        quote: "Abdullah isn't just a developer; he's a product visionary. We hired him to refactor our dashboard, and he ended up redesigning our entire user workflow. The result? A 40% drop in churn rate.",
        company: "FinTech Global"
    },
    {
        name: "David Chen",
        role: "Founder, StartUp Inc",
        quote: "I've worked with dozens of engineers, but none have the eye for detail that Abdullah does. His ability to blend 3D visuals with clean, accessible DOM elements is unmatched in the industry.",
        company: "StartUp Inc"
    },
    {
        name: "Elena Rodriguez",
        role: "Marketing Director, OmniCorp",
        quote: "We needed a landing page that would go viral. Abdullah delivered a 3D masterpiece that won us Site of the Day on Awwwards. He is technically brilliant and incredibly easy to communicate with.",
        company: "OmniCorp"
    },
    {
        name: "Michael Chang",
        role: "Product Manager, SaaSY",
        quote: "Fast. Reliable. Innovative. Abdullah helped us integrate AI into our legacy codebase in under two weeks. His knowledge of the Gemini API and Next.js Server Actions saved us months of R&D.",
        company: "SaaSY"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold font-space mb-20 text-center">
                    Client <span className="text-neon-cyan">Endorsements</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t, index) => (
                        <GlassCard key={index} className="p-8 relative">
                            <Quote className="text-neon-purple mb-6 opacity-50" size={40} />
                            <p className="text-gray-300 text-lg leading-relaxed italic mb-8">
                                "{t.quote}"
                            </p>
                            <div>
                                <h4 className="text-xl font-bold font-space text-white">{t.name}</h4>
                                <div className="text-neon-cyan font-mono text-sm">{t.role}</div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
