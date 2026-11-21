import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Love Ya",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GracePhillipsPage() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
      <p className="text-3xl sm:text-4xl font-serif text-foreground tracking-tight select-none">
        love ya
      </p>
    </div>
  );
}
