import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { ViteDevServer } from 'vite';
import type { IncomingMessage, ServerResponse } from 'node:http';

// Custom plugin to handle CSP headers
const cspPlugin = {
  name: 'csp-headers',
  configureServer(server: ViteDevServer) {
    server.middlewares.use((_req: IncomingMessage, res: ServerResponse, next: () => void) => {
      res.setHeader(
        'Content-Security-Policy',
        [
          "default-src 'self'",
          "img-src 'self' data: https:",
          "media-src 'self' https:",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com https://*.google-analytics.com",
          "style-src 'self' 'unsafe-inline'",
          "connect-src 'self' https: https://www.google-analytics.com https://region1.google-analytics.com https://*.google-analytics.com",
          "frame-ancestors 'none'"
        ].join("; ")
      );
      next();
    });
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cspPlugin],
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
    host: false,
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block"
    }
  }
});
