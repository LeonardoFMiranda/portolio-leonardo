"use client";
import { useRef } from "react";


export const Navbar = () => {
    const navRef = useRef(null);

    return (
        <nav
            ref={navRef}
            className="fixed top-0 w-full z-50 px-6 py-6 flex justify-center"
        >
            <div className="w-3/6 max-w-7xl flex justify-between items-center bg-surface/40 backdrop-blur-md border border-muted/50 px-8 py-4 rounded-full">
                <div className="text-white font-bold text-xl tracking-tighter">
                    DEV<span className="text-accent">.</span>AI
                </div>

                <div className="hidden md:flex gap-8 text-sm font-medium text-lightGray">
                    <a href="#home" className="hover:text-white transition-colors">Inicio</a>
                    <a href="#services" className="hover:text-white transition-colors">Serviços</a>
                    <a href="#work" className="hover:text-white transition-colors">Projetos</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contato</a>
                </div>

                <button className="text-xs font-mono uppercase tracking-widest text-white border-b border-accent pb-1 hover:text-accent transition-colors">
                    Download CV
                </button>
            </div>
        </nav>
    );
};