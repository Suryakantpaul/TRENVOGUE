import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/products";
import { productEnquiryMessage } from "../data/config";
import WhatsAppButton from "../components/WhatsAppButton";
import ProductCard from "../components/ProductCard";
import SizeFinder from "../components/SizeFinder";
import WishlistButton from "../components/WishlistButton";
import RecentlyViewed from "../components/RecentlyViewed";

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [size, setSize] = useState(product?.sizes?.[0] ?? "");
  const [color, setColor] = useState(product?.colors?.[0] ?? "");
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!product) return;
    const stored = JSON.parse(localStorage.getItem("trenvogue-recently-viewed") || "[]");
    const next = [product.id, ...stored.filter((id) => id !== product.id)].slice(0, 6);
    localStorage.setItem("trenvogue-recently-viewed", JSON.stringify(next));
  }, [product]);

  if (!product) {
    return (
      <div className="pt-40 pb-24 max-w-3xl mx-auto px-6 text-center">
        <h1 className="font-display text-3xl mb-4">Tee not found</h1>
        <p className="text-stone mb-8">This one may have sold out or moved.</p>
        <Link to="/shop" className="text-lime font-medium hover:underline">
          Back to shop
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const productImages = product.images ?? [product.image];
  const productHighlights = [
    "Heavyweight cotton",
    "Oversized drop-shoulder fit",
    "WhatsApp order support",
  ];

  return (
    <div className="paper-canvas pt-28 pb-24 max-w-7xl mx-auto px-6 md:px-10 text-ink product-page">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="product-gallery"
        >
          <div className="product-detail-image aspect-[4/5] overflow-hidden bg-ink/5">
            <img
            src={productImages[activeImage]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700"
            />
          </div>
          <div className="flex gap-2 mt-3">
            {productImages.map((image, index) => (
              <button key={image} type="button" onClick={() => setActiveImage(index)} className={`product-thumbnail ${index === activeImage ? "is-active" : ""}`} aria-label={`View product image ${index + 1}`}>
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {product.tag && (
            <span className="inline-block bg-lime text-ink text-xs font-semibold px-2.5 py-1 mb-4">
              {product.tag}
            </span>
          )}
          <h1 className="font-display text-3xl sm:text-4xl mb-3">{product.name}</h1>
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="availability-label"><span /> Available to order</span>
            <WishlistButton productId={product.id} />
          </div>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-2xl font-semibold text-ink">₹{product.price}</span>
            {discount > 0 && (
              <>
                <span className="text-stone line-through">₹{product.mrp}</span>
                <span className="text-ink text-sm font-semibold">{discount}% off</span>
              </>
            )}
          </div>

          <p className="text-ink/70 leading-relaxed mb-8">{product.description}</p>

          <ul className="product-highlights grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {productHighlights.map((highlight) => (
              <li key={highlight} className="border-y border-ink/15 py-3 text-xs font-medium text-ink/70">
                <span className="text-tobacco mr-2">+</span>{highlight}
              </li>
            ))}
          </ul>

          {product.colors.length > 0 && (
            <div className="mb-6">
              <p className="text-sm text-stone mb-2">Color</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`px-4 py-2 text-sm border transition-colors ${
                      color === c
                        ? "bg-lime text-ink border-lime"
                        : "border-ink/20 text-ink/75 hover:border-lime"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-9">
            <div className="flex items-center justify-between gap-4 mb-2">
              <p className="text-sm text-stone">Size</p>
              <SizeFinder availableSizes={product.sizes} />
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`w-12 h-12 text-sm font-medium border transition-colors ${
                    size === s
                      ? "bg-lime text-ink border-lime"
                      : "border-ink/20 text-ink/75 hover:border-lime"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <WhatsAppButton
            message={productEnquiryMessage(product, { size, color })}
            className="w-full sm:w-auto"
          >
            Order this on WhatsApp
          </WhatsAppButton>
          <p className="text-stone text-xs mt-4">
            Tapping this opens WhatsApp with your selection filled in — just hit send.
          </p>

          <div className="mt-3 flex flex-wrap gap-3">
            <WhatsAppButton
              message={`Hi TRENVOGUE! I need help choosing a size for the "${product.name}" in ${color}.`}
              className="quick-whatsapp-action border border-ink/20 bg-transparent text-ink px-4 py-2.5 text-sm hover:bg-ink hover:text-paper"
            >
              Ask about size
            </WhatsAppButton>
            <WhatsAppButton
              message={`Hi TRENVOGUE! Is the "${product.name}" in ${color}, size ${size} available?`}
              className="quick-whatsapp-action border border-ink/20 bg-transparent text-ink px-4 py-2.5 text-sm hover:bg-ink hover:text-paper"
            >
              Check availability
            </WhatsAppButton>
          </div>

          <div className="mt-8 border-t border-ink/15 pt-6 space-y-3 text-sm text-ink/70">
            <details className="group border-b border-ink/10 pb-3">
              <summary className="cursor-pointer list-none font-semibold text-ink flex justify-between">
                Size guide <span className="text-tobacco transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed">Choose your usual size for a relaxed oversized fit. Message us on WhatsApp for a personal size recommendation.</p>
            </details>
            <details className="group border-b border-ink/10 pb-3">
              <summary className="cursor-pointer list-none font-semibold text-ink flex justify-between">
                Care & dispatch <span className="text-tobacco transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed">Cold wash, inside out. We share dispatch updates directly on WhatsApp after your order is confirmed.</p>
            </details>
          </div>
        </motion.div>
      </div>

      {related.length > 0 && (
        <div className="mt-28">
          <h2 className="font-display text-2xl sm:text-3xl mb-8">You may also like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      )}

      <RecentlyViewed currentId={product.id} />
    </div>
  );
}
