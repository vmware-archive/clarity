/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { itIgnore } from '../../../../tests/tests.helpers';
import { TestContext } from '../../data/datagrid/helpers.spec';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '../../utils/key-codes/key-codes';

import { ClrCalendar } from './calendar';
import { DayModel } from './model/day.model';
import { DateFormControlService } from './providers/date-form-control.service';
import { DateIOService } from './providers/date-io.service';
import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerFocusService } from './providers/datepicker-focus.service';
import { LocaleHelperService } from './providers/locale-helper.service';
import { ViewManagerService } from './providers/view-manager.service';
import { createKeyboardEvent } from './utils/test-utils';

export default function() {
  describe('Calendar Component', () => {
    let context: TestContext<ClrCalendar, TestComponent>;
    let dateNavigationService: DateNavigationService;

    beforeEach(function() {
      dateNavigationService = new DateNavigationService();
      // Initializing selected day just to make sure that previous and next month tests become easier
      dateNavigationService.selectedDay = new DayModel(2015, 0, 1);
      dateNavigationService.initializeCalendar();

      context = this.create(ClrCalendar, TestComponent, [
        { provide: DateNavigationService, useValue: dateNavigationService },
        DateIOService,
        IfOpenService,
        ViewManagerService,
        LocaleHelperService,
        DatepickerFocusService,
        DateFormControlService,
      ]);
    });

    describe('View Basics', () => {
      it('renders the days', () => {
        const days: HTMLElement[] = context.clarityElement.querySelectorAll('clr-day');
        expect(days.length).toBe(42);
      });

      it('renders the weekdays', () => {
        const days: HTMLElement[] = context.clarityElement.querySelectorAll('.weekdays .calendar-cell');
        expect(days.length).toBe(7);
      });
    });

    describe('Typescript API', () => {
      function assertFocusedDay(year: number, month: number, day: number) {
        expect(dateNavigationService.focusedDay.date).toBe(day);
        expect(dateNavigationService.focusedDay.month).toBe(month);
        expect(dateNavigationService.focusedDay.year).toBe(year);
      }

      it('generates a CalendarViewModel on initialization', () => {
        // Testing for the Jan 2015 calendar since that was the selected date in
        // beforeEach before the calendar was initialized
        expect(context.clarityDirective.calendarViewModel).not.toBeNull();
        expect(context.clarityDirective.calendarViewModel.calendar.month).toBe(0);
        expect(context.clarityDirective.calendarViewModel.calendar.year).toBe(2015);
      });

      it('has access to the selectedDay', () => {
        expect(context.clarityDirective.selectedDay.month).toBe(0);
        expect(context.clarityDirective.selectedDay.year).toBe(2015);
        expect(context.clarityDirective.selectedDay.date).toBe(1);
      });

      it('has access to todays date', () => {
        const date: Date = new Date();
        expect(context.clarityDirective.today.date).toBe(date.getDate());
        expect(context.clarityDirective.today.month).toBe(date.getMonth());
        expect(context.clarityDirective.today.year).toBe(date.getFullYear());
      });

      it('has access to the CalendarModel', () => {
        expect(context.clarityDirective.calendar.month).toBe(0);
        expect(context.clarityDirective.calendar.year).toBe(2015);
      });

      // @TODO figure out why this fails in IE
      itIgnore(['ie'], 'has access to the focusable day', () => {
        expect(context.clarityDirective.focusedDay.month).toBe(0);
        expect(context.clarityDirective.focusedDay.year).toBe(2015);
        expect(context.clarityDirective.focusedDay.date).toBe(1);
      });

      it('has access to the locale days', () => {
        expect(context.clarityDirective.localeDaysNarrow).not.toBeNull();
        expect(context.clarityDirective.localeDaysNarrow.length).toBe(7);
      });

      // IE doesn't handle KeyboardEvent constructor
      itIgnore(['ie'], 'decrements the focused day by 7 on up arrow', () => {
        dateNavigationService.selectedDay = new DayModel(2015, 0, 25);
        dateNavigationService.initializeCalendar();
        dateNavigationService.focusedDay = new DayModel(2015, 0, 2);

        const upArrowEvent: KeyboardEvent = createKeyboardEvent(UP_ARROW, 'keydown');

        context.clarityDirective.onKeyDown(upArrowEvent);

        assertFocusedDay(2014, 11, 26);

        context.clarityDirective.onKeyDown(upArrowEvent);

        assertFocusedDay(2014, 11, 19);
      });

      // IE doesn't handle KeyboardEvent constructor
      itIgnore(['ie'], 'increments the focused day by 7 on down arrow', () => {
        dateNavigationService.selectedDay = new DayModel(2014, 11, 2);
        dateNavigationService.initializeCalendar();
        dateNavigationService.focusedDay = new DayModel(2014, 11, 25);

        const downArrowEvent: KeyboardEvent = createKeyboardEvent(DOWN_ARROW, 'keydown');

        context.clarityDirective.onKeyDown(downArrowEvent);

        assertFocusedDay(2015, 0, 1);

        context.clarityDirective.onKeyDown(downArrowEvent);

        assertFocusedDay(2015, 0, 8);
      });

      // IE doesn't handle KeyboardEvent constructor
      itIgnore(['ie'], 'decrements the focused day by 1 on left arrow', () => {
        dateNavigationService.selectedDay = new DayModel(2015, 0, 5);
        dateNavigationService.initializeCalendar();
        dateNavigationService.focusedDay = new DayModel(2015, 0, 2);

        const leftArrowEvent: KeyboardEvent = createKeyboardEvent(LEFT_ARROW, 'keydown');

        context.clarityDirective.onKeyDown(leftArrowEvent);

        assertFocusedDay(2015, 0, 1);

        context.clarityDirective.onKeyDown(leftArrowEvent);

        assertFocusedDay(2014, 11, 31);
      });

      // IE doesn't handle KeyboardEvent constructor
      itIgnore(['ie'], 'increments the focused day by 1 on right arrow', () => {
        dateNavigationService.selectedDay = new DayModel(2014, 11, 2);
        dateNavigationService.initializeCalendar();
        dateNavigationService.focusedDay = new DayModel(2014, 11, 31);

        const rightArrowEvent: KeyboardEvent = createKeyboardEvent(RIGHT_ARROW, 'keydown');

        context.clarityDirective.onKeyDown(rightArrowEvent);

        assertFocusedDay(2015, 0, 1);

        context.clarityDirective.onKeyDown(rightArrowEvent);

        assertFocusedDay(2015, 0, 2);
      });
    });
  });
}

@Component({
  template: `
        <clr-calendar></clr-calendar>
    `,
})
class TestComponent {}
