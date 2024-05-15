export default defineNuxtConfig({
  devServer: {
    port: 1111,
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    // '@nuxt/content',
    // '@vite-pwa/nuxt',
  ],
  experimental: {
    viewTransition: true,
    renderJsonPayloads: true,
  },
  css: [
    '~/styles/fonts.css',
    '~/styles/main.css',
    '~/styles/vars.css',
  ],
  devtools: {
    enabled: false,
  },
  // content: {
  //   highlight: {
  //     theme: 'vitesse-dark',
  //   },
  //   markdown: {
  //     toc: {
  //       depth: 3,
  //     },
  //   },
  //   documentDriven: true,
  // },
  app: {
    keepalive: true,
  },
  vite: {
    define: {
      'import.meta.env.__BUILD_TIME__': JSON.stringify(new Date().toISOString()),
      '__DEV__': process.env.NODE_ENV !== 'production',
    },
    build: {
      target: 'esnext',
    },
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },
  // intlify: {
  //   localeDir: 'locales',
  //   vueI18n: {
  //     locale: 'zh-cn',
  //   },
  // },
})
