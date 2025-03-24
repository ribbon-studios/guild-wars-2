import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { copyFile } from 'fs/promises';
import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    minify: false,
    outDir: './dist',
    emptyOutDir: false,
    lib: {
      entry: {
        index: resolve(__dirname, './src/index.ts'),
        v1: resolve(__dirname, './src/types/v1/index.ts'),
        v2: resolve(__dirname, './src/types/v2/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  test: {
    environment: 'node',
    setupFiles: ['./__tests__/setup-tests.ts', 'dotenv/config'],
    include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    typecheck: {
      enabled: true,
    },
    coverage: {
      reporter: [process.env.CI ? 'text-summary' : 'text', 'lcovonly'],
      include: ['src/**'],
      exclude: ['src/types', 'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}', 'src/__tests__/playground.ts'],
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      afterBuild: async () => {
        await Promise.all([copyFile('dist/index.d.ts', 'dist/index.d.cts')]);
      },
    }),
  ],
});
