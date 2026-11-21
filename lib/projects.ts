export interface Project {
  title: string;
  description: string;
  year: string;
  href?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Agentic Sidebar",
    description:
      "A tmux and Zellij sidebar that shows which AI coding agent needs you right now and jumps you to it. Rust, used internally at Amazon.",
    year: "2026",
  },
  {
    title: "Agent-Driven Development Guide",
    description:
      "A playbook for letting coding agents build, run, and end-to-end test services locally in isolated dev stacks, instead of waiting on shared deploys.",
    year: "2026",
  },
  {
    title: "Team Agent Platform",
    description:
      "A shared repository of agents and skills that became my org's common home for agentic development.",
    year: "2025",
  },
];
