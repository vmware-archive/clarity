/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
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
      {
        title: 'Start Designing',
        path: '/get-started/design',
      },
      {
        title: 'Start Developing',
        path: '/get-started/develop',
      },
      {
        title: 'Next Steps',
        path: '/get-started/next',
      },
    ],
  },
  {
    title: 'Foundation',
    path: '/foundation/',
    children: getChildren('foundation'),
  },
  {
    title: 'Web Components',
    path: '/web-components/',
    children: [
      {
        title: 'Overview',
        path: '/web-components/',
      },
      {
        title: 'Get Started',
        path: '/web-components/get-started',
      },
      {
        title: 'Updating',
        path: '/web-components/update',
      },
      ...getChildren('web-components'),
    ],
  },
  {
    title: 'Angular Components',
    path: '/angular-components/',
    children: [
      {
        title: 'Overview',
        path: '/angular-components/',
      },
      {
        title: 'Get Started',
        path: '/angular-components/get-started',
      },
      {
        title: 'Updating',
        path: '/angular-components/update',
      },
      ...getChildren('angular-components'),
    ],
  },
  {
    title: 'Releases',
    path: '/releases/',
    children: [
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
        // external: true,
        path: 'https://clarity.design/news',
        target: '_blank',
      },
    ],
  },
];
