"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { trackEvent } from "@/lib/track";

// Mesure d'audience first-party : aucun cookie, aucune IP stockée.
// - Ignore l'espace admin, le "Do Not Track" et les navigateurs marqués "dnd_no_track".
// - Pour t'exclure de tes propres visites : localStorage.setItem("dnd_no_track", "1")
// - Suit aussi les clics téléphone / email / vers /devis et le début de saisie du devis.
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

  // Conversions : écouteurs délégués, aucun changement nécessaire dans les composants.
  useEffect(() => {
    if (pathname?.startsWith("/admin")) return;

    function onClick(event: MouseEvent) {
      const anchor = (event.target as Element | null)?.closest?.("a");
      const href = anchor?.getAttribute("href");
      if (!href) return;

      if (href.startsWith("tel:")) {
        trackEvent("phone_click");
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click");
      } else {
        try {
          const url = new URL(href, window.location.origin);
          if (
            url.origin === window.location.origin &&
            url.pathname === "/devis" &&
            window.location.pathname !== "/devis"
          ) {
            trackEvent("cta_click");
          }
        } catch {
          /* href invalide : on ignore */
        }
      }
    }

    let quoteStarted = false;
    function onInput(event: Event) {
      if (quoteStarted || window.location.pathname !== "/devis") return;
      if (!(event.target as Element | null)?.closest?.("form")) return;
      quoteStarted = true;
      trackEvent("quote_started");
    }

    document.addEventListener("click", onClick);
    document.addEventListener("input", onInput);
    document.addEventListener("change", onInput);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("input", onInput);
      document.removeEventListener("change", onInput);
    };
  }, [pathname]);

  return null;
}
