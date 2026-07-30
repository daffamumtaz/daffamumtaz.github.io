import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://daffamumtaz.github.io",
  base: "/porto-daffamumtaz",
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
});
