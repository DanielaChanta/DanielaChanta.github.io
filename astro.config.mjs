import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://DanielaChanta.github.io",

  vite: {
    plugins: [tailwindcss()],
  },
});