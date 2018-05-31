/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-color-demo',
  styleUrls: [],
  template: `
        <h2>Color</h2>
        <ul>
            <li><a [routerLink]="['./color-palette']">Color Palette</a></li>
            <li><a [routerLink]="['./color-luminance']">Luminance Test</a></li>
            <li><a [routerLink]="['./color-contrast']">Contrast Checker</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class ColorsDemo {}
