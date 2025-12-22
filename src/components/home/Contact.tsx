"use client";

import { Button } from "@/components/ui/Button";
import { Mail, ArrowRight, MessageSquare, Calendar } from "lucide-react";

export default function Contact() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section id="contact" className="py-32 relative z-10 overflow-hidden" aria-labelledby="contact-heading">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/20 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto px-6 text-center relative">
                <h2 id="contact-heading" className="text-5xl md:text-7xl font-bold font-space mb-8 tracking-tight">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Work Together?</span>
                </h2>

                <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto font-inter">
                    I'm currently available for freelance projects and full-time opportunities.
                    Whether you need a complete web application, a stunning frontend, or performance optimization—
                    <strong className="text-white"> let's bring your vision to life.</strong>
                </p>

                <p className="text-gray-500 mb-12 max-w-xl mx-auto">
                    Typical response time: <span className="text-neon-cyan font-semibold">within 24 hours</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                    <Button
                        size="lg"
                        className="group text-lg px-8 py-6 rounded-full shadow-[0_0_30px_rgba(188,19,254,0.3)] hover:shadow-[0_0_50px_rgba(188,19,254,0.5)]"
                        aria-label="Start a project with Abdullah"
                    >
                        <MessageSquare className="mr-2" size={20} aria-hidden="true" />
                        Start a Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>

                    <a
                        href="mailto:abdullahnadeem2580@gmail.com"
                        className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors px-6 py-3 border border-white/20 rounded-full hover:border-neon-cyan"
                        aria-label="Send email to Abdullah"
                    >
                        <Mail size={20} className="group-hover:text-neon-cyan transition-colors" aria-hidden="true" />
                        abdullahnadeem2580@gmail.com
                    </a>
                </div>

                {/* Quick Info */}
                <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-neon-cyan" aria-hidden="true" />
                        <span>Available for new projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></span>
                        <span>Currently accepting clients</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
