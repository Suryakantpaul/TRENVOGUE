import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { buildWhatsAppLink } from "../data/config";
import { customerReviews } from "../data/reviews";

export default function CustomerReviews() {
  const [activeReview, setActiveReview] = useState(0);
  const review = customerReviews[activeReview];

  return (
    <section className="customer-reviews max-w-7xl mx-auto px-6 md:px-10 py-20 border-t border-ink/15">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-tobacco text-xs font-semibold tracking-[0.22em] uppercase mb-3">
            Worn by the community
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink">
            Happy customers
          </h2>
          <p className="text-ink/60 mt-4 max-w-xl leading-relaxed">
            Real fit checks, honest feedback, and everyday looks from people who wear TRENVOGUE.
          </p>
        </div>
        <a
          href={buildWhatsAppLink("Hi TRENVOGUE! I'd like to share a customer review with a photo or video.")}
          target="_blank"
          rel="noreferrer"
          className="motion-button inline-flex items-center justify-center border border-ink/25 text-ink font-semibold px-6 py-3 hover:border-tobacco hover:text-tobacco"
        >
          Share your review
        </a>
      </div>

      <div className="review-carousel">
        <AnimatePresence mode="wait">
          <motion.article
            key={review.name}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            className="review-card border border-ink/15 p-6 flex flex-col md:flex-row gap-6"
          >
            {review.mediaUrl ? (
              review.mediaType === "video" ? (
                <video className="review-media" src={review.mediaUrl} controls preload="metadata" />
              ) : (
                <img className="review-media" src={review.mediaUrl} alt={`${review.name}'s TRENVOGUE look`} />
              )
            ) : (
              <div className="review-media review-media-placeholder" aria-label={`${review.mediaType} review placeholder`}>
                <span>{review.mediaType === "video" ? "VIDEO REVIEW" : "PHOTO REVIEW"}</span>
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <span className="review-avatar">{review.initials}</span>
                  <div>
                    <div className="font-semibold text-ink">{review.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-tobacco">
                      Verified buyer • {review.location}
                    </div>
                  </div>
                </div>
                <span className="text-tobacco tracking-widest" aria-label={`${review.rating} out of 5 stars`}>
                  {"★".repeat(review.rating)}
                </span>
              </div>

              <div className="mb-3 text-[10px] uppercase tracking-[0.18em] text-ink/55">
                {review.product}
              </div>
              <p className="text-ink/70 leading-relaxed">“{review.text}”</p>
            </div>
          </motion.article>
        </AnimatePresence>
        <div className="flex justify-center gap-2 mt-6" aria-label="Review selector">
          {customerReviews.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveReview(index)}
              aria-label={`Show ${item.name}'s review`}
              className={`review-dot ${index === activeReview ? "is-active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
