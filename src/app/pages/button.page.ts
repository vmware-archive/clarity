/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-button',
  template: `
    <h1>Button</h1>

    <app-eslint-intro-block rule="no-clr-button"></app-eslint-intro-block>

    <demo [tabs]="demo1">
      <h3 cds-text="section">Primary button</h3>
      <p>Basic primary button</p>
    </demo>

    <demo [tabs]="demo2">
      <h3 cds-text="section">Solid buttons</h3>
      <p>All solid buttons</p>
    </demo>

    <demo [tabs]="demo3">
      <h3 cds-text="section">Outline buttons</h3>
      <p>All outline buttons</p>
    </demo>

    <demo [tabs]="demo4">
      <h3 cds-text="section">Inverse buttons</h3>
    </demo>

    <demo [tabs]="demo5">
      <h3 cds-text="section">Icon buttons</h3>
    </demo>

    <demo [tabs]="demo6">
      <h3 cds-text="section">Loading buttons</h3>
    </demo>
  `,
})
export class ButtonPage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'button/button.1.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'button/button.1.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'button/button.2.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'button/button.2.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo3: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'button/button.3.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'button/button.3.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo4: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'button/button.4.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'button/button.4.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo5: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'button/button.5.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'button/button.5.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo6: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'button/button.6.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'button/button.6.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];
}
