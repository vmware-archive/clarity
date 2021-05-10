/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { DateNavigationService } from './providers/date-navigation.service';
import { LocaleHelperService } from './providers/locale-helper.service';
import { ViewManagerService } from './providers/view-manager.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';

@Component({
  selector: 'clr-daypicker',
  templateUrl: './daypicker.html',
  host: { '[class.daypicker]': 'true' },
})
export class ClrDaypicker {
  constructor(
    private _viewManagerService: ViewManagerService,
    private _dateNavigationService: DateNavigationService,
    private _localeHelperService: LocaleHelperService,
    public commonStrings: ClrCommonStringsService
  ) {}

  get monthAttrString(): string {
    return this.commonStrings.parse(this.commonStrings.keys.datepickerSelectMonthText, {
      CALENDAR_MONTH: this.calendarMonth,
    });
  }

  get yearAttrString(): string {
    return this.commonStrings.parse(this.commonStrings.keys.datepickerSelectYearText, {
      CALENDAR_YEAR: this.calendarYear.toString(),
    });
  }

  /**
   * Calls the ViewManagerService to change to the monthpicker view.
   */
  changeToMonthView(): void {
    this._viewManagerService.changeToMonthView();
  }

  /**
   * Calls the ViewManagerService to change to the yearpicker view.
   */
  changeToYearView(): void {
    this._viewManagerService.changeToYearView();
  }

  /**
   * Returns the month value of the calendar in the TranslationWidth.Abbreviated format.
   */
  get calendarMonth(): string {
    return this._localeHelperService.localeMonthsAbbreviated[this._dateNavigationService.displayedCalendar.month];
  }

  /**
   * Returns the year value of the calendar.
   */
  get calendarYear(): number {
    return this._dateNavigationService.displayedCalendar.year;
  }

  /**
   * Calls the DateNavigationService to move to the next month.
   */
  nextMonth(): void {
    this._dateNavigationService.moveToNextMonth();
  }

  /**
   * Calls the DateNavigationService to move to the previous month.
   */
  previousMonth(): void {
    this._dateNavigationService.moveToPreviousMonth();
  }

  /**
   * Calls the DateNavigationService to move to the current month.
   */
  currentMonth(): void {
    this._dateNavigationService.moveToCurrentMonth();
  }
}
