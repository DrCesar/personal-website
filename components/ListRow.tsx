import Link from "next/link";

interface ListRowProps {
  title: string;
  meta: string;
  description?: string;
  href?: string;
}

const rowClass = "-mx-3 flex items-baseline justify-between gap-6 rounded-md px-3 py-2";

export default function ListRow({ title, meta, description, href }: ListRowProps) {
  const external = href?.startsWith("http") ?? false;
  const body = (
    <>
      <span className="flex min-w-0 flex-col">
        <span className="text-foreground">
          {title}
          {external && <span aria-hidden className="ml-1 text-muted">↗</span>}
        </span>
        {description && <span className="text-muted">{description}</span>}
      </span>
      <span className="shrink-0 tabular-nums text-muted">{meta}</span>
    </>
  );

  if (!href) {
    return <li className={rowClass}>{body}</li>;
  }

  const linkClass = `${rowClass} transition-colors hover:bg-foreground/[0.04]`;
  return (
    <li>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {body}
        </a>
      ) : (
        <Link href={href} className={linkClass}>
          {body}
        </Link>
      )}
    </li>
  );
}
