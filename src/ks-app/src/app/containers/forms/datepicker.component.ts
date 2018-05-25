/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import {
  ClrCalendar,
  ClrDateContainer,
  ClrDateInput,
  ClrDatepickerViewManager,
  ClrDay,
  ClrDaypicker,
  ClrMonthpicker,
  ClrYearpicker,
} from '@clr/angular';

@Component({ templateUrl: './datepicker.component.html' })
export class KSDatepicker {
  /**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   */

  private aDateContainer: ClrDateContainer;
  private aDaypicker: ClrDaypicker;
  private aDateInput: ClrDateInput;
  private aDatepickerViewManager: ClrDatepickerViewManager;
  private aClrCalendar: ClrCalendar;
  private aClrMonthpicker: ClrMonthpicker;
  private aClrYearpicker: ClrYearpicker;
  private aClrDay: ClrDay;

  model: string = '01/02/2015';
  model1: string = '01/02/2017';
  date: Date = new Date();
  date1: Date = new Date();
}
