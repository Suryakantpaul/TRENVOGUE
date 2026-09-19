// ---- EDIT THESE VALUES TO SET UP THE STORE ----

// WhatsApp number in international format, no + or spaces, e.g. "919876543210"
export const WHATSAPP_NUMBER = "919831120804";

export const INSTAGRAM_HANDLE = "trenvogue";
export const INSTAGRAM_URL = "https://instagram.com/trenvogue";

// Auto-syncing Instagram feed (see README "Instagram auto-sync" section
// for the 2-minute free setup). Leave as null to hide the feed section
// until it's set up.
export const INSTAGRAM_WIDGET_ID = null; // e.g. "123456"

export function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function productEnquiryMessage(product, opts = {}) {
  const { size, color } = opts;
  let msg = `Hi TRENVOGUE! I'm interested in the "${product.name}"`;
  if (color) msg += ` in ${color}`;
  if (size) msg += `, size ${size}`;
  msg += `. Price: ${product.price}. Is it available?`;
  return msg;
}
