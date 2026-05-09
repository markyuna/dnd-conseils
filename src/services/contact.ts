// src/services/contact.ts

import { supabase } from "@/lib/supabase";

export type ContactRequestPayload = {
  name: string;
  email: string;
  phone?: string;
  requestType: string;
  offer?: string;
  projectType?: string;
  propertyType?: string;
  surface?: string;
  lots?: string;
  timing?: string;
  budget?: string;
  message?: string;
};

export async function createContactRequest(payload: ContactRequestPayload) {
  const { error, data } = await supabase
    .from("contact_requests")
    .insert({
      name: payload.name,
      email: payload.email,
      phone: payload.phone || null,
      request_type: payload.requestType,
      offer: payload.offer || null,
      project_type: payload.projectType || null,
      property_type: payload.propertyType || null,
      surface: payload.surface || null,
      lots: payload.lots || null,
      timing: payload.timing || null,
      budget: payload.budget || null,
      message: payload.message || null,
    })
    .select()
    .single();

  if (error) {
    console.error("Supabase contact request error:", error);
    throw new Error("Impossible d’envoyer votre demande pour le moment.");
  }

  return data;
}