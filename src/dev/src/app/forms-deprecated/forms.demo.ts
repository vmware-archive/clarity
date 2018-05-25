/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-forms-demo',
  styleUrls: [],
  template: `
        <h2>Forms</h2>
        <ul>
            <li><a [routerLink]="['./form-fields']">Form Fields</a></li>
            <li><a [routerLink]="['./form-test']">Test Form</a></li>
            <li><a [routerLink]="['./form-validation']">Form Validation</a></li>
            <li><a [routerLink]="['./form-compact']">Compact Form</a></li>
            <li><a [routerLink]="['./form-grid']">Forms in a Grid</a></li>
            <li><a [routerLink]="['./form-grid-validation']">Forms Validation in a Grid</a></li>
            <li><a [routerLink]="['./form-template-driven']">Template-Driven Forms</a></li>
            <li><a [routerLink]="['./form-reactive']">Reactive Forms</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class FormsDemo {}
