import { buildWhatsAppLink } from "../data/config";
import { useState } from "react";

export default function WhatsAppButton({ message, children, className = "" }) {
  const [sent, setSent] = useState(false);

  const handleClick = () => {
    setSent(true);
    window.setTimeout(() => setSent(false), 2200);
  };

  return (
    <>
      <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
      className={`motion-button inline-flex items-center justify-center gap-2 bg-lime text-ink font-semibold px-7 py-3.5 hover:bg-paper transition-colors ${className}`}
      >
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.05c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.95-.3-1.64-.6-2.9-1.25-4.79-4.17-4.93-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.64.77 1.92.91.28.14.46.21.53.33.07.12.07.68-.17 1.36z" />
      </svg>
      {children || "Order on WhatsApp"}
      </a>
      {sent && <span className="whatsapp-toast" role="status">Opening WhatsApp...</span>}
    </>
  );
}
