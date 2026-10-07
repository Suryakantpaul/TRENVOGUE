import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard({ product, index = 0 }) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handlePointerMove = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 5;
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -5;
    event.currentTarget.style.setProperty("--card-rotate-x", `${rotateX}deg`);
    event.currentTarget.style.setProperty("--card-rotate-y", `${rotateY}deg`);
  };

  const resetPointer = (event) => {
    event.currentTarget.style.setProperty("--card-rotate-x", "0deg");
    event.currentTarget.style.setProperty("--card-rotate-y", "0deg");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/product/${product.id}`}
        className="group block product-card-reveal"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <div className="relative overflow-hidden bg-white/5 aspect-[4/5] transition-shadow duration-500 group-hover:shadow-[0_0_45px_8px_rgba(201,255,61,0.35)]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {product.tag && (
              <span className="absolute top-3 left-3 bg-ink text-paper text-xs font-semibold px-2.5 py-1">
              {product.tag}
            </span>
          )}
          {discount > 0 && (
            <span className="absolute top-3 right-3 bg-paper/90 text-ink text-xs font-semibold px-2.5 py-1 border border-ink/20">
              {discount}% off
            </span>
          )}
        </div>
        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-medium text-ink group-hover:text-tobacco transition-colors">
              {product.name}
            </h3>
            <p className="text-stone text-sm mt-0.5">{product.colors.join(" / ")}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-ink font-semibold">₹{product.price}</p>
            {discount > 0 && (
              <p className="text-stone text-xs line-through">₹{product.mrp}</p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
