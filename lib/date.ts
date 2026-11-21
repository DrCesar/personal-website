const short = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
const long = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" });

export const formatShortDate = (iso: string) => short.format(new Date(iso));
export const formatLongDate = (iso: string) => long.format(new Date(iso));
