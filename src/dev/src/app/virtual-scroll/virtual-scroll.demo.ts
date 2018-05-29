/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-virtual-scroll-demo',
  template: `
        <clr-alert [clrAlertType]="'alert-warning'">
            <div clr-alert-item class="alert-item">
                <span class="alert-text">
                    This is a private demo, nothing here is part of Clarity's public API
                </span>
            </div>
        </clr-alert>
        
        <h2>Virtual scroll</h2>
        <ul>
            <li><a [routerLink]="['./array']">Simple Array</a></li>
            <li><a [routerLink]="['./infinite-generator']">Infinite generator</a></li>
            <li><a [routerLink]="['./slot-machine']">Slot machine!</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class VirtualScrollDemo {}
