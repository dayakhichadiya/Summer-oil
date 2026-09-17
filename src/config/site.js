/**
 * Single source of truth for brand + contact details.
 * Update the WhatsApp number here — every WhatsApp button on the
 * site reads from this file via src/lib/whatsapp.js
 */
export const siteConfig = {
  brand: {
    name: "Summer Sing Tel",
    shortName: "Samar Singh",
  },

  tagline: "Trust in Every Taste, Quality in Every Drop.",

  description:
    "Summer Sing Tel is a groundnut (peanut) oil brand, made for everyday Indian kitchens across Gujarat.",

  url: "https://www.samarsinghtel.com",

  // WhatsApp — digits only, with country code, no plus sign and no spaces.
  // Example for an Indian number 98765 43210 -> "919876543210"
  whatsapp: {
    number: "919876543210", // TODO: replace with the real business WhatsApp number
    defaultMessage:
      "Hello Summer Sing Tel, I'd like to know more about your groundnut oil.",
  },

  contact: {
    email: "hello@samarsinghtel.com", // TODO: replace with real email
    address: "Gujarat, India",
  },

  social: {
    instagram: "", // TODO: add handle URL if available
    facebook: "",
  },
};
