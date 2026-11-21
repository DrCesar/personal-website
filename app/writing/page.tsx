import Link from "next/link";
import { POSTS } from "@/lib/posts";

export default function WritingPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Writing
        </h1>
        <p className="text-sm sm:text-base text-subtle leading-relaxed max-w-xl">
          Essays on software design, frontend architecture, and creative computing.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-surface-border border-y border-surface-border">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="group py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 hover:bg-foreground/[0.015] px-2 -mx-2 rounded-lg transition-colors"
          >
            <div className="flex flex-col gap-1 max-w-lg">
              <h2 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-xs text-subtle leading-relaxed">
                {post.description}
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-subtle shrink-0">
              <span>{post.readingTime}</span>
              <span className="text-subtle/60">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
