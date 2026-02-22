"use client";

import { useState } from "react";

const WA_LINK =
  "https://wa.me/919548833953?text=I%20want%20to%20run%20a%20profitable%20campaign%20for%20my%20business";

export default function WhatsAppCTA() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* ── Floating WhatsApp bubble (bottom-right) ── */}
      <a
        id="whatsapp-cta-float"
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          color: "#fff",
          borderRadius: hovered ? "14px" : "9999px",
          padding: hovered ? "14px 22px" : "14px",
          boxShadow: hovered
            ? "0 8px 32px 0 rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.25)"
            : "0 4px 18px 0 rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.20)",
          transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
          textDecoration: "none",
          fontFamily: "inherit",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="26"
          height="26"
          fill="#fff"
          style={{ flexShrink: 0 }}
          aria-hidden="true"
        >
          <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 5.47 2.02 7.77L.5 31.5l7.93-2.07A15.42 15.42 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28a13.4 13.4 0 01-6.84-1.87l-.49-.29-5.1 1.34 1.36-4.96-.32-.51A13.38 13.38 0 012.5 16C2.5 8.54 8.54 2.5 16 2.5S29.5 8.54 29.5 16 23.46 28.5 16 28.5zm7.34-10.13c-.4-.2-2.38-1.17-2.75-1.3-.37-.13-.63-.2-.9.2s-1.03 1.3-1.27 1.57c-.23.27-.47.3-.87.1a11 11 0 01-3.23-1.99 12.1 12.1 0 01-2.24-2.79c-.23-.4-.02-.62.18-.82.18-.18.4-.47.6-.7.2-.23.27-.4.4-.66.13-.27.07-.5-.03-.7-.1-.2-.9-2.17-1.23-2.97-.32-.78-.65-.67-.9-.68h-.76c-.27 0-.7.1-1.06.5s-1.4 1.37-1.4 3.34 1.44 3.87 1.64 4.14c.2.27 2.83 4.32 6.86 6.06.96.41 1.71.66 2.3.84.96.31 1.84.26 2.53.16.77-.12 2.38-.97 2.72-1.91.33-.94.33-1.74.23-1.91-.1-.17-.37-.27-.77-.47z" />
        </svg>

        {/* Label that slides in on hover */}
        <span
          style={{
            maxWidth: hovered ? "220px" : "0",
            opacity: hovered ? 1 : 0,
            overflow: "hidden",
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "0.01em",
            transition: "max-width 0.35s cubic-bezier(.4,0,.2,1), opacity 0.25s ease",
            display: "inline-block",
          }}
        >
          Chat on WhatsApp
        </span>

        {/* Pulse ring */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "9999px",
            animation: "waPulse 2s ease-out infinite",
            background: "rgba(37,211,102,0.35)",
            pointerEvents: "none",
          }}
        />
      </a>

      <style>{`
        @keyframes waPulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.6); opacity: 0;   }
          100% { transform: scale(1.6); opacity: 0;   }
        }
      `}</style>
    </>
  );
}
