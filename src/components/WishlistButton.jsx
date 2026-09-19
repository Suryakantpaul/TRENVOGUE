import { useState } from "react";

const STORAGE_KEY = "trenvogue-wishlist";

export default function WishlistButton({ productId }) {
  const [saved, setSaved] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return stored.includes(productId);
  });

  const toggleSaved = () => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const next = stored.includes(productId)
      ? stored.filter((id) => id !== productId)
      : [...stored, productId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setSaved(next.includes(productId));
  };

  return (
    <button type="button" onClick={toggleSaved} className={`wishlist-button ${saved ? "is-saved" : ""}`} aria-pressed={saved}>
      <span aria-hidden="true">{saved ? "♥" : "♡"}</span>
      {saved ? "Saved" : "Save for later"}
    </button>
  );
}
