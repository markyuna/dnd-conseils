"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const statuses = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "closed", label: "Closed" },
];

type LeadStatusActionsProps = {
  leadId: string;
  currentStatus: string;
};

export default function LeadStatusActions({
  leadId,
  currentStatus,
}: LeadStatusActionsProps) {
  const router = useRouter();
  const [loadingStatus, setLoadingStatus] = useState<string | null>(null);

  async function updateStatus(status: string) {
    if (status === currentStatus) return;

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

      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour du status");
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Impossible de mettre à jour le status.");
    } finally {
      setLoadingStatus(null);
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {statuses.map((status) => {
        const isActive = currentStatus === status.value;
        const isLoading = loadingStatus === status.value;

        return (
          <button
            key={status.value}
            type="button"
            disabled={Boolean(loadingStatus)}
            onClick={() => updateStatus(status.value)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              isActive
                ? "bg-[#151515] text-white"
                : "bg-[#b49a7c]/10 text-[#8a6a45] hover:bg-[#b49a7c]/20"
            } ${loadingStatus ? "cursor-not-allowed opacity-60" : ""}`}
          >
            {isLoading ? "..." : status.label}
          </button>
        );
      })}
    </div>
  );
}