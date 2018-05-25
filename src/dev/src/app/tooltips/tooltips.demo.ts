/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-tooltips-demo',
  styleUrls: ['./tooltips.demo.scss'],
  template: `
        <h2>Tooltips</h2>

        <ul>
            <li><a [routerLink]="['./sizes']">Sizes</a></li>
            <li><a [routerLink]="['./directions']">Directions</a></li>
            <li><a [routerLink]="['./angular']">Angular component</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class TooltipsDemo {}
