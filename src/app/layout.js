import { businessInfo, isDemoMode } from '../data/businessInfo';
import { siteConfig } from '../config/siteConfig';
import './globals.css';

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: `${businessInfo.name} | Librería escolar, artística y fotocopias en Hudson`,
  description: 'Encontrá útiles escolares, artículos de artística, papelería, impresiones y anillados en Hudson, Berazategui. Consultá por WhatsApp.',
  robots: isDemoMode ? 'noindex, nofollow' : 'index, follow',
  alternates: {
    canonical: isDemoMode ? undefined : '/',
  },
  openGraph: {
    title: `${businessInfo.name} | Librería en Hudson`,
    description: 'Encontrá útiles escolares, artículos de artística, papelería, impresiones y anillados en Hudson.',
    url: siteConfig.siteUrl,
    type: 'website',
    locale: 'es_AR',
    siteName: businessInfo.name,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: `${businessInfo.name} - Demo Conceptual`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${businessInfo.name} | Librería en Hudson`,
    description: 'Encontrá útiles escolares, artículos de artística, papelería, impresiones y anillados en Hudson.',
    images: ['/opengraph-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
