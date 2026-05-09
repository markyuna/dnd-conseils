// src/services/contact.ts

import { databases } from "@/lib/appwrite";
import { ID } from "appwrite";

function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

const databaseId = getRequiredEnv("NEXT_PUBLIC_APPWRITE_DATABASE_ID");
const collectionId = getRequiredEnv("NEXT_PUBLIC_APPWRITE_CONTACT_COLLECTION_ID");

export type ContactRequestPayload = {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  offer?: string;
  message: string;
  source?: string;
};

export async function createContactRequest(payload: ContactRequestPayload) {
  return databases.createDocument(databaseId, collectionId, ID.unique(), {
    name: payload.name,
    email: payload.email,
    phone: payload.phone ?? "",
    project_type: payload.projectType ?? "",
    offer: payload.offer ?? "",
    message: payload.message,
    source: payload.source ?? "site",
    created_at: new Date().toISOString(),
  });
}