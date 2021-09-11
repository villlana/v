const title = `villlana Documentationary`
const altTitle = `All About Getting It Done, Bae - Documentarionary About 2D And 3D Art`
const theme = 'primary'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: `${title}`,
    bodyAttrs: {
      class: `${theme || 'primary'}`
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'ogsitename',
        name: 'og:site_name',
        property: 'og:site_name',
        content: `${title}`
      },
      {
        hid: 'ogtitle',
        name: 'og:title',
        property: 'og:title',
        content: `${altTitle}`
      },
      {
        hid: 'ogtype',
        name: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'ogimage',
        name: 'og:image',
        property: 'og:image',
        content: 'https://villlana.github.io/v/og-splash.png'
      },
      {
        hid: 'description',
        name: 'description',
        content: `${altTitle}`
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'msapplication-TileColor',
        content: '#da532c'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Material+Icons+Outlined&display=swap'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'apple-touch-icon.png'
      }, {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicon-32x32.png'
      }, {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicon-16x16.png'
      }, {
        rel: 'manifest',
        href: 'site.webmanifest'
      }, {
        rel: 'mask-icon',
        href: 'safari-pinned-tab.svg',
        color: '#a54ca6'
      },

    ]
  },

  globals: {
    id: `villlana`,
  },

  css: [
    '@assets/css/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/variables',
    '~/plugins/gtag',
    '~/plugins/getTheme'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const readingTime = require('reading-time');
        const stats = readingTime(document.text);
        document.reading = stats
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },

  target: 'static',

  router: {
    base: process.env.NODE_ENV === 'production' ? '/v/' : ''
  },

  ssr: 'false',

  generate: {
    fallback: '404.html'
  },

  content: {
    nestedProperties: ['article.tags'],
    fullTextSearchFields: ['title', 'description', 'slug', 'text', 'tags']
  }
}
