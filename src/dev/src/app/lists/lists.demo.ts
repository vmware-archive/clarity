/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-lists-demo',
  template: `
        <h2>Lists</h2>
        <ul>
            <li><a [routerLink]="['./lists-ul']">Lists</a></li>
            <li><a [routerLink]="['./lists-unstyled']">Unstyled Lists</a></li>
            <li><a [routerLink]="['./lists-ol']">Ordered Lists</a></li>
            <li><a [routerLink]="['./lists-mixed']">Mixing Styled and Unstyled Lists</a></li>
            <li><a [routerLink]="['./lists-compact']">Compact Lists</a></li>
            <li><a [routerLink]="['./lists-in-cards']">Lists In Cards</a></li>
            <li><a [routerLink]="['./old-lists-in-cards']">Old Lists In Cards</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class ListsDemo {}
