// src/app/api/admin/update-status/route.ts

import { NextResponse } from "next/server";

import { isAdminAuthenticated } from "@/lib/admin-auth";
import { isLeadStatus, LEAD_STATUSES } from "@/lib/lead-statuses";
import { supabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    if (!(await isAdminAuthenticated())) {
      return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
    }

    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const { id, status } = body as {
      id?: unknown;
      status?: unknown;
    };

    if (typeof id !== "string" || !id.trim()) {
      return NextResponse.json(
        { error: "Missing or invalid lead id" },
        { status: 400 }
      );
    }

    if (!isLeadStatus(status)) {
      return NextResponse.json(
        {
          error: "Invalid status",
          allowedStatuses: LEAD_STATUSES.map((s) => s.value),
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("contact_requests")
      .update({ status })
      .eq("id", id)
      .select("id, status")
      .single();

    if (error) {
      console.error("Erreur Supabase update-status:", error);

      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, lead: data });
  } catch (error) {
    console.error("Erreur API update-status:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
