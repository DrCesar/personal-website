import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeToggle from "@/components/ThemeToggle";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Runs before paint so the stored or system theme applies without a flash.
const themeScript = `try{var t=localStorage.getItem("theme");document.documentElement.classList.toggle("dark",t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches)}catch(e){}`;

export const metadata: Metadata = {
  title: { default: SITE.name, template: `%s | ${SITE.name}` },
  description: SITE.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans text-[15px] leading-relaxed antialiased">
        <main className="relative mx-auto w-full max-w-[640px] px-6 py-16 sm:py-24">
          <ThemeToggle className="absolute right-5 top-16 sm:top-24" />
          {children}
          <footer className="mt-24 text-sm text-muted">
            Views are my own and don&apos;t represent my employer.
          </footer>
        </main>
      </body>
    </html>
  );
}
