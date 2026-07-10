export const siteConfig = {
  isDemoMode: process.env.NEXT_PUBLIC_SITE_MODE !== 'production',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  
  demoWhatsappNumber: process.env.NEXT_PUBLIC_DEMO_WHATSAPP_NUMBER || '',
  demoInstagramUrl: process.env.NEXT_PUBLIC_DEMO_INSTAGRAM_URL || '',
  demoMapsUrl: process.env.NEXT_PUBLIC_DEMO_MAPS_URL || '',

  productionWhatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
  productionInstagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
  productionMapsUrl: process.env.NEXT_PUBLIC_MAPS_URL || '',
};
