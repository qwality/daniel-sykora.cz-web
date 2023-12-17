// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from 'path'
// import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  // devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets",
    // '@': resolve(__dirname, '/'),
  },
  // vite: {
  //   plugins: [svgLoader()],
  // },
  
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    baseURL: '/nuxt',
    head: {
      title: 'Daniel Sykora - Blog',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.4.0/github-markdown.min.css',
          integrity: 'sha512-30lMQ13MJJk66BfdlnvVnKmP05V7Qt1g6sHyYigDgV8i9M2ENAsXk1U4dVvKUYB6pqb2bVhoxhZsYK08hQpS+g==',
          crossorigin: 'anonymous',
          referrerpolicy: 'no-referrer'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
      ]
    }
  },
  css: ['~/assets/css/main.scss'],
})


