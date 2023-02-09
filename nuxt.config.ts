// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  vite: {

  },
  runtimeConfig: {
    DATABASE_URL: '',
    public: {
      DATA_API: 'https://jsonplaceholder.typicode.com'
    }
  },
  telemetry: false,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ['@anu-vue/nuxt', '@unocss/nuxt'],
  css: ['@anu-vue/preset-theme-default/dist/style.css'],
})
