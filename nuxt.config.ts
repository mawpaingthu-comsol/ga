// https://nuxt.com/docs/api/configuration/nuxt-config
const BASE_URL = "/ga/"
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    baseURL: BASE_URL,
    head:{
      link:[
        { rel: 'icon', type:'image/x-icon', href: `${BASE_URL}favicon.ico` }
      ]
    }
  }
})
