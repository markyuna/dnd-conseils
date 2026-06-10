// src/app/admin/leads/page.tsx

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Navbar from "@/components/Navbar";
import { supabaseAdmin } from "@/lib/supabase-admin";

import LeadStatusActions from "./LeadStatusActions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactRequest = {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  request_type: string | null;
  offer: string | null;
  project_type: string | null;
  type_bien: string | null;
  surface: string | null;
  lots: string | null;
  timing: string | null;
  budget: string | null;
  documents: string | string[] | null;
  message: string | null;
  status: string | null;
  created_at: string | null;
};

function formatDate(date: string | null) {
  if (!date) return "—";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "—";
  }

  return parsedDate.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatDocuments(documents: string | string[] | null) {
  if (!documents) return "Aucun document";

  if (Array.isArray(documents)) {
    return documents.length > 0 ? documents.join(", ") : "Aucun document";
  }

  return documents.trim() || "Aucun document";
}

function formatStatus(status: string | null) {
  const value = status || "new";

  const labels: Record<string, string> = {
    new: "Nouveau",
    contacted: "Contacté",
    qualified: "Qualifié",
    won: "Gagné",
    lost: "Perdu",
  };

  return labels[value] || value;
}

function Value({ label, value }: { label: string; value?: string | null }) {
  return (
    <div className="min-w-0 rounded-2xl bg-[#f8f5f1] px-4 py-3">
      <p className="text-[10px] uppercase tracking-[0.16em] text-[#b49a7c]">
        {label}
      </p>

      <p className="mt-1 truncate text-[13px] leading-snug text-[#303030]">
        {value?.trim() || "—"}
      </p>
    </div>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <>
      <Navbar variant="minimal" />

      <main className="min-h-screen bg-[#f6f2ee] px-6 py-24">
        <section className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-xl shadow-black/10">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#b49a7c]">
            CRM
          </p>

          <h1 className="text-3xl font-semibold text-[#151515]">
            Erreur de chargement
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-[#666]">
            Impossible de charger les demandes pour le moment. Vérifie la
            connexion Supabase, les variables d’environnement et le nom de la
            table <strong>contact_requests</strong>.
          </p>

          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4">
            <p className="text-sm font-medium text-red-700">
              Message technique :
            </p>

            <pre className="mt-2 overflow-auto whitespace-pre-wrap text-xs leading-relaxed text-red-700">
              {message}
            </pre>
          </div>
        </section>
      </main>
    </>
  );
}

export default async function AdminLeadsPage() {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("dnd_admin")?.value === "true";

  if (!isAdmin) {
    redirect("/admin");
  }

  const { data, error } = await supabaseAdmin
    .from("contact_requests")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erreur Supabase admin leads:", error);

    return <ErrorState message={error.message} />;
  }

  const leads = (data || []) as ContactRequest[];

  return (
    <>
      <Navbar variant="minimal" />

      <main className="min-h-screen bg-[#f6f2ee] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-1.5 text-xs uppercase tracking-[0.3em] text-[#b49a7c]">
                CRM
              </p>

              <h1 className="text-3xl font-semibold text-[#151515] md:text-4xl">
                Demandes reçues
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#666] md:text-base">
                Gérez tous les contacts envoyés depuis le formulaire du site.
              </p>
            </div>

            <div className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#151515] shadow-lg shadow-black/10">
              {leads.length} demande{leads.length > 1 ? "s" : ""}
            </div>
          </header>

          <div className="space-y-4">
            {leads.map((lead) => (
              <article
                key={lead.id}
                className="overflow-hidden rounded-[1.5rem] bg-white shadow-lg shadow-black/10"
              >
                <div className="flex flex-col gap-4 border-b border-black/10 p-5 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[#b49a7c]">
                        Lead reçu le {formatDate(lead.created_at)}
                      </p>

                      <span className="rounded-full bg-[#f6f2ee] px-3 py-1 text-[11px] font-medium text-[#6f5b43]">
                        {formatStatus(lead.status)}
                      </span>
                    </div>

                    <h2 className="text-xl font-semibold leading-tight text-[#151515]">
                      {lead.name?.trim() || "Sans nom"}
                    </h2>

                    <p className="mt-1 max-w-3xl text-sm leading-snug text-[#666]">
                      {lead.message?.trim() || "Aucun message renseigné."}
                    </p>
                  </div>

                  <LeadStatusActions
                    leadId={lead.id}
                    leadName={lead.name}
                    currentStatus={lead.status || "new"}
                  />
                </div>

                <div className="grid gap-3 p-5 md:grid-cols-2 lg:grid-cols-4">
                  <Value label="Email" value={lead.email} />
                  <Value label="Téléphone" value={lead.phone} />
                  <Value label="Type de demande" value={lead.request_type} />
                  <Value label="Offre" value={lead.offer} />
                  <Value label="Type de projet" value={lead.project_type} />
                  <Value label="Type de bien" value={lead.type_bien} />
                  <Value label="Surface" value={lead.surface} />
                  <Value label="Lots" value={lead.lots} />
                  <Value label="Timing" value={lead.timing} />
                  <Value label="Budget" value={lead.budget} />

                  <div className="min-w-0 rounded-2xl bg-[#f8f5f1] px-4 py-3 md:col-span-2">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-[#b49a7c]">
                      Documents
                    </p>

                    <p className="mt-1 truncate text-[13px] leading-snug text-[#303030]">
                      {formatDocuments(lead.documents)}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            {leads.length === 0 && (
              <div className="rounded-[1.5rem] bg-white p-10 text-center shadow-lg shadow-black/10">
                <p className="text-lg font-medium text-[#151515]">
                  Aucun lead pour le moment.
                </p>

                <p className="mt-2 text-sm text-[#777]">
                  Les nouvelles demandes apparaîtront ici automatiquement.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}