import CustomerReviews from "../components/CustomerReviews";

export default function Reviews() {
  return (
    <div className="paper-canvas min-h-screen pt-28 pb-16 text-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-4">
        <p className="text-tobacco text-xs font-semibold tracking-[0.22em] uppercase">
          Community stories
        </p>
      </div>
      <CustomerReviews />
    </div>
  );
}
