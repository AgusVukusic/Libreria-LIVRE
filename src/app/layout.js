import { businessInfo, isDemoMode } from '../data/businessInfo';
import './globals.css';

export const metadata = {
  title: `${businessInfo.name} | Librería escolar, artística y fotocopias en Hudson`,
  description: 'Encontrá útiles escolares, artículos de artística, papelería, impresiones y anillados en Hudson, Berazategui. Consultá por WhatsApp.',
  robots: isDemoMode ? 'noindex, nofollow' : 'index, follow',
  alternates: {
    canonical: isDemoMode ? undefined : 'https://livre.com.ar', // Cambiar en prod
  },
  openGraph: {
    title: `${businessInfo.name} | Librería en Hudson`,
    description: 'Encontrá útiles escolares, artículos de artística, papelería, impresiones y anillados en Hudson.',
    type: 'website',
    locale: 'es_AR',
    siteName: businessInfo.name,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Favicon placeholder listo para ser reemplazado */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
