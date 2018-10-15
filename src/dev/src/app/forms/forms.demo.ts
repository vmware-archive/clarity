/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-forms-demo',
  styles: [`.list-nav { columns: 3; margin-bottom: 20px; }`],
  template: `
        <h2>Forms</h2>
        <ul class="list-nav">
            <li><a [routerLink]="['./layout-vertical']">Layout Vertical</a></li>
            <li><a [routerLink]="['./layout-horizontal']">Layout Horizontal</a></li>
            <li><a [routerLink]="['./layout-compact']">Layout Compact</a></li>
            <li><a [routerLink]="['./layout-vertical-grid']">Layout Vertical Grid</a></li>
            <li><a [routerLink]="['./layout-horizontal-grid']">Layout Horizontal Grid</a></li>
            <li><a [routerLink]="['./layout-compact-grid']">Layout Compact Grid</a></li>
            <li><a [routerLink]="['./input-group']">Input Group</a></li>
            <li><a [routerLink]="['./layout-modal']">Layout in Modal</a></li>
            <li><a [routerLink]="['./text']">Text</a></li>
            <li><a [routerLink]="['./checkbox']">Checkbox</a></li>
            <li><a [routerLink]="['./radio']">Radio</a></li>
            <li><a [routerLink]="['./file']">File</a></li>
            <li><a [routerLink]="['./textarea']">Textarea</a></li>
            <li><a [routerLink]="['./select']">Select</a></li>
            <li><a [routerLink]="['./template-driven']">Template Driven</a></li>
            <li><a [routerLink]="['./reactive']">Reactive</a></li>
            <li><a [routerLink]="['./reset']">Reset</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class FormsDemo {}
