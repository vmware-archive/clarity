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
    <h1 cds-text="heading" cds-layout="m-b:lg m-t:lg">Textarea</h1>

    <app-eslint-intro-block rule="no-clr-textarea"></app-eslint-intro-block>

    <demo [tabs]="demo1">
      <h3 cds-text="section" cds-layout="m-b:lg">With label and info message</h3>
    </demo>

    <demo [tabs]="demo2">
      <h3 cds-text="section" cds-layout="m-b:lg">Reactive forms</h3>
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

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'textarea/textarea.1.core.txt',
      },

      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'textarea/textarea.2.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'textarea/textarea.2.core.txt',
      },

      template: 'core',
    },
  ];
}
