/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
// Load zone.js for the server.
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { copySync } from 'fs-extra';
import { join } from 'path';
import * as converter from 'xml-js';
import { parse } from 'url';
import * as makeDir from 'make-dir';
import * as Promise from 'bluebird';
import * as del from 'del';
import * as minimist from 'minimist';
import { environment } from './src/environments/environment';

import { enableProdMode } from '@angular/core';
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express Engine
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { renderModuleFactory } from '@angular/platform-server';

const argv = minimist(process.argv.slice(2), {
  default: {
    deploy: false,
    directory: 'dist/website/deploy',
    base: '/',
  },
});

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
// tslint:disable-next-line
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../../dist/website/server/main');

// Path is relative to dist/ directory where it runs
const BROWSER_FOLDER = join(process.cwd(), 'dist/website/browser');
const OUTPUT_FOLDER = join(process.cwd(), argv.directory);

// Load the index.html file containing referances to your application bundle.
const index = readFileSync(join(process.cwd(), 'dist/website/browser', 'index.html'), 'utf8');
// Load the sitemap to know the list of urls to render
const sitemapFile = readFileSync(join(process.cwd(), 'src/website/src', 'sitemap.xml'), { encoding: 'utf8' });
const sitemap = <any>converter.xml2js(sitemapFile, { compact: true });

// Build an array of routes and paths, only render the current version docs
const urls = sitemap.urlset.url.map(item => {
  const url = parse(item.loc._text);
  const route = url.pathname;
  const fullPath = join(BROWSER_FOLDER, route);

  // Make sure the directory structure is there
  if (!existsSync(fullPath)) {
    makeDir.sync(fullPath);
  }
  // Return object with route and file paths
  return { route, fullPath };
});

const deploy = () => {
  // Delete the existing build
  const paths = [
    `${OUTPUT_FOLDER}/*`,
    `${OUTPUT_FOLDER}/documentation/${environment.version}`,
    `!${OUTPUT_FOLDER}/documentation/**`,
    `!${OUTPUT_FOLDER}/.git`,
  ];
  del.sync(paths, { force: true });
  console.log('Cleared old build!');

  // Apply 404 page
  notFound();
  console.log('Generated 404 file!');

  // Apply redirects
  redirects();
  console.log('Generated redirect files!');

  // Copy to output folder
  copySync(BROWSER_FOLDER, OUTPUT_FOLDER, { overwrite: true });
  console.log(`Output copied to ${OUTPUT_FOLDER}!`);
};

// Writes rendered HTML to index.html, replacing the file if it already exists.
const renderer = url => {
  console.log('Route: ' + url.route);
  return renderModuleFactory(AppServerModuleNgFactory, {
    document: index,
    url: url.route,
    extraProviders: [provideModuleMap(LAZY_MODULE_MAP)],
  }).then(
    html => {
      writeFileSync(join(url.fullPath, 'index.html'), html);
      return url;
    },
    error => {
      console.log('Unable to render ' + url, error);
    }
  );
};

const notFound = () => {
  // Copy index.html from not-found to 404.html
  copySync(join(BROWSER_FOLDER, 'not-found', 'index.html'), join(BROWSER_FOLDER, '404.html'));
  // Remove not-found from sitemap
  sitemap.urlset.url = sitemap.urlset.url.filter(item => {
    if (item.loc._text.indexOf('/not-found') >= 0) {
      return false;
    }
    return true;
  });
  writeFileSync(join(BROWSER_FOLDER, 'sitemap.xml'), converter.js2xml(sitemap, { compact: true, spaces: 4 }), {
    encoding: 'utf8',
  });
  // Delete the not-found directory
  del.sync([`${BROWSER_FOLDER}/not-found/**`]);
};

