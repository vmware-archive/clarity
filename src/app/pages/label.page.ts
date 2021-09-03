/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-label',
  template: `
    <h1>Labels</h1>

    <app-eslint-intro-block rule="no-clr-label"></app-eslint-intro-block>

    <demo [tabs]="demo0">
      <h3 cds-text="section">Simple label with text</h3>
    </demo>
    <demo [tabs]="demo1">
      <h3 cds-text="section">Outline labels with badge</h3>
    </demo>
    <demo [tabs]="demo2">
      <h3 cds-text="section">Clickable outline labels</h3>
    </demo>
    <demo [tabs]="demo3">
      <h3 cds-text="section">Outline labels without badge</h3>
    </demo>
    <demo [tabs]="demo4">
      <h3 cds-text="section">Labels with status</h3>
      <p>Labels with colour background fill</p>
    </demo>
  `,
})
export class LabelPage {
  demo0: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'labels/label.0.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'labels/label.0.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'labels/label.1.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'labels/label.1.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'labels/label.2.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'labels/label.2.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo3: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'labels/label.3.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'labels/label.3.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo4: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'labels/label.4.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'labels/label.4.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];
}
