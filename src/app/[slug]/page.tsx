// src/app/[slug]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { generateSeo } from "@/lib/seo";
import { seoServicePages } from "@/lib/seo-pages";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return seoServicePages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = seoServicePages.find((item) => item.slug === slug);

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
  const page = seoServicePages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

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

      <main className="min-h-screen bg-[#f6f2ee] pt-24">
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b49a7c]/30 bg-white/70 px-4 py-2 text-sm font-medium text-[#7a654b] shadow-sm">
              <Sparkles className="h-4 w-4" />
              {page.eyebrow}
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-[#17130f] md:text-6xl">
              {page.h1}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6f6257]">
              {page.intro}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#17130f] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#2a211a]"
              >
                Demander une étude gratuite
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#17130f]/15 bg-white px-7 py-4 text-sm font-semibold text-[#17130f] transition hover:-translate-y-0.5 hover:border-[#17130f]/30"
              >
                Poser une question
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {page.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#17130f] text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <p className="text-base font-medium leading-7 text-[#2b241e]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <section className="mt-20 rounded-[2.5rem] bg-[#17130f] p-8 text-white md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b49a7c]">
              Questions fréquentes
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {page.faq.map((item) => (
                <article key={item.question}>
                  <h2 className="text-xl font-semibold">{item.question}</h2>
                  <p className="mt-3 leading-7 text-white/70">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}