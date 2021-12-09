/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-password',
  template: `
    <h1>Password</h1>
    <demo [tabs]="demo1">
      <h3 cds-text="section">With label</h3>
    </demo>

    <demo [tabs]="demo2">
      <h3 cds-text="section">Password with Reactive form</h3>
    </demo>
  `,
})
export class PasswordPage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'password/password.1.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'password/password.1.core.txt',
      },

      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'password/password.2.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'password/password.2.core.txt',
      },

      template: 'core',
    },
  ];
}
