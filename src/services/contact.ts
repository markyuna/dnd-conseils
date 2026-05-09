import { databases, ID } from "@/lib/appwrite";

const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const collectionId = process.env.NEXT_PUBLIC_APPWRITE_CONTACT_COLLECTION_ID;

// 🔒 Validación segura
if (!databaseId || !collectionId) {
  throw new Error("Missing Appwrite database environment variables");
}

export type ContactRequestPayload = {
  name: string;
  email: string;
  phone?: string;
  offre?: string;
  typeProjet?: string;
  typeBien?: string;
  surface?: string;
  lots?: string;
  timing?: string;
  budget?: string;
  documents?: string;
  message?: string;
};

export async function createContactRequest(payload: ContactRequestPayload) {
  return databases.createDocument(
    databaseId, // ✅ ahora TS sabe que es string
    collectionId,
    ID.unique(),
    {
      name: payload.name,
      email: payload.email,
      phone: payload.phone ?? "",
      offre: payload.offre ?? "",
      typeProjet: payload.typeProjet ?? "",
      typeBien: payload.typeBien ?? "",
      surface: payload.surface ?? "",
      lots: payload.lots ?? "",
      timing: payload.timing ?? "",
      budget: payload.budget ?? "",
      documents: payload.documents ?? "",
      message: payload.message ?? "",
      createdAt: new Date().toISOString(),
    }
  );
}