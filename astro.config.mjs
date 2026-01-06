import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  site: 'https://creambbq.github.io',
  base: '/',
  integrations: [tailwind()]
});