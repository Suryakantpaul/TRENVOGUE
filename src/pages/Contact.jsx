import { motion } from "framer-motion";
import { INSTAGRAM_URL, WHATSAPP_NUMBER, buildWhatsAppLink } from "../data/config";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Contact() {
  const displayNumber = WHATSAPP_NUMBER.replace(/^91/, "+91 ");

  return (
    <div className="paper-canvas pt-32 pb-28 max-w-4xl mx-auto px-6 md:px-10 text-ink contact-page">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lime text-sm font-medium mb-3"
      >
        Get in touch
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="font-display text-4xl sm:text-5xl mb-6"
      >
        Talk to us directly.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-ink/70 text-lg leading-relaxed max-w-xl mb-14"
      >
        We keep it simple — no forms, no tickets. Reach us on WhatsApp for
        sizing help, order status, or anything else, and we'll get right back
        to you.
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="contact-card border border-ink/15 p-8 flex flex-col"
        >
          <h2 className="font-display text-xl mb-2">WhatsApp</h2>
          <p className="text-stone text-sm mb-1">{displayNumber}</p>
          <p className="text-ink/70 text-sm mb-6 leading-relaxed">
            Fastest way to reach us. Order, ask about sizes, or check delivery.
          </p>
          <WhatsAppButton
            message="Hi TRENVOGUE! I had a question about your t-shirts."
            className="mt-auto"
          >
            Chat on WhatsApp
          </WhatsAppButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="contact-card border border-ink/15 p-8 flex flex-col"
        >
          <h2 className="font-display text-xl mb-2">Instagram</h2>
          <p className="text-stone text-sm mb-1">@trenvogue</p>
          <p className="text-ink/70 text-sm mb-6 leading-relaxed">
            New drops, restocks, and behind-the-scenes go here first.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="motion-button mt-auto inline-flex items-center justify-center border border-ink/25 text-ink font-medium px-7 py-3.5 hover:border-tobacco hover:text-tobacco transition-colors"
          >
            Follow us
          </a>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-stone text-sm mt-14"
      >
        Placed an order already? Share your delivery address on{" "}
        <a href={buildWhatsAppLink("Hi, I'd like to share my delivery details for my order.")} target="_blank" rel="noreferrer" className="text-lime hover:underline">
          WhatsApp
        </a>{" "}
        and we'll take it from there.
      </motion.p>
    </div>
  );
}
