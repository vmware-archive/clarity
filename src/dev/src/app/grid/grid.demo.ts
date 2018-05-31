/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-grid-demo',
  styleUrls: ['./grid.demo.scss'],
  template: `
        <h2>Grid</h2>
        <div class="clr-row">
            <div class="clr-col-12 clr-col-md-6">
                <ul>
                    <li><a [routerLink]="['./grid-columns']">Columns</a></li>
                    <li><a [routerLink]="['./grid-columns-stacking']">Column Stacking</a></li>
                    <li><a [routerLink]="['./grid-columns-offsetting']">Column Offsetting</a></li>
                    <li><a [routerLink]="['./grid-column-wrapping']">Column Wrapping</a></li>
                    <li><a [routerLink]="['./grid-equal-widths']">Auto Layout - Equal Widths</a></li>
                    <li><a [routerLink]="['./grid-one-col-width']">Auto Layout - Setting One Col Width</a></li>
                    <li><a [routerLink]="['./grid-variable-width-content']">Auto Layout - Variable Width Content</a></li>
                    <li><a [routerLink]="['./grid-equal-width-multi-row']">Auto Layout - Equal Width Multi Row</a></li>
                </ul>
            </div>
            <div class="clr-col-12 clr-col-md-6">
                <ul>
                    <li><a [routerLink]="['./grid-no-gutters']">No Gutters</a></li>
                    <li><a [routerLink]="['./grid-horizontal-alignment']">Alignment - Horizontal</a></li>
                    <li><a [routerLink]="['./grid-vertical-alignment']">Alignment - Vertical</a></li>
                    <li><a [routerLink]="['./grid-ordering']">Column Ordering</a></li>
                    <li><a [routerLink]="['./grid-nesting']">Grid Nesting</a></li>
                </ul>
            </div>
        </div>
        <router-outlet></router-outlet>
    `,
})
export class GridDemo {}
