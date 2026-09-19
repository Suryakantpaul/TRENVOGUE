import { motion } from "framer-motion";
import { buildWhatsAppLink } from "../data/config";

const sizes = [
  ["M", "42-44 in", "27 in", "19 in"],
  ["L", "44-46 in", "28 in", "20 in"],
  ["XL", "46-48 in", "29 in", "21 in"],
  ["XXL", "48-50 in", "30 in", "22 in"],
];

const faqs = [
  ["How oversized is the fit?", "Our tees have a relaxed drop-shoulder silhouette. Choose your usual size for the intended oversized fit, or size up for a looser streetwear look."],
  ["How do I place an order?", "Choose your tee and size, then tap Order on WhatsApp. We will confirm availability, payment, and delivery details with you directly."],
  ["How should I wash my tee?", "Wash cold and inside out with similar colors. Avoid harsh bleach and use a low-heat or natural dry to protect the print and shape."],
  ["Can I exchange my size?", "Message us as soon as possible if the size is not right. Exchanges depend on the item being unworn, unwashed, and available in the requested size."],
];

export default function Help() {
  return (
    <div className="paper-canvas min-h-screen pt-32 pb-24 text-ink">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-tobacco text-xs font-semibold tracking-[0.22em] uppercase mb-3">Need to know</p>
          <h1 className="font-display text-4xl sm:text-6xl mb-5">Help & policies</h1>
          <p className="text-ink/65 max-w-2xl text-lg leading-relaxed mb-16">
            Everything you need to choose your fit and order with confidence.
          </p>
        </motion.div>

        <section className="mb-20">
          <div className="flex items-end justify-between gap-5 mb-6">
            <div>
              <p className="text-tobacco text-xs font-semibold tracking-[0.22em] uppercase mb-2">Find your fit</p>
              <h2 className="font-display text-2xl sm:text-3xl">Size guide</h2>
            </div>
            <a href={buildWhatsAppLink("Hi TRENVOGUE! Please help me choose my t-shirt size.")} target="_blank" rel="noreferrer" className="motion-button hidden sm:inline-flex border border-ink/25 px-5 py-2.5 text-sm font-semibold">Ask for sizing help</a>
          </div>
          <div className="overflow-x-auto border border-ink/15">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-ink text-paper">
                <tr><th className="px-5 py-4">Size</th><th className="px-5 py-4">Chest</th><th className="px-5 py-4">Length</th><th className="px-5 py-4">Shoulder</th></tr>
              </thead>
              <tbody>
                {sizes.map((size) => <tr key={size[0]} className="border-t border-ink/10"><td className="px-5 py-4 font-semibold">{size[0]}</td><td className="px-5 py-4 text-ink/70">{size[1]}</td><td className="px-5 py-4 text-ink/70">{size[2]}</td><td className="px-5 py-4 text-ink/70">{size[3]}</td></tr>)}
              </tbody>
            </table>
          </div>
          <p className="text-ink/55 text-xs mt-3">Measurements are approximate. For the best recommendation, share your height, weight, and usual tee size on WhatsApp.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5 mb-20">
          {[['Shipping', 'Dispatch updates are shared on WhatsApp after your order is confirmed. Delivery timing depends on your location.'], ['Returns & exchanges', 'Contact us quickly if there is a problem. Items must be unworn, unwashed, and have their original tags.'], ['Care guide', 'Cold wash inside out, avoid bleach, and dry on low heat or naturally to keep the fit and print fresh.']].map(([title, text], index) => (
            <motion.article key={title} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 18 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="border border-ink/15 p-6 help-card">
              <h2 className="font-display text-xl mb-3">{title}</h2>
              <p className="text-ink/65 leading-relaxed text-sm">{text}</p>
            </motion.article>
          ))}
        </section>

        <section>
          <p className="text-tobacco text-xs font-semibold tracking-[0.22em] uppercase mb-2">Questions, answered</p>
          <h2 className="font-display text-2xl sm:text-3xl mb-6">Frequently asked</h2>
          <div className="border-t border-ink/15">
            {faqs.map(([question, answer]) => <details key={question} className="group border-b border-ink/15 py-5"><summary className="cursor-pointer list-none flex justify-between gap-5 font-semibold">{question}<span className="text-tobacco text-xl leading-none transition-transform group-open:rotate-45">+</span></summary><p className="text-ink/65 leading-relaxed max-w-3xl mt-3">{answer}</p></details>)}
          </div>
        </section>
      </div>
    </div>
  );
}
