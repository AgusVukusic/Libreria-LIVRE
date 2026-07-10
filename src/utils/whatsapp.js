import { businessInfo } from '../data/businessInfo';

/**
 * Genera un enlace de WhatsApp prearmado.
 * @param {string} [customMessage] - Mensaje personalizado (ej. por producto o servicio).
 * @returns {string} URL de WhatsApp lista para usar.
 */
export const generateWhatsappLink = (customMessage) => {
  const number = businessInfo.whatsapp.number;
  const message = customMessage || businessInfo.whatsapp.defaultMessage;
  
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
