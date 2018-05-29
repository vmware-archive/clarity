/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-buttons-demo',
  styleUrls: ['./buttons.demo.scss'],
  template: `
        <h2>Buttons</h2>
        <ul>
            <li><a [routerLink]="['./real-button']">Buttons</a></li>
            <li><a [routerLink]="['./primary-button']">Primary Buttons</a></li>
            <li><a [routerLink]="['./secondary-button']">Secondary Buttons</a></li>
            <li><a [routerLink]="['./tertiary-button']">Tertiary Buttons</a></li>
            <li><a [routerLink]="['./inverse-button']">Inverse Buttons</a></li>
            <li><a [routerLink]="['./button-states']">Button States</a></li>
            <li><a [routerLink]="['./button-loading']">Loading Buttons</a></li>
            <li><a [routerLink]="['./button-sizes']">Button Sizes</a></li>
            <li><a [routerLink]="['./toggles']">Toggles</a></li>
            <li><a [routerLink]="['./icons']">Icons in Buttons</a></li>
            <li><a [routerLink]="['./icon-buttons']">Icon Buttons</a></li>
            <li><a [routerLink]="['./buttons-test']">Buttons Test</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class ButtonsDemo {}
