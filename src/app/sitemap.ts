// src/app/sitemap.ts

import type { MetadataRoute } from "next";

import { seoConfig } from "@/lib/seo";

type SitemapRoute = {
  path: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
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
    priority: 0.95,
  },
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/mentions-legales",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/politique-confidentialite",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

const serviceRoutes: SitemapRoute[] = [
  {
    path: "/conseil-travaux",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/accompagnement-renovation",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/etude-gratuite-travaux",
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    path: "/analyse-devis-travaux",
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    path: "/renovation-appartement",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/renovation-maison",
    changeFrequency: "monthly",
    priority: 0.85,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [...staticRoutes, ...serviceRoutes];

  return routes.map((route) => ({
    url: createUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}