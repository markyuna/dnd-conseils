// src/services/contact.ts

type ContactRequestPayload = {
  name: string;
  email: string;
  phone?: string;
  requestType?: string;
  request_type?: string;
  offer?: string;
  projectType?: string;
  project_type?: string;
  typeBien?: string;
  type_bien?: string;
  surface?: string;
  lots?: string[];
  timing?: string;
  budget?: string;
  documents?: string[];
  message?: string;
};

type ContactRequestResponse = {
  success: boolean;
  leadId?: string;
  error?: string;
  details?: string;
};

export async function createContactRequest(payload: ContactRequestPayload) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as
    | ContactRequestResponse
    | null;

  if (!response.ok || !data?.success) {
    console.error("Contact request API error:", data);

    throw new Error(
      data?.details ||
        data?.error ||
        "Impossible d’envoyer la demande pour le moment."
    );
  }

  return data;
}