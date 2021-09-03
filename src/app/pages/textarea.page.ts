/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-textarea',
  template: `
    <h1>Textarea</h1>

    <app-eslint-intro-block rule="no-clr-textarea"></app-eslint-intro-block>

    <demo [tabs]="demo1">
      <h3 cds-text="section">With label and info message</h3>
    </demo>

    <demo [tabs]="demo2">
      <h3 cds-text="section">Reactive forms</h3>
    </demo>
  `,
})
export class TextareaPage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'textarea/textarea.1.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'textarea/textarea.1.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'textarea/textarea.2.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'textarea/textarea.2.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];
}
