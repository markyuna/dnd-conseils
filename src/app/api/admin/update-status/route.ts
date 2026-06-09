// src/app/api/admin/update-status/route.ts

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { supabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const allowedStatuses = ["new", "contacted", "qualified", "won", "lost"] as const;

type LeadStatus = (typeof allowedStatuses)[number];

function isAllowedStatus(status: unknown): status is LeadStatus {
  return (
    typeof status === "string" &&
    allowedStatuses.includes(status as LeadStatus)
  );
}

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const isAdmin = cookieStore.get("dnd_admin")?.value === "true";

    if (!isAdmin) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
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

    if (!isAllowedStatus(status)) {
      return NextResponse.json(
        {
          error: "Invalid status",
          allowedStatuses,
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("contact_requests")
      .update({
        status,
      })
      .eq("id", id)
      .select("id, status")
      .single();

    if (error) {
      console.error("Erreur Supabase update-status:", error);

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      lead: data,
    });
  } catch (error) {
    console.error("Erreur API update-status:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}