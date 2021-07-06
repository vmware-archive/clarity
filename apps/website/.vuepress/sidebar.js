/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const fs = require('fs');
const path = require('path');

// Expected order of tabs
const order = ['usage', 'code', 'api', 'accessibility'];

function camelCase(str) {
  const parts = str.split('-');
  return parts.map(part => part.replace(part.charAt(0), part.charAt(0).toUpperCase())).join(' ');
}

function sortChildren(children) {
  return children.sort((a, b) => {
    // Skip comparing children that are not equal
    if (typeof a !== 'string' || typeof b !== 'string') {
      return 0;
    }
    const aIndex = order.findIndex(o => a.indexOf(o) > -1);
    const bIndex = order.findIndex(o => b.indexOf(o) > -1);
    return aIndex - bIndex;
  });
}

function getChildren(dir) {
  const base = path.join(process.cwd(), dir);
  return (
    fs
      .readdirSync(base)
      // README files are already accounted for and assumed
      .filter(basename => basename !== 'README.md')
      .filter(basename => basename !== 'get-started.md')
      .filter(basename => basename !== 'update.md')
      // Remove any paths that aren't markdown or subdirectories
      .filter(basename => ['', '.md'].includes(path.extname(basename)))
      // Remove anything prefixed with _
      .filter(basename => !basename.startsWith('_'))
      // Remove/hide card component from sidebar navigation
      .map(basename => {
        if (fs.statSync(path.join(base, basename)).isDirectory()) {
          return {
            title: camelCase(basename),
            name: basename,
            path: `/${dir}/${basename}`,
            children: [`/${dir}/${basename}/`, ...sortChildren(getChildren(`${dir}/${basename}`))],
          };
        } else {
          return `/${dir}/${basename}`;
        }
      })
  );
}

module.exports = [
  {
    title: 'Get Started',
    path: '/get-started/',
    children: [
      {
        title: 'Introduction',
        path: '/get-started/',
      },
      ...getChildren('get-started'),
    ],
  },
  {
    title: 'Foundation',
    path: '/foundation/',
    children: getChildren('foundation'),
  },
  {
    title: 'Core Components',
    path: '/core-components/',
    children: [
      {
        title: 'Overview',
        path: '/core-components/',
        overview: false,
      },
      ...getChildren('core-components'),
    ],
  },
  {
    title: 'Angular Components',
    path: '/angular-components/',
    children: [
      {
        title: 'Overview',
        path: '/angular-components/',
        overview: false,
      },
      ...getChildren('angular-components'),
    ],
  },
  {
    title: 'Releases',
    path: '/releases/',
    children: [
      {
        title: 'Overview',
        path: '/releases/',
      },
      {
        title: 'v5 Changelog',
        path: '/releases/v5',
      },
      {
        title: 'v4 Changelog',
        path: '/releases/v4',
      },
      {
        title: 'Older Changelogs',
        path: 'https://v4.clarity.design/news',
        target: '_blank',
      },
    ],
  },
];
