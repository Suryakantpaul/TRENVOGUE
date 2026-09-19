import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const paragraphs = [
  "As someone who loves wearing oversized T-shirts, the search was always the same — a tee with the perfect fit, premium quality, and maximum comfort. Finding all of that together, at a fair price, wasn't easy.",
  "Most of the time, you either compromised on quality and fit, or paid a premium price for it.",
  "That's where the idea of TRENVOGUE came from.",
  "Our goal is simple — to create premium oversized T-shirts with the right fit, quality fabric, and designs that stand out, without making them unnecessarily expensive.",
  "We believe premium fashion should feel good, look good, and still be accessible.",
];

export default function About() {
  return (
    <div className="paper-canvas pt-32 pb-24 text-ink">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lime text-sm font-medium mb-3"
        >
          Our story
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-display text-4xl sm:text-5xl mb-14 leading-tight"
        >
          TRENVOGUE started
          <br />
          with a simple thought.
        </motion.h1>

        <div className="space-y-7">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="text-ink/70 text-lg leading-relaxed max-w-2xl"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-ink/15 pt-14"
        >
          <h2 className="font-display text-2xl sm:text-3xl mb-4">
            More than a clothing brand.
          </h2>
          <p className="text-ink/70 text-lg leading-relaxed max-w-2xl mb-10">
            TRENVOGUE is the beginning of a vision to build something that
            represents confidence, individuality, and the latest trends. This
            is just our first step.
          </p>
          <motion.p
            initial={{ opacity: 0, y: 14, letterSpacing: "0.03em" }}
            whileInView={{ opacity: 1, y: 0, letterSpacing: "0em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="welcome-line font-display text-xl text-ink mb-8"
          >
            Welcome to TRENVOGUE. Wear it with confidence.
          </motion.p>
          <Link
            to="/shop"
            className="inline-block bg-lime text-ink font-semibold px-8 py-4 hover:bg-paper transition-colors"
          >
            Explore the collection
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
