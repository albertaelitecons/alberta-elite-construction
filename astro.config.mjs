// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const site = 'https://albertaec.ca';

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'always',
  compressHTML: true,
  prefetch: {
    defaultStrategy: 'hover',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you/') && !page.includes('/404'),
      serialize(item) {
        const url = item.url;
        item.lastmod = new Date();

        if (url === `${site}/`) {
          item.changefreq = 'weekly';
          item.priority = 1.0;
          return item;
        }

        if (url.includes('-in-calgary') || url.includes('/services/') || url.includes('/locations/')) {
          item.changefreq = 'monthly';
          item.priority = 0.9;
          return item;
        }

        if (url.includes('/contact/') || url.includes('/about/')) {
          item.changefreq = 'monthly';
          item.priority = 0.8;
          return item;
        }

        if (url.includes('/blog/')) {
          item.changefreq = 'weekly';
          item.priority = 0.6;
          return item;
        }

        item.changefreq = 'monthly';
        item.priority = 0.7;
        return item;
      },
    }),
  ],
});
