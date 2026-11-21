import RichText from "./RichText";

export interface TableData {
  caption?: string;
  columns: string[];
  rows: string[][];
}

export default function ComparisonTable({ caption, columns, rows }: TableData) {
  return (
    <figure className="flex flex-col gap-3 my-2">
      <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-surface-border">
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="py-2.5 pr-4 text-[11px] font-mono font-medium uppercase tracking-wider text-subtle align-bottom"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-border/70">
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-foreground/[0.015] transition-colors">
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className={`py-3 pr-4 text-[13px] leading-snug align-top ${
                      cellIdx === 0
                        ? "font-semibold text-foreground whitespace-nowrap"
                        : "text-foreground/75"
                    }`}
                  >
                    <RichText>{cell}</RichText>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {caption && (
        <figcaption className="text-xs text-subtle leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
