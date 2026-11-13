// src/app/manifest.ts

import type { MetadataRoute } from "next";

import { seoConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seoConfig.defaultTitle,
    short_name: seoConfig.siteName,
    description: seoConfig.defaultDescription,
    lang: "fr",
    start_url: "/",
    display: "standalone",
    background_color: seoConfig.backgroundColor,
    theme_color: seoConfig.themeColor,
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
