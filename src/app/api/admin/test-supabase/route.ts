// src/app/api/admin/test-supabase/route.ts

import { NextResponse } from "next/server";

import { supabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("contact_requests")
      .select("id, created_at")
      .limit(1);

    if (error) {
      return NextResponse.json(
        {
          ok: false,
          type: "supabase_error",
          message: error.message,
          details: error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Connexion Supabase OK",
      data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        type: "fetch_or_runtime_error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}