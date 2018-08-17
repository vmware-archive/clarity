/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-grid-deprecated-demo',
  styleUrls: ['./grid.demo.scss'],
  template: `
        <h2>Grid - Deprecated</h2>
        <ul>
            <li><a [routerLink]="['./grid-columns']">Columns</a></li>
            <li><a [routerLink]="['./grid-column-stacking']">Column Stacking</a></li>
            <li><a [routerLink]="['./grid-column-offsetting']">Column Offsetting</a></li>
            <li><a [routerLink]="['./grid-auto-layout-1']">Auto Layout Demo 1</a></li>
            <li><a [routerLink]="['./grid-auto-layout-2']">Auto Layout Demo 2</a></li>
            <li><a [routerLink]="['./grid-items-vertical-alignment']">Vertical Alignment</a></li>
            <li><a [routerLink]="['./grid-items-individual-vertical-alignment']">Individual Vertical Alignment</a></li>
            <li><a [routerLink]="['./grid-items-horizontal-alignment']">Horizontal Alignment</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class DeprecatedGridDemo {}
