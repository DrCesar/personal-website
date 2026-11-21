import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";

export default function ProjectsPage() {
  const categories = Array.from(new Set(PROJECTS.map((p) => p.category)));

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Projects
        </h1>
        <p className="text-sm sm:text-base text-subtle leading-relaxed max-w-xl">
          Selected open-source libraries, interactive tools, and web applications.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {categories.map((category) => {
          const categoryProjects = PROJECTS.filter((p) => p.category === category);
          return (
            <section key={category} className="flex flex-col gap-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-subtle font-semibold border-b border-surface-border pb-2">
                {category}
              </h2>
              <div className="flex flex-col">
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
