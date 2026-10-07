// ---- EDIT THIS FILE TO ADD / REMOVE / UPDATE T-SHIRTS ----
// To add a new tee: put its photo in src/assets/products, import it below,
// then copy one of the product blocks and change the details.

import mustardTrident from "../assets/products/mustard-trident-tee.jpg";
import blackTrident from "../assets/products/black-trident-tee.jpg";
import f1Tee from "../assets/products/f1-tee.jpg";
import samuraiFireTee from "../assets/products/samurai-fire-tee.jpeg";

export const products = [
  {
    id: "tv-trident-mustard",
    name: "Trident Oversized Tee — Mustard",
    price: 649,
    mrp: 999,
    tag: "Bestseller",
    colors: ["Mustard"],
    sizes: ["M", "L", "XL", "XXL"],
    description:
      "Heavyweight oversized tee with a subtle chest logo and a full trident graphic across the back. Boxy drop-shoulder fit.",
    image: mustardTrident,
  },
  {
    id: "tv-trident-black",
    name: "Trident Oversized Tee — Black",
    price: 649,
    mrp: 999,
    tag: "Bestseller",
    colors: ["Black"],
    sizes: ["M", "L", "XL", "XXL"],
    description:
      "Same trident graphic, done in black with a clean white print. Heavyweight cotton, boxy drop-shoulder fit.",
    image: blackTrident,
  },
  {
    id: "tv-f1-tee",
    name: "Formula 1 Graphic Tee",
    price: 649,
    mrp: 999,
    tag: "New",
    colors: ["Black"],
    sizes: ["M", "L", "XL", "XXL"],
    description:
      "Oversized black tee with an F1 front graphic and racing stripes running down to a car outline print. Heavyweight cotton.",
    image: f1Tee,
  },
  {
    id: "tv-samurai-fire",
    name: "Samurai Fire Oversized Tee",
    price: 649,
    mrp: 999,
    tag: "New Launch",
    colors: ["Black"],
    sizes: ["M", "L", "XL", "XXL"],
    description:
      "A single fire-themed samurai oversized tee inspired by the mockup you shared, built in heavyweight cotton with a bold statement graphic.",
    image: samuraiFireTee,
  },
];
