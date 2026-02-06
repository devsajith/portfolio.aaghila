"use client";

import { Github, Linkedin, Mail, AlignRight, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto flex items-center justify-between h-20">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold font-display uppercase tracking-wider text-white">
                    Aaghila<span className="text-primary">.</span>Amal
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {["About", "Services", "Projects", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-6 py-2 bg-primary text-white font-bold text-sm uppercase tracking-widest hover:bg-red-700 transition-colors"
                    >
                        Hire Me
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-primary p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <AlignRight size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-card border-b border-border overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-6">
                            {["About", "Services", "Projects", "Contact"].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-lg font-bold uppercase tracking-widest hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
