export default function BrandMarquee() {
  const message = "HEAVYWEIGHT COTTON  /  OVERSIZED FIT  /  HONEST PRICES  /  ORDER ON WHATSAPP  /  ";

  return (
    <div className="brand-marquee" aria-label="TRENVOGUE product highlights">
      <div className="brand-marquee-track">
        <span>{message}</span>
        <span aria-hidden="true">{message}</span>
      </div>
    </div>
  );
}
