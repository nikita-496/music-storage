import bootstrap from './.nest/nest.js';

const isDev = process.env.NODE_ENV === 'development';

const config = async () => ({
  srcDir: 'client/',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs-nestjs-integration',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'
      }
    ]
  },

  serverMiddleware: isDev ? [] : [{ path: '/api', handler: await bootstrap() }],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./client/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: isDev ? 'http://localhost:4000/api' : 'http://localhost:3000/api',
    proxy: true
  },

  proxy: {
    '/api/v1': {
      target: 'http://localhost:4000/api',
      pathRewrite: { '^/api/v1': '' },
      changeOrigin: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
});

export default config;
