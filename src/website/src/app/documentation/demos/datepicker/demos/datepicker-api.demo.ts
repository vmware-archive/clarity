/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<form clrForm clrLayout="vertical">
  <clr-date-container>
    <input type="date" clrDate name="demo" [(ngModel)]="demo">
  </clr-date-container>
</form>
`;

const MIN_EXAMPLE = `
<form clrForm clrLayout="vertical">
  <clr-date-container>
    <input type="date" clrDate name="demo" [(ngModel)]="demo" min="2019-11-11">
  </clr-date-container>
</form>
`;
const MAX_EXAMPLE = `
  <clr-date-container>
    <input type="date" clrDate name="demo" [(ngModel)]="demo" max="2019-11-11">
  </clr-date-container>
</form>
`;
const MIN_MAX_EXAMPLE = `
  <clr-date-container>
    <input type="date" clrDate name="demo" [(ngModel)]="demo" min="2019-11-11" max="2019-12-12">
  </clr-date-container>
</form>
`;
@Component({
  selector: 'clr-datepicker-api-demo',
  templateUrl: './datepicker-api.demo.html',
  styleUrls: ['../datepicker.demo.scss'],
})
export class DatepickerAPIDemo {
  htmlExample = HTML_EXAMPLE;
  minExample = MIN_EXAMPLE;
  maxExample = MAX_EXAMPLE;
  minMaxExample = MIN_MAX_EXAMPLE;
  demo;
}
