/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Input } from '@angular/core';

const coreDocumentation = 'https://clarity.design/core-components';
const angularDocumentation = 'https://angular.clarity.design/documentation';

@Component({
  selector: 'not-ready',
  template: `
    <ng-container *ngIf="inProgress; else notStarted">
      <h3>We are working on this at the moment</h3>
      <p>
        Until then check the Core documentation on how to start working with
        <a [attr.title]="linkTitle" [attr.href]="link" target="_blank">{{ name }}s</a> component.
      </p>
    </ng-container>

    <ng-template #notStarted>
      <h3>The component is currently in our backlog</h3>
      <p>
        Do you know we have a <a href="https://clarity.design/get-started/roadmap/">Roadmap page</a> in our website?
        There you will find information whats comming in the next version of Clarity. Until then check out our Angular
        component <a [title]="linkTitle" [href]="link" target="_blank">{{ name }}</a> component.
      </p>
    </ng-template>

    <ng-content></ng-content>
  `,
})
export class NotReadyComponent {
  @Input('name') name = '';

  @Input('inProgress') inProgress = false;

  get link() {
    return this.inProgress
      ? `${coreDocumentation}/${('' + this.name).toLowerCase()}`
      : `${angularDocumentation}/${('' + this.name).toLowerCase()}`;
  }

  get linkTitle() {
    return `Clarity Design System ${this.name} documentation`;
  }
}
