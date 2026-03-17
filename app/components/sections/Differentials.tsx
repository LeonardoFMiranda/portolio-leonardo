"use client";
import { useRef } from "react";
import { Zap, Shield, Cpu, Code2, Layers } from "lucide-react";

const items = [
  { title: "Escalabilidade", desc: "Arquiteturas preparadas para o crescimento.", icon: <Layers size={32} /> },
  { title: "Performance", desc: "Otimização máxima em Core Web Vitals.", icon: <Zap size={32} /> },
  { title: "Clean Code", desc: "Código legível, testado e sustentável.", icon: <Code2 size={32} /> },
  { title: "Foco no Usuário", desc: "Interfaces intuitivas e acessíveis.", icon: <Shield size={32} /> },
];

export const Differentials = () => {
  const container = useRef(null);



  return (
    <section ref={container} className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {items.map((item, i) => (
          <div key={i} className="diff-item flex flex-col items-start">
            <div className="diff-icon text-white mb-6 p-3 bg-surface rounded-xl border border-muted">
              {item.icon}
            </div>
            <h4 className="text-xl font-display font-bold text-white mb-3">{item.title}</h4>
            <p className="text-lightGray leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};