import { siteConfig } from '../config/siteConfig';

export default function robots() {
  if (siteConfig.isDemoMode) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
