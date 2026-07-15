"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";

const GA_ID = "G-HCBPLDNT06";
const STORAGE_KEY = "cookie-consent";

type Consent = "accepted" | "declined";

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "accepted" || stored === "declined") {
        setConsent(stored);
      }
    } catch {
      // localStorage unavailable — treat as no decision yet
    }
    setReady(true);
  }, []);

  function choose(value: Consent) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore write failures
    }
    setConsent(value);
  }

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {ready && consent === null && (
        <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
          <p className="cookie-banner-text">
            This site uses analytics cookies to understand how visitors use it.
            You can accept or decline — see our{" "}
            <Link href="/privacy" className="cookie-banner-link">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="cookie-banner-actions">
            <button
              type="button"
              className="cookie-btn cookie-btn-ghost"
              onClick={() => choose("declined")}
            >
              Decline
            </button>
            <button
              type="button"
              className="cookie-btn cookie-btn-solid"
              onClick={() => choose("accepted")}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
