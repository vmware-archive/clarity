/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const DATE1: string = '01/02/2015';
const DATE2: string = '05/05/2017';

@Component({
  selector: 'clr-ng-model-wrapped-present-datepicker-demo',
  // Note the .css extension here, not .scss. That's the best we can have at the moment.
  styleUrls: ['./datepicker.demo.scss'],
  templateUrl: './ngmodel-wrapper-explicit-wrapper.html',
  // providers: [{provide: LOCALE_ID, useValue: "en"}],
  // providers: [{provide: LOCALE_ID, useValue: "ar-AE"}]
  // providers: [{provide: LOCALE_ID, useValue: "hi"}]
  // providers: [{provide: LOCALE_ID, useValue: "ak"}]
  // providers: [{provide: LOCALE_ID, useValue: "fr"}]
  // providers: [{provide: LOCALE_ID, useValue: "ru-UA"}]
  // providers: [{provide: LOCALE_ID, useValue: "de"}]
  // Do not remove the above comments. They are present to make sure that we can test different locales easily.
})
export class NgModelExplicitWrapperDemo {
  model: string = DATE1;

  updateDate(): void {
    if (this.model === DATE1) {
      this.model = DATE2;
    } else {
      this.model = DATE1;
    }
  }
}
