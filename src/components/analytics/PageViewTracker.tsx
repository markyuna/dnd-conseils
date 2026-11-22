"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Mesure d'audience first-party : aucun cookie, aucune IP stockée.
// - Ignore l'espace admin, le "Do Not Track" et les navigateurs marqués "dnd_no_track".
// - Pour t'exclure de tes propres visites : localStorage.setItem("dnd_no_track", "1")
export default function PageViewTracker() {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin")) return;
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;

    if (navigator.doNotTrack === "1") return;
    try {
      if (localStorage.getItem("dnd_no_track")) return;
    } catch {
      /* stockage indisponible : on continue */
    }

    const params = new URLSearchParams(window.location.search);
    const body = JSON.stringify({
      type: "pageview",
      path: pathname,
      referrer: document.referrer || null,
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
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
  }, [pathname]);

  return null;
}
