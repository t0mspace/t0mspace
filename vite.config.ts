import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  publicDir: "public",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/abstract/_variables.scss";
          @import "@/assets/styles/utils/_z-index.scss";
          @import "@/assets/styles/utils/grillade.scss";
          @import "@/assets/styles/base/_typo.scss";
          @import "@/assets/styles/utils/behavior.scss";
        `,
      },
    },
  },
});
