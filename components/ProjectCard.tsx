import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col justify-between p-6 rounded-2xl border border-surface-border bg-surface/60 hover:bg-surface/90 hover:border-accent/40 transition-all duration-300 backdrop-blur-sm">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-subtle px-2 py-0.5 rounded-md bg-surface-border/60">
            {project.category}
          </span>
          <span className="text-xs font-mono text-subtle">{project.year}</span>
        </div>

        <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
          <span>{project.title}</span>
          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </h3>

        <p className="text-sm text-subtle leading-relaxed">{project.description}</p>
      </div>

      <div className="mt-6 pt-4 border-t border-surface-border/60 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono text-subtle bg-foreground/5 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 text-subtle">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code"
              className="hover:text-foreground transition-colors p-1"
            >
              <Github className="w-4 h-4" />
            </Link>
          )}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live link"
              className="hover:text-foreground transition-colors p-1"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
