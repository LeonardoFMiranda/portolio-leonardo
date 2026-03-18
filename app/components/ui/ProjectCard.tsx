"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "../sections/Projects.module.css";

export const ProjectCard = ({ title, tags, i }:any) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  function handleMouseMove(e:any) {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div
      className={`${styles.card} group cursor-pointer relative overflow-hidden rounded-3xl bg-surface border border-muted`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={i}
    >
      {/* 🔥 Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hover ? 1 : 0,
          background: `radial-gradient(250px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.15), transparent 70%)`,
        }}
      />

      <div className="aspect-video bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
      </div>

      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
            {title}
          </h3>
          <ArrowUpRight className="text-muted group-hover:text-white transition-colors" />
        </div>

        <div className="flex gap-2">
          {tags.map((tag:any) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-muted text-lightGray font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};