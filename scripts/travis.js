#!/usr/bin/env node

/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const shell = require('shelljs');

const AngularPackages = [
  'https://github.com/angular/animations-builds',
  'https://github.com/angular/common-builds',
  'https://github.com/angular/compiler-builds',
  'https://github.com/angular/cli-builds',
  'https://github.com/angular/compiler-cli-builds',
  'https://github.com/angular/core-builds',
  'https://github.com/angular/forms-builds',
  'https://github.com/angular/platform-browser-builds',
  'https://github.com/angular/platform-browser-dynamic-builds',
  'https://github.com/angular/router-builds',
  'https://github.com/angular/language-service-builds',
  'https://github.com/angular/angular-devkit-build-angular-builds',
  'https://github.com/angular/angular-devkit-build-ng-packagr-builds',
  'https://github.com/angular/angular-devkit-build-optimizer-builds',
  'https://github.com/angular/angular-devkit-core-builds',
];

// If we are running the cron job, assume it is for daily testing of latest builds on master
if (
  process.env.TRAVIS_EVENT_TYPE &&
  process.env.TRAVIS_EVENT_TYPE === 'cron' &&
  process.env.TRAVIS_BRANCH === 'master'
) {
  shell.exec(`npm install ${AngularPackages.join(' ')} --no-save`);
  if (shell.exec('npm run $TEST_SUITE').code !== 0) {
    shell.exit(1);
  }
} else {
  if (shell.exec('npm run $TEST_SUITE').code !== 0) {
    shell.exit(1);
  }
}
