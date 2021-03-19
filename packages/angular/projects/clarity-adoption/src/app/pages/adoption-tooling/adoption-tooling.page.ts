import { Component } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons, plusIcon } from '@cds/core/icon';

ClarityIcons.addIcons(plusIcon);

@Component({
  templateUrl: './adoption-tooling.page.html',
})
export class AdoptionToolingPage {
  eslintInstallation = `
npm install --save-dev @clr/eslint-plugin-clarity-adoption @typescript-eslint/parser eslint
`;

  eslintConfiguration = `
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2015
  },
  "plugins": ["@clr/clarity-adoption"],
  "rules": {
    "@clr/clarity-adoption/no-clr-accordion": "warn",
    "@clr/clarity-adoption/no-clr-alert": "warn",
    "@clr/clarity-adoption/no-clr-badge": "warn",
    "@clr/clarity-adoption/no-clr-button": "warn",
    "@clr/clarity-adoption/no-clr-checkbox": "warn",
    "@clr/clarity-adoption/no-clr-datalist": "warn",
    "@clr/clarity-adoption/no-clr-form": "warn",
    "@clr/clarity-adoption/no-clr-icon": "warn",
    "@clr/clarity-adoption/no-clr-input": "warn",
    "@clr/clarity-adoption/no-clr-label": "warn",
    "@clr/clarity-adoption/no-clr-list": "warn",
    "@clr/clarity-adoption/no-clr-modal": "warn",
    "@clr/clarity-adoption/no-clr-password": "warn",
    "@clr/clarity-adoption/no-clr-radio": "warn",
    "@clr/clarity-adoption/no-clr-range": "warn",
    "@clr/clarity-adoption/no-clr-select": "warn",
    "@clr/clarity-adoption/no-clr-textarea": "warn",
    "@clr/clarity-adoption/no-clr-toggle": "warn"
  },
  "overrides": [
    {
      "files": ["*.html"],
      "parser": "@clr/eslint-plugin-clarity-adoption/html-parser"
    }
  ]
}
`;

  eslintCommand = `npx eslint --ext=ts,html src/`;
  eslintFixCommand = `npx eslint --ext=ts,html --fix src/`;
}
