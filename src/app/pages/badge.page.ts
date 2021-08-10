/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-badge',
  template: `
    <h1>Badges</h1>

     <app-eslint-intro-block rule="no-clr-badge"></app-eslint-intro-block>

    <demo [tabs]="demo1">
      <h2>Basic</h2>
    </demo>
    <demo [tabs]="demo2">
      <h2>Status</h2>
    </demo>
  `,
})
export class BadgePage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'badges/badge.1.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'badges/badge.1.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'badges/badge.2.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'badges/badge.2.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];
}
