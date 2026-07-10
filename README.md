# LIVRE - Landing Page MVP

Demo conceptual de la Landing Page para la Librería LIVRE (Hudson).

## Tecnologías Utilizadas

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Estilos**: CSS Modules (Vanilla CSS)
- **Deployment**: Vercel / Netlify

## Instalación y Desarrollo Local

1. Clonar el repositorio:
   ```bash
   git clone <repo-url>
   cd Libreria-LIVRE
   ```

2. Configurar variables de entorno:
   Copiar `.env.example` a `.env.local` y ajustar los valores necesarios (ver sección "Variables de Entorno").

3. Instalar dependencias:
   ```bash
   npm ci
   ```

4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

## Variables de Entorno

El proyecto requiere las siguientes variables de entorno (ver `.env.example`):

- `NEXT_PUBLIC_SITE_MODE`: Configurar como `demo` o `production`. Modifica el indexado SEO y banners.
- `NEXT_PUBLIC_SITE_URL`: URL base del sitio (ej. `http://localhost:3000` o la URL de Vercel/Producción).
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: Número de WhatsApp en formato internacional (compatible con wa.me, sin +, espacios, ni guiones).
- `NEXT_PUBLIC_INSTAGRAM_URL`: URL completa del perfil de Instagram.
- `NEXT_PUBLIC_MAPS_URL`: URL completa del mapa de Google Maps.

## Modo Demo

Para mantener la naturaleza demostrativa y proteger la identidad comercial original, si `NEXT_PUBLIC_SITE_MODE` está configurado como `demo`:
- Se agrega la etiqueta SEO `noindex, nofollow` para evitar rastreos de motores de búsqueda.
- Se oculta el sitemap del rastreo general.
- El aviso legal de "Todos los derechos reservados" en el footer se adapta a un modo ilustrativo.
