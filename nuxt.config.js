// Aqui o arquivo de configuração do nuxt, fiz leves alterações nos links de css e temas do vuetify utilizados.

import colors from 'vuetify/es5/util/colors'

//Realização da configuração básico das url do axios.
let backendHost = ''

const applicationProfile = process.env.NODE_ENV

switch(applicationProfile){
    case 'development':
        backendHost = "http://localhost:8080"
        break
    case 'heroku':
        backendHost = "https://crud-ps-rental-vehic-backend.herokuapp.com"
        break
}

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - CRUD_vehicles_Nuxtjs_PS',
    title: 'CRUD_vehicles_Nuxtjs_PS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:  'stylesheet prefetch', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css' }, 
      { rel:  'stylesheet prefetch', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap-theme.min.css'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vehicle-service'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: { // Leves modificações no tema:
          primary: colors.blue.lighten5,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: { // Adicionei o seguinte tema:
          primary: colors.purple,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3,
          background: colors.indigo.lighten5
        }
      }
    }
  },

  axios: {
    //baseURL: 'http://localhost:3000'
    baseURL: backendHost,
    // headers:{
    //   'Access-Control-Allow-Origin': '*',
    // }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
