import { Layers } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";

export default function ProjectsPage() {
  const categories = Array.from(new Set(PROJECTS.map((p) => p.category)));

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <span className="text-xs font-mono text-accent uppercase tracking-widest font-semibold flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-accent" />
          Portfolio &amp; Work
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Projects &amp; Experiments
        </h1>
        <p className="text-sm sm:text-base text-subtle leading-relaxed max-w-xl">
          A showcase of creative computing projects, tools, applications, and design engineering prototypes.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {categories.map((category) => {
          const categoryProjects = PROJECTS.filter((p) => p.category === category);
          return (
            <section key={category} className="flex flex-col gap-4">
              <h2 className="text-sm font-mono uppercase tracking-wider text-subtle border-b border-surface-border pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categoryProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
