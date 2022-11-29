import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/lib/hooks'),
      '@utils': path.resolve(__dirname, './src/lib/utils'),
      '@server': path.resolve(__dirname, './src/lib/server'),
      '@type': path.resolve(__dirname, './src/lib/type'),
      '@lib': path.resolve(__dirname, './src/lib'),

      '@test': path.resolve(__dirname, './src/__test__'),

      '@store': path.resolve(__dirname, './src/store'),

      '@assets': path.resolve(__dirname, './src/assets'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@src': path.resolve(__dirname, './src'),
    },
  },
});
