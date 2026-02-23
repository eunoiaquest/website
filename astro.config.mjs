import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://eunoiaquest.github.io',
  base: '/website',
  output: 'static',
  integrations: [
    tailwind(),
  ],
});
