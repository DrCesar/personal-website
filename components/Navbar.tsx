"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { href: "/writing", label: "Writing" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="w-full max-w-3xl mx-auto px-5 sm:px-8 pt-8 pb-4 flex items-center justify-between">
      <Link
        href="/"
        className="text-base font-semibold tracking-tight text-foreground hover:opacity-70 transition-opacity"
      >
        Josue Jacobs
      </Link>

      <nav className="flex items-center gap-5 sm:gap-6 text-sm">
        {navLinks.map((link) => {
          const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors",
                active
                  ? "text-foreground font-semibold"
                  : "text-subtle hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          );
        })}

        {mounted && (
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-subtle hover:text-foreground transition-colors p-1"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-600" />}
          </button>
        )}
      </nav>
    </header>
  );
}
