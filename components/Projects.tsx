"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Eco-Friendly Brand Campaign",
        category: "Social Media Strategy",
        description: "Designed a comprehensive social media strategy for a refined fictional brand, increasing engagement by 40% in mock simulations.",
        tags: ["Strategy", "Content Calendar", "Engagement"],
    },
    {
        title: "WordPress Portfolio Site",
        category: "Web Development",
        description: "Developed a fully responsive personal portfolio website using WordPress, showcasing creative design and SEO optimization.",
        tags: ["WordPress", "SEO", "Responsive Design"],
    },
    {
        title: "Tech Startup SEO Audit",
        category: "SEO Analysis",
        description: "Conducted a detailed technical SEO audit for a sample startup site, identifying critical crawl errors and optimization opportunities.",
        tags: ["Technical SEO", "Audit", "Optimization"],
    },
    {
        title: "Instagram Ad Campaign",
        category: "Paid Advertising",
        description: "Created high-converting ad creatives and copy for Instagram, targeting specific demographics to maximize ROI.",
        tags: ["Facebook Ads", "Canva", "Copywriting"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 bg-background">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <p className="text-primary font-bold tracking-widest uppercase mb-2">Portfolio</p>
                        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">
                            Check Out My Projects
                        </h2>
                    </div>
                    <button className="hidden md:block px-8 py-3 border border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                        View All Work
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="group relative h-[400px] border border-border bg-background overflow-hidden"
                        >
                            {/* Placeholder for Project Image */}
                            <div className="absolute inset-0 bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
                                <div className="w-full h-full flex items-center justify-center opacity-20">
                                    <span className="text-6xl font-display font-bold uppercase">{project.category.split(" ")[0]}</span>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex gap-2 mb-3">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-bold text-primary uppercase tracking-wider">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold uppercase text-white mb-2">{project.title}</h3>
                                <p className="text-zinc-400 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.description}
                                </p>
                                <a href="#" className="inline-flex items-center text-white font-bold uppercase tracking-widest border-b border-primary pb-1">
                                    View Project <ExternalLink size={16} className="ml-2" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="px-8 py-3 border border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                        View All Work
                    </button>
                </div>
            </div>
        </section>
    );
}
