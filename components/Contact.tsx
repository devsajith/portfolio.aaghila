"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, MessageCircle } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-background border-t border-zinc-900">
            <div className="container max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-primary font-bold tracking-widest uppercase mb-2">Get in Touch</p>
                        <h2 className="text-5xl md:text-6xl font-display font-bold uppercase mb-8">
                            Let&apos;s Build Something <br /> Amazing?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-12 max-w-md">
                            Whether you have a question, a project proposal, or just want to say hello, I&apos;d love to hear from you.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center group">
                                <div className="w-12 h-12 bg-background border border-border flex items-center justify-center mr-6 group-hover:border-primary transition-colors">
                                    <Phone className="text-primary" size={24} />
                                </div>
                                <div>
                                    <p className="text-muted-foreground text-sm uppercase tracking-wider">Phone</p>
                                    <p className="text-xl font-bold text-white">+91 96457 44022</p>
                                </div>
                            </div>

                            <div className="flex items-center group">
                                <div className="w-12 h-12 bg-background border border-border flex items-center justify-center mr-6 group-hover:border-primary transition-colors">
                                    <Mail className="text-primary" size={24} />
                                </div>
                                <div>
                                    <p className="text-muted-foreground text-sm uppercase tracking-wider">Email</p>
                                    <p className="text-xl font-bold text-white">aaghilaaamaal@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center group">
                                <div className="w-12 h-12 bg-background border border-border flex items-center justify-center mr-6 group-hover:border-primary transition-colors">
                                    <MapPin className="text-primary" size={24} />
                                </div>
                                <div>
                                    <p className="text-muted-foreground text-sm uppercase tracking-wider">Location</p>
                                    <p className="text-xl font-bold text-white">Bangalore, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-zinc-800 rounded-full hover:bg-primary hover:text-white transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="p-3 bg-zinc-800 rounded-full hover:bg-primary hover:text-white transition-colors"><Github size={20} /></a>
                            <a href="#" className="p-3 bg-zinc-800 rounded-full hover:bg-primary hover:text-white transition-colors"><MessageCircle size={20} /></a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-primary/5 p-8 md:p-12 border border-primary/20 rounded-2xl"
                    >
                        <h3 className="text-2xl font-bold uppercase mb-6 text-white">Send Me a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Your Name</label>
                                <input type="text" className="w-full bg-zinc-900/50 border border-zinc-800 p-4 text-white focus:outline-none focus:border-primary transition-colors rounded-lg" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Your Email</label>
                                <input type="email" className="w-full bg-zinc-900/50 border border-zinc-800 p-4 text-white focus:outline-none focus:border-primary transition-colors rounded-lg" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Service Interested</label>
                                <select className="w-full bg-zinc-900/50 border border-zinc-800 p-4 text-white focus:outline-none focus:border-primary transition-colors rounded-lg">
                                    <option>SEO Optimization</option>
                                    <option>Social Media Marketing</option>
                                    <option>Content Creation</option>
                                    <option>Web Design</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-zinc-900/50 border border-zinc-800 p-4 text-white focus:outline-none focus:border-primary transition-colors rounded-lg" placeholder="Tell me about your project..." />
                            </div>
                            <button type="submit" className="w-full py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-all">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-24 pt-8 border-t border-border text-center text-muted-foreground text-sm">
                    <p>© {new Date().getFullYear()} Aaghila Amal. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}
