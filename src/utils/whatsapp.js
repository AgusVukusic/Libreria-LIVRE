import { businessInfo, isDemoMode } from '../data/businessInfo';

/**
 * Genera un enlace de WhatsApp prearmado.
 * @param {string} [customMessage] - Mensaje personalizado (ej. por producto o servicio).
 * @returns {string|null} URL de WhatsApp lista para usar o null si no hay número configurado.
 */
export const generateWhatsappLink = (customMessage) => {
  const number = businessInfo.whatsapp.number;
  if (!number) return null;
  
  let message = customMessage || businessInfo.whatsapp.defaultMessage;
  
  // Si estamos en demo y hay un mensaje personalizado que no incluye ya el prefijo
  if (isDemoMode && customMessage && !message.startsWith('[DEMO LIVRE]')) {
    message = `[DEMO LIVRE] ${message}`;
  }
  
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
