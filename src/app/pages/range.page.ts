/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-range',
  template: `
    <h1>Range</h1>

    <app-eslint-intro-block rule="no-clr-range"></app-eslint-intro-block>

    <demo [tabs]="demo1">
      <h3 cds-text="section">With label and info message</h3>
    </demo>
  `,
})
export class RangePage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'range/range.1.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'range/range.1.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];
}
