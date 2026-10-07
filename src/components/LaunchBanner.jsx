import { useState } from "react";
import { Link } from "react-router-dom";

export default function LaunchBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="launch-banner relative z-30 bg-accent text-ink px-10 py-2.5 text-center text-xs sm:text-sm font-semibold">
      <span>First drop is live. Order directly on WhatsApp for personal help.</span>{" "}
      <Link to="/shop" className="underline underline-offset-4 hover:text-tobacco transition-colors">
        Shop the collection
      </Link>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Dismiss launch announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-lg leading-none hover:text-tobacco transition-colors"
      >
        &times;
      </button>
    </div>
  );
}
