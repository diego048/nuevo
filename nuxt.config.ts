// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    hooks: {
    'pages:extend' (pages) {
      pages.push({
         name: 'diseño-de-almacen',
        path: "/diseño-almacen",
        file: '~/pages/diseño-almacen.vue'
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
            title: 'Logicorp',
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
            ],
          },
      },
})
