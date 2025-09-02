// https://nuxtjs.org/docs/directory-structure/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import variables from './config/variables.json';
import seo from './config/seo.json';

export default defineNuxtConfig({
  srcDir: 'app/', // 👈 MUY IMPORTANTE: ahora Nuxt busca todo dentro de /app
  site: {
    url: seo.site,
    name: seo.title,
    description: seo.description,
    defaultLocale: seo.lang,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: seo.title,
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: seo.description },
        { name: 'author', content: seo.title },

        { property: 'og:type', content: 'website' },

        { name: 'msapplication-TileColor', content: variables.color.primary },
        { name: 'theme-color', content: variables.color.primary },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' },
      ],
    },
  },

  experimental: {
    typedPages: true,
  },

  ogImage: {
    enabled: false,
  },

  // dir: {
  //   app: 'src',
  // },

  // server side rendering mode
  ssr: true,

  typescript: {
    strict: false,
    typeCheck: true,
  },

  build: {
    transpile: ['gsap'],
  },

  // css
  css: [
  // 'bootstrap/dist/css/bootstrap-grid.css', // solo la grid
  '~/assets/styles/app.scss',                  // tus estilos principales
  ],

  // modules
  modules: [
    '@nuxt/devtools',
    '@nuxt/image',
    '@nuxtjs/device',
    '@vueuse/nuxt',
    'nuxt-purgecss',
    // '@nuxt/eslint',
    // '@nuxtjs/stylelint-module',
    '@nuxtjs/critters',
    '@nuxtjs/seo',
    'nuxt-svgo',
    'nuxt-mcp',
    'nuxt-tradingview',
    '@nuxt/scripts',
  ],

  robots: {
    sitemap: '/sitemap.xml',
  },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  image: {
    quality: 95,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1200,
      xl: 1400,
      xxl: 1800,
      '2xl': 2000,
    },
  },

  tradingview: {
    importOnly: ['SymbolInfo', 'TickerTape'],
  },

  svgo: {
    autoImportPath: '~/assets/icon',
    defaultImport: 'component',
    componentPrefix: 'Icon',
  },

  imports: {
    dirs: ['stores/**', 'composables/**', 'utils/**'],
    global: true,
  },

  postcss: {
    plugins: {
      autoprefixer: {},
      cssnano: {
        preset: ['cssnano-preset-default', { discardComments: true }],
      },
      'postcss-preset-env': {
        features: {
          'custom-properties': false,
        },
      },
      'postcss-calc': {
        mediaQueries: true,
      },
    },
  },

  purgecss: {
    content: [
      'components/**/*.{vue,jsx?,tsx?}',
      'layouts/**/*.{vue,jsx?,tsx?}',
      'pages/**/*.{vue,jsx?,tsx?}',
      'composables/**/*.{vue,jsx?,tsx?}',
      'slices/**/*.{vue,jsx?,tsx?}',
      'App.{vue,jsx?,tsx?}',
      'app.{vue,jsx?,tsx?}',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}',
      '~/purgesafelist.txt',
    ],
    // variables: true, // delete unused CSS variables
    fontFace: false, // delete unused font-faces
    defaultExtractor(content: any) {
      const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
      return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
    },
    safelist: [
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^(?!(|.*?:)cursor-move).+-move$/,
      /^router-link(|-exact)-active$/,
      /data-v-.*/,
      /swiper/,
    ],
  },

  // features: {
  //   // inlineStyles: false, // temp fix for dupplicate css inline <style> # https://github.com/nuxt/nuxt/issues/21821
  //   inlineStyles: (id) => !!id && id.includes('.vue'), // fixed by default in nuxt 4 https://github.com/nuxt/nuxt/issues/21821#event-15731571258
  // },

  runtimeConfig: {
    public: {
      scripts: {
        googleAnalytics: {
          // .env
          // NUXT_PUBLIC_SCRIPTS_GOOGLE_ANALYTICS_ID=<your-id>
          id: '',
        },
      },
    },
  },

  vite: {
    server: {
      allowedHosts: ['mosquito-fond-jointly.ngrok-free.app', '.trycloudflare.com'],
    },
    css: {
      preprocessorMaxWorkers: true,
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/styles/helpers/_variables.scss" as *;
            @use "~/assets/styles/helpers/_functions.scss" as fn;
            @use "~/assets/styles/helpers/_mixins.scss" as mx;
            @use "~/assets/styles/helpers/_typography.scss" as mxt;
          `,
        },
      },
    },
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  compatibilityDate: '2025-07-16',
});
