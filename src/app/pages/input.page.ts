/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-input',
  template: `
    <h1>Input</h1>

    <cdc-component-status name="input"></cdc-component-status>

    <demo [tabs]="demo1">
      <h3 cds-text="section">Input with placeholder</h3>
    </demo>

    <demo [tabs]="demo2">
      <h3 cds-text="section">Input with label and placeholder</h3>
    </demo>

    <demo [tabs]="demo3">
      <h3 cds-text="section">Error and Info</h3>
      <p>Input demos with info message and error message</p>
    </demo>
  `,
})
export class InputPage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'input/input.1.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'input/input.1.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'input/input.2.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'input/input.2.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo3: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'input/input.4.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'input/input.4.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];
}
