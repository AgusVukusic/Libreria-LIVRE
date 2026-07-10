import { siteConfig } from '../config/siteConfig';

export default function sitemap() {
  if (siteConfig.isDemoMode) {
    return [];
  }

  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
