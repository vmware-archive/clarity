import { Injectable } from '@angular/core';

export type ClarityESLintRule = { name: string; errorLevel: string; fixer: boolean };

@Injectable({
  providedIn: 'root',
})
export class EslintRulesService {
  private rules: Record<string, ClarityESLintRule> = {
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

  getRule(ruleName: string): ClarityESLintRule | undefined {
    return this.rules[ruleName];
  }

  getRules(): Record<string, ClarityESLintRule> {
    return this.rules;
  }
}
