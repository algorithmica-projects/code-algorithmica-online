const code_themes = {
  light: require('prism-react-renderer/themes/github'),
  dark: require('prism-react-renderer/themes/vsDark'),
};

const math = require('remark-math');
const katex = require('rehype-katex');

const meta = {

};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {

};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve('./sidebars-default.js'),
  ...options
}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const plugins = [
  [
    'docusaurus2-dotenv',
    {
      systemvars: true
    },
  ],
  tailwindPlugin,
  ...docs_plugins,
  webpackPlugin,
  [
    '@docusaurus/plugin-client-redirects',
    {},  
  ],

];

const fs = require('fs');
const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Algorthamica',
  tagline: 'Online learning platform',
  url: 'https://www.google.com',
  baseUrl: '/',
  favicon: 'https://algorithmicaonline.com/images/logo.png',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  
  plugins,


  trailingSlash: false,
  themes: ['@docusaurus/theme-live-codeblock'],
  clientModules: [require.resolve('./src/client/define-ui-kit.js')],
  scripts: [{ src: 'https://cdn.statuspage.io/se-v2.js' }],

  themeConfig:{
    colorMode: {
      defaultMode: 'light',
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
    navbar: {
      logo: {
        href: '/',
        src: 'https://algorithmicaonline.com/images/logo.png',
        srcDark: 'https://algorithmicaonline.com/images/logo.png',
        alt: 'Algorithmica',
        height: '60px',
        width: '80px',
      },
      items: [
        {
          label: 'Support',
          to: 'docs/support',
          position: 'right',
          className: 'navbar-book-demo'
        }
      ],
    },
    footer: {
      logo: {
        href: '/',
        src: 'https://algorithmicaonline.com/images/logo.png',
        srcDark: 'https://algorithmicaonline.com/images/logo.png',
        alt: 'Algorithamica',
        height: '36px',
      },
      copyright: 'Copyright © Algorithamica since 2023. All rights reserved.',
    },
    prism: {
      theme: code_themes.light,
      darkTheme: code_themes.dark,
      additionalLanguages: [
        'dart',
        'ruby',
        'groovy',
        'kotlin',
        'java',
        'swift',
        'objectivec',
      ],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'highlight-next-line-error',
        },
      ],
    },
    algolia: {
      appId: 'HL0HSV62RK',
      apiKey: '72ebf02146698733b7114c7b36da0945',
      indexName: 'docs',
      contextualSearch: true,
      searchParameters: {},
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      
        {
        docs: {
          sidebarPath: require.resolve('./sidebars-default.js'),
          
          routeBasePath: '/docs/',
          
          remarkPlugins: [math],
          rehypePlugins: [katex],
          breadcrumbs: true,
          showLastUpdateTime: false,
          sidebarCollapsible: true,
          // remarkPlugins: [
          //   [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          // ],
          
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
        sitemap: {
          ignorePatterns: ['/tags/**'],
        },
        googleTagManager: {
          containerId: 'GTM-5FDFFSS',
        },
      }
      ,
    ],
  ],

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};

module.exports = config;
