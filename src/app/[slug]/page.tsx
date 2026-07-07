// src/app/[slug]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, MessageCircle } from "lucide-react";

import Navbar from "@/components/Navbar";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { generateSeo } from "@/lib/seo";
import { getSeoServicePage, seoServicePages } from "@/lib/seo-pages";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return seoServicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getSeoServicePage(slug);
  if (!page) return {};
  return generateSeo({
    title: page.metaTitle,
    description: page.description,
    path: `/${page.slug}`,
    keywords: page.keywords,
  });
}

export default async function SeoServicePage({ params }: Props) {
  const { slug } = await params;
  const page = getSeoServicePage(slug);
  if (!page) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: page.title, path: `/${page.slug}` },
          ]),
          faqSchema(page.faq),
        ]}
      />

      <Navbar />

      <main className="min-h-screen bg-[#f6f2ee] text-[#17130f]">

        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-24 px-4 sm:px-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(180,154,124,0.22),transparent_55%),radial-gradient(ellipse_at_80%_30%,rgba(23,19,15,0.06),transparent_45%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#f6f2ee]" />

          <div className="relative mx-auto max-w-7xl">
            {/* Breadcrumb */}
            <nav aria-label="Fil d'Ariane" className="mb-8 flex items-center gap-2 text-xs text-[#9b8c7d]">
              <Link href="/" className="transition hover:text-[#17130f]">Accueil</Link>
              <span>/</span>
              <span className="text-[#17130f]">{page.title}</span>
            </nav>

            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b49a7c]/35 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8b7a6b] shadow-sm backdrop-blur">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  {page.eyebrow}
                </div>

                <h1 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#17130f] md:text-5xl lg:text-6xl">
                  {page.h1}
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f6257]">
                  {page.intro}
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="/devis"
                    className="inline-flex items-center gap-2 rounded-full bg-[#17130f] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(23,19,15,0.18)] transition hover:-translate-y-0.5 hover:bg-[#8b7a6b]"
                  >
                    Demander une étude gratuite
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[#17130f]/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#17130f] shadow-sm transition hover:-translate-y-0.5 hover:border-[#17130f]/25"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Poser une question
                  </Link>
                </div>
              </div>

              {/* Stats card */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[#17130f]/8" />
                <div className="relative rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_24px_70px_rgba(23,19,15,0.09)] backdrop-blur">
                  <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#8b7a6b]">
                    Ce que vous gagnez
                  </p>
                  <ul className="space-y-4">
                    {page.benefits.map((benefit, i) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#17130f] text-[10px] font-bold text-white">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm leading-6 text-[#3a3028]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 border-t border-[#e8e3dc] pt-6">
                    <p className="text-xs text-[#9b8c7d]">
                      Accompagnement indépendant · Sans engagement · Réponse sous 48h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits mobile (only on small screens) */}
        <section className="px-4 pb-16 sm:px-6 lg:hidden">
          <div className="mx-auto max-w-7xl grid gap-3 sm:grid-cols-2">
            {page.benefits.map((benefit, i) => (
              <div
                key={benefit}
                className="flex items-start gap-4 rounded-[1.5rem] border border-[#ede8e1] bg-white p-5 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#17130f] text-[11px] font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-[#3a3028]">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="relative overflow-hidden bg-[#17130f] px-4 py-20 text-white sm:px-6">
          <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#b49a7c]/12 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_2fr] lg:items-end">
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b49a7c]">
                  Questions fréquentes
                </p>
                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-4xl">
                  Les réponses avant de vous engager
                </h2>
              </div>
              <p className="text-base leading-8 text-white/55 lg:max-w-lg lg:text-right">
                Des doutes ? Ces réponses vous aideront à clarifier votre situation et comprendre ce que DND Conseils peut faire pour vous.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {page.faq.map((item, i) => (
                <article
                  key={item.question}
                  className="rounded-[1.75rem] border border-white/8 bg-white/[0.05] p-6 backdrop-blur"
                >
                  <span className="mb-4 inline-block text-[11px] font-semibold tracking-[0.22em] text-[#b49a7c]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-3 text-lg font-semibold leading-tight tracking-[-0.02em]">
                    {item.question}
                  </h3>
                  <p className="text-sm leading-7 text-white/60">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#b49a7c]/30 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8b7a6b] shadow-sm backdrop-blur">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Sans engagement
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Prêt à avancer avec plus de clarté ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-[#6f6257]">
              Décrivez votre projet en quelques lignes. Nous vous répondons sous 48h avec une première orientation claire et personnalisée.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 rounded-full bg-[#17130f] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(23,19,15,0.18)] transition hover:-translate-y-0.5 hover:bg-[#8b7a6b]"
              >
                Demander une étude gratuite
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#offres"
                className="inline-flex items-center gap-2 rounded-full border border-[#17130f]/15 bg-white px-7 py-4 text-sm font-semibold text-[#17130f] shadow-sm transition hover:-translate-y-0.5"
              >
                Voir nos packs
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
