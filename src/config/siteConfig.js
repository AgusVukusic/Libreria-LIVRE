export const siteConfig = {
  isDemoMode: process.env.NEXT_PUBLIC_SITE_MODE !== 'production',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
  mapsUrl: process.env.NEXT_PUBLIC_MAPS_URL || '',
};
