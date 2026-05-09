// src/services/contact.ts

import { supabase } from "@/lib/supabase";

export type ContactRequestPayload = {
  name: string;
  email: string;
  phone?: string;
  requestType: string;
  offer?: string;
  projectType?: string;
  surface?: string;
  lots?: string;
  timing?: string;
  budget?: string;
  documents?: string;
  message?: string;
};

export async function createContactRequest(payload: ContactRequestPayload) {
  const row = {
    name: payload.name,
    email: payload.email,
    phone: payload.phone || null,
    request_type: payload.requestType,
    offer: payload.offer || null,
    project_type: payload.projectType || null,
    surface: payload.surface || null,
    lots: payload.lots || null,
    timing: payload.timing || null,
    budget: payload.budget || null,
    documents: payload.documents || null,
    message: payload.message || null,
  };

  const { error } = await supabase.from("contact_requests").insert(row);

  if (error) {
    console.error("Supabase contact request error:", {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code,
      row,
    });

    throw new Error(
      error.message || "Impossible d’envoyer votre demande pour le moment."
    );
  }

  return true;
}