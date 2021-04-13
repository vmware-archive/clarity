/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-datepicker-css-regression-demo',
  styleUrls: ['./datepicker.demo.scss'],
  templateUrl: './css-regression.html',
})
export class DatepickerCSSRegressionDemo {
  date: Date = new Date(2017, 4, 1);
}
