/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons, checkCircleIcon } from '@cds/core/icon';

ClarityIcons.addIcons(checkCircleIcon);
/**
 * Describe eslint rules here! (Write once use everywhere)
 */
const eslintRules: Record<string, { name: string; errorLevel: string; fixer: boolean }> = {
  'no-clr-accordion': { name: 'Accordion', errorLevel: 'warn', fixer: false },
  'no-clr-alert': { name: 'Alert', errorLevel: 'warn', fixer: false },
  'no-clr-badge': { name: 'Badge', errorLevel: 'warn', fixer: true },
  'no-clr-button': { name: 'Button', errorLevel: 'warn', fixer: false },
  'no-clr-card': { name: 'Card', errorLevel: 'warn', fixer: false },
  'no-clr-checkbox': { name: 'Checkbox', errorLevel: 'warn', fixer: false },
  'no-clr-datalist': { name: 'Datalist', errorLevel: 'warn', fixer: false },
  'no-clr-form': { name: 'Form', errorLevel: 'warn', fixer: false },
  'no-clr-icon': { name: 'Icon', errorLevel: 'warn', fixer: true },
  'no-clr-input': { name: 'Input', errorLevel: 'warn', fixer: false },
  'no-clr-label': { name: 'Label', errorLevel: 'warn', fixer: true },
  'no-clr-list': { name: 'List', errorLevel: 'warn', fixer: true },
  'no-clr-modal': { name: 'Modal', errorLevel: 'warn', fixer: false },
  'no-clr-password': { name: 'Password', errorLevel: 'warn', fixer: false },
  'no-clr-radio': { name: 'Radio', errorLevel: 'warn', fixer: false },
  'no-clr-range': { name: 'Range', errorLevel: 'warn', fixer: false },
  'no-clr-select': { name: 'Select', errorLevel: 'warn', fixer: false },
  'no-clr-textarea': { name: 'Textarea', errorLevel: 'warn', fixer: false },
  'no-clr-toggle': { name: 'Toggle', errorLevel: 'warn', fixer: false },
};

@Component({
  templateUrl: './adoption-tooling.page.html',
})
export class AdoptionToolingPage {
  eslintRules = eslintRules;

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
${Object.keys(eslintRules)
  .map((rule: string) => {
    return `    "@clr/clarity-adoption/${rule}": "${(eslintRules[rule] || {}).errorLevel}"`;
  })
  .join(',\n')}
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
