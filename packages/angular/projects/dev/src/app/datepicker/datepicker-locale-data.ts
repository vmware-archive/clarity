/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-datepicker-locale-data-demo',
  styleUrls: ['./datepicker.demo.scss'],
  template: `
    <h6>Locale Data</h6>
    <div class="clr-row">
      <div class="clr-col-4">
        <ul>
          <li><a [routerLink]="['./de']">DE</a></li>
          <li><a [routerLink]="['./hi']">HI</a></li>
        </ul>
      </div>
      <div class="clr-col-4">
        <ul>
          <li><a [routerLink]="['./ak']">AK</a></li>
          <li><a [routerLink]="['./ar']">AR</a></li>
        </ul>
      </div>
      <div class="clr-col-4">
        <ul>
          <li><a [routerLink]="['./kkj']">KKJ</a></li>
          <li><a [routerLink]="['./hr']">HR</a></li>
        </ul>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class DatepickerLocaleData {}
