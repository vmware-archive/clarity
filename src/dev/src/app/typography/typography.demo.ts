/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-typography-demo',
  styleUrls: ['./typography.demo.scss'],
  template: `
        <h2>Typography</h2>
        <ul>
            <li><a [routerLink]="['./typography-font-weight']">Font Weights</a></li>
            <li><a [routerLink]="['./typography-headers']">Headers (H1..H6)</a></li>
            <li><a [routerLink]="['./typography-text']">Body Text and Paragraphs</a></li>
            <li><a [routerLink]="['./typography-links']">Link states</a></li>
            <li><a [routerLink]="['./typography-font-char-test']">Character Test</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class TypographyDemo {}
