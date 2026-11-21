import { Fragment } from "react";

type Token =
  | { kind: "text"; value: string }
  | { kind: "bold"; value: string }
  | { kind: "code"; value: string }
  | { kind: "link"; value: string; href: string };

const PATTERN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`/g;

function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  let cursor = 0;

  const regex = new RegExp(PATTERN.source, "g");
  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    const index = match.index;
    if (index > cursor) {
      tokens.push({ kind: "text", value: input.slice(cursor, index) });
    }

    const [raw, linkText, href, boldText, codeText] = match;
    if (linkText && href) {
      tokens.push({ kind: "link", value: linkText, href });
    } else if (boldText) {
      tokens.push({ kind: "bold", value: boldText });
    } else if (codeText) {
      tokens.push({ kind: "code", value: codeText });
    }

    cursor = index + raw.length;
  }

  if (cursor < input.length) {
    tokens.push({ kind: "text", value: input.slice(cursor) });
  }

  return tokens;
}

/** Renders a restricted inline subset of Markdown: links, bold, and inline code. */
export default function RichText({ children }: { children: string }) {
  return (
    <>
      {tokenize(children).map((token, idx) => {
        switch (token.kind) {
          case "link":
            return (
              <a
                key={idx}
                href={token.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-muted/50 underline-offset-2 transition-colors hover:decoration-foreground"
              >
                {token.value}
              </a>
            );
          case "bold":
            return (
              <strong key={idx} className="font-semibold">
                {token.value}
              </strong>
            );
          case "code":
            return (
              <code
                key={idx}
                className="rounded bg-foreground/[0.06] px-1 py-0.5 font-mono text-[0.875em]"
              >
                {token.value}
              </code>
            );
          default:
            return <Fragment key={idx}>{token.value}</Fragment>;
        }
      })}
    </>
  );
}
