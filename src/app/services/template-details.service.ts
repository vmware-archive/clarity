import { Injectable } from '@angular/core';

export type TemplateDetails = {
  key?: string | undefined;
  name?: string,
  description: string;
  template: 'angular' | 'core';
  files: Record<string, string>;
};

const DATA_LIST: Record<string, TemplateDetails> = {
  // Accordion
  'angular-accordion': {
    name: 'Angular',
    description: 'With expanded, disabled and expandable panels',
    files: {
      'src/app/app.component.ts': 'accordion/accordion.1.angular.txt',
    },
    template: 'angular',
  },
  'core-accordion': {
    name: 'Core',
    description: 'With expanded, disabled and expandable panels',
    files: {
      'src/app/app.component.ts': 'accordion/accordion.1.core.txt',
    },
    template: 'core',
  },
  // Alert
  'angular-alert': {
    name: 'Angular',
    description: 'Display and hide alerts by toggling a single variable.',
    files: {
      'src/app/app.component.ts': 'alert/alert.1.angular.txt',
    },
    template: 'angular',
  },
  'core-alert': {
    name: 'Core',
    description: 'Display and hide alerts by toggling a single variable.',
    files: {
      'src/app/app.component.ts': 'alert/alert.1.core.txt',
    },
    template: 'core',
  },
  // Badge
  'angular-badge': {
    name: 'Angular',
    description: 'Display a badge with a custom content.',
    files: {
      'src/app/app.component.ts': 'badges/badge.1.angular.txt',
    },
    template: 'angular',
  },
  'core-badge': {
    name: 'Core',
    description: 'Display a badge with a custom content.',
    files: {
      'src/app/app.component.ts': 'badges/badge.1.core.txt',
    },
    template: 'core',
  },
  // Button
  'angular-button': {
    name: 'Angular',
    description: 'Basic primary button',
    template: 'angular',
    files: {
      'src/app/app.component.ts': 'button/button.1.angular.txt',
    }
  },
  'core-button': {
    name: 'Core',
    description: 'Basic primary button',
    template: 'core',
    files: {
      'src/app/app.component.ts': 'button/button.1.core.txt',
    }
  },
  // Card
  'angular-card': {
    name: 'Angular',
    description: 'Card with title and body',
    files: {
      'src/app/app.component.ts': 'card/card.1.angular.txt',
    },
    template: 'angular',
  },
  'core-card': {
    name: 'Core',
    description: 'Card with title and body',

    files: {
      'src/app/app.component.ts': 'card/card.1.core.txt',
    },
    template: 'core',
  },
  // Checkbox
  'angular-checkbox': {
    name: 'Angular',
    description: 'Basic checkbox',
    files: {
      'src/app/app.component.ts': 'checkbox/checkbox.1.angular.txt',
    },
    template: 'angular',
  },
  'core-checkbox': {
    name: 'Core',
    description: 'Basic checkbox',
    files: {
      'src/app/app.component.ts': 'checkbox/checkbox.1.core.txt',
    },
    template: 'core',
  },
  // Combobox
  // Datalist
  'angular-datalist': {
    name: 'Angular',
    description: 'Datalist with text items',
    files: {
      'src/app/app.component.ts': 'datalist/datalist.1.angular.txt',
    },
    template: 'angular',
  },
  'core-datalist': {
    name: 'Core',
    description: 'Datalist with text items',
    files: {
      'src/app/app.component.ts': 'datalist/datalist.1.core.txt',
    },
    template: 'core',
  },
  // Dropdown
  // Form
  'core-form': {
    name: 'Core',
    description: 'Display helpers, errors and success messages',
    files: {
      'src/app/app.component.ts': 'forms/forms.4.core.txt',
    },
    template: 'core',
  },
  // Header
  // Icons
  'angular-icon': {
    name: 'Angular',
    description: 'All available icon variants',
    files: {
      'src/app/app.component.ts': 'icons/icons.1.angular.txt',
    },
    template: 'angular',
  },
  'core-icon': {
    name: 'Core',
    description: 'All available icon variants',
    files: {
      'src/app/app.component.ts': 'icons/icons.1.core.txt',
    },
    template: 'core',
  },
  // Input
  'angular-input': {
    name: 'Angular',
    description: 'Input with placeholder',
    files: {
      'src/app/app.component.ts': 'input/input.1.angular.txt',
    },
    template: 'angular',
  },
  'core-input': {
    name: 'Core',
    description: 'Input with placeholder',
    files: {
      'src/app/app.component.ts': 'input/input.1.core.txt',
    },
    template: 'core',
  },
  'angular-input-label': {
    name: 'Angular',
    description: 'Input with label and placeholder',
    files: {
      'src/app/app.component.ts': 'input/input.2.angular.txt',
    },
    template: 'angular',
  },
  'core-input-label': {
    name: 'Core',
    description: 'Input with label and placeholder',
    files: {
      'src/app/app.component.ts': 'input/input.2.core.txt',
    },
    template: 'core',
  },
  'angular-input-validation': {
    name: 'Angular',
    description: 'Input demos with info message and error message',
    files: {
      'src/app/app.component.ts': 'input/input.4.angular.txt',
    },
    template: 'angular',
  },
  'core-input-validation': {
    name: 'Core',
    description: 'Input demos with info message and error message',
    files: {
      'src/app/app.component.ts': 'input/input.4.core.txt',
    },
    template: 'core',
  },
  // Label
  'angular-label': {
    name: 'Angular',
    description: 'Simple label with text',
    files: {
      'src/app/app.component.ts': 'labels/label.0.angular.txt',
    },
    template: 'angular',
  },
  'core-label': {
    name: 'Core',
    description: 'Simple label with text',
    files: {
      'src/app/app.component.ts': 'labels/label.0.core.txt',
    },
    template: 'core',
  },
  // List
  // Modal
  'angular-modal': {
    name: 'Angular',
    description: 'Modal with title, body and footer',
    files: {
      'src/app/app.component.ts': 'modal/modal.1.angular.txt',
    },
    template: 'angular',
  },
  'core-modal': {
    name: 'Core',
    description: 'Modal with title, body and footer',
    files: {
      'src/app/app.component.ts': 'modal/modal.1.core.txt',
    },
    template: 'core',
  },
  // Password
  'angular-password-validation': {
    name: 'Angular',
    description: 'Password with Reactive form',
    files: {
      'src/app/app.component.ts': 'password/password.2.angular.txt',
    },
    template: 'angular',
  },
  'core-password-validation': {
    name: 'Core',
    description: 'Password with Reactive form',

    files: {
      'src/app/app.component.ts': 'password/password.2.core.txt',
    },
    template: 'core',
  },
  // ProgressBar
  // radio
  // Range
  'angular-range': {
    name: 'Angular',
    description: 'Range with label',
    files: {
      'src/app/app.component.ts': 'range/range.1.angular.txt',
    },
    template: 'angular',
  },
  'core-range': {
    name: 'Core',
    description: 'Range with label',
    files: {
      'src/app/app.component.ts': 'range/range.1.core.txt',
    },
    template: 'core',
  },
  // Select
  'angular-select': {
    name: 'Angular',
    description: 'Select with Reactive form',
    files: {
      'src/app/app.component.ts': 'select/select.2.angular.txt',
    },
    template: 'angular',
  },
  'core-select': {
    name: 'Core',
    description: 'Select with Reactive form',
    files: {
      'src/app/app.component.ts': 'select/select.2.core.txt',
    },
    template: 'core',
  },
  // SignPost
  // Spinner
  // Stepper
  // Tab
  // Table
  // Textarea
  'angular-textarea': {
    name: 'Angular',
    description: 'Textarea with Reactive forms',
    files: {
      'src/app/app.component.ts': 'textarea/textarea.2.angular.txt',
    },
    template: 'angular',
  },
  'core-textarea': {
    name: 'Core',
    description: 'Textarea with Reactive forms',

    files: {
      'src/app/app.component.ts': 'textarea/textarea.2.core.txt',
    },
    template: 'core',
  },
  // Timeline
  // Toggle
  // Tooltip
  // TreeViews
  // Wizard
};

@Injectable({
  providedIn: 'root',
})
export class TemplateDetailsService {
  private list: Record<string, TemplateDetails> = DATA_LIST;

  getDetail(template: string): TemplateDetails | undefined {
    return this.list[template];
  }
  getDetails(): Record<string, TemplateDetails> {
    return this.list;
  }

  getVersions(): string[] {
    return [
      '5.0.0',
    ];
  }
}
