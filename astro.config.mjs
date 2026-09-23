import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Production URL. Setting this enables canonical URLs, absolute OG tags,
// hreflang alternates, JSON-LD site URLs and the @astrojs/sitemap output.
const site = 'https://costaneractes.com';

export default defineConfig({
  site: site || undefined,
  output: 'static',
  server: { allowedHosts: true },
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
