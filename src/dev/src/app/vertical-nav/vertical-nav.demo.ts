/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@clr/icons/shapes/essential-shapes';

import { Component } from '@angular/core';

@Component({
  template: `
        <h2>Vertical Navigation</h2>
        <ul>
            <li><a [routerLink]="['./static']">Static</a></li>
            <li><a [routerLink]="['./basic']">Basic</a></li>
            <li><a [routerLink]="['./header-and-divider']">Header and Divider</a></li>
            <li><a [routerLink]="['./collapsible']">Collapsible</a></li>
            <li><a [routerLink]="['./icons']">Icons Links</a></li>
            <li><a [routerLink]="['./nested-menus']">Nested Menus</a></li>
            <li><a [routerLink]="['./nested-icon-menus']">Nested Icon Menus</a></li>
            <li><a [routerLink]="['./partial-nested-menus']">Partial Nested Menus</a></li>
            <li><a [routerLink]="['./partial-nested-icon-menus']">Partial Nested Icon Menus</a></li>
            <li><a [routerLink]="['./routing']">Routing</a></li>
            <li><a [routerLink]="['./without-expanded-directive']">Without Expanded Directive</a></li>
            <li><a [routerLink]="['./unstructured-routes']">Unstructured Routes</a></li>
            <li><a [routerLink]="['./all']">All Cases</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class VerticalNavDemo {}
