import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
})
export class AccordionPage {
  code = [
    {
      ng: {
        files: ['4.0.0/accordion/basic/accordion.ng.html', '4.0.0/accordions/basic/accordion.ng.ts'],
        component: '4.0.0/accordion/basic/accordion.ng.ts',
        title: 'Angular basic accordion',
      },
      core: {
        files: ['4.0.0/accordion/basic/accordion.core.html', '4.0.0/accordion/basic/accordion.core.ts'],
        component: '4.0.0/accordion/basic/accordion.core.ts',
        title: 'Core basic accordion',
      },
    },
  ];

  eslintSetup = `
"plugins": ["@clr/clarity-migration"],
"rules": {
  "@clr/clarity-migration/no-clr-accordion": "warn",
},
"overrides": [
  {
    "files": ["*.html"],
    "parser": "@clr/eslint-plugin-clarity-migration/dist/src/html-parser"
  }
]
`;
}
