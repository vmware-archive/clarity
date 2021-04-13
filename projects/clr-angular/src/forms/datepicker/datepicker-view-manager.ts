/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { DatepickerFocusService } from './providers/datepicker-focus.service';
import { ViewManagerService } from './providers/view-manager.service';

@Component({
  selector: 'clr-datepicker-view-manager',
  templateUrl: './datepicker-view-manager.html',
  providers: [DatepickerFocusService],
  host: {
    '[class.datepicker]': 'true',
    '[attr.aria-modal]': 'true',
  },
})
export class ClrDatepickerViewManager {
  constructor(private viewManagerService: ViewManagerService) {}

  /**
   * Returns if the current view is the monthpicker.
   */
  get isMonthView(): boolean {
    return this.viewManagerService.isMonthView;
  }

  /**
   * Returns if the current view is the yearpicker.
   */
  get isYearView(): boolean {
    return this.viewManagerService.isYearView;
  }

  /**
   * Returns if the current view is the daypicker.
   */
  get isDayView(): boolean {
    return this.viewManagerService.isDayView;
  }
}
