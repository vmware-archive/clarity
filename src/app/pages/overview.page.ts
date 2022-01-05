/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { componentRoutes } from '../app-routing.module';

@Component({
  styles: [
    `.item { border: .0625rem solid var(--cds-global-color-gray-400); border-radius: .1875rem;}`,
    `.item-img { max-width: 160px; min-width: 160px; max-height: 100px; min-height: 100px; }`
  ],
  template: `
    <h1 cds-text="heading" cds-layout="m-b:lg m-t:lg">Clarity Components</h1>

    <section cds-layout="m-y:xl grid gap:md cols@sm:12 cols@md:6 cols@lg:4 align:vertical-stretch">
      <a [routerLink]="['/', component.path]" *ngFor="let component of components">
        <section cds-layout="vertical" role="link" class="item">
          <h2 cds-text="section expanded">
            <div cds-layout="horizontal gap:md p:lg align:center">
              {{component.path | menuTitle}}
            </div>
          </h2>
          <div cds-layout="vertical align:center p:md m-b:xl">
            <img class="item-img" src="/assets/{{component.path}}.svg" alt="{{component.path | menuTitle}} visual example">
          </div>
        </section>
      </a>
    </section>
  `,
})
export class OverviewPage {
  components = componentRoutes.slice(1); // Drop the overview
}
