// src/lib/admin-auth.ts
// Server-only admin authentication helpers.

import "server-only";
import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

// Derives a non-guessable session token from the admin password.
// Prevents cookie spoofing with a raw "true" value.
export function getAdminToken(): string {
  const password = process.env.ADMIN_PASSWORD ?? "";
  return createHash("sha256").update(`dnd-admin-session:${password}`).digest("hex");
}

// Constant-time string comparison — avoids leaking secret bytes via
// early-exit timing on `===`. Length is checked first since
// timingSafeEqual throws on mismatched buffer lengths; the length itself
// isn't secret here (attacker-supplied input vs. a fixed-format secret).
export function timingSafeEqualStrings(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);

  if (bufA.length !== bufB.length) return false;

  return timingSafeEqual(bufA, bufB);
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const adminPassword = String(process.env.ADMIN_PASSWORD ?? "").trim();
  if (!adminPassword) return false;

  const cookieStore = await cookies();
  const token = cookieStore.get("dnd_admin")?.value;
  if (!token) return false;

  return timingSafeEqualStrings(token, getAdminToken());
}
