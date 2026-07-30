import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://daffamumtaz.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
});
