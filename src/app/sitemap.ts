import type { MetadataRoute } from "next";
import { getCanonicalUrl } from "@/data/site";

const lastModified = new Date("2026-03-18");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getCanonicalUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: getCanonicalUrl("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: getCanonicalUrl("/work"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: getCanonicalUrl("/contact"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
