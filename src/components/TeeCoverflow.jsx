import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { products } from "../data/products";

// A continuously scrolling, 3D coverflow-style strip of product photos.
// Cards tilt in 3D based on how far they are from the center of the strip,
// giving a "flipping past camera" feel as they slide left to right.
export default function TeeCoverflow() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  // Duplicate the list so the strip can loop seamlessly
  const loopItems = [...products, ...products, ...products];

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    let tween;
    let tickerFn;

    const setup = () => {
      // Reset any previous transform before measuring
      gsap.set(track, { xPercent: 0 });
      const setWidth = track.scrollWidth / 3; // width of one full set

      if (!reduceMotion) {
        tween = gsap.to(track, {
          x: `-=${setWidth}`,
          duration: 26,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (x) => `${parseFloat(x) % setWidth}px`,
          },
        });

        tickerFn = () => {
          const containerRect = container.getBoundingClientRect();
          const centerX = containerRect.left + containerRect.width / 2;

          cardRefs.current.forEach((card) => {
            if (!card) return;
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.left + rect.width / 2;
            const distance = (cardCenter - centerX) / (containerRect.width / 2);
            const clamped = Math.max(-1.4, Math.min(1.4, distance));

            gsap.set(card, {
              rotateY: clamped * -28,
              z: -Math.abs(clamped) * 140,
              scale: 1 - Math.abs(clamped) * 0.14,
              opacity: 1 - Math.abs(clamped) * 0.35,
            });
          });
        };
        gsap.ticker.add(tickerFn);
      }
    };

    // Wait a tick for images/layout to settle before measuring widths
    const raf = requestAnimationFrame(setup);

    return () => {
      cancelAnimationFrame(raf);
      if (tween) tween.kill();
      if (tickerFn) gsap.ticker.remove(tickerFn);
    };
  }, []);

  const handleEnter = () => gsap.globalTimeline.timeScale(0.15);
  const handleLeave = () => gsap.globalTimeline.timeScale(1);

  return (
    <section className="py-20 md:py-28 border-y border-ink/15 overflow-hidden bg-paper/25">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-end justify-between mb-10">
        <div>
          <p className="text-tobacco text-xs font-semibold tracking-[0.22em] uppercase mb-3">Street study</p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink">In the wild</h2>
        </div>
        <Link to="/shop" className="text-tobacco text-sm font-semibold hover:text-ink hidden sm:block">
          Shop all tees
        </Link>
      </div>

      <div
        ref={containerRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="relative"
        style={{ perspective: "1400px" }}
      >
        <div
          ref={trackRef}
          className="flex gap-6 md:gap-8 w-max will-change-transform px-[10vw]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {loopItems.map((p, i) => (
            <Link
              to={`/product/${p.id}`}
              key={`${p.id}-${i}`}
              ref={(el) => (cardRefs.current[i] = el)}
              className="shrink-0 w-56 sm:w-64 md:w-72 aspect-[4/5] overflow-hidden bg-paper block border border-ink/10"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="w-full h-full object-cover pointer-events-none"
              />
            </Link>
          ))}
        </div>

        {/* Edge fades so cards appear to emerge from and fade into darkness */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-sand to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-sand to-transparent z-10" />
      </div>
    </section>
  );
}
