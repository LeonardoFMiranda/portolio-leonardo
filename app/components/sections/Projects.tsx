import { ProjectCard } from "../ui/ProjectCard";

const projects = [
  { title: "SaaS Analytics", tags: ["Next.js", "AI", "Tailwind"] },
  { title: "AI Chatbot", tags: ["Python", "OpenAI", "React"] },
  { title: "Workflow Automation", tags: ["Node.js", "GSAP", "Redis"] },
];

export const Projects = () => {
  return (
    <section className="py-24 px-6 bg-black" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Projetos em Destaque</h2>
          <div className="h-1 w-24 bg-accent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="reveal-project">
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};