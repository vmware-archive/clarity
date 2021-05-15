import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
})
export class CheckboxPage {
  indeterminate = false;

  code = [
    {
      ng: {
        files: ['4.0.0/checkbox/basic/checkbox.ng.html', '4.0.0/checkbox/basic/checkbox.ng.ts'],
        component: '4.0.0/checkbox/basic/checkbox.ng.ts',
        title: 'Angular basic checkbox',
      },
      core: {
        files: ['4.0.0/checkbox/basic/checkbox.core.html', '4.0.0/checkbox/basic/checkbox.core.ts'],
        component: '4.0.0/checkbox/basic/checkbox.core.ts',
        title: 'Core basic checkbox',
      },
    },
    {
      ng: {
        files: ['4.0.0/checkbox/status/checkbox.ng.html', '4.0.0/checkbox/status/checkbox.ng.ts'],
        component: '4.0.0/checkbox/status/checkbox.ng.ts',
        title: 'Angular checkbox statuses',
      },
      core: {
        files: ['4.0.0/checkbox/status/checkbox.core.html', '4.0.0/checkbox/status/checkbox.core.ts'],
        component: '4.0.0/checkbox/status/checkbox.core.ts',
        title: 'Core checkbox statuses',
      },
    },
  ];

  eslintSetup = `
"plugins": ["@clr/clarity-migration"],
"rules": {
  "@clr/clarity-migration/no-clr-checkbox": "warn",
},
"overrides": [
  {
    "files": ["*.html"],
    "parser": "@clr/eslint-plugin-clarity-migration/dist/src/html-parser"
  }
]
`;
}
