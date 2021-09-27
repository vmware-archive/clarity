/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-select',
  template: `
    <h1>Select</h1>

    <cdc-component-status name="select"></cdc-component-status>

    <app-eslint-intro-block rule="no-clr-select"></app-eslint-intro-block>

    <demo [tabs]="demo1">
      <h3 cds-text="section">With 3 elements and label</h3>
    </demo>

    <demo [tabs]="demo2">
      <h3 cds-text="section">Reactive form</h3>
    </demo>
  `,
})
export class SelectPage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'select/select.1.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'select/select.1.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'select/select.2.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'select/select.2.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];
}
