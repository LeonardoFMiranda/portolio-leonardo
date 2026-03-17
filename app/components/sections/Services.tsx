"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Cpu, Code, Layers, Palette } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "Web Development", desc: "High-performance Next.js applications.", icon: <Code /> },
  { title: "AI Integration", desc: "Custom LLM workflows and automation.", icon: <Cpu /> },
  { title: "Automation Systems", desc: "Streamlined business logic & APIs.", icon: <Layers /> },
  { title: "UI/UX Engineering", desc: "Pixel-perfect, accessible interfaces.", icon: <Palette /> },
];

export const Services = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
    });
  }, { scope: container });

  return (
    <section id="services" ref={container} className="py-24 px-6 bg-surface/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className="service-card p-8 rounded-2xl bg-surface border border-muted hover:border-accent/50 transition-colors group">
            <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
              {s.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
            <p className="text-lightGray text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};