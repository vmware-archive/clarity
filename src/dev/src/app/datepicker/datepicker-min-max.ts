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
  minDate: string = '2019-11-17';
  maxDate: string = '2019-11-19';
  model;

  toggleMaxDate() {
    if (this.minDate) {
      this.maxDate = '';
    } else {
      this.maxDate = '2019-11-19';
    }
  }

  toggleMinDate() {
    if (this.minDate) {
      this.minDate = null;
    } else {
      this.minDate = '2019-11-17';
    }
  }
}
