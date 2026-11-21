import Link from "next/link";
import { User, Cpu, Terminal, Compass, ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  const tools = [
    { name: "Hardware", value: "MacBook Pro, 4K Display, Ergo Mechanical Setup" },
    { name: "Editor", value: "Cursor, Neovim, Ghostty Terminal" },
    { name: "Frontend", value: "Next.js, TypeScript, Tailwind CSS, Framer Motion" },
    { name: "Graphics", value: "HTML5 Canvas, WebGL, GLSL Shaders" },
    { name: "Deployment", value: "Vercel, GitHub Actions" },
  ];

  return (
    <div className="flex flex-col gap-12 max-w-2xl">
      <div className="flex flex-col gap-3">
        <span className="text-xs font-mono text-accent uppercase tracking-widest font-semibold flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-accent" />
          About Me
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Cesar
        </h1>
        <p className="text-base text-subtle leading-relaxed">
          Design engineer, software architect, and creative technologist.
        </p>
      </div>

      <section className="flex flex-col gap-4 text-base leading-relaxed text-foreground/90">
        <p>
          I focus on building software that feels alive: combining rigorous engineering with
          careful typography, fluid micro-interactions, and generative graphics.
        </p>
        <p>
          My work spans production web applications, open-source developer tooling, and creative coding
          explorations with canvas and shaders. I believe that technical constraints, when embraced,
          elevate the standard of interface design.
        </p>
      </section>

      {/* Tools & Environment Section (Inspired by Paul Stamatiou) */}
      <section className="flex flex-col gap-4 pt-6 border-t border-surface-border">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-accent" />
          <h2 className="text-lg font-bold tracking-tight text-foreground">
            Tools &amp; Work Environment
          </h2>
        </div>
        <p className="text-sm text-subtle">
          Inspired by colophons and gear lists from craft designers, here is what powers my daily work:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="p-3.5 rounded-xl border border-surface-border bg-surface/50 flex flex-col gap-1"
            >
              <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                {tool.name}
              </span>
              <span className="text-xs text-foreground/80 font-mono">
                {tool.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Connect */}
      <section className="flex flex-col gap-4 pt-6 border-t border-surface-border">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-accent" />
          <h2 className="text-lg font-bold tracking-tight text-foreground">
            Connect
          </h2>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link
            href="https://github.com/DrCesar/personal-website"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-accent hover:underline font-medium"
          >
            <span>GitHub Repository</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
