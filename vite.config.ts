import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // support `describe`, `test` etc. globally,
    // so you don't need to import them every time
    globals: true,
    // run tests in jsdom environment
    // environment: "jsdom",
    // global test setup
    // setupFiles: "./tests/setup.js",
    exclude: [...configDefaults.exclude, "tests/e2e/*"],
  },
});
