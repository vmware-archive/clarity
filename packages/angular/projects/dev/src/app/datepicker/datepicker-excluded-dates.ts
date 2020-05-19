/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-datepicker-excluded-dates-demo',
  templateUrl: './datepicker-excluded-dates.html',
  styleUrls: ['./datepicker.demo.scss'],
})
export class DatepickerExcludedDatesDemo {
  model = '04/15/2017';
  dayRanges = [['2020-06-01', '2020-06-03', '2020-06-06', '2020-06-10']];
  weekRanges = [
    ['2020-01-06', '2020-01-12'],
    ['2020-01-20', '2020-01-26'],
    ['2020-02-03', '2020-02-09'],
    ['2020-02-17', '2020-02-23'],
  ];
  monthRanges = [
    ['2020-01-01', '2020-01-31'],
    ['2020-03-01', '2020-03-31'],
    ['2020-05-01', '2020-05-31'],
  ];
  ranges = this.weekRanges;
}
