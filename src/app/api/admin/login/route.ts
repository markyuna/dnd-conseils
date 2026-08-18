import { NextResponse } from "next/server";

import { getAdminToken, timingSafeEqualStrings } from "@/lib/admin-auth";

// Best-effort in-memory rate limiter (per function instance).
// Protects against burst brute-force on single-server or local deployments.
// Doesn't survive across serverless instances/cold starts — if that gap
// matters for the threat model, replace with a shared store (Supabase
// table, Upstash Redis, etc.) instead of this in-memory Map.
const loginAttempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;

function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = loginAttempts.get(ip);

  if (!entry || now > entry.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_ATTEMPTS;
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many attempts, please try again later" },
      { status: 429 }
    );
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const password = String(body.password ?? "").trim();
  const adminPassword = String(process.env.ADMIN_PASSWORD ?? "").trim();

  if (!adminPassword) {
    return NextResponse.json(
      { error: "Missing admin password" },
      { status: 500 }
    );
  }

  if (!timingSafeEqualStrings(password, adminPassword)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set("dnd_admin", getAdminToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
