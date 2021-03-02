// process.env.DEBUG = 'nuxt:*';

const path = require('path');
const fs = require('fs');
const isDev = process.env.NODE_ENV === 'development';

// const DEFAULT_LANG = 'en';

module.exports = {
  dev: isDev,
  target: 'static',
  srcDir: 'src/',
  css: [],
  env: {
    BASE_PATH: getBasePath(),
    GITHUB_REPO_URL: 'https://github.com/GrabarzUndPartner/UnfilteredTruth'
  },

  features: {
    store: true,
    layouts: true,
    meta: true,
    middleware: true,
    transitions: true,
    deprecations: false,
    validate: true,
    asyncData: true,
    fetch: true,
    clientOnline: true,
    clientPrefetch: true,
    clientUseUrl: true,
    componentAliases: true,
    componentClientOnly: true
  },

  server: {
    host: getHost(),
    port: getPort(),
    timing: false,
    https: (function () {
      const dir = './env/cert';
      const key = path.join(dir, 'server.key');
      const crt = path.join(dir, 'server.crt');

      if (fs.existsSync(key) && fs.existsSync(crt)) {
        return { key: fs.readFileSync(key), cert: fs.readFileSync(crt) };
      } else {
        return null;
      }
    })()
  },

  modern: isDev ? false : 'client',

  build: {
    analyze: false,
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[name].[chunkhash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[name].[chunkhash].js'
    },
    babel: {
      presets ({ envName, isServer, isModern }) {
        const envTargets = {
          client: {
            browsers: [
              'last 2 versions'
            ],
            ie: 11
          },
          server: { node: 'current' }
        };
        const envUseBuiltins = {
          client: 'usage',
          modern: 'entry'
        };
        return [
          [
            // polyfill options -> https://www.npmjs.com/package/@nuxt/babel-preset-app-edge
            require.resolve('@nuxt/babel-preset-app'), {
              targets: envTargets[String(envName)],
              useBuiltIns: envUseBuiltins[String(envName)],
              corejs: { version: 3 }
            }
          ]
        ];
      }
    },

    postcss: {
      plugins: {
        'postcss-preset-env': {
          preserve: false,
          stage: 0,
          features: {
            'custom-media-queries': false,
            'nesting-rules': false
          },
          importFrom: 'src/globals/postcss.js'
        },
        'postcss-custom-media': {
          importFrom: [
            'src/globals/postcss.js'
          ]
        },
        'postcss-nesting': {},
        'postcss-normalize': {},
        'postcss-url': {},
        'postcss-object-fit-images': {},
        '@fullhuman/postcss-purgecss': {
          content: [
            'src/pages/**/*.vue',
            'src/layouts/**/*.vue',
            'src/components/**/*.vue'
          ],
          safelist: [
            'html', 'body', /nuxt-/
          ]
        },
        'postcss-momentum-scrolling': [
          'scroll'
        ],
        'rucksack-css': {},
        lost: {
          gutter: '15px',
          flexbox: 'flex',
          cycle: 'auto'
        }
      }
    },

    parallel: false,
    transpile: []
  },

  generate: {
    dir: 'dist',
    crawler: true
  },

  render: {
    crossorigin: 'anonymous',
    resourceHints: true,
    http2: { push: true }
  },

  router: {
    base: getBasePath(),
    prefetchLinks: true
  },

  workbox: {
    cachingExtensions: '@/workbox/workbox-range-request.js',
    runtimeCaching: [
      {
        urlPattern: /\/.*/,
        handler: 'networkFirst'
      }
    ]
  },

  plugins: [],

  speedkit: {
    fonts: [
      {
        family: 'Alfa Slab One',
        fallback: [
          'display'
        ],
        variances: [
          {
            style: 'normal',
            weight: 400,
            sources: [
              { src: '@/assets/fonts/alfa-slab-one-v10-latin/alfa-slab-one-v10-latin-regular.woff2', type: 'woff' },
              { src: '@/assets/fonts/alfa-slab-one-v10-latin/alfa-slab-one-v10-latin-regular.woff2', type: 'woff2' }
            ]
          }
        ]
      },
      {
        family: 'Roboto',
        fallback: [
          'sans-serif'
        ],
        variances: [
          {
            style: 'normal',
            weight: 400,
            sources: [
              { src: '@/assets/fonts/roboto-v20-latin/roboto-v20-latin-regular.woff', type: 'woff' },
              { src: '@/assets/fonts/roboto-v20-latin/roboto-v20-latin-regular.woff2', type: 'woff2' }
            ]
          }, {
            style: 'italic',
            weight: 400,
            sources: [
              { src: '@/assets/fonts/roboto-v20-latin/roboto-v20-latin-italic.woff', type: 'woff' },
              { src: '@/assets/fonts/roboto-v20-latin/roboto-v20-latin-italic.woff2', type: 'woff2' }
            ]
          }, {
            style: 'normal',
            weight: 700,
            sources: [
              { src: '@/assets/fonts/roboto-v20-latin/roboto-v20-latin-700.woff', type: 'woff' },
              { src: '@/assets/fonts/roboto-v20-latin/roboto-v20-latin-700.woff2', type: 'woff2' }
            ]
          }, {
            style: 'italic',
            weight: 700,
            sources: [
              { src: '@/assets/fonts/roboto-v20-latin/roboto-v20-latin-700italic.woff', type: 'woff' },
              { src: '@/assets/fonts/roboto-v20-latin/roboto-v20-latin-700italic.woff2', type: 'woff2' }
            ]
          }
        ]
      }
    ]
  },

  modules: [
    '@/modules/device-detection',
    'nuxt-speedkit',
    '@/modules/codesandbox',
    '@/modules/svg',
    '@/modules/analyzer',
    '@nuxtjs/axios',
    /*
    [
      'nuxt-i18n', {
        locales: [
          {
            code: 'en',
            iso: 'en-US'
          },
          {
            code: 'de',
            iso: 'de-DE'
          }
        ],
        parsePages: true,
        defaultLocale: DEFAULT_LANG,
        strategy: 'prefix_except_default',
        seo: false,
        vueI18nLoader: false,
        vueI18n: {
          fallbackLocale: DEFAULT_LANG,
          messages: {
            en: require('./src/globals/locales/en.json'),
            de: require('./src/globals/locales/de.json')
          }
        }
      }
    ], */
    [
      '@/modules/licence', {
        perChunkOutput: false,
        unacceptableLicenseTest: licenseType => (licenseType === 'GPL'),
        handleMissingLicenseText: (packageName) => {
          return 'NO LICENSE TEXT: ' + packageName;
        },
        licenseTextOverrides: {
          'regenerator-runtime': `MIT License

            Copyright (c) 2014-present, Facebook, Inc.

            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:

            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.

            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.`,
          consola: 'MIT License',
          'intersection-observer': 'W3C Software and Document License',
          requestidlecallback: 'MIT License',
          'vue-browserupdate': 'MIT License'
        }
      }
    ]
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',

    // [
    //   '@nuxtjs/pwa', {
    //     dev: isDev,
    //     icon: {
    //       source: 'src/static/favicon.png',
    //       sizes: [
    //         16, 120, 144, 152, 192, 384, 512
    //       ]
    //     },
    //     meta: {
    //       charset: 'utf-8',
    //       viewport: 'width=device-width, initial-scale=1',
    //       mobileApp: true,
    //       mobileAppIOS: true,
    //       appleStatusBarStyle: 'default',
    //       favicon: true,
    //       name: 'TITLE',
    //       author: 'metaAuthor',
    //       description: 'metaDescription',
    //       theme_color: 'black',
    //       lang: 'de',
    //       ogType: 'website',
    //       ogSiteName: 'ogSITE_NAME',
    //       ogTitle: 'ogTITLE',
    //       ogDescription: 'ogDESCRIPTION',
    //       ogHost: undefined,
    //       ogImage: true
    //     },
    //     manifest: {
    //       name: 'Sample MANIFEST',
    //       short_name: 'Sample',
    //       lang: 'de'
    //     }
    //   }
    // ],
    [
      '@nuxtjs/sitemap', {
        path: 'sitemap.xml',
        hostname: getWebsiteHost(),
        cacheTime: 1000 * 60 * 15,
        gzip: false,
        exclude: [],
        defaults: {
          changefreq: 'daily',
          priority: 1,
          lastmod: new Date(),
          lastmodrealtime: true
        }
      }
    ],
    [
      '@nuxtjs/robots', {
        UserAgent: '*',
        Disallow: '',
        Sitemap: path.join(getWebsiteHost(), getBasePath(), 'sitemap.xml')
      }
    ]
  ],

  head: {
    title: '#UnfilteredTruth',
    htmlAttrs: {
      translate: 'no',
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A basic tool to protect a basic right: sharing video evidence with the world – unobstructed by copyright filters.'
      },
      {
        hid: 'google',
        name: 'google',
        content: 'notranslate'
      }
    ]
  }
};

function getBasePath () {
  return process.env.npm_config_base || process.env.BASE_PATH || '/';
}

function getWebsiteHost () {
  return process.env.npm_config_website_host || process.env.WEBSITE_HOST || 'http://localhost:8050';
}

function getHost () {
  return process.env.npm_config_host || process.env.HOST || 'localhost';
}

function getPort () {
  return process.env.npm_config_port || process.env.PORT || 8050;
}
