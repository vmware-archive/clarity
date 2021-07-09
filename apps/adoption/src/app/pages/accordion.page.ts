/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-accordion',
  template: `
    <h1>Accordion</h1>

    <app-eslint-intro-block ruleName="no-clr-acoordion"></app-eslint-intro-block>

    <demo [tabs]="demo1"></demo>
  `,
})
export class AccordionPage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'accordion/accordion.1.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'accordion/accordion.1.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];
}
