/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-typography-demo',
  styleUrls: ['./typography.demo.scss'],
  template: `
    <h2>Typography</h2>
    <div class="clr-row">
      <ul class="clr-col-4">
        <li><a [routerLink]="['./typography-font-weight']">Font Weights</a></li>
        <li><a [routerLink]="['./typography-headers']">Headers (H1..H6)</a></li>
        <li><a [routerLink]="['./typography-text']">Body Text and Paragraphs</a></li>
        <li><a [routerLink]="['./typography-links']">Link states</a></li>
      </ul>
      <ul class="clr-col-4">
        <li><a [routerLink]="['./typography-font-char-test']">Character Test</a></li>
        <li><a [routerLink]="['./typography-line-height']">Line Height Eraser</a></li>
        <li><a [routerLink]="['./typography-font-autopsy']">Font Autopsy</a></li>
      </ul>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class TypographyDemo {}
