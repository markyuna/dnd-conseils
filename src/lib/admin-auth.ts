// src/lib/admin-auth.ts
// Server-only admin authentication helpers.

import "server-only";
import { createHash } from "crypto";
import { cookies } from "next/headers";

// Derives a non-guessable session token from the admin password.
// Prevents cookie spoofing with a raw "true" value.
export function getAdminToken(): string {
  const password = process.env.ADMIN_PASSWORD ?? "";
  return createHash("sha256").update(`dnd-admin-session:${password}`).digest("hex");
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const adminPassword = String(process.env.ADMIN_PASSWORD ?? "").trim();
  if (!adminPassword) return false;

  const cookieStore = await cookies();
  const token = cookieStore.get("dnd_admin")?.value;
  if (!token) return false;

  return token === getAdminToken();
}
