// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  organizationSchema,
  professionalServiceSchema,
  websiteSchema,
} from "@/lib/schema";
import { generateSeo } from "@/lib/seo";

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

export const metadata: Metadata = generateSeo({
  title: "Conseil indépendant en travaux et rénovation",
  description:
    "DND Conseils accompagne les particuliers avant leurs travaux de rénovation : analyse de projet, conseils personnalisés, étude gratuite et aide à la décision avant de s’engager.",
  path: "/",
  keywords: [
    "DND Conseils",
    "conseil travaux",
    "conseil rénovation",
    "accompagnement travaux",
    "étude gratuite travaux",
    "analyse devis travaux",
    "rénovation appartement",
    "rénovation maison",
    "conseiller indépendant travaux",
  ],
});

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
        <JsonLd
          data={[
            organizationSchema(),
            professionalServiceSchema(),
            websiteSchema(),
          ]}
        />

        <div className="flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}