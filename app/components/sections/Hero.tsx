"use client";
import { CTAButton } from "../ui/CTAButton";
import { motion } from "framer-motion";
import TypeText from "../ui/TypeTextAnimation";

export const Hero = () => {

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden" id="home">
            {/* Subtle Background Gradient */}
            <div className="hero-bg absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full opacity-0" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="z-10 text-center max-w-4xl">
                <h1 className="hero-title font-display text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6">
                    <TypeText
                        text="MIRANDA CONSULTORIA"
                        className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
                    />
                </h1>
                <p className="hero-sub text-lightGray text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans">
                    I design and develop modern web applications, AI-powered tools, and scalable platforms for the next generation of tech.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <CTAButton className="hero-btn" variant="primary">View Projects</CTAButton>
                    <CTAButton className="hero-btn" variant="secondary">Let's Talk</CTAButton>
                </div>
            </motion.div>

            <div className="absolute bottom-10 animate-bounce opacity-50">
                <div className="w-1 h-12 rounded-full border border-white/20 flex justify-center p-1">
                    <div className="w-1 h-3 bg-white rounded-full" />
                </div>
            </div>
        </section>
    );
};