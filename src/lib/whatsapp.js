import { siteConfig } from "@/config/site";

/**
 * Builds a wa.me deep link that opens WhatsApp with a pre-filled message.
 * @param {string} [customMessage] - Optional message to override the default.
 * @returns {string} A ready-to-use https://wa.me/... URL
 */
export function getWhatsAppLink(customMessage) {
  const { number, defaultMessage } = siteConfig.whatsapp;
  const message = customMessage || defaultMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
