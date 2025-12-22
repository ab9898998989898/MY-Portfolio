"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Briefcase } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                isScrolled && "bg-black/50 backdrop-blur-lg border-glass-border py-2"
            )}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold font-space text-white tracking-tighter hover:text-neon-cyan transition-colors"
                    aria-label="Abdullah Nadeem - Home"
                >
                    AN<span className="text-neon-cyan">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-neon-cyan to-neon-purple text-black rounded-full hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all flex items-center gap-2"
                        aria-label="Contact Abdullah for hiring"
                    >
                        <Briefcase size={16} aria-hidden="true" />
                        Hire Me
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-glass-border p-6 flex flex-col gap-6"
                    role="menu"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-300 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                            role="menuitem"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="text-lg font-medium text-neon-cyan hover:text-white flex items-center gap-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                        role="menuitem"
                    >
                        <Briefcase size={18} aria-hidden="true" />
                        Hire Me
                    </Link>
                </div>
            )}
        </nav>
    );
}
