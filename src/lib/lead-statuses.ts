// src/lib/lead-statuses.ts
// Single source of truth for lead statuses — imported by both client UI and server API routes.

export const LEAD_STATUSES = [
  { value: "new", label: "Nouveau" },
  { value: "contacted", label: "Contacté" },
  { value: "qualified", label: "Qualifié" },
  { value: "won", label: "Gagné" },
  { value: "lost", label: "Perdu" },
] as const;

export type LeadStatus = (typeof LEAD_STATUSES)[number]["value"];

export function isLeadStatus(status: unknown): status is LeadStatus {
  return (
    typeof status === "string" &&
    LEAD_STATUSES.some((s) => s.value === status)
  );
}
