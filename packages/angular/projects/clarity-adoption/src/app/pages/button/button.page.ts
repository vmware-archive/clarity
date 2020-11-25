import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
})
export class ButtonPage {
  angularExamples = ['4.0.0/buttons/buttons.ng.html', '4.0.0/buttons/buttons.ng.ts'];
  coreExamples = ['4.0.0/buttons/buttons.core.html', '4.0.0/buttons/buttons.core.ts'];

  code = [
    {
      ng: {
        files: ['4.0.0/buttons/basic/buttons.ng.html', '4.0.0/buttons/basic/buttons.ng.ts'],
        component: '4.0.0/buttons/basic/buttons.ng.ts',
        title: 'Angular basic button',
      },
      core: {
        files: ['4.0.0/buttons/basic/buttons.core.html', '4.0.0/buttons/basic/buttons.core.ts'],
        component: '4.0.0/buttons/basic/buttons.core.ts',
        title: 'Core basic button',
      },
    },
    {
      ng: {
        files: ['4.0.0/buttons/icons/buttons.ng.html', '4.0.0/buttons/icons/buttons.ng.ts'],
        component: '4.0.0/buttons/icons/buttons.ng.ts',
        title: 'Angular basic icons',
      },
      core: {
        files: ['4.0.0/buttons/icons/buttons.core.html', '4.0.0/buttons/icons/buttons.core.ts'],
        component: '4.0.0/buttons/icons/buttons.core.ts',
        title: 'Core basic icons',
      },
    },
  ];

  eslintSetup = `
"plugins": ["@clr/clarity-migration"],
"rules": {
  "@clr/clarity-migration/no-clr-button": "warn",
},
"overrides": [
  {
    "files": ["*.html"],
    "parser": "@clr/eslint-plugin-clarity-migration/dist/src/html-parser"
  }
]
  `;
}
