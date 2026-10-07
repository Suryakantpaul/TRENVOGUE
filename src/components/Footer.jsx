import { Link } from "react-router-dom";
import { INSTAGRAM_URL, WHATSAPP_NUMBER } from "../data/config";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-2xl mb-3">
            TREN<span className="text-accent">VOGUE</span>
          </p>
          <p className="text-stone text-sm max-w-xs leading-relaxed">
            Premium oversized tees. Right fit, real fabric, honest prices.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-paper/60 mb-3">Navigate</p>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/shop" className="text-paper/80 hover:text-accent transition-colors">Shop</Link>
            <Link to="/about" className="text-paper/80 hover:text-accent transition-colors">Our Story</Link>
            <Link to="/contact" className="text-paper/80 hover:text-accent transition-colors">Contact</Link>
            <Link to="/help" className="text-paper/80 hover:text-accent transition-colors">Help & policies</Link>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-paper/60 mb-3">Reach us</p>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="text-paper/80 hover:text-accent transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="text-paper/80 hover:text-accent transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-stone">
        © {new Date().getFullYear()} TRENVOGUE. Wear it with confidence.
      </div>
    </footer>
  );
}
