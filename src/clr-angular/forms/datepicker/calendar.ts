/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '../../utils/key-codes/key-codes';

import { CalendarViewModel } from './model/calendar-view.model';
import { CalendarModel } from './model/calendar.model';
import { DayModel } from './model/day.model';
import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerFocusService } from './providers/datepicker-focus.service';
import { LocaleHelperService } from './providers/locale-helper.service';
import { NO_OF_DAYS_IN_A_WEEK } from './utils/constants';

@Component({ selector: 'clr-calendar', templateUrl: './calendar.html' })
export class ClrCalendar implements OnDestroy {
  private _subs: Subscription[] = [];

  constructor(
    private _localeHelperService: LocaleHelperService,
    private _dateNavigationService: DateNavigationService,
    private _datepickerFocusService: DatepickerFocusService,
    private _elRef: ElementRef
  ) {
    this.generateCalendarView();
    this.initializeSubscriptions();
  }

  /**
   * Calendar View Model to generate the Calendar.
   */
  calendarViewModel: CalendarViewModel;

  /**
   * Gets the locale days according to the TranslationWidth.Narrow format.
   */
  get localeDaysNarrow(): ReadonlyArray<string> {
    return this._localeHelperService.localeDaysNarrow;
  }

  get calendar(): CalendarModel {
    return this._dateNavigationService.displayedCalendar;
  }

  get selectedDay(): DayModel {
    return this._dateNavigationService.selectedDay;
  }

  get focusedDay(): DayModel {
    return this._dateNavigationService.focusedDay;
  }

  get today(): DayModel {
    return this._dateNavigationService.today;
  }

  /**
   * Initialize subscriptions to:
   * 1. update the calendar view model.
   * 2. update the focusable day in the calendar view model.
   * 3. focus on the focusable day in the calendar.
   */
  private initializeSubscriptions(): void {
    this._subs.push(
      this._dateNavigationService.displayedCalendarChange.subscribe(() => {
        this.generateCalendarView();
      })
    );

    this._subs.push(
      this._dateNavigationService.focusedDayChange.subscribe((focusedDay: DayModel) => {
        this.calendarViewModel.updateFocusableDay(focusedDay);
      })
    );

    this._subs.push(
      this._dateNavigationService.focusOnCalendarChange.subscribe(() => {
        this._datepickerFocusService.focusCell(this._elRef);
      })
    );
  }

  /**
   * Generates the Calendar View based on the calendar retrieved from the DateNavigationService.
   */
  private generateCalendarView(): void {
    this.calendarViewModel = new CalendarViewModel(
      this.calendar,
      this.selectedDay,
      this.focusedDay,
      this.today,
      this._localeHelperService.firstDayOfWeek
    );
  }

  /**
   * Delegates Keyboard arrow navigation to the DateNavigationService.
   */
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event && this.focusedDay) {
      switch (event.keyCode) {
        case UP_ARROW:
          event.preventDefault();
          this._dateNavigationService.incrementFocusDay(-1 * NO_OF_DAYS_IN_A_WEEK);
          break;
        case DOWN_ARROW:
          event.preventDefault();
          this._dateNavigationService.incrementFocusDay(NO_OF_DAYS_IN_A_WEEK);
          break;
        case LEFT_ARROW:
          event.preventDefault();
          this._dateNavigationService.incrementFocusDay(-1);
          break;
        case RIGHT_ARROW:
          event.preventDefault();
          this._dateNavigationService.incrementFocusDay(1);
          break;
        default:
          break; // No default case. TSLint x-(
      }
    }
  }

  /**
   * Focuses on the focusable day when the Calendar View is initialized.
   */
  ngAfterViewInit() {
    this._datepickerFocusService.focusCell(this._elRef);
  }

  /**
   * Unsubscribe from subscriptions.
   */
  ngOnDestroy(): void {
    this._subs.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
