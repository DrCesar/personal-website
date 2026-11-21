import Link from "next/link";
import { BookOpen } from "lucide-react";
import { POSTS } from "@/lib/posts";

export default function WritingPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <span className="text-xs font-mono text-accent uppercase tracking-widest font-semibold flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-accent" />
          Index of Articles
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Writing &amp; Technical Notes
        </h1>
        <p className="text-sm sm:text-base text-subtle leading-relaxed max-w-xl">
          Long-form essays on frontend engineering, creative canvas development, typography,
          and software architecture.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-surface-border border-y border-surface-border">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="group py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 hover:px-2 rounded-lg transition-all duration-200"
          >
            <div className="flex flex-col gap-1.5 max-w-xl">
              <h2 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-subtle leading-relaxed">
                {post.description}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-subtle shrink-0">
              <div className="flex gap-1.5">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-surface-border/50 text-[11px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span>{post.readingTime}</span>
              <span className="text-subtle/60">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
