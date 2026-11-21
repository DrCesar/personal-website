import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group py-4 border-b border-surface-border/60 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 hover:bg-foreground/[0.015] px-2 -mx-2 rounded-lg transition-colors">
      <div className="flex flex-col gap-1 max-w-lg">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <span className="text-[11px] font-mono text-subtle/80">
            {project.year}
          </span>
        </div>
        <p className="text-xs text-subtle leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex items-center gap-3 shrink-0 text-xs font-mono text-subtle self-start sm:self-auto pt-1 sm:pt-0">
        <span className="hidden sm:inline text-[11px] text-subtle/60">
          {project.tags[0]}
        </span>
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-0.5"
            aria-label="View source code"
          >
            <span>Code</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </Link>
        )}
      </div>
    </div>
  );
}
