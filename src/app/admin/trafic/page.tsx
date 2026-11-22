// src/app/admin/trafic/page.tsx

import Link from "next/link";
import { redirect } from "next/navigation";

import AdminNav from "@/components/admin/AdminNav";
import Navbar from "@/components/Navbar";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { supabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Row = { label: string; visitors?: number; pageviews?: number; count?: number };
type Summary = {
  pageviews: number;
  visitors: number;
  bounce_rate: number;
  pages_per_visitor: number;
  live_visitors: number;
  by_day: { day: string; visitors: number; pageviews: number }[];
  by_hour: { hour: number; pageviews: number }[];
  top_pages: Row[];
  entry_pages: Row[];
  sources: Row[];
  referrers: Row[];
  campaigns: Row[];
  countries: Row[];
  cities: Row[];
  devices: Row[];
  browsers: Row[];
  os: Row[];
  languages: Row[];
  events: Row[];
};

const RANGES = [
  { value: "1", label: "24 h" },
  { value: "7", label: "7 jours" },
  { value: "30", label: "30 jours" },
  { value: "90", label: "90 jours" },
  { value: "365", label: "12 mois" },
];

const EVENT_LABELS: Record<string, string> = {
  lead_submitted: "Demandes envoyées",
  cta_click: "Clics sur un CTA",
  phone_click: "Clics téléphone",
  email_click: "Clics email",
  quote_started: "Devis démarrés",
};

const countryNames = new Intl.DisplayNames(["fr"], { type: "region" });

function countryLabel(code: string) {
  if (code === "??") return "Inconnu";
  try {
    return countryNames.of(code) ?? code;
  } catch {
    return code;
  }
}

function nf(n: number) {
  return new Intl.NumberFormat("fr-FR").format(n);
}

function KpiCard({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
      <p className="text-[11px] uppercase tracking-[0.18em] text-[#b49a7c]">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-[#17130f]">{value}</p>
      {hint && <p className="mt-1 text-xs text-black/50">{hint}</p>}
    </div>
  );
}

function Card({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-[1.5rem] bg-white p-6 shadow-sm ${className}`}>
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#17130f]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function RankList({
  rows,
  metric = "visitors",
  format,
  empty = "Pas encore de données",
}: {
  rows: Row[];
  metric?: "visitors" | "pageviews" | "count";
  format?: (label: string) => string;
  empty?: string;
}) {
  if (!rows.length) return <p className="text-sm text-black/40">{empty}</p>;
  const max = Math.max(...rows.map((r) => r[metric] ?? 0), 1);

  return (
    <ul className="space-y-2.5">
      {rows.map((row) => {
        const value = row[metric] ?? 0;
        return (
          <li key={row.label} className="text-sm">
            <div className="mb-1 flex items-baseline justify-between gap-3">
              <span className="min-w-0 truncate text-[#303030]">
                {format ? format(row.label) : row.label}
              </span>
              <span className="shrink-0 font-medium tabular-nums text-[#17130f]">
                {nf(value)}
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#f6f2ee]">
              <div
                className="h-full rounded-full bg-[#b49a7c]"
                style={{ width: `${Math.max((value / max) * 100, 2)}%` }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function DailyChart({ data }: { data: Summary["by_day"] }) {
  const max = Math.max(...data.map((d) => d.pageviews), 1);
  const dense = data.length > 45;

  return (
    <div>
      <div className="flex h-48 items-end gap-[3px]">
        {data.map((d) => (
          <div
            key={d.day}
            className="group relative flex h-full flex-1 flex-col justify-end"
            title={`${d.day} — ${d.visitors} visiteur(s), ${d.pageviews} page(s) vue(s)`}
          >
            <div
              className="w-full rounded-t bg-[#b49a7c]/35"
              style={{ height: `${(d.pageviews / max) * 100}%` }}
            >
              <div
                className="w-full rounded-t bg-[#17130f]"
                style={{
                  height: d.pageviews ? `${(d.visitors / d.pageviews) * 100}%` : 0,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[11px] text-black/45">
        <span>{data[0] ? new Date(data[0].day).toLocaleDateString("fr-FR", { day: "2-digit", month: "short" }) : ""}</span>
        {!dense && data.length > 2 && <span>{data.length} jours</span>}
        <span>
          {data.at(-1)
            ? new Date(data.at(-1)!.day).toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })
            : ""}
        </span>
      </div>
      <div className="mt-3 flex gap-5 text-xs text-black/60">
        <span className="flex items-center gap-2">
          <i className="inline-block h-2.5 w-2.5 rounded-sm bg-[#17130f]" /> Visiteurs
        </span>
        <span className="flex items-center gap-2">
          <i className="inline-block h-2.5 w-2.5 rounded-sm bg-[#b49a7c]/35" /> Pages vues
        </span>
      </div>
    </div>
  );
}

function HourChart({ data }: { data: Summary["by_hour"] }) {
  const byHour = new Map(data.map((d) => [d.hour, d.pageviews]));
  const hours = Array.from({ length: 24 }, (_, h) => ({ h, n: byHour.get(h) ?? 0 }));
  const max = Math.max(...hours.map((x) => x.n), 1);

  return (
    <div>
      <div className="flex h-28 items-end gap-[3px]">
        {hours.map(({ h, n }) => (
          <div
            key={h}
            className="flex-1 rounded-t bg-[#17130f]/80"
            style={{ height: `${Math.max((n / max) * 100, n ? 4 : 1)}%` }}
            title={`${h}h — ${n} page(s) vue(s)`}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[11px] text-black/45">
        <span>0h</span>
        <span>6h</span>
        <span>12h</span>
        <span>18h</span>
        <span>23h</span>
      </div>
    </div>
  );
}

export default async function AdminTraficPage({
  searchParams,
}: {
  searchParams: Promise<{ range?: string }>;
}) {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin");
  }

  const { range: rangeParam } = await searchParams;
  const range = RANGES.some((r) => r.value === rangeParam) ? rangeParam! : "30";
  const days = Number(range);

  const to = new Date();
  const from = new Date(to.getTime() - days * 24 * 60 * 60 * 1000);

  const [summaryRes, leadsRes] = await Promise.all([
    supabaseAdmin.rpc("analytics_summary", {
      p_from: from.toISOString(),
      p_to: to.toISOString(),
    }),
    supabaseAdmin
      .from("contact_requests")
      .select("id", { count: "exact", head: true })
      .gte("created_at", from.toISOString()),
  ]);

  const summary = summaryRes.data as Summary | null;
  const leads = leadsRes.count ?? 0;

  return (
    <>
      <Navbar variant="minimal" />

      <main className="min-h-screen bg-[#f6f2ee] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#b49a7c]">Admin</p>
              <h1 className="text-4xl font-semibold text-[#17130f]">Trafic du site</h1>
              <p className="mt-2 text-sm text-black/55">
                Mesure d’audience interne, sans cookie et sans adresse IP conservée.
              </p>
            </div>
            <AdminNav active="trafic" />
          </header>

          <div className="mb-8 flex flex-wrap gap-2">
            {RANGES.map((r) => (
              <Link
                key={r.value}
                href={`/admin/trafic?range=${r.value}`}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  r.value === range
                    ? "bg-[#17130f] text-white"
                    : "bg-white text-[#17130f] hover:bg-[#17130f]/5"
                }`}
              >
                {r.label}
              </Link>
            ))}
          </div>

          {summaryRes.error || !summary ? (
            <div className="rounded-[1.5rem] bg-white p-8 text-sm text-[#303030] shadow-sm">
              <p className="mb-2 font-semibold text-[#17130f]">
                Les statistiques ne sont pas encore disponibles.
              </p>
              <p>
                Exécutez la migration <code>supabase/migrations/20261122_analytics.sql</code>{" "}
                dans le SQL Editor de Supabase, puis rechargez cette page.
              </p>
              {summaryRes.error && (
                <p className="mt-3 text-xs text-black/40">{summaryRes.error.message}</p>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                <KpiCard label="Visiteurs" value={nf(summary.visitors)} hint="Uniques par jour, cumulés" />
                <KpiCard label="Pages vues" value={nf(summary.pageviews)} />
                <KpiCard label="Pages / visiteur" value={String(summary.pages_per_visitor)} />
                <KpiCard label="Taux de rebond" value={`${summary.bounce_rate} %`} hint="1 seule page vue" />
                <KpiCard
                  label="Demandes reçues"
                  value={nf(leads)}
                  hint={
                    summary.visitors
                      ? `${((leads / summary.visitors) * 100).toFixed(1)} % des visiteurs`
                      : undefined
                  }
                />
                <KpiCard label="En ligne" value={nf(summary.live_visitors)} hint="5 dernières minutes" />
              </div>

              <Card title="Évolution">
                <DailyChart data={summary.by_day} />
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card title="Pages les plus vues">
                  <RankList rows={summary.top_pages} metric="pageviews" />
                </Card>
                <Card title="Pages d’entrée">
                  <RankList rows={summary.entry_pages} />
                </Card>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                <Card title="Sources de trafic">
                  <RankList rows={summary.sources} />
                </Card>
                <Card title="Sites référents">
                  <RankList rows={summary.referrers} empty="Aucun site référent" />
                </Card>
                <Card title="Campagnes (UTM)">
                  <RankList rows={summary.campaigns} empty="Aucune campagne UTM" />
                </Card>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card title="Pays">
                  <RankList rows={summary.countries} format={countryLabel} />
                </Card>
                <Card title="Villes">
                  <RankList rows={summary.cities} />
                </Card>
              </div>

              <div className="grid gap-6 lg:grid-cols-4">
                <Card title="Appareils">
                  <RankList rows={summary.devices} />
                </Card>
                <Card title="Navigateurs">
                  <RankList rows={summary.browsers} />
                </Card>
                <Card title="Systèmes">
                  <RankList rows={summary.os} />
                </Card>
                <Card title="Langues">
                  <RankList rows={summary.languages} />
                </Card>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card title="Heures de visite (Paris)">
                  <HourChart data={summary.by_hour} />
                </Card>
                <Card title="Conversions">
                  <RankList
                    rows={summary.events}
                    metric="count"
                    format={(l) => EVENT_LABELS[l] ?? l}
                    empty="Aucune conversion enregistrée"
                  />
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
