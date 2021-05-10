/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-icon',
  template: `
    <h1>Icons</h1>

    <p>
      There is replacement for Clarity Angular icons with
      <a href="https://clarity.design/foundation/icons/">Core Icons</a> that have almost the same syntax. We provide
      ESLint rule to migrate easily but here are some examples for doing this by hand.
    </p>

    <demo [tabs]="demo1">
      <h3>Basic</h3>
    </demo>
    <demo [tabs]="demo2">
      <h3>Color states</h3>
    </demo>
    <demo [tabs]="demo3">
      <h3>Rotation</h3>
    </demo>
    <demo [tabs]="demo4">
      <h3>Badges</h3>
    </demo>
  `,
})
export class IconsPage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'icons/icons.1.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'icons/icons.1.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'icons/icons.2.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'icons/icons.2.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo3: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'icons/icons.3.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'icons/icons.3.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo4: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'icons/icons.4.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'icons/icons.4.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];
}
