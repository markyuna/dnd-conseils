// src/app/sitemap.ts

import type { MetadataRoute } from "next";

import { getAbsoluteUrl } from "@/lib/seo";
import { seoServicePages } from "@/lib/seo-pages";

type SitemapEntry = MetadataRoute.Sitemap[number];

/**
 * Date de dernière modification des pages statiques.
 * À mettre à jour lorsque leur contenu change réellement : Google n'utilise
 * `lastmod` que s'il est fiable (une date « maintenant » à chaque build est ignorée).
 */
const STATIC_PAGES_UPDATED_AT = "2026-11-13";

const staticRoutes: SitemapEntry[] = [
  {
    url: getAbsoluteUrl("/"),
    lastModified: STATIC_PAGES_UPDATED_AT,
    changeFrequency: "weekly",
    priority: 1,
    images: [getAbsoluteUrl("/images/og-dnd-conseils.jpg")],
  },
  {
    url: getAbsoluteUrl("/devis"),
    lastModified: STATIC_PAGES_UPDATED_AT,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: getAbsoluteUrl("/a-propos"),
    lastModified: STATIC_PAGES_UPDATED_AT,
    changeFrequency: "monthly",
    priority: 0.7,
    images: [getAbsoluteUrl("/apropos/denis.webp")],
  },
];

const serviceRoutes: SitemapEntry[] = seoServicePages.map((page) => ({
  url: getAbsoluteUrl(`/${page.slug}`),
  lastModified: page.updatedAt,
  changeFrequency: "monthly",
  priority: 0.8,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const seen = new Set<string>();

  return [...staticRoutes, ...serviceRoutes].filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
