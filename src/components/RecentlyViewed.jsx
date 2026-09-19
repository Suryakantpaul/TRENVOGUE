import { Link } from "react-router-dom";
import { products } from "../data/products";

const STORAGE_KEY = "trenvogue-recently-viewed";

export default function RecentlyViewed({ currentId }) {
  const ids = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]").filter((id) => id !== currentId);
  const recent = ids.map((id) => products.find((product) => product.id === id)).filter(Boolean).slice(0, 3);

  if (!recent.length) return null;

  return (
    <section className="mt-24 border-t border-ink/15 pt-12">
      <p className="text-tobacco text-xs font-semibold tracking-[0.22em] uppercase mb-3">Your trail</p>
      <h2 className="font-display text-2xl sm:text-3xl mb-7">Recently viewed</h2>
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        {recent.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="recent-product group">
            <div className="aspect-[4/5] overflow-hidden bg-ink/5">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <p className="text-ink text-xs sm:text-sm font-medium mt-2">{product.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
