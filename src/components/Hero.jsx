import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blackTrident from "../assets/products/black-trident-tee.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const teeRef = useRef(null);
  const headlineRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      // Signature scroll sequence: tee rotates, scales and slides as the hero scrolls away
      gsap.to(teeRef.current, {
        yPercent: -18,
        rotate: -8,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to(headlineRef.current, {
        yPercent: -30,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      // One-time load-in sequence
      gsap.fromTo(
        teeRef.current,
        { x: 120, opacity: 0, rotate: 6 },
        { x: 0, opacity: 1, rotate: 0, duration: 1.1, ease: "power3.out", delay: 0.3 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -14;
    setTilt({ x, y });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[760px] flex items-center overflow-hidden pt-24 paper-canvas hero-grid"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
        <div ref={headlineRef} className="relative z-20 py-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-tobacco font-semibold mb-5 text-xs tracking-[0.28em] uppercase"
          >
            New collection / 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl sm:text-7xl lg:text-[7.3rem] leading-[0.84] text-ink"
          >
            SUMMER
            <br />
            <span className="text-tobacco">ESSENTIALS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 text-ink/65 max-w-md text-base leading-relaxed"
          >
            Everyday silhouettes with heavyweight cotton, an easy drape, and
            enough attitude to carry the whole look.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              to="/shop"
              className="motion-button bg-ink text-paper font-semibold px-7 py-3.5 hover:bg-tobacco transition-colors"
            >
              Shop now <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link
              to="/about"
              className="motion-button border border-ink/25 text-ink font-medium px-7 py-3.5 hover:border-tobacco hover:text-tobacco transition-colors"
            >
              Explore the story
            </Link>
          </motion.div>
        </div>

        <div
          className="relative flex justify-center lg:justify-end min-h-[560px] items-center"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
        >
          <div className="floating-badge absolute right-0 top-12 hidden sm:block rounded-full border border-ink/20 px-5 py-8 text-center text-xs font-semibold tracking-widest text-ink rotate-12">
            UP TO<br /><strong className="font-display text-3xl tracking-normal">50%</strong><br />OFF
          </div>
          <div className="absolute left-2 top-20 text-ink/40 text-xs tracking-[0.3em] uppercase [writing-mode:vertical-rl]">
            Heavyweight / 260 GSM
          </div>
          <div
            ref={teeRef}
            className="tee-stage relative w-72 sm:w-[26rem] lg:w-[31rem] aspect-[4/5] will-change-transform"
            style={{ transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
          >
            <img
              src={blackTrident}
              alt="Oversized black t-shirt"
              className="tee-card relative z-10 w-full h-full object-cover transition-transform duration-300"
            />
            <div className="absolute -bottom-4 -left-4 z-20 bg-ink text-paper px-4 py-3 font-display text-sm">
              FROM ₹649
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-prompt absolute bottom-8 left-6 md:left-10 z-20 text-ink/45 text-xs tracking-widest flex items-center gap-3">
        <span className="w-8 h-px bg-ink/35" />
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}
