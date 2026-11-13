// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/Footer";
import HelpBot from "@/components/HelpBot";
import JsonLd from "@/components/seo/JsonLd";
import { siteGraphSchema } from "@/lib/schema";
import { rootMetadata, seoConfig } from "@/lib/seo";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: seoConfig.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-[#f8f5f2] text-[#1a1a1a]">
        <JsonLd data={siteGraphSchema()} />

        <div className="flex min-h-screen flex-col">
          {/* Chaque page rend son propre <main> : ici un simple conteneur. */}
          <div className="flex-1">{children}</div>

          <Footer />
        </div>

        <HelpBot />
      </body>
    </html>
  );
}