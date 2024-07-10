import { defineConfig } from "vitest/config";
import fs from "fs/promises"

export default defineConfig({
    test: {
        globals: true,
    environment: 'jsdom',
    setupFiles: 'tests/setupTests.ts',
    coverage: {
        reporter: ["text"]
      },
    }
})