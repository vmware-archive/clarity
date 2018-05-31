/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-alert-demo-angular',
  styleUrls: ['../alert.demo.scss'],
  template: `
        <h4>Angular</h4>
        <ul>
            <li><a [routerLink]="['./not-closable']">Not Dismissible</a></li>
            <li><a [routerLink]="['./small']">Instantiate as Small</a></li>
            <li><a [routerLink]="['./close-events']">Invoking Callbacks on Close</a></li>
            <li><a [routerLink]="['./success']">Set Alert Type</a></li>
            <li><a [routerLink]="['./app-level']">Instantiate as App Level Alert</a></li>
            <li><a [routerLink]="['./app-level-alerts']">Multiple App Level Alert</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class AlertAngularDemo {}
