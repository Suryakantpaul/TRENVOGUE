import { useState } from "react";
import { SIZE_GUIDE } from "../data/sizeGuide";

const recommendations = [
  { maxChest: 42, size: "S" },
  { maxChest: 44, size: "M" },
  { maxChest: 46, size: "L" },
  { maxChest: 48, size: "XL" },
  { maxChest: 50, size: "XXL" },
];


export default function SizeFinder({ availableSizes }) {
  const [open, setOpen] = useState(false);
  const [chest, setChest] = useState("");
  const [usualSize, setUsualSize] = useState("");
  const [fit, setFit] = useState("relaxed");

  const recommended = chest
    ? recommendations.find((item) => Number(chest) <= item.maxChest)?.size ?? "XXL"
    : usualSize;
  const finalSize = availableSizes.includes(recommended) ? recommended : availableSizes[0];

  return (
    <div className="size-finder">
      <button type="button" onClick={() => setOpen((value) => !value)} className="size-finder-trigger">
        <span aria-hidden="true">◎</span> Find my size
      </button>
      {open && (
        <div className="size-finder-panel" role="dialog" aria-label="Find your t-shirt size">
          <div className="flex justify-between gap-4 mb-4">
            <div>
              <p className="text-tobacco text-xs uppercase tracking-[0.16em] font-semibold">Fit assistant</p>
              <h3 className="font-display text-lg mt-1">Find your best size</h3>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close size finder" className="text-xl text-ink/50">&times;</button>
          </div>
          <label className="block text-sm font-medium mb-1" htmlFor="chest-size">Chest measurement in inches</label>
          <input id="chest-size" type="number" min="30" max="60" value={chest} onChange={(event) => setChest(event.target.value)} placeholder="Example: 44" className="size-finder-input" />
          <label className="block text-sm font-medium mt-4 mb-1" htmlFor="usual-size">Your usual t-shirt size</label>
          <select id="usual-size" value={usualSize} onChange={(event) => setUsualSize(event.target.value)} className="size-finder-input">
            <option value="">Select one</option>
            {availableSizes.map((size) => <option key={size} value={size}>{size}</option>)}
          </select>
          <label className="block text-sm font-medium mt-4 mb-1" htmlFor="fit-preference">Preferred fit</label>
          <select id="fit-preference" value={fit} onChange={(event) => setFit(event.target.value)} className="size-finder-input">
            <option value="relaxed">Relaxed oversized</option>
            <option value="extra">Extra loose streetwear</option>
          </select>
          {(chest || usualSize) && (
            <div className="size-finder-result mt-5">
              <p className="text-xs uppercase tracking-[0.14em] text-tobacco font-semibold">Our recommendation</p>
              <p className="font-display text-2xl mt-1">{fit === "extra" && finalSize !== "XXL" ? availableSizes[availableSizes.indexOf(finalSize) + 1] ?? finalSize : finalSize}</p>
              <p className="text-xs text-ink/60 mt-1">Use this as a starting point, then confirm with WhatsApp if you are between sizes.</p>
            </div>
          )}
          <div className="size-finder-chart">
            <p className="text-xs uppercase tracking-[0.14em] text-tobacco font-semibold mb-3">T-shirt measurements</p>
            <div className="size-finder-chart-row size-finder-chart-header"><span>Size</span><span>Chest</span><span>Length</span><span>Shoulder</span></div>
            {SIZE_GUIDE.map(([size, chestRange, length, shoulder, fitName]) => (
              <div key={size} className="size-finder-chart-row">
                <strong>{size}</strong><span>{chestRange}"</span><span>{length}"</span><span>{shoulder}"</span>
                <small>{fitName}</small>
              </div>
            ))}
            <p className="text-[0.68rem] text-ink/55 mt-3">Chest is the garment measurement. If you are between sizes, choose the larger size for a looser fit.</p>
          </div>
        </div>
      )}
    </div>
  );
}
