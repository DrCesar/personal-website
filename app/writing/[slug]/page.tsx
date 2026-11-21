import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import InteractiveShaderWidget from "@/components/InteractiveShaderWidget";
import { POSTS } from "@/lib/posts";

export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-10">
      <Link
        href="/writing"
        className="self-start text-xs font-mono text-subtle hover:text-foreground flex items-center gap-1.5 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Writing</span>
      </Link>

      <header className="flex flex-col gap-4 border-b border-surface-border pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-subtle">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime}
          </span>
          <span>&bull;</span>
          <div className="flex items-center gap-1.5">
            <Tag className="w-3 h-3 text-accent" />
            {post.tags.map((t) => (
              <span key={t} className="bg-surface-border/50 px-2 py-0.5 rounded text-[11px]">
                {t}
              </span>
            ))}
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
          {post.title}
        </h1>

        <p className="text-lg text-subtle font-normal leading-relaxed">
          {post.content.lead}
        </p>
      </header>

      <div className="flex flex-col gap-8 text-foreground/90 leading-relaxed font-normal">
        {post.content.sections.map((section, idx) => (
          <section key={idx} className="flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-4">
              {section.heading}
            </h2>

            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-base text-foreground/80 leading-relaxed">
                {p}
              </p>
            ))}

            {section.hasInteractiveDemo && <InteractiveShaderWidget />}
          </section>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-surface-border flex items-center justify-between">
        <Link
          href="/writing"
          className="text-sm font-semibold text-accent hover:underline flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All articles</span>
        </Link>
        <span className="text-xs font-mono text-subtle">
          Crafted with care. Thanks for reading.
        </span>
      </div>
    </article>
  );
}
