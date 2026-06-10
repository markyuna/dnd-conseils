// src/app/api/admin/leads/[id]/route.ts

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { supabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function DELETE(_request: Request, { params }: RouteContext) {
  try {
    const cookieStore = await cookies();
    const isAdmin = cookieStore.get("dnd_admin")?.value === "true";

    if (!isAdmin) {
      return NextResponse.json(
        { success: false, error: "Non autorisé." },
        { status: 401 }
      );
    }

    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID de demande manquant." },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin
      .from("contact_requests")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Erreur suppression lead Supabase:", error);

      return NextResponse.json(
        {
          success: false,
          error: "Impossible de supprimer cette demande.",
          details: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Erreur API delete lead:", error);

    return NextResponse.json(
      { success: false, error: "Erreur serveur." },
      { status: 500 }
    );
  }
}