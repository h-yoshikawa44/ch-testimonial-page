import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/ch-testmonial-page/' : './',
  server: {
    open: true,
  },
});
