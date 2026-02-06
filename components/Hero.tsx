"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">
                        Digital Marketing Strategist
                    </span>
                    <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight mb-6">
                        HELLO, <br />
                        I&apos;M <span className="text-outline text-transparent stroke-white" style={{ WebkitTextStroke: "2px white" }}>AAGHILA</span> <br />
                        <span className="text-primary">AMAL</span>
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                        Aspiring digital marketer specializing in SEO, Social Media, and Google Ads.
                        I help brands build their online presence and create engaging campaigns.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="#projects"
                            className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-all flex items-center group"
                        >
                            My Projects
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 border border-border bg-card hover:border-primary hover:text-primary transition-all font-bold uppercase tracking-widest"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                {/* Hero Image / Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[600px] w-full flex items-center justify-center"
                >
                    {/* Abstract Shape or Profile Placeholder */}
                    <div className="relative w-full h-full max-w-md">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent opacity-20 rounded-t-full" />
                        {/* This is a placeholder. In a real scenario, this would be an <Image /> */}
                        <div className="w-full h-full bg-zinc-900 border border-zinc-800 rounded-t-full flex items-center justify-center overflow-hidden relative">
                            <div className="absolute inset-0 bg-[url('https://placehold.co/600x800/18181b/FFF?text=Aaghila')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
                            <span className="text-zinc-700 text-9xl font-bold opacity-20 rotate-90">IMG</span>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-10 -left-10 bg-card border border-border p-6 shadow-2xl max-w-xs backdrop-blur-sm">
                            <p className="text-4xl font-bold text-primary mb-1">NIDM</p>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider">Certified Digital Marketing Trainee</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
