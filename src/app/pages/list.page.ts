/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-list',
  template: `
    <h1 cds-text="heading" cds-layout="m-b:lg m-t:lg">List</h1>

    <demo [tabs]="demo">
      <h3>Ordered list</h3>
    </demo>

    <demo [tabs]="demo2">
      <h3>Unordered list</h3>
    </demo>

    <demo [tabs]="demo3">
      <h3>Unstyled</h3>
    </demo>
  `,
})
export class ListPage {
  demo: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'list/list.1.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'list/list.1.core.txt',
      },

      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'list/list.2.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'list/list.2.core.txt',
      },

      template: 'core',
    },
  ];

  demo3: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'list/list.3.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'list/list.3.core.txt',
      },

      template: 'core',
    },
  ];
}
