import { ArrowUpRight } from "lucide-react";

export const ProjectCard = ({ title, tags }: { title: string; tags: string[] }) => (
  <div className="project-card group cursor-pointer relative overflow-hidden rounded-3xl bg-surface border border-muted">
    <div className="aspect-video bg-muted/30 relative overflow-hidden">
      {/* Placeholder for project image */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{title}</h3>
        <ArrowUpRight className="text-muted group-hover:text-white transition-colors" />
      </div>
      <div className="flex gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-muted text-lightGray font-mono">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);