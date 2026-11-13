import type { Metadata } from "next";

// Espace d'administration : jamais indexé par les moteurs de recherche.
export const metadata: Metadata = {
  title: "Administration",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
