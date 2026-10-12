import type { MetadataRoute } from "next";

const base = "https://rdpublicschool.org.in";

const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/admissions", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "yearly" },
  { path: "/facilities", priority: 0.8, changeFrequency: "yearly" },
  { path: "/faculty", priority: 0.7, changeFrequency: "yearly" },
  { path: "/news", priority: 0.7, changeFrequency: "weekly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/disclosure", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  "use cache";
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
