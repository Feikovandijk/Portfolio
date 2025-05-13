import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  base: "/",
  build: {
    target: "esnext",
    minify: "terser",
    sourcemap: true
  },
  server: {
    port: 3000,
    strictPort: true,
    host: false
  }
});
