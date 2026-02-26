import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://eunoiaquest.com',
  output: 'static',
  integrations: [
    tailwind(),
  ],
});
