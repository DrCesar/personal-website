import Link from "next/link";
import { Github, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-24 border-t border-surface-border py-12 px-4 sm:px-8 text-sm text-subtle">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <p className="text-foreground font-medium">Cesar &copy; {new Date().getFullYear()}</p>
          <p className="text-xs text-subtle">
            Built with Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/DrCesar/personal-website"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </Link>
          <Link
            href="/writing"
            className="hover:text-foreground transition-colors"
          >
            Articles
          </Link>
          <Link
            href="/about"
            className="hover:text-foreground transition-colors"
          >
            Colophon
          </Link>
        </div>
      </div>
    </footer>
  );
}
