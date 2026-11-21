import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Josue Jacobs | Personal Website",
  description: "Personal website, technical essays, and software engineering projects by Josue Jacobs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-white antialiased">
        <Navbar />
        <main className="flex-1 max-w-3xl w-full mx-auto px-5 sm:px-8 py-10 sm:py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
