/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Input } from '@angular/core';

const coreDocumentation = 'https://clarity.design/core-components';

@Component({
  selector: 'not-ready',
  template: `
    <h3>We are working on this at the moment</h3>
    <p>
      Until then check the Core documentation on how to start working with
      <a title="{{ linkTitle }}" href="{{ coreLink }}" target="_blank">{{ name }}s</a> component.
    </p>

    <ng-content></ng-content>
  `,
})
export class NotReadyComponent {
  @Input('name') name = '';

  get coreLink() {
    return `${coreDocumentation}/${('' + this.name).toLowerCase()}`;
  }

  get linkTitle() {
    return `Clarity Design System ${this.name} documentation`;
  }
}
