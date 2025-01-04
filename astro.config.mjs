import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Explicitly set static output
  site: 'https://www.chptk.de', // Replace with your actual domain
  build: {
    // Ensure assets are properly handled
    assets: 'assets'
  }
});