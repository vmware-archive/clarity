const markdownItAttrs = require('markdown-it-attrs');
const markdownItInclude = require('markdown-it-include');
const sidebar = require('./sidebar');
const blocks = require('./blocks');
const path = require('path');

module.exports = {
  title: 'Clarity Design System',
  description: 'Clarity Design System is the premiere design system for application development.',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#0065ab' }],
    ['meta', { name: 'charset', content: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width,minimum-scale=1,initial-scale=1' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }],
    ['meta', { name: 'background_color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/icons/icon-152x152.png' }],
  ],
  dest: '../../dist/website',
  themeConfig: {
    algolia: {
      apiKey: '88df2445b3dc4bf5e8bc4caafa9fbc50',
      indexName: 'next_clarity',
      inputSelector: '#algolia-search-input',
    },
    lastUpdated: false,
    sidebar,
  },
  markdown: {
    extendMarkdown: md => {
      md.use(markdownItAttrs);
      md.use(markdownItInclude);
    },
    anchor: {
      permalink: true,
      permalinkBefore: false,
      permalinkSymbol: '<cds-icon shape="link" aria-hidden="true"></cds-icon>',
      permalinkAttrs: (slug, state) => ({"aria-label": `permalink to ${slug}`})
    },
  },
  extraWatchFiles: ['.vuepress/sidebar.js', '.vuepress/blocks.js', '.vuepress/public/**'],
  plugins: [
    'vuepress-plugin-table-of-contents',
    '@vuepress/active-header-links',
    '@vuepress/last-updated',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    'vuepress-plugin-smooth-scroll',
    [
      'vuepress-plugin-sitemap',
      {
        hostname: 'https://next.clarity.design',
        outFile: 'sitemap.xml',
        changefreq: 'weekly',
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-86120402-1',
      },
    ],
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },
    ],
    [
      'robots',
      {
        allowAll: true,
        host: 'https://clarity.design',
        sitemap: '/sitemap.xml',
        policies: [
          {
            userAgent: '*',
          },
        ],
      },
    ],
    ...blocks,
  ],
  devServer: {
    proxy: {
      // Local dev server needs to proxy to CDN too
      '/images': {
        target: 'http://dt7zex2d2lk4u.cloudfront.net',
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        // Note: paths to dist/core/register.js are from website root, not .vuepress/register.js
        // Mono repo constraints mak us reference these assets that aren't installed directly in project node_modules
        '@clr/core': path.resolve('../../dist/core'),
        '@clr/core/alert': path.resolve('../../dist/core/alert'),
        '@clr/core/badge': path.resolve('../../dist/core/badge'),
        '@clr/core/button': path.resolve('../../dist/core/button'),
        '@clr/core/checkbox': path.resolve('../../dist/core/checkbox'),
        '@clr/core/datalist': path.resolve('../../dist/core/datalist'),
        '@clr/core/date': path.resolve('../../dist/core/date'),
        '@clr/core/file': path.resolve('../../dist/core/file'),
        '@clr/core/forms': path.resolve('../../dist/core/forms'),
        '@clr/core/icon': path.resolve('../../dist/core/icon'),
        '@clr/core/input': path.resolve('../../dist/core/input'),
        '@clr/core/modal': path.resolve('../../dist/core/modal'),
        '@clr/core/password': path.resolve('../../dist/core/password'),
        '@clr/core/radio': path.resolve('../../dist/core/radio'),
        '@clr/core/range': path.resolve('../../dist/core/range'),
        '@clr/core/search': path.resolve('../../dist/core/search'),
        '@clr/core/select': path.resolve('../../dist/core/select'),
        '@clr/core/tag': path.resolve('../../dist/core/tag'),
        '@clr/core/textarea': path.resolve('../../dist/core/textarea'),
        '@clr/core/time': path.resolve('../../dist/core/time'),
        '@clr/core/toggle': path.resolve('../../dist/core/toggle'),
        // @TODO Would like to be able to remove these
        'ramda': path.resolve('../../packages/core/node_modules/ramda'),
        'ramda/es/anyPass': path.resolve('../../packages/core/node_modules/ramda/es/anyPass.js'),
        'ramda/es/equals': path.resolve('../../packages/core/node_modules/ramda/es/equals.js'),
        'ramda/es/isNil': path.resolve('../../packages/core/node_modules/ramda/es/isNil.js'),
        'ramda/es/includes': path.resolve('../../packages/core/node_modules/ramda/es/includes.js'),
        'ramda/es/curryN': path.resolve('../../packages/core/node_modules/ramda/es/curryN.js'),
        'ramda/es/path': path.resolve('../../packages/core/node_modules/ramda/es/path.js'),
        'ramda/es/has': path.resolve('../../packages/core/node_modules/ramda/es/has.js'),
        'ramda/es/is': path.resolve('../../packages/core/node_modules/ramda/es/is.js'),
        'ramda/es/isEmpty': path.resolve('../../packages/core/node_modules/ramda/es/isEmpty.js'),
        'ramda/es/without': path.resolve('../../packages/core/node_modules/ramda/es/without.js'),
      },
    },
  },
};
