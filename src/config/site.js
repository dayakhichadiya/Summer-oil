/**
 * Single source of truth for brand + contact details.
 * Update the WhatsApp number here — every WhatsApp button on the
 * site reads from this file via src/lib/whatsapp.js
 */
export const siteConfig = {
  brand: {
    name: "Samar Sing Tel",
    shortName: "Samar Sing",
    alternateNames: [
      "Samar Sing Tel",
      "Samar Oil",
      "Sing Tel",
      "Sing Tel Oil",
      "Shudh Sing Tel",
      "Shudh Singh Tel",
      "Samar Singh Groundnut Oil",
    ],
  },

  tagline: "Trust in Every Taste, Quality in Every Drop.",

  description:
    "Samar Sing Tel is a groundnut (peanut) oil brand, made for everyday Indian kitchens across Gujarat.",

  url: "https://samaroil.com",

  whatsapp: {
    number: "919033296462",
    defaultMessage:
      "નમસ્તે, મને સમર સિંગતેલ વિશે માહિતી જોઈએ છે અને ખરીદી અંગે જાણવું છે.",
  },

  contact: {
    email: "samaroil666@gmail.com",
    address: "Gujarat, India",
  },

  social: {
    instagram: "",
    facebook: "",
  },
};
