// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    apiDomain: 'https://randomuser.me',
    // public中的键也可以在客户端使用
    public: {
      apiBase: '/api',
    },
  },
});
