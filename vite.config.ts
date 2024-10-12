import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      // Add your alias here
      "@components": path.resolve(__dirname, "src/lib/components"),
      "@services": path.resolve(__dirname, "src/lib/services"),
      "@stores": path.resolve(__dirname, "src/lib/stores"),
      "@styles": path.resolve(__dirname, "src/lib/styles"),
      "@utils": path.resolve(__dirname, "src/lib/utils"),
      "@routes": path.resolve(__dirname, "src/routes"),
    },
  },
});
