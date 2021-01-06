import { Component } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icons.page.html',
})
export class IconsPage {
  code = [
    {
      ng: {
        files: ['4.0.0/icons/icons.ng.html', '4.0.0/icons/icons.ng.ts'],
        component: '4.0.0/icons/icons.ng.ts',
        title: 'Angular icon',
      },
      core: {
        files: ['4.0.0/icons/icons.core.html', '4.0.0/icons/icons.core.ts'],
        component: '4.0.0/icons/icons.core.ts',
        title: 'Core icon',
      },
    },
    {
      ng: {
        files: ['4.0.0/icons/direction/icons.ng.html', '4.0.0/icons/direction/icons.ng.ts'],
        component: '4.0.0/icons/direction/icons.ng.ts',
        title: 'Dir attribute',
      },
      core: {
        files: ['4.0.0/icons/direction/icons.core.html', '4.0.0/icons/direction/icons.core.ts'],
        component: '4.0.0/icons/direction/icons.core.ts',
        title: 'Direction attribute',
      },
    },
    {
      ng: {
        files: ['4.0.0/icons/status/icons.ng.html', '4.0.0/icons/status/icons.ng.ts'],
        component: '4.0.0/icons/status/icons.ng.ts',
        title: 'Status class',
      },
      core: {
        files: ['4.0.0/icons/status/icons.core.html', '4.0.0/icons/status/icons.core.ts'],
        component: '4.0.0/icons/status/icons.core.ts',
        title: 'Status attribute',
      },
    },
    {
      ng: {
        files: ['4.0.0/icons/badge/icons.ng.html', '4.0.0/icons/badge/icons.ng.ts'],
        component: '4.0.0/icons/badge/icons.ng.ts',
        title: 'Badge class',
      },
      core: {
        files: ['4.0.0/icons/badge/icons.core.html', '4.0.0/icons/badge/icons.core.ts'],
        component: '4.0.0/icons/badge/icons.core.ts',
        title: 'Badge attribute',
      },
    },
  ];

  eslintSetup = `
"plugins": ["@clr/clarity-migration"],
"rules": {
  "@clr/clarity-adoption/no-clr-icon": "warn",
},
"overrides": [
  {
    "files": ["*.html"],
    "parser": "@clr/eslint-plugin-clarity-adoption/html-parser"
  }
]
`;
}
