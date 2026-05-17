import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://dcrader-template-pets.vercel.app',
  output: 'static',
  compressHTML: true,
  prefetch: true,
});
