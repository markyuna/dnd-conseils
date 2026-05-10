"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!res.ok) {
      setError("Mot de passe incorrect");
      return;
    }

    router.push("/admin/leads");
  }

  return (
    <>
      <Navbar variant="minimal" />

      <main className="flex min-h-screen items-center justify-center bg-[#f6f2ee] px-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-xl"
        >
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#b49a7c]">
            Admin
          </p>

          <h1 className="mb-6 text-3xl font-semibold text-[#151515]">
            Espace CRM
          </h1>

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 w-full rounded-full border border-black/10 px-5 py-3 outline-none"
          />

          {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-full bg-[#151515] px-6 py-3 text-white transition hover:bg-black"
          >
            Se connecter
          </button>
        </form>
      </main>
    </>
  );
}