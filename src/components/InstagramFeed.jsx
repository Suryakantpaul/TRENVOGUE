import { motion } from "framer-motion";
import { INSTAGRAM_URL, INSTAGRAM_WIDGET_ID } from "../data/config";

// Automatically shows your latest Instagram posts on the site.
// Uses SnapWidget (free) so that whenever you post on Instagram, it appears
// here too — no manual uploading, no code changes. See README.md, section
// "Instagram auto-sync", for the 2-minute setup.
export default function InstagramFeed() {
  if (!INSTAGRAM_WIDGET_ID) {
    return (
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 border-t border-ink/15">
        <div className="text-center max-w-lg mx-auto">
          <p className="text-tobacco text-xs font-semibold tracking-[0.22em] uppercase mb-3">Social diary</p>
          <h2 className="font-display text-2xl sm:text-3xl mb-4 text-ink">
            Latest from Instagram
          </h2>
          <p className="text-ink/60 leading-relaxed mb-6">
            This section will automatically show your newest Instagram posts
            once it's connected — see the README for the 2-minute setup.
            Until then, here's the profile directly.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-ink/25 text-ink font-medium px-7 py-3 hover:border-tobacco hover:text-tobacco transition-colors"
          >
            View on Instagram
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 border-t border-ink/15">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between mb-10"
      >
        <div>
          <p className="text-tobacco text-xs font-semibold tracking-[0.22em] uppercase mb-3">Straight from the app</p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink">Latest from Instagram</h2>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="text-tobacco text-sm font-semibold hover:text-ink hidden sm:block"
        >
          Follow us
        </a>
      </motion.div>

      <iframe
        title="Instagram feed"
        src={`https://snapwidget.com/embed/${INSTAGRAM_WIDGET_ID}`}
        className="w-full border-0 overflow-hidden"
        style={{ minHeight: 320 }}
        allowtransparency="true"
      />
    </section>
  );
}
