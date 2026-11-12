import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  "/",
  "/services",
  "/service-area",
  "/about",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
  "/book",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
