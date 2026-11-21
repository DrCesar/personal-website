export interface CvEntry {
  title: string;
  detail: string;
  period: string;
}

export const EXPERIENCE: CvEntry[] = [
  {
    title: "Amazon",
    detail:
      "Software Development Engineer II. Royalty calculation systems for Amazon's digital businesses, and agent-driven development tooling.",
    period: "2022 – Now",
  },
  {
    title: "PayPal",
    detail: "Senior Machine Learning Engineer. Product recommendation models and their explainability.",
    period: "2022",
  },
  {
    title: "Tigo Guatemala",
    detail:
      "Full Stack Developer and Data Scientist. Recommendation services, churn prediction, and messaging backends.",
    period: "2019 – 2022",
  },
  {
    title: "Bunker Glam",
    detail: "Full Stack Developer. Android apps and backends for events and retail.",
    period: "2018 – 2019",
  },
];

export const EDUCATION: CvEntry[] = [
  {
    title: "Universidad del Valle de Guatemala",
    detail: "Master's in Applied Data Science.",
    period: "2020 – 2021",
  },
  {
    title: "Universidad del Valle de Guatemala",
    detail: "B.S. in Computer Science and Engineering.",
    period: "2015 – 2019",
  },
];
