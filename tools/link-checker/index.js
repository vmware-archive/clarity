/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const { program } = require('commander');
const { SiteChecker } = require('broken-link-checker');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

program.option('-u --url <url>', 'website to parse', 'https://clarity.design');

program.parse(process.argv);

if (program.url) {
  (async () => {
    const broken = [['URL', 'Broken', 'HTML']];

    const base = path.resolve('../../reports/link-checker/');
    mkdirp.sync(base);
    const stream = fs.createWriteStream(path.resolve(base, 'report.csv'), { flags: 'w' });
    stream.write(`URL,Broken Link, HTML Tag
`);

    const siteChecker = new SiteChecker(
      {
        honorRobotExclusions: false,
        // excludedKeywords: ['/storybook/*']
      },
      {
        link: function (result, customData) {
          if (result.broken) {
            stream.write(`${result.base.resolved}, ${result.url.resolved}, ${result.html.tag}
`);
            // broken.push([result.base.resolved, result.url.resolved, result.html.tag]);
            console.log('broken', result.base.resolved, result.url.resolved);
          }
        },
        end: function () {
          console.log('Successfully completed');
        },
      }
    );
    siteChecker.enqueue(program.url);
  })();
} else {
  console.error('You must provide a url');
}
