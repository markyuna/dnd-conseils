// src/lib/track.ts
// Helper client pour envoyer des événements de conversion (clic CTA, devis envoyé…).

export type TrackEventName =
  | "lead_submitted"
  | "cta_click"
  | "phone_click"
  | "email_click"
  | "quote_started";

export function trackEvent(name: TrackEventName) {
  if (typeof window === "undefined") return;
  if (navigator.doNotTrack === "1") return;
  try {
    if (localStorage.getItem("dnd_no_track")) return;
  } catch {
    /* stockage indisponible : on continue */
  }

  const body = JSON.stringify({
    type: "event",
    name,
    path: window.location.pathname,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/track", new Blob([body], { type: "application/json" }));
  } else {
    void fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    });
  }
}
