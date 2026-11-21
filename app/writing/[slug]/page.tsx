import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ComparisonTable from "@/components/ComparisonTable";
import RichText from "@/components/RichText";
import { formatLongDate } from "@/lib/date";
import { getPost, getPosts } from "@/lib/posts";
import { SITE } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  return post ? { title: post.title, description: post.description } : {};
}

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-12">
      <Link href="/" className="self-start text-muted transition-colors hover:text-foreground">
        ← {SITE.name}
      </Link>

      <header className="flex flex-col gap-2">
        <h1 className="text-balance text-2xl font-semibold tracking-tight text-foreground">
          {post.title}
        </h1>
        <p className="text-muted">
          {formatLongDate(post.date)} · {post.readingTime}
          {post.draft && " · Draft"}
        </p>
      </header>

      <div className="flex flex-col gap-10 text-base leading-7">
        <p>{post.content.lead}</p>

        {post.content.sections.map((section) => (
          <section key={section.heading} className="flex flex-col gap-4">
            <h2 className="font-semibold text-foreground">{section.heading}</h2>

            {section.paragraphs.map((p, idx) => (
              <p key={idx}>
                <RichText>{p}</RichText>
              </p>
            ))}

            {section.bullets && (
              <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-muted">
                {section.bullets.map((item, idx) => (
                  <li key={idx}>
                    <RichText>{item}</RichText>
                  </li>
                ))}
              </ul>
            )}

            {section.table && <ComparisonTable {...section.table} />}

            {section.callout && (
              <blockquote className="border-l-2 border-border pl-4 text-muted">
                <RichText>{section.callout}</RichText>
              </blockquote>
            )}
          </section>
        ))}
      </div>

      {post.content.sources && (
        <section className="flex flex-col gap-3 border-t border-border pt-8 text-sm">
          <h2 className="text-muted">Sources</h2>
          <ol className="flex list-decimal flex-col gap-1.5 pl-5 marker:text-muted">
            {post.content.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words text-muted transition-colors hover:text-foreground"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ol>
        </section>
      )}
    </article>
  );
}
