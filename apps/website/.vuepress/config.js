const sidebar = require('./sidebar');
const blocks = require('./blocks');

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
    sidebar
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-attrs'));
      md.use(require('markdown-it-include'));
      md.use(require('markdown-it-footnote'));

      md.renderer.rules.footnote_block_open = () => (`<section class="footnotes"><ol class="footnotes-list">`);
    },
    anchor: {
      permalink: true,
      permalinkBefore: false,
      permalinkSymbol: '<cds-icon shape="link" aria-hidden="false"></cds-icon>',
      permalinkAttrs: (slug) => ({"aria-label": `permalink to ${slug}`})
    }
  },
  extraWatchFiles: ['.vuepress/sidebar.js', '.vuepress/blocks.js', '.vuepress/code/**'],
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
  }
};
