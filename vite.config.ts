import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "node:path"
import viteEslint from "vite-plugin-eslint"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      failOnError: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://www.ggapi.cn/api",
        changeOrigin: true,
      },
    },
  },
})
