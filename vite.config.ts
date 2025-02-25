import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

export default defineConfig({
  plugins: [react(), vercel()],
  server: {
    port: Number(process.env.FRONTEND_PORT) || 3000,
    proxy: {
      "/api": `http://localhost:${process.env.BACKEND_PORT || 6789}`,
    },
  },
});
