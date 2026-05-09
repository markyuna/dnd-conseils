import { Client, Databases, ID } from "appwrite";

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

if (!endpoint || !projectId) {
  throw new Error("Missing Appwrite environment variables");
}

export const appwriteClient = new Client()
  .setEndpoint(endpoint)
  .setProject(projectId);

export const databases = new Databases(appwriteClient);

export { ID };