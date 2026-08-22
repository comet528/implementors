// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://implementors.pages.dev',
  trailingSlash: 'always',
  adapter: cloudflare(),
});
