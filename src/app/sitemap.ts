// src/app/sitemap.ts

import type { MetadataRoute } from "next";

import { seoConfig } from "@/lib/seo";
import { seoServicePages } from "@/lib/seo-pages";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

type SitemapRoute = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

function createUrl(path: string) {
  if (!path || path === "/") {
    return seoConfig.siteUrl;
  }

  return `${seoConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

const staticRoutes: SitemapRoute[] = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/a-propos",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/devis",
    changeFrequency: "weekly",
    priority: 0.75,
  },
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/mentions-legales",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/confidentialite",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

const seoRoutes: SitemapRoute[] = seoServicePages.map((page) => ({
  path: `/${page.slug}`,
  changeFrequency: "monthly",
  priority: 0.72,
}));

function uniqueRoutes(routes: SitemapRoute[]) {
  const seen = new Set<string>();

  return routes.filter((route) => {
    const normalizedPath = route.path === "" ? "/" : route.path;

    if (seen.has(normalizedPath)) {
      return false;
    }

    seen.add(normalizedPath);
    return true;
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = uniqueRoutes([...staticRoutes, ...seoRoutes]);

  return routes.map((route) => ({
    url: createUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}