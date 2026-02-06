"use client";

import { motion } from "framer-motion";
import { Search, Share2, Layout, Mail, PenTool, BarChart } from "lucide-react";

const services = [
    {
        id: "01",
        title: "Search Engine Optimization",
        description: "Boosting organic visibility through on-page strategies and technical SEO audits.",
        icon: Search,
    },
    {
        id: "02",
        title: "Social Media Marketing",
        description: "Creating impactful strategies for Facebook, Instagram, and LinkedIn to grow brand presence.",
        icon: Share2,
    },
    {
        id: "03",
        title: "Web Designing",
        description: "Building responsive, user-friendly websites using WordPress and modern design principles.",
        icon: Layout,
    },
    {
        id: "04",
        title: "Email Marketing",
        description: "Designing automated email campaigns to nurture leads and increase conversions.",
        icon: Mail,
    },
    {
        id: "05",
        title: "Content Creation",
        description: "Crafting engaging visuals and copy using tools like Canva and Adobe Creative Suite.",
        icon: PenTool,
    },
    {
        id: "06",
        title: "Analytics & Reporting",
        description: "Monitoring campaign performance and providing data-driven insights for growth.",
        icon: BarChart,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-32 bg-background">
            <div className="container">
                <div className="text-center mb-16">
                    <p className="text-primary font-bold tracking-widest uppercase mb-2">What I Do</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">
                        My Special Service For Your <br /> Business Development
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-10 border border-zinc-800 bg-zinc-900/30 hover:border-primary hover:bg-zinc-900/80 transition-all duration-300 relative overflow-hidden rounded-xl"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl font-display font-bold group-hover:opacity-10 transition-opacity">
                                {service.id}
                            </div>

                            <service.icon size={48} className="text-primary mb-6 group-hover:scale-110 transition-transform" />

                            <h3 className="text-xl font-bold uppercase mb-4 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
