import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
})
export class AlertPage {
  code = [
    {
      ng: {
        files: ['4.0.0/alerts/basic/alert.ng.html', '4.0.0/alerts/basic/alert.ng.ts'],
        component: '4.0.0/alerts/basic/alert.ng.ts',
        title: 'Angular basic alert',
      },
      core: {
        files: ['4.0.0/alerts/basic/alert.core.html', '4.0.0/alerts/basic/alert.core.ts'],
        component: '4.0.0/alerts/basic/alert.core.ts',
        title: 'Core basic alert',
      },
    },
    {
      ng: {
        files: ['4.0.0/alerts/group/alert.ng.html', '4.0.0/alerts/group/alert.ng.ts'],
        component: '4.0.0/alerts/group/alert.ng.ts',
        title: 'Angular grouped alert',
      },
      core: {
        files: ['4.0.0/alerts/group/alert.core.html', '4.0.0/alerts/group/alert.core.ts'],
        component: '4.0.0/alerts/group/alert.core.ts',
        title: 'Core grouped alert',
      },
    },
    {
      ng: {
        files: ['4.0.0/alerts/banner/alert.ng.html', '4.0.0/alerts/banner/alert.ng.ts'],
        component: '4.0.0/alerts/banner/alert.ng.ts',
        title: 'Angular banner alert',
      },
      core: {
        files: ['4.0.0/alerts/banner/alert.core.html', '4.0.0/alerts/banner/alert.core.ts'],
        component: '4.0.0/alerts/banner/alert.core.ts',
        title: 'Core banner alert',
      },
    },
  ];

  eslintSetup = `
"plugins": ["@clr/clarity-migration"],
"rules": {
  "@clr/clarity-migration/no-clr-alert": "warn",
},
"overrides": [
  {
    "files": ["*.html"],
    "parser": "@clr/eslint-plugin-clarity-migration/dist/src/html-parser"
  }
]
`;
}
