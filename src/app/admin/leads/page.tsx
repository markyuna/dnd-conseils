import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase-admin";
import Navbar from "@/components/Navbar";
import LeadStatusActions from "./LeadStatusActions";

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

  return new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatDocuments(documents: string | string[] | null) {
  if (Array.isArray(documents)) return documents.join(", ");
  return documents || "Aucun document";
}

function Value({ label, value }: { label: string; value?: string | null }) {
  return (
    <div className="min-w-0">
      <p className="text-[10px] uppercase tracking-[0.16em] text-[#b49a7c]">
        {label}
      </p>
      <p className="mt-0.5 truncate text-[13px] leading-snug text-[#303030]">
        {value || "—"}
      </p>
    </div>
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
    throw new Error(error.message);
  }

  const leads = (data || []) as ContactRequest[];

  return (
    <>
      <Navbar variant="minimal" />

      <main className="min-h-screen bg-[#f6f2ee] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="mb-1.5 text-xs uppercase tracking-[0.3em] text-[#b49a7c]">
              CRM
            </p>

            <h1 className="text-3xl font-semibold text-[#151515] md:text-4xl">
              Demandes reçues
            </h1>

            <p className="mt-2 text-sm text-[#666] md:text-base">
              Gérez tous les contacts envoyés depuis le formulaire du site.
            </p>
          </div>

          <div className="space-y-4">
            {leads.map((lead) => (
              <article
                key={lead.id}
                className="rounded-[1.5rem] bg-white p-5 shadow-lg shadow-black/10"
              >
                <div className="mb-4 flex flex-col gap-3 border-b border-black/10 pb-4 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[#b49a7c]">
                      Lead reçu le {formatDate(lead.created_at)}
                    </p>

                    <h2 className="mt-1 text-xl font-semibold leading-tight text-[#151515]">
                      {lead.name || "Sans nom"}
                    </h2>

                    <p className="mt-1 max-w-3xl text-sm leading-snug text-[#666]">
                      {lead.message || "Aucun message renseigné."}
                    </p>
                  </div>

                  <LeadStatusActions
                    leadId={lead.id}
                    currentStatus={lead.status || "new"}
                  />
                </div>

                <div className="grid gap-x-6 gap-y-3 md:grid-cols-2 lg:grid-cols-4">
                  <Value label="Email" value={lead.email} />
                  <Value label="Téléphone" value={lead.phone} />
                  <Value label="Type de demande" value={lead.request_type} />
                  <Value label="Offre" value={lead.offer} />
                  <Value label="Type de projet" value={lead.project_type} />
                  <Value label="Surface" value={lead.surface} />
                  <Value label="Lots" value={lead.lots} />
                  <Value label="Timing" value={lead.timing} />
                  <Value label="Budget" value={lead.budget} />
                  <Value
                    label="Documents"
                    value={formatDocuments(lead.documents)}
                  />
                </div>
              </article>
            ))}

            {leads.length === 0 && (
              <div className="rounded-[1.5rem] bg-white p-8 text-center text-[#777] shadow-lg">
                Aucun lead pour le moment.
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}