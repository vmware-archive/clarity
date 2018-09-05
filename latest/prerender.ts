// Load zone.js for the server.
import "zone.js/dist/zone-node";
import "reflect-metadata";
import { readFileSync, statSync, readdirSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { copySync } from "fs-extra";
import { join } from "path";
import * as converter from "xml-js";
import { parse } from "url";
import * as makeDir from "make-dir";
import * as Promise from "bluebird";
import * as ora from 'ora';
import * as del from "del";
import * as replaceInFile from "replace-in-file";
import * as minimist from "minimist";
import {environment} from "./src/environments/environment";

import { enableProdMode } from "@angular/core";
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express Engine
import { ngExpressEngine } from "@nguniversal/express-engine";
// Import module map for lazy loading
import { provideModuleMap } from "@nguniversal/module-map-ngfactory-loader";
import { renderModuleFactory } from "@angular/platform-server";

const argv = minimist(process.argv.slice(2), {
  default: {
    deploy: false,
    directory: '../../clarity',
    base: '/clarity/'
  }
});

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} = require("./dist/server/main");

// Path is relative to dist/ directory where it runs
const BROWSER_FOLDER = join(process.cwd(), "browser");
const OUTPUT_FOLDER = join(process.cwd(), argv.directory);
const SRC_FOLDER = join(process.cwd(), '../', 'src');

// Load the index.html file containing referances to your application bundle.
const index = readFileSync(join("browser", "index.html"), "utf8");
// Load the sitemap to know the list of urls to render
const sitemapFile = readFileSync(join(process.cwd(), "browser", "sitemap.xml"), {encoding: 'utf8'});
const sitemap = converter.xml2js(sitemapFile, {compact: true});

// Build an array of routes and paths, only render the current version docs
const urls = sitemap.urlset.url
  .filter(item => {
    // Filter out the docs from other versions
    if (item.loc._text.indexOf('/documentation/') > -1 && item.loc._text.indexOf('/documentation/' + environment.version) === -1) {
      return false;
    }
    return true;
  })
  .map(item => {
    const url = parse(item.loc._text);
    const route = url.pathname.replace("clarity/", "");
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
    `!${OUTPUT_FOLDER}/.git`
  ];
  const removed = del.sync(paths, {force: true});
  console.log("Cleared old build!");

  // Update the index.html base href
  replaceInFile.sync({
    files: [BROWSER_FOLDER + "/**"],
    from: /<base href="\/">/gm,
    to: `<base href="${argv.base}">`
  });
  console.log('Updated base href');

  // Apply 404 page
  notFound();
  console.log('Generated 404 file!');

  // Apply redirects
  redirects();
  console.log('Generated redirect files!');

  // Copy to output folder
  copySync(BROWSER_FOLDER, OUTPUT_FOLDER, {overwrite: true});
  console.log(`Output copied to ${OUTPUT_FOLDER}!`);
}

// Writes rendered HTML to index.html, replacing the file if it already exists.
const renderer = url => {
  const spinner = ora('Route: ' + url.route).start();
  return renderModuleFactory(AppServerModuleNgFactory, {
    document: index,
    url: url.route,
    extraProviders: [provideModuleMap(LAZY_MODULE_MAP)]
  }).then(html => {
    writeFileSync(join(url.fullPath, "index.html"), html);
    spinner.succeed();
    return url;
  }, error => {
    spinner.fail('Unable to render ' + url);
    console.log(error);
  });
};

const notFound = () => {
  // Copy index.html from not-found to 404.html
  copySync(join(BROWSER_FOLDER, 'not-found', 'index.html'), join(BROWSER_FOLDER, '404.html'));
  // Remove not-found from sitemap
  const sitemapFile = readFileSync(join(BROWSER_FOLDER, "sitemap.xml"), {encoding: 'utf8'});
  const sitemap = converter.xml2js(sitemapFile, {compact: true});
  sitemap.urlset.url = sitemap.urlset.url.filter(item => {
    if (item.loc._text.indexOf('/not-found') >= 0) {
      return false;
    }
    return true;
  });
  writeFileSync(join(BROWSER_FOLDER, "sitemap.xml"), converter.js2xml(sitemap, {compact: true, spaces: 4}), {encoding: 'utf8'});
  // Delete the not-found directory
  del.sync([`${BROWSER_FOLDER}/not-found/**`]);
};

