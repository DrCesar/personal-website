import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import HeroCanvas from "@/components/HeroCanvas";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";
import { POSTS } from "@/lib/posts";

export default function HomePage() {
  const featuredProjects = PROJECTS.slice(0, 3);
  const featuredPosts = POSTS.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 sm:gap-20">
      {/* Intro */}
      <section className="flex flex-col gap-5">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
          Josue Jacobs
        </h1>
        <p className="text-base sm:text-lg text-subtle leading-relaxed font-normal max-w-xl">
          Design engineer and software architect. Building thoughtful web applications,
          design systems, and creative computing experiments.
        </p>

        {/* Ambient Canvas */}
        <div className="pt-2">
          <HeroCanvas />
        </div>
      </section>

      {/* Selected Writing */}
      <section className="flex flex-col gap-5">
        <div className="flex items-baseline justify-between border-b border-surface-border pb-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-subtle font-semibold">
            Writing
          </h2>
          <Link
            href="/writing"
            className="text-xs font-mono text-subtle hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <span>All posts</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="flex flex-col">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group py-4 border-b border-surface-border/60 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 hover:bg-foreground/[0.015] px-2 -mx-2 rounded-lg transition-colors"
            >
              <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                {post.title}
              </span>
              <span className="text-xs font-mono text-subtle shrink-0">
                {post.date}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Selected Projects */}
      <section className="flex flex-col gap-5">
        <div className="flex items-baseline justify-between border-b border-surface-border pb-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-subtle font-semibold">
            Projects
          </h2>
          <Link
            href="/projects"
            className="text-xs font-mono text-subtle hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <span>All projects</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="flex flex-col">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
