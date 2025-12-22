"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Startup Founder",
        quote: "Abdullah delivered exactly what we needed—a fast, beautiful web application that our users love. His attention to detail and clear communication made the entire process smooth. Highly recommended!",
        company: "TechStart Inc"
    },
    {
        name: "Michael Chen",
        role: "Product Manager",
        quote: "Working with Abdullah was a great experience. He took our vague ideas and turned them into a polished, professional website. His expertise in React and Next.js really shows in the final product.",
        company: "Digital Solutions"
    },
    {
        name: "Emily Rodriguez",
        role: "Marketing Director",
        quote: "We needed a landing page that would convert visitors into customers. Abdullah created a stunning 3D experience that exceeded our expectations. Our conversion rate improved significantly!",
        company: "GrowthCo"
    },
    {
        name: "David Park",
        role: "Small Business Owner",
        quote: "Abdullah helped us modernize our outdated website. The new site is fast, mobile-friendly, and looks amazing. He was responsive, professional, and delivered on time within budget.",
        company: "Local Services Pro"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 relative z-10" aria-labelledby="testimonials-heading">
            <div className="container mx-auto px-6">
                <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold font-space mb-4 text-center">
                    Client <span className="text-neon-cyan">Testimonials</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-20">
                    Don't just take my word for it—here's what clients say about working with me.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t, index) => (
                        <GlassCard key={index} className="p-8 relative">
                            <Quote className="text-neon-purple mb-6 opacity-50" size={40} aria-hidden="true" />
                            <blockquote>
                                <p className="text-gray-300 text-lg leading-relaxed italic mb-8">
                                    "{t.quote}"
                                </p>
                                <footer>
                                    <cite className="not-italic">
                                        <span className="text-xl font-bold font-space text-white block">{t.name}</span>
                                        <span className="text-neon-cyan font-mono text-sm">{t.role}, {t.company}</span>
                                    </cite>
                                </footer>
                            </blockquote>
                        </GlassCard>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-6">
                        Ready to become my next success story?
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-4 border-2 border-neon-cyan text-neon-cyan font-bold rounded-full hover:bg-neon-cyan hover:text-black transition-all duration-300"
                        aria-label="Start your project with Abdullah"
                    >
                        Start Your Project Today
                    </a>
                </div>
            </div>
        </section>
    );
}
