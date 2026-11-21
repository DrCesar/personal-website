import Link from "next/link";
import { ArrowUpRight, Sparkles, BookOpen, Layers } from "lucide-react";
import HeroCanvas from "@/components/HeroCanvas";
import WhimsicalToggle from "@/components/WhimsicalToggle";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";
import { POSTS } from "@/lib/posts";

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const featuredPosts = POSTS.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 sm:gap-20">
      {/* Hero Section */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-accent uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Design Engineer &amp; Technologist
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Building at the intersection of craft, systems, and creative computing.
            </h1>
          </div>
          <div className="sm:self-start">
            <WhimsicalToggle />
          </div>
        </div>

        <p className="text-base sm:text-lg text-subtle leading-relaxed max-w-2xl font-normal">
          Welcome to my digital garden. Here you will find long-form writing on software architecture,
          tactile frontend engineering, generative canvas experiments, and the open-source tools I build.
        </p>

        {/* Interactive Canvas Hero */}
        <HeroCanvas />
      </section>

      {/* Featured Projects Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-accent" />
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Featured Projects &amp; Labs
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs font-mono text-subtle hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <span>View all ({PROJECTS.length})</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Selected Writing Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent" />
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Selected Writing
            </h2>
          </div>
          <Link
            href="/writing"
            className="text-xs font-mono text-subtle hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <span>All articles</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="flex flex-col divide-y divide-surface-border border-y border-surface-border">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:px-2 rounded-lg transition-all duration-200"
            >
              <div className="flex flex-col gap-1">
                <span className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </span>
                <p className="text-sm text-subtle line-clamp-1">
                  {post.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-subtle shrink-0">
                <div className="flex gap-1.5">
                  {post.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-surface-border/50 text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
