import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  const tools = [
    { name: "Hardware", value: "MacBook Pro, 4K Display, Ergo Mechanical Setup" },
    { name: "Editor & Terminal", value: "Cursor, Neovim, Ghostty" },
    { name: "Languages & Frameworks", value: "TypeScript, React, Next.js, Tailwind CSS" },
    { name: "Graphics & Creative", value: "HTML5 Canvas, WebGL, GLSL Shaders" },
    { name: "Infrastructure", value: "Vercel, GitHub Actions" },
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          About Josue Jacobs
        </h1>
        <p className="text-sm sm:text-base text-subtle leading-relaxed max-w-xl">
          Design engineer and software architect working on web interfaces, distributed systems,
          and interactive tools.
        </p>
      </div>

      <section className="flex flex-col gap-4 text-sm sm:text-base leading-relaxed text-foreground/80 max-w-xl">
        <p>
          I focus on crafting software that pairs rigorous architectural foundations with high editorial polish.
          My background spans production engineering, design systems, and creative computing.
        </p>
        <p>
          When building for the web, I believe that an intimate understanding of browser mechanics and
          technical constraints allows design quality to reach its highest level.
        </p>
      </section>

      {/* Tools / Colophon */}
      <section className="flex flex-col gap-4 pt-8 border-t border-surface-border">
        <h2 className="text-xs font-mono uppercase tracking-wider text-subtle font-semibold">
          Tools &amp; Environment
        </h2>
        <div className="flex flex-col divide-y divide-surface-border/60">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs"
            >
              <span className="font-mono text-subtle font-medium">{tool.name}</span>
              <span className="font-mono text-foreground">{tool.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Connect */}
      <section className="flex flex-col gap-3 pt-8 border-t border-surface-border text-xs font-mono">
        <h2 className="uppercase tracking-wider text-subtle font-semibold">
          Links
        </h2>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/DrCesar/personal-website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline flex items-center gap-1"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </Link>
        </div>
      </section>
    </div>
  );
}
