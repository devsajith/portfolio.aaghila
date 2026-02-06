"use client";

import { motion } from "framer-motion";

const education = [
    {
        institution: "National Institute of Digital Marketing (NIDM), Bangalore",
        degree: "Certified Digital Marketing Program",
        year: "Recent",
    },
    {
        institution: "Abate AS College of Optometry and Science",
        degree: "Bachelor of Optometry",
        year: "Graduated",
    },
    {
        institution: "CBHSS",
        degree: "Kerala State Board Higher Secondary",
        year: "Completed",
    },
];

const certifications = [
    "Certified Digital Marketing Course - NIDM",
    "SEO & SEM Strategy",
    "Social Media Marketing (FB, Insta, LinkedIn)",
    "Google Ads & Analytics",
    "Email Marketing & Automation",
    "Content Marketing",
    "WordPress Website Development",
];

const skills = [
    "Social Media Management",
    "Google Ads",
    "Canva & Creative Tools",
    "SEO Optimization",
    "Website Creation (WordPress)",
    "Email Campaigns",
    "Basic Analytics & Reporting",
    "Communication & Team Collaboration",
];

export default function Resume() {
    return (
        <section id="resume" className="py-24 bg-background">
            <div className="container max-w-5xl">
                <div className="text-center mb-16">
                    <p className="text-primary font-bold tracking-widest uppercase mb-2">My Journey</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">
                        Resume & Skills
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold uppercase mb-8 border-l-4 border-primary pl-4">Education</h3>
                        <div className="space-y-8 border-l border-border ml-2 pl-8 relative">
                            {education.map((edu, index) => (
                                <div key={index} className="relative">
                                    <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                    <p className="text-primary font-medium mb-1">{edu.institution}</p>
                                    <span className="text-sm text-muted-foreground bg-secondary/10 px-2 py-1 rounded inline-block">
                                        {edu.year}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications & Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold uppercase mb-8 border-l-4 border-primary pl-4">Certifications</h3>
                            <ul className="space-y-3">
                                {certifications.map((cert, index) => (
                                    <li key={index} className="flex items-center text-muted-foreground hover:text-white transition-colors">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                                        {cert}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold uppercase mb-8 border-l-4 border-primary pl-4">Core Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-card border border-border rounded hover:border-primary hover:text-primary cursor-default transition-all text-sm font-bold uppercase"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
