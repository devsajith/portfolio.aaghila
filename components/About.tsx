"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-32 bg-background relative">
            <div className="container max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:order-2"
                    >
                        <h2 className="text-5xl font-display font-bold mb-8">
                            ABOUT <span className="text-primary">ME</span>
                        </h2>
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                I am an aspiring digital marketer with hands-on training from the
                                <strong className="text-white"> National Institute of Digital Marketing (NIDM)</strong>, Bangalore.
                                My passion lies in building brand presence online and creating engaging campaigns that drive results.
                            </p>
                            <p>
                                Skilled in <span className="text-white">Social Media Management, Content Creation, Google Ads, and SEO</span>,
                                I am eager to contribute innovative ideas and support marketing strategies in a dynamic work environment.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mt-8">
                                <div>
                                    <h5 className="text-white font-bold uppercase tracking-wider mb-2">Location</h5>
                                    <p>Bangalore, India</p>
                                </div>
                                <div>
                                    <h5 className="text-white font-bold uppercase tracking-wider mb-2">Email</h5>
                                    <p>aaghilaaamaal@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:order-1 relative"
                    >
                        <div className="aspect-square bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-center">
                            <h3 className="text-8xl font-bold text-zinc-800 mb-4">01+</h3>
                            <p className="text-2xl font-display text-white uppercase">Year of Intense <br /> Training & <br /> Experience</p>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
