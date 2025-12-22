"use client";

import { GlassCard } from "./GlassCard";
import { Github, Linkedin, Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 pt-20 pb-10 border-t border-white/10 bg-black/80 backdrop-blur-md" role="contentinfo">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold font-space bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple">
                            Abdullah Nadeem
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Full-Stack Web Developer specializing in MERN Stack, React.js, and Next.js.
                            Building high-performance web applications with clean architecture.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/ab9898998989898"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/5 rounded-full hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors"
                                aria-label="Visit Abdullah's GitHub profile"
                            >
                                <Github size={20} aria-hidden="true" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/abdullah-nadeem-319560285"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/5 rounded-full hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors"
                                aria-label="Visit Abdullah's LinkedIn profile"
                            >
                                <Linkedin size={20} aria-hidden="true" />
                            </a>
                            <a
                                href="https://www.instagram.com/abdullahx__.19"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/5 rounded-full hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors"
                                aria-label="Visit Abdullah's Instagram profile"
                            >
                                <Instagram size={20} aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <nav aria-label="Footer navigation - Explore">
                        <h4 className="text-lg font-bold font-space text-white mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-gray-400 hover:text-neon-cyan transition-colors">About Me</a></li>
                            <li><a href="#experience" className="text-gray-400 hover:text-neon-cyan transition-colors">Experience</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-neon-cyan transition-colors">All Projects</a></li>
                            <li><a href="#testimonials" className="text-gray-400 hover:text-neon-cyan transition-colors">Client Reviews</a></li>
                        </ul>
                    </nav>

                    {/* Services */}
                    <nav aria-label="Footer navigation - Services">
                        <h4 className="text-lg font-bold font-space text-white mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#services" className="text-gray-400 hover:text-neon-purple transition-colors">Full-Stack Development</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-neon-purple transition-colors">Frontend Development</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-neon-purple transition-colors">Performance Optimization</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-neon-purple transition-colors">3D Web Experiences</a></li>
                        </ul>
                    </nav>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold font-space text-white mb-6">Get in Touch</h4>
                        <address className="space-y-4 text-gray-400 not-italic">
                            <p className="flex items-center gap-3">
                                <Mail className="text-neon-cyan" size={18} aria-hidden="true" />
                                <a href="mailto:abdullahnadeem2580@gmail.com" className="hover:text-neon-cyan transition-colors">
                                    abdullahnadeem2580@gmail.com
                                </a>
                            </p>
                            <p className="flex items-center gap-3">
                                <MapPin className="text-neon-purple" size={18} aria-hidden="true" />
                                Remote / Worldwide
                            </p>
                        </address>

                        <div className="mt-8">
                            <p className="text-xs font-mono text-gray-500 mb-2">Stay updated with my work</p>
                            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                                <label htmlFor="newsletter-email" className="sr-only">Email address for newsletter</label>
                                <input
                                    id="newsletter-email"
                                    type="email"
                                    placeholder="Your email"
                                    className="bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-neon-cyan"
                                />
                                <button
                                    type="submit"
                                    className="bg-neon-cyan/20 text-neon-cyan px-3 py-2 rounded text-sm font-bold hover:bg-neon-cyan hover:text-black transition-colors"
                                    aria-label="Subscribe to newsletter"
                                >
                                    →
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {currentYear} Abdullah Nadeem. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
