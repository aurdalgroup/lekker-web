export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'vercel'
  },
  sourcemap: {
    server: false,
    client: false
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      title:
        'Lekker.fi - Food cart in Helsinki serving fresh Nordic sandwiches.',
      link: [
        { rel: 'canonical', href: 'https://lekker.fi' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      meta: [
        { hid: 'charset', charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        {
          hid: 'viewport',
          name: 'viewport',
          content:
            'width=device-width,height=device-height,initial-scale=1.0,user-scalable=0,minimum-scale=1.0,maximum-scale=1.0,viewport-fit=cover'
        },
        {
          hid: 'format-detection',
          name: 'format-detection',
          content: 'telephone=no'
        },
        { hid: 'author', name: 'author', content: 'Pontus Aurdal' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Lekker.fi - Food cart in Helsinki serving fresh Nordic sandwiches.'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://lekker.fi'
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          property: 'og:site_name',
          content: 'Lekker.fi'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content:
            'Lekker.fi - Food cart in Helsinki serving fresh Nordic sandwiches.'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Lekker.fi - Food cart in Helsinki serving fresh Nordic sandwiches.'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://lekker.fi/cover.jpeg'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@lekker.fi'
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@lekker.fi'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Lekker.fi'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Lekker.fi - Food cart in Helsinki serving fresh Nordic sandwiches.'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://lekker.fi/cover.jpeg'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://lekker.fi'
        },
        {
          hid: 'msapplication-TileColor',
          name: 'msapplication-TileColor',
          content: '#ffffff'
        },
        { hid: 'theme-color', name: 'theme-color', content: '#ffffff' },
        {
          hid: 'mobile-web-app-capable',
          name: 'mobile-web-app-capable',
          content: 'yes'
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: 'Lekker.fi'
        }
      ],
      script: [],
      style: []
    }
  }
})
