// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const siteUrl = 'https://www.eventhorizon-design.com';

export default defineConfig({
  site: siteUrl,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !['/404/', '/home/', '/thank-you/'].some((path) => page === `${siteUrl}${path}`),
    }),
  ],
  image: {
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
