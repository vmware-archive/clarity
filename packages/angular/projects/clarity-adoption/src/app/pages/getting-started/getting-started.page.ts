import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './getting-started.page.html',
})
export class GettingStartedPage {
  installEslit = `
# Using NPM
$ npm install @clr/clarity-adoption

# Using Yarn
$ yarn add @clr/clarity-adoption
  `;
  exampleEslint = `
"plugins": ["@clr/clarity-adoption"],
"rules": {
  "@clr/clarity-adoption/no-clr-alert": "warn",
  "@clr/clarity-adoption/no-clr-icon": "warn",
  "@clr/clarity-adoption/no-clr-button": "warn",
},
"overrides": [
  {
    "files": ["*.html"],
    "parser": "@clr/eslint-plugin-clarity-adoption/dist/src/html-parser"
  }
]
  `;
}
