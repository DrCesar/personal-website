import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto px-5 sm:px-8 py-12 mt-20 border-t border-surface-border text-xs text-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <p>&copy; {new Date().getFullYear()} Josue Jacobs. All rights reserved.</p>

      <div className="flex items-center gap-5">
        <Link
          href="https://github.com/DrCesar/personal-website"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors flex items-center gap-1"
        >
          <span>GitHub</span>
          <ArrowUpRight className="w-3 h-3 opacity-60" />
        </Link>
        <Link href="/writing" className="hover:text-foreground transition-colors">
          Writing
        </Link>
        <Link href="/about" className="hover:text-foreground transition-colors">
          About
        </Link>
      </div>
    </footer>
  );
}
