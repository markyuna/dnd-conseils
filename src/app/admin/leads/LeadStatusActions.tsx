// src/app/admin/leads/LeadStatusActions.tsx

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const statuses = [
  { value: "new", label: "Nouveau" },
  { value: "contacted", label: "Contacté" },
  { value: "qualified", label: "Qualifié" },
  { value: "won", label: "Gagné" },
  { value: "lost", label: "Perdu" },
] as const;

type LeadStatus = (typeof statuses)[number]["value"];

type LeadStatusActionsProps = {
  leadId: string;
  currentStatus: string;
};

export default function LeadStatusActions({
  leadId,
  currentStatus,
}: LeadStatusActionsProps) {
  const router = useRouter();
  const [loadingStatus, setLoadingStatus] = useState<LeadStatus | null>(null);

  async function updateStatus(status: LeadStatus) {
    if (status === currentStatus || loadingStatus) return;

    try {
      setLoadingStatus(status);

      const response = await fetch("/api/admin/update-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: leadId,
          status,
        }),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          payload?.error || "Erreur lors de la mise à jour du statut."
        );
      }

      router.refresh();
    } catch (error) {
      console.error("Erreur update lead status:", error);
      alert("Impossible de mettre à jour le statut pour le moment.");
    } finally {
      setLoadingStatus(null);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {statuses.map((status) => {
        const isActive = currentStatus === status.value;
        const isLoading = loadingStatus === status.value;
        const isDisabled = Boolean(loadingStatus);

        return (
          <button
            key={status.value}
            type="button"
            disabled={isDisabled}
            onClick={() => updateStatus(status.value)}
            className={[
              "rounded-full px-3.5 py-1.5 text-xs font-medium transition",
              "focus:outline-none focus:ring-2 focus:ring-[#b49a7c]/40 focus:ring-offset-2",
              isActive
                ? "bg-[#151515] text-white shadow-sm"
                : "bg-[#b49a7c]/10 text-[#7a5f3f] hover:bg-[#b49a7c]/20",
              isDisabled ? "cursor-not-allowed opacity-60" : "",
            ].join(" ")}
            aria-pressed={isActive}
            aria-busy={isLoading}
          >
            {isLoading ? "Mise à jour..." : status.label}
          </button>
        );
      })}
    </div>
  );
} 