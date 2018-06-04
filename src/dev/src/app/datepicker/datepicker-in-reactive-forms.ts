/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'clr-datepicker-in-reactive-forms-demo',
  // Note the .css extension here, not .scss. That's the best we can have at the moment.
  styleUrls: ['./datepicker.demo.scss'],
  templateUrl: './datepicker-in-reactive-forms.html',
})
export class DatepickerInReactiveForms {
  dateForm = new FormGroup({ date: new FormControl('03/05/2018'), name: new FormControl('Jane') });

  dateChanged(date: Date) {
    console.log(date);
  }
}
