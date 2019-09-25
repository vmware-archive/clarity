/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-datepicker-min-max-demo',
  templateUrl: './datepicker-min-max.html',
  styleUrls: ['./datepicker.demo.scss'],
})
export class DatepickerMinMaxDemo {
  minDate: string = '1990-03-15';
  maxDate: string = '2021-02-16';
  model;
}
