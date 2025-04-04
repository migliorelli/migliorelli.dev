import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    sitemap({
      hostname: "https://migliorelli.dev",
      outDir: "dist",
      i18n: {
        defaultLanguage: "pt-BR",
        strategy: "prefix",
        languages: ["pt-BR", "en"],
      },
      exclude: ["/404"],
      robots: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    }),
  ],
  server: {
    port: (process.env.PORT as unknown as number) || 3000,
    // port: 3000,
    // strictPort: true,
    // host: true,
    // watch: {
    //   usePolling: true,
    // },
  },
  // build: {
  //   outDir: "dist",
  //   assetsDir: "assets",
  //   emptyOutDir: true,
  //   sourcemap: false,
  //   chunkSizeWarningLimit: 800,
  //   minify: "terser",
  //   terserOptions: {
  //     compress: {
  //       drop_console: true,
  //       drop_debugger: true,
  //     },
  //   },
  // },
});
