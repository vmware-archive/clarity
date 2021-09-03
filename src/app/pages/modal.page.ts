/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-modal',
  template: `
    <h1>Modal</h1>
    <app-eslint-intro-block rule="no-clr-modal"></app-eslint-intro-block>

    <p>
      For more information on how to use modal, please refer to the
      <a target="_blank" href="https://v4.clarity.design/documentation/modals">Clarity Angular Modal</a> or
      <a target="_blank" href="https://clarity.design/core-components/modal/api/">Clarity Core Modal</a> documentation.
    </p>

    <demo [tabs]="demo1">
      <h3 cds-text="section">With title, body and footer</h3>
    </demo>

    <demo [tabs]="demo2">
      <h3 cds-text="section">Closable</h3>

      <p>
        In some cases there is a need to prevent the user from closing the modal. To achieve this there is an option for
        removing the closable action button on the top right corner of the dialog.
      </p>
    </demo>
  `,
})
export class ModalPage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'modal/modal.1.angular.txt',
      },
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'modal/modal.1.core.txt',
      },
      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'modal/modal.2.angular.txt',
      },
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'modal/modal.2.core.txt',
      },
      template: 'core',
    },
  ];
}
