/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';

import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '../../utils/key-codes/key-codes';

import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerFocusService } from './providers/datepicker-focus.service';
import { LocaleHelperService } from './providers/locale-helper.service';
import { ViewManagerService } from './providers/view-manager.service';

@Component({
  selector: 'clr-monthpicker',
  template: `
        <button
            type="button"
            class="calendar-btn month"
            *ngFor="let month of monthNames; let monthIndex = index"
            (click)="changeMonth(monthIndex)"
            [class.is-selected]="monthIndex === calendarMonthIndex"
            [attr.tabindex]="getTabIndex(monthIndex)">
            {{month}}
        </button>
    `,
  host: {
    '[class.monthpicker]': 'true',
  },
})
export class ClrMonthpicker implements AfterViewInit {
  constructor(
    private _viewManagerService: ViewManagerService,
    private _localeHelperService: LocaleHelperService,
    private _dateNavigationService: DateNavigationService,
    private _datepickerFocusService: DatepickerFocusService,
    private _elRef: ElementRef
  ) {
    this._focusedMonthIndex = this.calendarMonthIndex;
  }

  /**
   * Keeps track of the current focused month.
   */
  private _focusedMonthIndex: number;

  /**
   * Gets the months array which is used to rendered the monthpicker view.
   * Months are in the TranslationWidth.Wide format.
   */
  get monthNames(): ReadonlyArray<string> {
    return this._localeHelperService.localeMonthsWide;
  }

  /**
   * Gets the month value of the Calendar.
   */
  get calendarMonthIndex(): number {
    return this._dateNavigationService.displayedCalendar.month;
  }

  /**
   * Calls the DateNavigationService to update the month value of the calendar.
   * Also changes the view to the daypicker.
   */
  changeMonth(monthIndex: number) {
    this._dateNavigationService.changeMonth(monthIndex);
    this._viewManagerService.changeToDayView();
  }

  /**
   * Compares the month passed to the focused month and returns the tab index.
   */
  getTabIndex(monthIndex: number): number {
    return monthIndex === this._focusedMonthIndex ? 0 : -1;
  }

  /**
   * Handles the Keyboard arrow navigation for the monthpicker.
   */
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // NOTE: Didn't move this to the date navigation service because
    // the logic is fairly simple and it didn't make sense for me
    // to create extra observables just to move this logic to the service.
    if (event) {
      const keyCode: number = event.keyCode;
      if (keyCode === UP_ARROW && this._focusedMonthIndex > 0) {
        event.preventDefault();
        this._focusedMonthIndex--;
        this._datepickerFocusService.focusCell(this._elRef);
      } else if (keyCode === DOWN_ARROW && this._focusedMonthIndex < 11) {
        event.preventDefault();
        this._focusedMonthIndex++;
        this._datepickerFocusService.focusCell(this._elRef);
      } else if (keyCode === RIGHT_ARROW && this._focusedMonthIndex < 6) {
        event.preventDefault();
        this._focusedMonthIndex = this._focusedMonthIndex + 6;
        this._datepickerFocusService.focusCell(this._elRef);
      } else if (keyCode === LEFT_ARROW && this._focusedMonthIndex > 5) {
        event.preventDefault();
        this._focusedMonthIndex = this._focusedMonthIndex - 6;
        this._datepickerFocusService.focusCell(this._elRef);
      }
    }
  }

  /**
   * Focuses on the current calendar month when the View is initialized.
   */
  ngAfterViewInit() {
    this._datepickerFocusService.focusCell(this._elRef);
  }
}
