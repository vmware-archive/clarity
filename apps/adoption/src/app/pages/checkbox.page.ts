/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-checkbox',
  template: `
    <h1>Checkbox</h1>

    <app-eslint-intro-block ruleName="no-clr-checkbox"></app-eslint-intro-block>

    <demo [tabs]="demo1">
      <p>Basic checkbox</p>
    </demo>
    <demo [tabs]="demo2">
      <p>Example of more complex form structure</p>
    </demo>
  `,
})
export class CheckboxPage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'checkbox/checkbox.1.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'checkbox/checkbox.1.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'checkbox/checkbox.2.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'checkbox/checkbox.2.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];
}
