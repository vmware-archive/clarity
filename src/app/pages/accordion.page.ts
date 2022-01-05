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
    <h1 cds-text="heading" cds-layout="m-b:lg m-t:lg">Accordion</h1>

    <status-block
      coreVersion="v4"
      angularVersion="v1"
      coreLink=""
      coreStorybookLink="https://clarity.design/storybook/core/?path=/story/components-accordion--page"
      angularLink="https://angular.clarity.design/documentation/accordion"
      [eslint]="true"
      angularFigma="https://www.figma.com/file/ZvaQGGktjGoW6gz9DqwvrLtz/?node-id=1007%3A0"
      coreFigma="https://www.figma.com/file/cjen2ts5Vz0W37NacV1eBE/Clarity-Core-Library-BETA?node-id=1169%3A3267"
    >
      An accordion allows generic content to be collapsed and allows users to expand to show more detail.
    </status-block>

    <demo [tabs]="demo1">
      <h3 cds-text="section" cds-layout="m-b:lg">With expanded, disabled and expandable panels</h3>
    </demo>
  `,
})
export class AccordionPage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'accordion/accordion.1.angular.txt',
      },

      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'accordion/accordion.1.core.txt',
      },

      template: 'core',
    },
  ];
}
