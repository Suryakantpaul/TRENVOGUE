import { useState } from "react";
import { buildWhatsAppLink } from "../data/config";
import { SIZE_GUIDE } from "../data/sizeGuide";

const options = [
  ["Find my size", "Hi TRENVOGUE! Please help me choose the right t-shirt size."],
  ["Check availability", "Hi TRENVOGUE! I want to check product availability."],
  ["Shipping info", "Hi TRENVOGUE! Please share your shipping and delivery details."],
  ["Place an order", "Hi TRENVOGUE! I would like to place an order."],
];

export default function HelpChat() {
  const [open, setOpen] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  return (
    <div className="help-chat">
      {open && (
        <div className="help-chat-panel" role="dialog" aria-label="TRENVOGUE help options">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-tobacco font-semibold">Quick help</p>
              <h2 className="font-display text-lg text-ink mt-1">{showSizeGuide ? "T-shirt size guide" : "How can we help?"}</h2>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close help chat" className="text-ink/50 hover:text-ink text-xl leading-none">&times;</button>
          </div>
          {showSizeGuide ? (
            <div className="help-size-guide">
              <div className="help-size-row help-size-header"><span>Size</span><span>Chest</span><span>Length</span><span>Shoulder</span></div>
              {SIZE_GUIDE.map(([size, chest, length, shoulder, fit]) => (
                <div key={size} className="help-size-row"><strong>{size}</strong><span>{chest}&quot;</span><span>{length}&quot;</span><span>{shoulder}&quot;</span><small>{fit} fit</small></div>
              ))}
              <p className="text-[0.68rem] text-ink/55 mt-3">Between sizes? Choose the larger size for a looser look.</p>
              <button type="button" onClick={() => setShowSizeGuide(false)} className="text-tobacco text-xs font-semibold mt-3">&lt;- Back to help</button>
            </div>
          ) : (
            <div className="grid gap-2">
              <button type="button" onClick={() => setShowSizeGuide(true)} className="help-chat-option text-left">Find my size<span aria-hidden="true">-&gt;</span></button>
              {options.slice(1).map(([label, message]) => (
                <a key={label} href={buildWhatsAppLink(message)} target="_blank" rel="noreferrer" className="help-chat-option">
                  {label}<span aria-hidden="true">-&gt;</span>
                </a>
              ))}
            </div>
          )}
          {!showSizeGuide && <p className="text-[0.68rem] text-ink/50 mt-4">A real person will reply on WhatsApp.</p>}
        </div>
      )}
      <button type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-label={open ? "Close help chat" : "Open help chat"} className="help-chat-toggle">
        <span className="help-chat-dot" />
        <span>{open ? "Close" : "Need help?"}</span>
      </button>
    </div>
  );
}
