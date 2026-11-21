export interface Project {
  slug: string;
  title: string;
  description: string;
  year: string;
  category: "Creative Tech" | "Web Applications" | "Tools & Systems";
  tags: string[];
  link?: string;
  github?: string;
  stats?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "aurora-canvas-engine",
    title: "Aurora Canvas Engine",
    description: "Generative physics simulation with particle flow fields, interactive attractor nodes, and fluid grid distortions.",
    year: "2026",
    category: "Creative Tech",
    tags: ["WebGL", "HTML5 Canvas", "GLSL", "TypeScript"],
    link: "https://github.com/DrCesar/personal-website",
    github: "https://github.com/DrCesar/personal-website",
    stats: "60 FPS WebGL",
    featured: true
  },
  {
    slug: "editorial-mdx-workspace",
    title: "Editorial MDX Workspace",
    description: "A fast, distraction-free writing environment with live reactive component previews and typography diagnostics.",
    year: "2026",
    category: "Tools & Systems",
    tags: ["Next.js", "React", "Tailwind", "MDX"],
    github: "https://github.com/DrCesar/personal-website",
    stats: "Sub-10ms render",
    featured: true
  },
  {
    slug: "chroma-color-tokens",
    title: "Chroma OKLCH Color Engine",
    description: "Perceptually uniform color palette generator and token export suite for accessible design systems.",
    year: "2025",
    category: "Tools & Systems",
    tags: ["OKLCH", "Color Science", "TypeScript"],
    github: "https://github.com/DrCesar/personal-website",
    stats: "WCAG AAA Ready",
    featured: true
  },
  {
    slug: "whimsical-ui-lab",
    title: "Whimsical UI Lab",
    description: "A collection of playful micro-interactions, spring toggles, and interactive cards built with motion and CSS variables.",
    year: "2025",
    category: "Creative Tech",
    tags: ["Framer Motion", "CSS Houdini", "React"],
    github: "https://github.com/DrCesar/personal-website",
    stats: "20+ components",
    featured: false
  }
];
