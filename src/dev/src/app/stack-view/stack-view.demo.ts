/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-stack-view-demo',
  template: `
        <h2>Stack View</h2>

        <ul>
            <li><a [routerLink]="['./static']">Static styles</a></li>
            <li><a [routerLink]="['./angular-basic']">Basic Stack View component</a></li>
            <li><a [routerLink]="['./angular-modal-edit']">Stack View With Editing in a Modal</a></li>
            <li><a [routerLink]="['./angular-lazyload']">Stack View With Children Loaded On Demand</a></li>
        </ul>

        <router-outlet></router-outlet>
    `,
})
export class StackViewDemo {}
