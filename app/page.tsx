import ListRow from "@/components/ListRow";
import SocialIcon from "@/components/SocialIcon";
import { formatShortDate } from "@/lib/date";
import { EDUCATION, EXPERIENCE, type CvEntry } from "@/lib/cv";
import { getPosts } from "@/lib/posts";
import { PROJECTS } from "@/lib/projects";
import { SITE } from "@/lib/site";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-muted">{title}</h2>
      <ul className="flex flex-col">{children}</ul>
    </section>
  );
}

function CvSection({ title, entries }: { title: string; entries: CvEntry[] }) {
  return (
    <Section title={title}>
      {entries.map((entry) => (
        <ListRow
          key={entry.detail}
          title={entry.title}
          description={entry.detail}
          meta={entry.period}
        />
      ))}
    </Section>
  );
}

export default function HomePage() {
  const posts = getPosts();

  return (
    <div className="flex flex-col gap-14">
      <header className="flex flex-col gap-4">
        <h1 className="font-medium text-foreground">{SITE.name}</h1>
        <p>
          I&apos;m a software engineer at Amazon in Vancouver, working on royalty calculation
          systems for Amazon&apos;s digital businesses. Before that I built machine learning and
          recommendation systems at PayPal and Tigo in Guatemala.
        </p>
        <p>
          Lately I spend most of my time on agent-driven development: building tools for AI coding
          agents and helping teams adopt them. I write here about what I learn.
        </p>
        <ul className="flex items-center gap-4 pt-1">
          {SITE.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className="flex text-muted transition-colors hover:text-foreground"
              >
                <SocialIcon name={link.icon} />
              </a>
            </li>
          ))}
        </ul>
      </header>

      <Section title="Writing">
        {posts.length === 0 ? (
          <li className="py-2 text-muted">Nothing published yet.</li>
        ) : (
          posts.map((post) => (
            <ListRow
              key={post.slug}
              href={`/writing/${post.slug}`}
              title={post.title}
              meta={post.draft ? "Draft" : formatShortDate(post.date)}
            />
          ))
        )}
      </Section>

      <Section title="Projects">
        {PROJECTS.map((project) => (
          <ListRow
            key={project.title}
            href={project.href}
            title={project.title}
            description={project.description}
            meta={project.year}
          />
        ))}
      </Section>

      <CvSection title="Experience" entries={EXPERIENCE} />
      <CvSection title="Education" entries={EDUCATION} />
    </div>
  );
}
