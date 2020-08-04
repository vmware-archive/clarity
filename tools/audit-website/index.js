/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const { program } = require('commander');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const parser = require('fast-xml-parser');
const got = require('got');
const mkdirp = require('mkdirp');
const path = require('path');

const url = 'https://clarity.design';

program.option('-u --url <url>', 'url to parse', url);

program.parse(process.argv);

function urlToFilename(text) {
  return text.replace('/', '-');
}

if (program.url) {
  (async () => {
    const base = path.resolve('../../reports/audit-website');

    try {
      fs.rmdir(base, { recursive: true }, err => {
        if (err) {
          throw err;
        }
        console.log('Cleaned old reports');
      });
    } catch (e) {}
    const sitemap = await got(`${program.url}/sitemap.xml`);
    const sitemapBody = parser.parse(sitemap.body);

    mkdirp.sync(base);
    const stream = fs.createWriteStream(path.resolve(base, 'report.csv'), { flags: 'w' });
    stream.write(`URL, Performance, Accessibility, Best Practices, SEO, PWA
`);
    const urls = sitemapBody.urlset.url.map(urlset => urlset.loc.replace(url, program.url));

    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    const options = { logLevel: 'error', output: 'html', port: chrome.port };

    for (let i = 0; i < urls.length; i++) {
      console.log('URL: ' + urls[i]);
      const report = await lighthouse(urls[i], options);
      console.table(
        Object.entries(report.lhr.categories).map(category => {
          return {
            URL: urls[i],
            Title: category[1].title,
            Score: category[1].score,
          };
        })
      );
      stream.write(`${urls[i]}, ${report.lhr.categories.performance.score}, ${report.lhr.categories.accessibility.score}, ${report.lhr.categories['best-practices'].score}, ${report.lhr.categories.seo.score}, ${report.lhr.categories.pwa.score}
`);
      fs.writeFileSync(path.resolve(base, `report-${urls[i].replace(/\//g, '-')}.html`), report.report);
    }

    await chrome.kill();
  })();
}
