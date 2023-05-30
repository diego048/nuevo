// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
import { defineNuxtConfig } from 'nuxt3'
import { createCommonJS } from 'mlly'
const { __dirname } = createCommonJS(import.meta.url)

export default defineNuxtConfig({
    hooks: {
    'pages:extend' (pages) {
      pages.push({
         name: 'profile',
        path: '/profile',
        file: resolve(__dirname, 'pages/diseño-almacen.vue')
      })
     }
    },
    modules: ['nuxt-swiper'],
    swiper: {
      prefix: 'Swiper',
      styleLang: 'css',
      autoHeight: true,
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'LogicorPeru',
            meta: [
              { name: 'description', content: 'Somos un grupo de profesionales especializados en almacenes, contamos con más de 20 años' }
            ],
            link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
              href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
              rel:"stylesheet", 
              integrity:"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",
              crossorigin:"anonymous"
             },
             {
               rel:"stylesheet",
               href:"https://cdn.materialdesignicons.com/6.4.95/css/materialdesignicons.min.css"
             },
             {
               rel:"stylesheet",
               href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"
             },
            ],
             script: [
              {
                src:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", 
                integrity:"sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4", 
                crossorigin:"anonymous"
               },
             ]
          },
      },
})