// Create redirects using html redirects :(
const redirects = () => {
  [
    {
      from: join(BROWSER_FOLDER, 'datagrid'),
      to: `${argv.base}/datagrid/structure`,
    },
    {
      from: join(BROWSER_FOLDER, 'vertical-nav'),
      to: `${argv.base}/vertical-nav/basic-structure`,
    },
    // Global redirects from old paths before versioned urls
    {
      from: join(BROWSER_FOLDER, 'get-started'),
      to: `${argv.base}/get-started`,
    },
    {
      from: join(BROWSER_FOLDER, 'app-layout'),
      to: `${argv.base}/app-layout`,
    },
    {
      from: join(BROWSER_FOLDER, 'color'),
      to: `${argv.base}/color`,
    },
    {
      from: join(BROWSER_FOLDER, 'themes'),
      to: `${argv.base}/themes`,
    },
    {
      from: join(BROWSER_FOLDER, 'navigation'),
      to: `${argv.base}/navigation`,
    },
    {
      from: join(BROWSER_FOLDER, 'typography'),
      to: `${argv.base}/typography`,
    },
    {
      from: join(BROWSER_FOLDER, 'alerts'),
      to: `${argv.base}/alerts`,
    },
    {
      from: join(BROWSER_FOLDER, 'badges'),
      to: `${argv.base}/badges`,
    },
    {
      from: join(BROWSER_FOLDER, 'buttons'),
      to: `${argv.base}/buttons`,
    },
    {
      from: join(BROWSER_FOLDER, 'button-group'),
      to: `${argv.base}/button-group`,
    },
    {
      from: join(BROWSER_FOLDER, 'cards'),
      to: `${argv.base}/cards`,
    },
    {
      from: join(BROWSER_FOLDER, 'checkboxes'),
      to: `${argv.base}/checkboxes`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid'),
      to: `${argv.base}/datagrid/structure`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/structure'),
      to: `${argv.base}/datagrid/structure`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/custom-rendering'),
      to: `${argv.base}/datagrid/custom-rendering`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/smart-iterator'),
      to: `${argv.base}/datagrid/smart-iterator`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/binding-properties'),
      to: `${argv.base}/datagrid/binding-properties`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/custom-sorting'),
      to: `${argv.base}/datagrid/custom-sorting`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/custom-filtering'),
      to: `${argv.base}/datagrid/custom-filtering`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/custom-filtering'),
      to: `${argv.base}/datagrid/custom-filtering`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/string-filtering'),
      to: `${argv.base}/datagrid/string-filtering`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/pagination'),
      to: `${argv.base}/datagrid/pagination`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/selection'),
      to: `${argv.base}/datagrid/selection`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/selection-single'),
      to: `${argv.base}/datagrid/selection-single`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/batch-action'),
      to: `${argv.base}/datagrid/batch-action`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/single-action'),
      to: `${argv.base}/datagrid/single-action`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/server-driven'),
      to: `${argv.base}/datagrid/server-driven`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/placeholder'),
      to: `${argv.base}/datagrid/placeholder`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/expandable-rows'),
      to: `${argv.base}/datagrid/expandable-rows`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/hide-show'),
      to: `${argv.base}/datagrid/hide-show`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/compact'),
      to: `${argv.base}/datagrid/compact`,
    },
    {
      from: join(BROWSER_FOLDER, 'datagrid/full'),
      to: `${argv.base}/datagrid/full`,
    },
    {
      from: join(BROWSER_FOLDER, 'dropdowns'),
      to: `${argv.base}/dropdowns`,
    },
    {
      from: join(BROWSER_FOLDER, 'forms'),
      to: `${argv.base}/forms`,
    },
    {
      from: join(BROWSER_FOLDER, 'grid'),
      to: `${argv.base}/grid`,
    },
    {
      from: join(BROWSER_FOLDER, 'header'),
      to: `${argv.base}/header`,
    },
    {
      from: join(BROWSER_FOLDER, 'input'),
      to: `${argv.base}/input`,
    },
    {
      from: join(BROWSER_FOLDER, 'labels'),
      to: `${argv.base}/labels`,
    },
    {
      from: join(BROWSER_FOLDER, 'lists'),
      to: `${argv.base}/lists`,
    },
    {
      from: join(BROWSER_FOLDER, 'login'),
      to: `${argv.base}/login`,
    },
    {
      from: join(BROWSER_FOLDER, 'modals'),
      to: `${argv.base}/modals`,
    },
    {
      from: join(BROWSER_FOLDER, 'password'),
      to: `${argv.base}/password`,
    },
    {
      from: join(BROWSER_FOLDER, 'progress'),
      to: `${argv.base}/progress`,
    },
    {
      from: join(BROWSER_FOLDER, 'radios'),
      to: `${argv.base}/radios`,
    },
    {
      from: join(BROWSER_FOLDER, 'select-boxes'),
      to: `${argv.base}/select-boxes`,
    },
    {
      from: join(BROWSER_FOLDER, 'sidenav'),
      to: `${argv.base}/sidenav`,
    },
    {
      from: join(BROWSER_FOLDER, 'signposts'),
      to: `${argv.base}/signposts`,
    },
    {
      from: join(BROWSER_FOLDER, 'spinners'),
      to: `${argv.base}/spinners`,
    },
    {
      from: join(BROWSER_FOLDER, 'stack-view'),
      to: `${argv.base}/stack-view`,
    },
    {
      from: join(BROWSER_FOLDER, 'tables'),
      to: `${argv.base}/tables`,
    },
    {
      from: join(BROWSER_FOLDER, 'tabs'),
      to: `${argv.base}/tabs`,
    },
    {
      from: join(BROWSER_FOLDER, 'textarea'),
      to: `${argv.base}/textarea`,
    },
    {
      from: join(BROWSER_FOLDER, 'toggle-switches'),
      to: `${argv.base}/toggle-switches`,
    },
    {
      from: join(BROWSER_FOLDER, 'tooltips'),
      to: `${argv.base}/tooltips`,
    },
    {
      from: join(BROWSER_FOLDER, 'tree-view'),
      to: `${argv.base}/tree-view`,
    },
    {
      from: join(BROWSER_FOLDER, 'vertical-nav'),
      to: `${argv.base}/vertical-nav/basic-structure`,
    },
    {
      from: join(BROWSER_FOLDER, 'vertical-nav/basic-structure/charmander'),
      to: `${argv.base}/vertical-nav/basic-structure/charmander`,
    },
    {
      from: join(BROWSER_FOLDER, 'vertical-nav/icon-links/normal'),
      to: `${argv.base}/vertical-nav/icon-links/normal`,
    },
    {
      from: join(BROWSER_FOLDER, 'vertical-nav/collapsible-nav/normal'),
      to: `${argv.base}/vertical-nav/collapsible-nav/normal`,
    },
    {
      from: join(BROWSER_FOLDER, 'vertical-nav/nav-groups/normal'),
      to: `${argv.base}/vertical-nav/nav-groups/normal`,
    },
    {
      from: join(BROWSER_FOLDER, 'vertical-nav/no-lazy-loading/normal'),
      to: `${argv.base}/vertical-nav/no-lazy-loading/normal`,
    },
    {
      from: join(BROWSER_FOLDER, 'wizards'),
      to: `${argv.base}/wizards`,
    },
  ].forEach(file => {
    const content = `<html><head><meta http-equiv="refresh" content="0; URL='${
      file.to
    }'" /></head><body></body></html>`;
    if (!existsSync(file.from)) {
      makeDir.sync(file.from);
    }
    writeFileSync(join(file.from, 'index.html'), content);
  });
};

// Run through each route individually and report on completion
Promise.map(urls, renderer, { concurrency: 1 }).then(
  () => {
    console.log('Pages rendered!');
    if (argv.deploy) {
      deploy();
    }
    console.log('Complete!');
  },
  error => {
    console.log('Error in promise', error);
    process.exit(1);
  }
);
