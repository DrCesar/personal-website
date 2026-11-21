import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import InteractiveShaderWidget from "@/components/InteractiveShaderWidget";
import ComparisonTable from "@/components/ComparisonTable";
import RichText from "@/components/RichText";
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
                <RichText>{p}</RichText>
              </p>
            ))}

            {section.bullets && (
              <ul className="flex flex-col gap-2 pl-1">
                {section.bullets.map((item, bIdx) => (
                  <li
                    key={bIdx}
                    className="relative pl-5 text-base text-foreground/80 leading-relaxed before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                  >
                    <RichText>{item}</RichText>
                  </li>
                ))}
              </ul>
            )}

            {section.table && <ComparisonTable {...section.table} />}

            {section.callout && (
              <aside className="border-l-2 border-accent bg-accent-muted/20 px-4 py-3 rounded-r-lg text-[15px] text-foreground/85 leading-relaxed">
                <RichText>{section.callout}</RichText>
              </aside>
            )}

            {section.hasInteractiveDemo && <InteractiveShaderWidget />}
          </section>
        ))}
      </div>

      {post.content.sources && (
        <section className="flex flex-col gap-3 pt-6 border-t border-surface-border">
          <h2 className="text-xs font-mono uppercase tracking-wider text-subtle">
            Sources
          </h2>
          <ol className="flex flex-col gap-1.5">
            {post.content.sources.map((source, idx) => (
              <li key={source.url} className="flex gap-2 text-[13px] leading-relaxed">
                <span className="font-mono text-subtle shrink-0">{idx + 1}.</span>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-colors break-words"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ol>
        </section>
      )}

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
