import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => ({
  plugins: [
    vue()
  ],
  resolve: {
    alias: mode === 'test' ? {
      'wg-monorepo-frontend-utils': path.resolve(__dirname, '../../libs/utils/dist')
    } : undefined
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: [
        'es'
      ]
    },
    rollupOptions: {
      external: [
        'vue'
      ],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  test: {
    environment: 'jsdom'
  }
}));
