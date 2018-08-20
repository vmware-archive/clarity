/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-datepicker-in-template-driven-forms-demo',
  // Note the .css extension here, not .scss. That's the best we can have at the moment.
  styleUrls: ['./datepicker.demo.scss'],
  templateUrl: './datepicker-in-template-driven-forms.html',
})
export class DatepickerInTemplateDrivenFormsDemo {
  name: string = 'Jane';
  date1: string = '01/02/2015';
  date2: string = '';

  date1Changed(date: Date): void {
    console.log('Valid Date1 Entered', date);
  }

  date2Changed(date: Date): void {
    console.log('Valid Date2 Entered', date);
  }
}
