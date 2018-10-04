/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const date1: Date = new Date(2015, 1, 1);
const date2: Date = new Date(2017, 4, 5);

@Component({
  selector: 'clr-datepicker-date-input-demo',
  // Note the .css extension here, not .scss. That's the best we can have at the moment.
  styleUrls: ['./datepicker.demo.scss'],
  templateUrl: './datepicker-date-input.html',
  // providers: [{provide: LOCALE_ID, useValue: "en"}],
  // providers: [{provide: LOCALE_ID, useValue: "ar-AE"}]
  // providers: [{provide: LOCALE_ID, useValue: "hi"}]
  // providers: [{provide: LOCALE_ID, useValue: "ak"}]
  // providers: [{provide: LOCALE_ID, useValue: "fr"}]
  // providers: [{provide: LOCALE_ID, useValue: "ru-UA"}]
  // providers: [{provide: LOCALE_ID, useValue: "de"}]
  // Do not remove the above comments. They are present to make sure that we can test different locales easily.
})
export class DatepickerDateInputDemo {
  date: Date = date1;
  dateStr: string;

  dateChanged(date: Date) {
    console.log('Datepicker Output Changed', date);
    if (date) {
      this.dateStr = date.toLocaleDateString();
    } else {
      this.dateStr = '';
    }
  }

  updateDate(): void {
    if (this.date === date1) {
      this.date = date2;
    } else {
      this.date = date1;
    }
  }
}
