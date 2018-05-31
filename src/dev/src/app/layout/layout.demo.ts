/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  template: `
        <h2>Layout</h2>
        <ul>
            <li><a [routerLink]="['./layout-all']">Layout - All</a></li>
            <li><a [routerLink]="['./layout-no-subnav']">Layout - No Subnav</a></li>
            <li><a [routerLink]="['./layout-no-sidenav']">Layout - No Sidenav</a></li>
            <li><a [routerLink]="['./layout-only-header']">Layout - Only Header</a></li>
            <li><a [routerLink]="['./layout-subnav-primary']">Layout - Subnav as Primary Navigation</a></li>
            <li><a [routerLink]="['./layout-sidenav-primary']">Layout - Sidenav as Primary Navigation</a></li>
            <li><a [routerLink]="['./layout-additional-sections']">Layout - Additional Sections</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class LayoutDemo {}
