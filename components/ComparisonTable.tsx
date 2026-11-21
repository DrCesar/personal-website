import RichText from "./RichText";

export interface TableData {
  caption?: string;
  columns: string[];
  rows: string[][];
}

export default function ComparisonTable({ caption, columns, rows }: TableData) {
  return (
    <figure className="flex flex-col gap-3 lg:-mx-24">
      <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border">
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="py-2 pr-4 align-bottom text-xs font-normal text-muted"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className={`py-2.5 pr-4 align-top text-[13px] leading-snug ${
                      cell.length <= 16 ? "whitespace-nowrap " : ""
                    }${
                      cellIdx === 0
                        ? "font-medium"
                        : "text-foreground/80"
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
        <figcaption className="text-sm text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
