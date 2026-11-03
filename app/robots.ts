import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/area-restrita/"],
    },
    sitemap: "https://www.drclaudioeduardo.com.br/sitemap.xml",
  };
}

