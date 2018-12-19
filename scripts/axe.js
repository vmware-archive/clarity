#!/usr/bin/env node

/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const shell = require('shelljs');

const base = 'http://localhost:4200/';

const pages = [
  'alerts',
  'badges',
  'buttons',
  'cards',
  'checkboxes',
  'colors',
  'datagrid',
  'drag-and-drop',
  'datepicker',
  'dropdown',
  'forms',
  'iconography',
  'inputs',
  'labels',
  'lists',
  'login',
  'modals',
  'passwords',
  'progress-bars',
  'radios',
  'selects',
  'signposts',
  'spinners',
  'stackviews',
  'tables',
  'tabs',
  'textareas',
  'tooltips',
  'toggles',
  'treeviews',
  'topgraphy',
  'vertical-nav',
  'wizards',
].map(path => `${base}${path}`);

const server = shell.exec('node_modules/.bin/ng serve ks-app', { async: true });

setTimeout(() => {
  const status = shell.exec(`node_modules/.bin/axe ${pages.join(' ')} --exit`);
  if (status !== 0) {
    server.kill();
    shell.exit(1);
    process.exit(1);
  }

  server.kill();
}, 20000);
