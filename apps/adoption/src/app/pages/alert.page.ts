/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-alert',
  template: `
    <h1>Alerts</h1>

    <app-eslint-intro-block ruleName="no-clr-alert"></app-eslint-intro-block>

    <demo [tabs]="demo1">
      <h3>Basic</h3>
      <p>Display and hide alerts by toggling a single variable.</p>
    </demo>

    <demo [tabs]="demo2">
      <h3>Banner</h3>
    </demo>

    <demo [tabs]="demo3">
      <h3>Group of alerts and actions</h3>
      <p>Grouping alerts by 'status' and adding CTA buttons as part of the alert.</p>
    </demo>
  `,
})
export class AlertPage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'alert/alert.1.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'alert/alert.1.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'alert/alert.2.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'alert/alert.2.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo3: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'alert/alert.3.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'alert/alert.3.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];
}
