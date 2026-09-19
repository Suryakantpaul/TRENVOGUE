import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import TeeCoverflow from "../components/TeeCoverflow";
import { products } from "../data/products";
import BrandMarquee from "../components/BrandMarquee";

const values = [
  {
    title: "Right fit",
    body: "Drop-shoulder, boxy oversized cuts, pattern-tested so it drapes the way it should — not just \"big\".",
  },
  {
    title: "Real fabric",
    body: "220–260 GSM cotton. Heavy enough to hold shape, soft enough to live in.",
  },
  {
    title: "Honest price",
    body: "No showroom markup. Premium quality without the premium tax.",
  },
];

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div className="paper-canvas">
      <Hero />

      <BrandMarquee />

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="editorial-rule pt-5"
          >
            <p className="text-tobacco text-xs font-semibold tracking-[0.22em] uppercase mb-4">0{i + 1}</p>
            <h3 className="font-display text-xl mb-3 text-ink">{v.title}</h3>
            <p className="text-ink/60 leading-relaxed">{v.body}</p>
          </motion.div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="flex items-end justify-between mb-10 editorial-rule pt-5">
          <div>
            <p className="text-tobacco text-xs font-semibold tracking-[0.22em] uppercase mb-3">The latest drop</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink">New collection</h2>
          </div>
          <Link to="/shop" className="text-tobacco text-sm font-semibold hover:text-ink transition-colors">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      <TeeCoverflow />

      <section className="relative py-28 border-t border-ink/15">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl mb-5 text-ink">
            Fits over 100 people already trust.
          </h2>
          <p className="text-ink/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Message us on WhatsApp for sizing help, drop alerts, or to place an
            order directly. No accounts, no waiting — just a real reply.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-ink text-paper font-semibold px-8 py-4 hover:bg-tobacco transition-colors"
          >
            Browse the collection
          </Link>
        </div>
      </section>
    </div>
  );
}
