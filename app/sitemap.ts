import type { MetadataRoute } from "next";
import { getCirurgiaSlugs } from "@/content/cirurgias";

const BASE_URL = "https://www.drclaudioeduardo.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/claudio-eduardo-cirurgiao-plastico`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/cirurgias`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contato`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const surgeryRoutes: MetadataRoute.Sitemap = getCirurgiaSlugs().map((slug) => ({
    url: `${BASE_URL}/cirurgias/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...surgeryRoutes];
}

