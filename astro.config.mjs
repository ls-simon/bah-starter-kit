import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import playformInline from "@playform/inline";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: netlify(),
  integrations: [playformInline(), mdx()]
});