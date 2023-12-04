import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: process.env.NODE_ENV === 'production' ? '/app' : '/', // '/vite' na prvni pozici
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule('md')
  //     .test(/\.md$/)
  //     .use('raw-loader')
  //     .loader('raw-loader')
  //     .end();
  // },
})
