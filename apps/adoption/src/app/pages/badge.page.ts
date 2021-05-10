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

    <demo [tabs]="demo1"></demo>
    <demo [tabs]="demo2"></demo>
  `,
})
export class BadgePage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'badges/badges.1.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'badges/badges.1.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'badges/badges.2.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'badges/badges.2.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];
}