// Create redirects using html redirects :(
const redirects = () => {
  [
    {from: join(BROWSER_FOLDER, 'documentation', environment.version, 'datagrid'), to: `${argv.base}/documentation/${environment.version}/datagrid/structure`},
    {from: join(BROWSER_FOLDER, 'documentation', environment.version, 'vertical-nav'), to: `${argv.base}/documentation/${environment.version}/vertical-nav/basic-structure`},
    // Global redirects from old paths before versioned urls
    {from: join(BROWSER_FOLDER, 'documentation', 'get-started'), to: `${argv.base}/documentation/${environment.version}/get-started`},
    {from: join(BROWSER_FOLDER, 'documentation', 'app-layout'), to: `${argv.base}/documentation/${environment.version}/app-layout`},
    {from: join(BROWSER_FOLDER, 'documentation', 'color'), to: `${argv.base}/documentation/${environment.version}/color`},
    {from: join(BROWSER_FOLDER, 'documentation', 'themes'), to: `${argv.base}/documentation/${environment.version}/themes`},
    {from: join(BROWSER_FOLDER, 'documentation', 'navigation'), to: `${argv.base}/documentation/${environment.version}/navigation`},
    {from: join(BROWSER_FOLDER, 'documentation', 'typography'), to: `${argv.base}/documentation/${environment.version}/typography`},
    {from: join(BROWSER_FOLDER, 'documentation', 'alerts'), to: `${argv.base}/documentation/${environment.version}/alerts`},
    {from: join(BROWSER_FOLDER, 'documentation', 'badges'), to: `${argv.base}/documentation/${environment.version}/badges`},
    {from: join(BROWSER_FOLDER, 'documentation', 'buttons'), to: `${argv.base}/documentation/${environment.version}/buttons`},
    {from: join(BROWSER_FOLDER, 'documentation', 'button-group'), to: `${argv.base}/documentation/${environment.version}/button-group`},
    {from: join(BROWSER_FOLDER, 'documentation', 'cards'), to: `${argv.base}/documentation/${environment.version}/cards`},
    {from: join(BROWSER_FOLDER, 'documentation', 'checkboxes'), to: `${argv.base}/documentation/${environment.version}/checkboxes`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid'), to: `${argv.base}/documentation/${environment.version}/datagrid/structure`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/structure'), to: `${argv.base}/documentation/${environment.version}/datagrid/structure`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/custom-rendering'), to: `${argv.base}/documentation/${environment.version}/datagrid/custom-rendering`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/smart-iterator'), to: `${argv.base}/documentation/${environment.version}/datagrid/smart-iterator`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/binding-properties'), to: `${argv.base}/documentation/${environment.version}/datagrid/binding-properties`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/custom-sorting'), to: `${argv.base}/documentation/${environment.version}/datagrid/custom-sorting`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/custom-filtering'), to: `${argv.base}/documentation/${environment.version}/datagrid/custom-filtering`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/custom-filtering'), to: `${argv.base}/documentation/${environment.version}/datagrid/custom-filtering`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/string-filtering'), to: `${argv.base}/documentation/${environment.version}/datagrid/string-filtering`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/pagination'), to: `${argv.base}/documentation/${environment.version}/datagrid/pagination`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/selection'), to: `${argv.base}/documentation/${environment.version}/datagrid/selection`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/selection-single'), to: `${argv.base}/documentation/${environment.version}/datagrid/selection-single`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/batch-action'), to: `${argv.base}/documentation/${environment.version}/datagrid/batch-action`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/single-action'), to: `${argv.base}/documentation/${environment.version}/datagrid/single-action`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/server-driven'), to: `${argv.base}/documentation/${environment.version}/datagrid/server-driven`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/placeholder'), to: `${argv.base}/documentation/${environment.version}/datagrid/placeholder`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/expandable-rows'), to: `${argv.base}/documentation/${environment.version}/datagrid/expandable-rows`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/hide-show'), to: `${argv.base}/documentation/${environment.version}/datagrid/hide-show`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/compact'), to: `${argv.base}/documentation/${environment.version}/datagrid/compact`},
    {from: join(BROWSER_FOLDER, 'documentation', 'datagrid/full'), to: `${argv.base}/documentation/${environment.version}/datagrid/full`},
    {from: join(BROWSER_FOLDER, 'documentation', 'dropdowns'), to: `${argv.base}/documentation/${environment.version}/dropdowns`},
    {from: join(BROWSER_FOLDER, 'documentation', 'forms'), to: `${argv.base}/documentation/${environment.version}/forms`},
    {from: join(BROWSER_FOLDER, 'documentation', 'grid'), to: `${argv.base}/documentation/${environment.version}/grid`},
    {from: join(BROWSER_FOLDER, 'documentation', 'header'), to: `${argv.base}/documentation/${environment.version}/header`},
    {from: join(BROWSER_FOLDER, 'documentation', 'input'), to: `${argv.base}/documentation/${environment.version}/input`},
    {from: join(BROWSER_FOLDER, 'documentation', 'labels'), to: `${argv.base}/documentation/${environment.version}/labels`},
    {from: join(BROWSER_FOLDER, 'documentation', 'lists'), to: `${argv.base}/documentation/${environment.version}/lists`},
    {from: join(BROWSER_FOLDER, 'documentation', 'login'), to: `${argv.base}/documentation/${environment.version}/login`},
    {from: join(BROWSER_FOLDER, 'documentation', 'modals'), to: `${argv.base}/documentation/${environment.version}/modals`},
    {from: join(BROWSER_FOLDER, 'documentation', 'password'), to: `${argv.base}/documentation/${environment.version}/password`},
    {from: join(BROWSER_FOLDER, 'documentation', 'progress'), to: `${argv.base}/documentation/${environment.version}/progress`},
    {from: join(BROWSER_FOLDER, 'documentation', 'radios'), to: `${argv.base}/documentation/${environment.version}/radios`},
    {from: join(BROWSER_FOLDER, 'documentation', 'select-boxes'), to: `${argv.base}/documentation/${environment.version}/select-boxes`},
    {from: join(BROWSER_FOLDER, 'documentation', 'sidenav'), to: `${argv.base}/documentation/${environment.version}/sidenav`},
    {from: join(BROWSER_FOLDER, 'documentation', 'signposts'), to: `${argv.base}/documentation/${environment.version}/signposts`},
    {from: join(BROWSER_FOLDER, 'documentation', 'spinners'), to: `${argv.base}/documentation/${environment.version}/spinners`},
    {from: join(BROWSER_FOLDER, 'documentation', 'stack-view'), to: `${argv.base}/documentation/${environment.version}/stack-view`},
    {from: join(BROWSER_FOLDER, 'documentation', 'tables'), to: `${argv.base}/documentation/${environment.version}/tables`},
    {from: join(BROWSER_FOLDER, 'documentation', 'tabs'), to: `${argv.base}/documentation/${environment.version}/tabs`},
    {from: join(BROWSER_FOLDER, 'documentation', 'textarea'), to: `${argv.base}/documentation/${environment.version}/textarea`},
    {from: join(BROWSER_FOLDER, 'documentation', 'toggle-switches'), to: `${argv.base}/documentation/${environment.version}/toggle-switches`},
    {from: join(BROWSER_FOLDER, 'documentation', 'tooltips'), to: `${argv.base}/documentation/${environment.version}/tooltips`},
    {from: join(BROWSER_FOLDER, 'documentation', 'tree-view'), to: `${argv.base}/documentation/${environment.version}/tree-view`},
    {from: join(BROWSER_FOLDER, 'documentation', 'vertical-nav'), to: `${argv.base}/documentation/${environment.version}/vertical-nav/basic-structure`},
    {from: join(BROWSER_FOLDER, 'documentation', 'vertical-nav/basic-structure/charmander'), to: `${argv.base}/documentation/${environment.version}/vertical-nav/basic-structure/charmander`},
    {from: join(BROWSER_FOLDER, 'documentation', 'vertical-nav/icon-links/normal'), to: `${argv.base}/documentation/${environment.version}/vertical-nav/icon-links/normal`},
    {from: join(BROWSER_FOLDER, 'documentation', 'vertical-nav/collapsible-nav/normal'), to: `${argv.base}/documentation/${environment.version}/vertical-nav/collapsible-nav/normal`},
    {from: join(BROWSER_FOLDER, 'documentation', 'vertical-nav/nav-groups/normal'), to: `${argv.base}/documentation/${environment.version}/vertical-nav/nav-groups/normal`},
    {from: join(BROWSER_FOLDER, 'documentation', 'vertical-nav/no-lazy-loading/normal'), to: `${argv.base}/documentation/${environment.version}/vertical-nav/no-lazy-loading/normal`},
    {from: join(BROWSER_FOLDER, 'documentation', 'wizards'), to: `${argv.base}/documentation/${environment.version}/wizards`},
  ].forEach(file => {
    const content = `<html><head><meta http-equiv="refresh" content="0; URL='${file.to}'" /></head><body></body></html>`;
    if (!existsSync(file.from)) {
      makeDir.sync(file.from);
    }
    writeFileSync(join(file.from, 'index.html'), content);
  });
};

// Run through each route individually and report on completion
Promise.map(urls, renderer, { concurrency: 1 }).then(result => {
  console.log("Pages rendered!");
  if (argv.deploy) {
    deploy();
  }
  console.log("Complete!");
}, error => {
  console.log("Error in promise", error);
});
