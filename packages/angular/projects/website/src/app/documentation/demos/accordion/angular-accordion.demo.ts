/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const example = `
<clr-accordion>
  <clr-accordion-panel>
    <clr-accordion-title>Item 1</clr-accordion-title>
    <clr-accordion-content *clrIfExpanded>Content 1</clr-accordion-content>
  </clr-accordion-panel>

  <clr-accordion-panel>
    <clr-accordion-title>Item 2</clr-accordion-title>
    <clr-accordion-content *clrIfExpanded>Content 2</clr-accordion-content>
  </clr-accordion-panel>

  <clr-accordion-panel>
    <clr-accordion-title>Item 3</clr-accordion-title>
    <clr-accordion-content *clrIfExpanded>Content 3</clr-accordion-content>
  </clr-accordion-panel>
</clr-accordion>
`;

@Component({
  selector: 'clr-angular-accordion-demo',
  templateUrl: './angular-accordion.demo.html',
})
export class AngularAccordionDemo {
  example = example;
}
