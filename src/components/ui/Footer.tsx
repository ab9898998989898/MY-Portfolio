"use client";

import { GlassCard } from "./GlassCard";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative z-10 pt-20 pb-10 border-t border-white/10 bg-black/80 backdrop-blur-md">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold font-space bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple">
                            Abdullah.
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Crafting the next generation of web experiences with a focus on performance, accessibility, and immersive 3D visuals.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors"><Github size={20} /></a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-neon-cyan/20 hover:text-neon-cyan transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold font-space text-white mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-gray-400 hover:text-neon-cyan transition-colors">About Me</a></li>
                            <li><a href="#experience" className="text-gray-400 hover:text-neon-cyan transition-colors">Experience</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-neon-cyan transition-colors">All Projects</a></li>
                            <li><a href="#testimonials" className="text-gray-400 hover:text-neon-cyan transition-colors">Client Reviews</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold font-space text-white mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-neon-purple transition-colors">Web Development</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-neon-purple transition-colors">UI/UX Design</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-neon-purple transition-colors">SEO Optimization</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-neon-purple transition-colors">3D Implementation</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold font-space text-white mb-6">Get in Touch</h4>
                        <div className="space-y-4 text-gray-400">
                            <p className="flex items-center gap-3">
                                <Mail className="text-neon-cyan" size={18} />
                                contact@abdullahnadeem.com
                            </p>
                            <p className="flex items-center gap-3">
                                <MapPin className="text-neon-purple" size={18} />
                                Remote / Worldwide
                            </p>
                        </div>

                        <div className="mt-8">
                            <p className="text-xs font-mono text-gray-500 mb-2">Subscribe to newsletter</p>
                            <div className="flex gap-2">
                                <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-neon-cyan" />
                                <button className="bg-neon-cyan/20 text-neon-cyan px-3 py-2 rounded text-sm font-bold hover:bg-neon-cyan hover:text-black transition-colors">→</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Abdullah Nadeem. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
