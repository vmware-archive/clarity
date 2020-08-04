/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

'use strict';

const workboxBuild = require('workbox-build');

workboxBuild
  .generateSW({
    swDest: './dist/website/sw.js',
    globDirectory: './dist/website/',
    globPatterns: ['**/*.{js,css,html}'],
  })
  .then(() => {
    console.log(`Generated new service worker.`);
  })
  .catch(err => {
    console.error(`Unable to generate a new service worker.`, err);
  });
