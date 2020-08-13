/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<form clrForm>
    <clr-date-container>
        <label>Basic Demo</label>
        <input type="date" clrDate name="demo" [(ngModel)]="demo">
    </clr-date-container>
</form>
`;

const MIN_EXAMPLE = `
<form clrForm>
  <clr-date-container>
    <label>Min date: 2019-11-17</label>
    <input type="date" clrDate name="demo" [(ngModel)]="demo" min="2019-11-17">
  </clr-date-container>
</form>
`;
const MAX_EXAMPLE = `
<form clrForm>
  <clr-date-container>
    <label>Max date: 2019-11-19</label>
    <input type="date" clrDate name="demo" [(ngModel)]="demo" max="2019-11-19">
  </clr-date-container>
</form>
`;
const MIN_MAX_EXAMPLE = `
<form clrForm>
  <clr-date-container>
    <label>Min date: 2019-11-17 AND Max date: 2019-11-19</label>
    <input type="date" clrDate name="demo" [(ngModel)]="demo" min="2019-11-17" max="2019-11-19">
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
