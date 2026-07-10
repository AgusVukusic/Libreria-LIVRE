import { siteConfig } from '../config/siteConfig';

export const isDemoMode = siteConfig.isDemoMode;

export const businessInfo = {
  name: "LIVRE",
  description: "Librería escolar, artística y fotocopias en Hudson.",
  whatsapp: {
    number: isDemoMode ? siteConfig.demoWhatsappNumber : siteConfig.productionWhatsappNumber,
    defaultMessage: isDemoMode 
      ? "[DEMO LIVRE] Hola, quería hacer una consulta sobre sus productos." 
      : "Hola LIVRE, quería hacer una consulta sobre sus productos.",
  },
  location: {
    address: "Hudson, Berazategui",
    mapUrl: isDemoMode ? siteConfig.demoMapsUrl : siteConfig.productionMapsUrl,
  },
  social: {
    instagram: isDemoMode ? siteConfig.demoInstagramUrl : siteConfig.productionInstagramUrl,
  },
  schedule: "Lunes a Sábados de 10 a 20 hs, Domingos de 10 a 19 hs.",
};
