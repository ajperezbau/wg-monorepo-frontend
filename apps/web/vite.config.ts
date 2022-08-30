import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => ({
  plugins: [
    vue()
  ],
  resolve: {
    alias: mode === 'test' ? {
      'wg-monorepo-frontend-components': path.resolve(__dirname, '../../libs/components/dist'),
      'wg-monorepo-frontend-messages': path.resolve(__dirname, '../../libs/messages/dist'),
      'wg-monorepo-frontend-utils': path.resolve(__dirname, '../../libs/utils/dist')
    } : undefined
  },
  test: {
    environment: 'jsdom'
  }
}));
