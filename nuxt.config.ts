// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
            link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
          },
      },
})
