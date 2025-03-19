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
        v1: resolve(__dirname, './src/types/v1'),
        v2: resolve(__dirname, './src/types/v2'),
      },
      formats: ['es', 'cjs'],
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  test: {
    environment: 'node',
    setupFiles: ['./__tests__/setup-tests.ts'],
    include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    typecheck: {
      enabled: true,
    },
    coverage: {
      reporter: [process.env.CI ? 'text-summary' : 'text', 'lcovonly'],
      include: ['src/**'],
      exclude: ['src/types', 'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}', 'src/playground.ts'],
    },
  },
  plugins: [
    dts({
      rollupTypes: process.env.CI ? false : true,
      insertTypesEntry: true,
      afterBuild: async () => {
        await Promise.all([
          copyFile('dist/index.d.ts', 'dist/index.d.cts'),
          copyFile('dist/v1.d.ts', 'dist/v1.d.cts'),
          copyFile('dist/v2.d.ts', 'dist/v2.d.cts'),
        ]);
      },
    }),
  ],
});
