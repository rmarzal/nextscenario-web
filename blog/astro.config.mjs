// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nextscenario.com',
  output: 'static',
  // Astro emits into its own dist/ folder; the wrapper build script merges
  // its output with the static marketing HTML into the final __out/.
  // (If we wrote directly into the shared __out/, Astro's cleanup step
  // would delete the marketing pages that were copied in first.)
  trailingSlash: 'always',
  build: {
    format: 'directory',
    assets: '_assets',
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' },
      },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
