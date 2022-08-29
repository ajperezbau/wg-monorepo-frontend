import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      'wg-monorepo-frontend-components': path.resolve(__dirname, '../../libs/components/dist'),
      'wg-monorepo-frontend-messages': path.resolve(__dirname, '../../libs/messages/dist'),
      'wg-monorepo-frontend-utils': path.resolve(__dirname, '../../libs/utils/dist')
    }
  },
  test: {
    environment: 'jsdom'
  }
});
