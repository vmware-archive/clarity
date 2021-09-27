/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-toggle',
  template: `
    <h1>Toggle</h1>

    <cdc-component-status name="toggle"></cdc-component-status>

    <demo [tabs]="demo1">
      <h3 cds-text="section">With label</h3>
    </demo>

    <demo [tabs]="demo2">
      <h3 cds-text="section">With subtext and forms</h3>
    </demo>

    <demo [tabs]="demo3">
      <h3 cds-text="section">Disabled</h3>
    </demo>
  `,
})
export class TogglePage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'toggle/toggle.1.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'toggle/toggle.1.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];
  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'toggle/toggle.2.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'toggle/toggle.2.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo3: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'toggle/toggle.3.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'toggle/toggle.3.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];
}
