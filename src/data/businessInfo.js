import { siteConfig } from '../config/siteConfig';

export const isDemoMode = siteConfig.isDemoMode;

export const businessInfo = {
  name: "LIVRE",
  description: "Librería escolar, artística y fotocopias en Hudson.",
  whatsapp: {
    number: siteConfig.whatsappNumber,
    defaultMessage: "Hola LIVRE, quería hacer una consulta sobre sus productos.",
  },
  location: {
    address: "Hudson, Berazategui",
    mapUrl: siteConfig.mapsUrl,
  },
  social: {
    instagram: siteConfig.instagramUrl,
  },
  schedule: "Lunes a Sabados de 10 a 20 hs, Domingos de 10 a 19 hs.",
};
