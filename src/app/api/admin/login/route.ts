import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const password = String(body.password ?? "").trim();
  const adminPassword = String(process.env.ADMIN_PASSWORD ?? "").trim();

  if (!adminPassword) {
    return NextResponse.json(
      { error: "Missing admin password" },
      { status: 500 }
    );
  }

  if (password !== adminPassword) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set("dnd_admin", "true", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}