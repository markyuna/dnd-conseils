// src/app/sitemap.ts

import type { MetadataRoute } from "next";

import { seoConfig } from "@/lib/seo";

const staticRoutes = [
  "",
  "/a-propos",
  "/devis",
  "/contact",
  "/mentions-legales",
  "/politique-confidentialite",
];

const serviceRoutes = [
  "/conseil-travaux",
  "/accompagnement-renovation",
  "/etude-gratuite-travaux",
  "/analyse-devis-travaux",
  "/renovation-appartement",
  "/renovation-maison",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [...staticRoutes, ...serviceRoutes];

  return routes.map((route) => ({
    url: `${seoConfig.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}