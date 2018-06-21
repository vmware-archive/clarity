/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-tables-demo',
  template: `
        <h2>Tables</h2>
        <ul>
            <li><a [routerLink]="['./tables-basic']">Basic Tables</a></li>
            <li><a [routerLink]="['./tables-leftcell']">Left-Aligned Table Cells</a></li>
            <li><a [routerLink]="['./tables-multiline']">Multiline Table Cells</a></li>
            <li><a [routerLink]="['./tables-noborder']">Non-Bordered Tables</a></li>
            <li><a [routerLink]="['./tables-compact']">Compact Tables</a></li>
            <li><a [routerLink]="['./tables-compact-noborder']">Compact, Non-Bordered Tables</a></li>
            <li><a [routerLink]="['./tables-vertical']">Vertical Tables</a></li>
            <li><a [routerLink]="['./tables-vertical-noborder-compact']">Vertical, Compact, Non-bordered Tables</a></li>
            <li><a [routerLink]="['./tables-width']">Table Container Widths</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class TablesDemo {}
