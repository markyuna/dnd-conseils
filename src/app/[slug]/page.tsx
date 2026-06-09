// src/app/[slug]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { generateSeo } from "@/lib/seo";
import { getSeoServicePage, seoServicePages } from "@/lib/seo-pages";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return seoServicePages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getSeoServicePage(slug);

  if (!page) {
    return {};
  }

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

      <div className="relative min-h-screen overflow-hidden bg-[#f6f2ee] pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(180,154,124,0.24),transparent_34%),radial-gradient(circle_at_85%_25%,rgba(23,19,15,0.08),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.68),rgba(246,242,238,0))]" />

        <section className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b49a7c]/30 bg-white/70 px-4 py-2 text-sm font-medium text-[#7a654b] shadow-sm backdrop-blur">
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
                className="inline-flex items-center justify-center rounded-full border border-[#17130f]/15 bg-white px-7 py-4 text-sm font-semibold text-[#17130f] shadow-sm transition hover:-translate-y-0.5 hover:border-[#17130f]/30 hover:bg-white/90"
              >
                Poser une question
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {page.benefits.map((benefit) => (
              <article
                key={benefit}
                className="group rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#17130f] text-white transition group-hover:scale-105">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <p className="text-base font-medium leading-7 text-[#2b241e]">
                  {benefit}
                </p>
              </article>
            ))}
          </div>

          <section className="mt-20 overflow-hidden rounded-[2.5rem] bg-[#17130f] p-8 text-white shadow-2xl shadow-black/10 md:p-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b49a7c]">
                Questions fréquentes
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                Les réponses essentielles avant de vous engager
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {page.faq.map((item) => (
                <article
                  key={item.question}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="text-xl font-semibold">{item.question}</h3>

                  <p className="mt-3 leading-7 text-white/70">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>
    </>
  );
}