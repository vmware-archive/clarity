/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-alert-demo-static',
  styleUrls: ['../alert.demo.scss'],
  template: `
        <h4>Static Styles</h4>
        <ul>
            <li><a [routerLink]="['./styles']">Styles</a></li>
            <li><a [routerLink]="['./sizes']">Sizes</a></li>
            <li><a [routerLink]="['./cards']">Alerts in Cards</a></li>
            <li><a [routerLink]="['./modals']">Alerts in Modals</a></li>
            <li><a [routerLink]="['./content-area']">Alerts in Content Area</a></li>
            <li><a [routerLink]="['./app-level']">App Level Alerts</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class AlertStaticDemo {}
