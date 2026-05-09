// src/lib/appwrite.ts

import { Client, Databases } from "appwrite";

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const contactCollectionId =
  process.env.NEXT_PUBLIC_APPWRITE_CONTACT_COLLECTION_ID;

if (!endpoint) throw new Error("Missing NEXT_PUBLIC_APPWRITE_ENDPOINT");
if (!projectId) throw new Error("Missing NEXT_PUBLIC_APPWRITE_PROJECT_ID");
if (!databaseId) throw new Error("Missing NEXT_PUBLIC_APPWRITE_DATABASE_ID");
if (!contactCollectionId) {
  throw new Error("Missing NEXT_PUBLIC_APPWRITE_CONTACT_COLLECTION_ID");
}

export const appwriteConfig = {
  endpoint,
  projectId,
  databaseId,
  contactCollectionId,
};

export const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId);

export const databases = new Databases(client);