import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Shop() {
  const [activeColor, setActiveColor] = useState("All");
  const [sort, setSort] = useState("featured");

  const colors = useMemo(
    () => ["All", ...new Set(products.flatMap((p) => p.colors))],
    []
  );

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) => activeColor === "All" || p.colors.includes(activeColor)
    );
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [activeColor, sort]);

  return (
    <div className="paper-canvas pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-10 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 shop-heading"
      >
        <p className="text-tobacco text-sm font-semibold tracking-[0.22em] uppercase mb-3">The collection</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink">Shop TRENVOGUE</h1>
      </motion.div>

      <div className="flex flex-wrap items-center justify-between gap-6 mb-10 border-y border-ink/15 py-5">
        <div className="flex flex-wrap gap-2">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setActiveColor(c)}
              className={`px-4 py-2 text-sm font-medium border transition-colors ${
                activeColor === c
                  ? "bg-accent text-ink border-accent"
                  : "border-ink/20 text-ink/65 hover:border-tobacco hover:text-tobacco"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-transparent border border-ink/20 text-ink text-sm px-4 py-2 focus:outline-none focus:border-tobacco"
        >
          <option className="bg-sand" value="featured">Featured</option>
          <option className="bg-sand" value="low">Price: Low to High</option>
          <option className="bg-sand" value="high">Price: High to Low</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-stone text-center py-20">No tees match this filter yet.</p>
      ) : (
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((p, i) => (
            <motion.div layout key={p.id} transition={{ layout: { duration: 0.45 } }}>
              <ProductCard product={p} index={i} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
