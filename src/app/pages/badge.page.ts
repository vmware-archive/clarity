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
      <h3 cds-text="section">Badge colours</h3>
      <p>Badge in different colours</p>
    </demo>
    <demo [tabs]="demo2">
      <h3 cds-text="section">Badge status</h3>
      <p>Badges with all available statuses</p>
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

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'badges/badge.1.core.txt',
      },

      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'badges/badge.2.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'badges/badge.2.core.txt',
      },

      template: 'core',
    },
  ];
}
