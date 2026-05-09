// src/services/contact.ts

import { ID } from "appwrite";
import { appwriteConfig, databases } from "@/lib/appwrite";

export type ContactRequestPayload = {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  offer?: string;
  message?: string;
  source?: string;
};

export async function createContactRequest(payload: ContactRequestPayload) {
  const documentData: Record<string, string> = {
    name: payload.name,
    email: payload.email,
    message: payload.message ?? "",
  };

  if (payload.phone) {
    documentData.phone = payload.phone;
  }

  if (payload.projectType) {
    documentData.projectType = payload.projectType;
  }

  if (payload.offer) {
    documentData.offer = payload.offer;
  }

  return databases.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.contactCollectionId,
    ID.unique(),
    documentData
  );
}