import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    vue(), 
    astroI18next()
  ]
});