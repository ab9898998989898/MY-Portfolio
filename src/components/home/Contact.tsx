"use client";

import { Button } from "@/components/ui/Button";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 relative z-10 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative">
                <h2 className="text-5xl md:text-7xl font-bold font-space mb-8 tracking-tight">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Collaborate?</span>
                </h2>

                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-inter">
                    I'm currently available for freelance projects and full-time opportunities.
                    Let's build something extraordinary together.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Button size="lg" className="group text-lg px-8 py-6 rounded-full shadow-[0_0_30px_rgba(188,19,254,0.3)] hover:shadow-[0_0_50px_rgba(188,19,254,0.5)]">
                        Start a Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <a href="mailto:contact@abdullahnadeem.com" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        <Mail size={20} className="group-hover:text-neon-cyan transition-colors" />
                        contact@abdullahnadeem.com
                    </a>
                </div>
            </div>
        </section>
    );
}
