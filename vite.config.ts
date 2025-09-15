import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  // يحمّل المتغيرات المناسبة للـ mode من .env files
  const env = loadEnv(mode, process.cwd(), "");

  // استخدم VITE_BASE_URL إن وُجد وإلا استخدم '/'
  const base = env.VITE_BASE_URL || "/";

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
  };
});
