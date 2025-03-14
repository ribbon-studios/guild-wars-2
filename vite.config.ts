import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { copyFileSync } from 'fs';
import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    minify: false,
    outDir: './dist',
    emptyOutDir: false,
    lib: {
      entry: [resolve(__dirname, './src/index.ts')],
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
      exclude: ['src/types', 'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      afterBuild: () => {
        copyFileSync('dist/index.d.ts', 'dist/index.d.cts');
      },
    }),
  ],
});
