/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<form clrForm clrLayout="vertical">
  <input type="date" clrDate name="demo" [(ngModel)]="demo">
</form>
`;

@Component({
  selector: 'clr-datepicker-api-demo',
  templateUrl: './datepicker-api.demo.html',
  styleUrls: ['../datepicker.demo.scss'],
})
export class DatepickerAPIDemo {
  htmlExample = HTML_EXAMPLE;
  demo;
}
