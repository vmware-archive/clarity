/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-datepicker-in-template-driven-forms-demo',
  styleUrls: ['./datepicker.demo.scss'],
  templateUrl: './datepicker-in-template-driven-forms.html',
})
export class DatepickerInTemplateDrivenFormsDemo {
  name = 'Jane';
  date1 = '01/02/2015';
  date2 = '';

  date1Changed(date: Date): void {
    console.log('Valid Date1 Entered', date);
  }

  date2Changed(date: Date): void {
    console.log('Valid Date2 Entered', date);
  }
}
