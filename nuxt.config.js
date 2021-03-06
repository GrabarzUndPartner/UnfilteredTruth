const path = require('path');
const fs = require('fs');
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  dev: isDevelopment,
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

      // eslint-disable-next-line security/detect-non-literal-fs-filename
      if (fs.existsSync(key) && fs.existsSync(crt)) {
      // eslint-disable-next-line security/detect-non-literal-fs-filename
        return { key: fs.readFileSync(key), cert: fs.readFileSync(crt) };
      } else {
        return null;
      }
    })()
  },

  modern: isDevelopment ? false : 'client',

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
    transpile: [],

    extend (config) {
      config.module.rules.push({
        test: /\.html$/,
        oneOf: [
          {
            use: [
              {
                loader: 'raw-loader',
                options: {}
              }
            ]
          }
        ]
      });
    }

  },

  generate: {
    dir: 'dist'
  },

  render: {
    crossorigin: 'anonymous',
    resourceHints: true
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
              { src: '@/assets/fonts/roboto-v20-latin/roboto-v20-latin-regular.woff?test2222=233', type: 'woff' },
              { src: '@/assets/fonts/roboto-v20-latin/roboto-v20-latin-regular.woff2?test2222=233', type: 'woff2' }
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
    '@/modules/svg',
    '@/modules/analyzer',
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

    link: [
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: `${getBasePath()}favicon.ico`
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'google',
        name: 'google',
        content: 'notranslate'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'A tool for sharing video evidence with the world – unobstructed by copyright filters.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:sitename',
        content: '#UnfilteredTruth'
      },
      {
        property: 'og:title',
        content: '#UnfilteredTruth'
      },
      {
        property: 'og:description',
        content:
          'A tool for sharing video evidence with the world – unobstructed by copyright filters.'
      },
      {
        property: 'og:image',
        content: `${getWebsiteHost()}/sharing.jpg`
      },
      {
        property: 'og:image:width',
        content: 1200
      },
      {
        property: 'og:image:height',
        content: 630
      },
      {
        property: 'og:url',
        content: getWebsiteHost()
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
