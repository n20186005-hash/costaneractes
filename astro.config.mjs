import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Set the final production URL here when the domain is available, e.g. 'https://costaneracorrientes.ar'.
// Keeping this blank preserves a successful build without placeholder URLs.
const site = '';

export default defineConfig({
  site: site || undefined,
  output: 'static',
  server: { allowedHosts: true },
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
