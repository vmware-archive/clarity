/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, AfterViewInit } from '@angular/core';

import { DateNavigationService } from './providers/date-navigation.service';
import { LocaleHelperService } from './providers/locale-helper.service';
import { ViewManagerService } from './providers/view-manager.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { ClrAriaLiveService } from '../../utils/a11y/aria-live.service';

@Component({
  selector: 'clr-daypicker',
  providers: [ClrAriaLiveService],
  templateUrl: './daypicker.html',
  host: { '[class.daypicker]': 'true' },
})
export class ClrDaypicker implements AfterViewInit {
  constructor(
    private _viewManagerService: ViewManagerService,
    private _dateNavigationService: DateNavigationService,
    private _localeHelperService: LocaleHelperService,
    public commonStrings: ClrCommonStringsService,
    private ariaLiveService: ClrAriaLiveService
  ) {}

  ngAfterViewInit() {
    /** @deprecated since 3.0, remove in 4.0 */
    this.ariaLiveService.announce(`${this.ariaLiveMonth} ${this.updateAriaLiveYear}`);
  }

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

  get ariaLiveMonth(): string {
    return this.commonStrings.parse(this.commonStrings.keys.daypickerSRCurrentMonthPhrase, {
      CURRENT_MONTH: this.calendarMonth,
    });
  }

  get updateAriaLiveYear(): string {
    return this.commonStrings.parse(this.commonStrings.keys.daypickerSRCurrentYearPhrase, {
      CURRENT_YEAR: this.calendarYear.toString(),
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
