# TRENVOGUE — Website

A React + Vite + Tailwind site for TRENVOGUE, with GSAP + Framer Motion
animations and WhatsApp-based ordering (no backend, no accounts, no cost).

## Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Before you launch — 2 things to edit

### 1. Your WhatsApp number
Open `src/data/config.js` and change:
```js
export const WHATSAPP_NUMBER = "919999999999";
```
Use the full international format with country code, no `+`, no spaces
(e.g. India number `98765 43210` becomes `"919876543210"`).

Also update the Instagram link in the same file.

### 2. Your t-shirts
Open `src/data/products.js`. Each t-shirt is one object in the list:
```js
{
  id: "tv-007",              // unique, no spaces
  name: "Your Tee Name",
  price: 899,
  mrp: 1299,                 // original price, used to show % off
  tag: "New",                // "New" / "Bestseller" / "Limited" / null
  colors: ["Black"],
  sizes: ["M", "L", "XL"],
  description: "...",
  image: "https://...",      // a photo URL, or see below to use your own
},
```
Copy this block to add a new tee, edit values to update one, or delete a
block to remove one. Save the file and the site updates automatically in dev,
or on your next deploy.

**To use your own photos**: put image files in `src/assets/products/`, then
in `products.js` add near the top:
```js
import tee1 from "../assets/products/tee1.jpg";
```
and use `image: tee1` instead of a URL. This is already set up for the three
real tees currently on the site.

## Instagram auto-sync (2-minute setup, free)

You wanted new Instagram posts to show up on the site automatically, without
uploading anything twice. There's no way to do this with zero setup — Meta
(Instagram's owner) requires *some* connection to be authorized — but this is
the free, no-code way to do it:

1. Go to **snapwidget.com** and sign up (free plan is enough).
2. Create a new Instagram widget, connect your `@trenvogue` Instagram account
   when it asks (your account needs to be public).
3. SnapWidget gives you a **Widget ID** (a string of numbers) — copy it.
4. Open `src/data/config.js` and paste it in:
   ```js
   export const INSTAGRAM_WIDGET_ID = "123456"; // your real ID here
   ```
5. Save. The "Latest from Instagram" section on the homepage will now show
   your real posts, and will keep itself updated automatically — every time
   you post on Instagram, it appears on the site within a few minutes. You
   never touch the website for this again.

Until you do this setup, that section just shows a "Follow us on Instagram"
link instead, so nothing looks broken.

For a direct Meta Graph API integration instead, the Instagram account must be
a Professional account connected to a Facebook Page. The access token must be
kept on a server and never placed in this frontend. SnapWidget is currently
the simplest no-backend option for this Vite site.

**Free plan limits:** shows a small SnapWidget logo and a capped number of
posts. If that ever bothers you, SnapWidget's paid plan (a few dollars/month)
removes the logo — but the free plan is genuinely fine to launch with.

## How ordering works

There's no checkout, cart, or payment on the site. Every "Order" button opens
WhatsApp with a pre-filled message describing exactly what the customer wants
(t-shirt, color, size). You just reply to confirm and arrange payment/delivery
the way you already do.

## Deploying (free)

## Customer reviews

The homepage includes a photo/video-ready "Happy customers" section. Replace
the starter entries in `src/data/reviews.js` with genuine customer names,
quotes, and media URLs. For a quick workflow, ask customers to send a photo
or video through WhatsApp, get permission before publishing it, upload the
approved media to your hosting or storage, and paste its URL into `mediaUrl`.

Use `mediaType: "photo"` for images or `mediaType: "video"` for videos.

The easiest option is **Vercel**:
1. Push this project to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Leave all settings default (Vercel auto-detects Vite) → Deploy.
4. You'll get a free `yourproject.vercel.app` URL immediately.

To use a custom domain like `trenvogue.com`, buy the domain anywhere
(e.g. GoDaddy, Namecheap) and connect it in Vercel's project settings —
Vercel's hosting itself stays free either way.

## Tech used

- React + Vite
- Tailwind CSS v4
- Framer Motion (UI transitions, hover states)
- GSAP + ScrollTrigger (the scroll-driven hero animation)
- React Router (page navigation)
