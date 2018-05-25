/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Subscription } from 'rxjs';

import { DayModel } from '../model/day.model';

import { DateNavigationService } from './date-navigation.service';

export default function() {
  describe('Date Navigation Service', () => {
    let dateNavigationService: DateNavigationService;

    function initalizeCalendar(selectedDay: DayModel) {
      dateNavigationService.selectedDay = selectedDay;
      dateNavigationService.initializeCalendar();
    }

    describe('Calendar Initialization', () => {
      beforeEach(() => {
        dateNavigationService = new DateNavigationService();
      });

      it('initializes the calendar to the current month and year if the selected date is not set', () => {
        const date: Date = new Date();
        expect(dateNavigationService.displayedCalendar).toBeUndefined();

        initalizeCalendar(null);

        expect(dateNavigationService.displayedCalendar).not.toBeUndefined();
        expect(dateNavigationService.displayedCalendar.month).toBe(date.getMonth());
        expect(dateNavigationService.displayedCalendar.year).toBe(date.getFullYear());
      });

      it('initializes the calendar to the selected date month and year, if the selected date is set', () => {
        expect(dateNavigationService.displayedCalendar).toBeUndefined();

        initalizeCalendar(new DayModel(2016, 1, 1));

        expect(dateNavigationService.displayedCalendar).not.toBeUndefined();
        expect(dateNavigationService.displayedCalendar.month).toBe(1);
        expect(dateNavigationService.displayedCalendar.year).toBe(2016);
      });

      it('provides access to todays date on calendar initialization', () => {
        initalizeCalendar(null);
        const date: Date = new Date();

        expect(dateNavigationService.today.date).toBe(date.getDate());
        expect(dateNavigationService.today.month).toBe(date.getMonth());
        expect(dateNavigationService.today.year).toBe(date.getFullYear());
      });

      it('provides access to todays day model on calendar initialization', () => {
        initalizeCalendar(null);
        const date: Date = new Date();

        expect(dateNavigationService.today.date).toBe(date.getDate());
        expect(dateNavigationService.today.month).toBe(date.getMonth());
        expect(dateNavigationService.today.year).toBe(date.getFullYear());
      });
    });

    describe('Calendar Navigation API', () => {
      beforeEach(() => {
        dateNavigationService = new DateNavigationService();
      });

      it('provides a function to update the Calendar Month', () => {
        initalizeCalendar(new DayModel(2015, 1, 1));
        expect(dateNavigationService.displayedCalendar.month).toBe(1);

        dateNavigationService.changeMonth(2);
        expect(dateNavigationService.displayedCalendar.month).toBe(2);
      });

      it('provides a function to update the Calendar Year', () => {
        initalizeCalendar(new DayModel(2016, 1, 1));
        expect(dateNavigationService.displayedCalendar.year).toBe(2016);

        dateNavigationService.changeYear(2018);
        expect(dateNavigationService.displayedCalendar.year).toBe(2018);
      });

      it('provides a function to move to the next month', () => {
        initalizeCalendar(new DayModel(2016, 11, 1));

        expect(dateNavigationService.displayedCalendar.year).toBe(2016);
        expect(dateNavigationService.displayedCalendar.month).toBe(11);

        dateNavigationService.moveToNextMonth();
        expect(dateNavigationService.displayedCalendar.year).toBe(2017);
        expect(dateNavigationService.displayedCalendar.month).toBe(0);

        dateNavigationService.moveToNextMonth();
        expect(dateNavigationService.displayedCalendar.year).toBe(2017);
        expect(dateNavigationService.displayedCalendar.month).toBe(1);
      });

      it('provides a function to move to the previous month', () => {
        initalizeCalendar(new DayModel(2017, 0, 1));

        expect(dateNavigationService.displayedCalendar.year).toBe(2017);
        expect(dateNavigationService.displayedCalendar.month).toBe(0);

        dateNavigationService.moveToPreviousMonth();
        expect(dateNavigationService.displayedCalendar.year).toBe(2016);
        expect(dateNavigationService.displayedCalendar.month).toBe(11);

        dateNavigationService.moveToPreviousMonth();
        expect(dateNavigationService.displayedCalendar.year).toBe(2016);
        expect(dateNavigationService.displayedCalendar.month).toBe(10);
      });

      it('provides a function to move to the current year and month', () => {
        initalizeCalendar(new DayModel(2017, 0, 1));
        const date: Date = new Date();

        expect(dateNavigationService.displayedCalendar.year).toBe(2017);
        expect(dateNavigationService.displayedCalendar.month).toBe(0);

        dateNavigationService.moveToCurrentMonth();
        expect(dateNavigationService.displayedCalendar.year).toBe(date.getFullYear());
        expect(dateNavigationService.displayedCalendar.month).toBe(date.getMonth());
      });

      it('does not regenerate the current calendar ' + 'when the displayed calendar is already current', () => {
        let count: number = 0;
        const sub: Subscription = dateNavigationService.displayedCalendarChange.subscribe(() => {
          count++;
        });

        initalizeCalendar(new DayModel(2017, 0, 1));
        expect(count).toBe(0);

        dateNavigationService.moveToCurrentMonth();
        expect(count).toBe(1);

        dateNavigationService.moveToCurrentMonth();
        expect(count).toBe(1);

        dateNavigationService.moveToCurrentMonth();
        expect(count).toBe(1);

        sub.unsubscribe();
      });

      it('supports the focused day property', () => {
        expect(dateNavigationService.focusedDay).toBeUndefined();
        dateNavigationService.focusedDay = new DayModel(2015, 2, 2);
        expect(dateNavigationService.focusedDay).not.toBeUndefined();
      });

      it('provides a method to update the selectedDay', () => {
        expect(dateNavigationService.notifySelectedDayChanged).toBeDefined();

        expect(dateNavigationService.selectedDay).toBeUndefined();

        const testDayModel: DayModel = new DayModel(2015, 1, 1);
        expect(dateNavigationService.notifySelectedDayChanged(testDayModel));

        expect(dateNavigationService.selectedDay).toEqual(testDayModel);
      });
    });

    describe('Subscriptions', () => {
      let sub: Subscription;

      beforeEach(() => {
        dateNavigationService = new DateNavigationService();
        initalizeCalendar(new DayModel(2015, 0, 25));
        dateNavigationService.focusedDay = new DayModel(2015, 0, 25);
      });

      afterEach(() => {
        sub.unsubscribe();
      });

      it('notifies when the calendar has changed', () => {
        let count: number = 0;
        sub = dateNavigationService.displayedCalendarChange.subscribe(() => {
          count++;
        });

        expect(count).toBe(0);

        dateNavigationService.moveToPreviousMonth();

        expect(count).toBe(1);

        dateNavigationService.moveToNextMonth();

        expect(count).toBe(2);
      });

      it('notifies when the focus day has changed but remains in the same calendar', () => {
        let count: number = 0;
        sub = dateNavigationService.focusedDayChange.subscribe(() => {
          count++;
        });

        // Navigate in the Calendar
        expect(count).toBe(0);
        dateNavigationService.incrementFocusDay(-7);

        expect(count).toBe(1);

        dateNavigationService.incrementFocusDay(-1);

        expect(count).toBe(2);

        dateNavigationService.incrementFocusDay(2);

        expect(count).toBe(3);

        // Navigate outside of the current calendar.
        dateNavigationService.incrementFocusDay(31);

        // Should expect no change
        expect(count).toBe(3);
      });

      it('notifies to update focus on the calendar when the user navigates using the keyboard', () => {
        let count: number = 0;
        sub = dateNavigationService.focusOnCalendarChange.subscribe(() => {
          count++;
        });

        expect(count).toBe(0);
        dateNavigationService.incrementFocusDay(1);

        expect(count).toBe(1);

        dateNavigationService.incrementFocusDay(7);

        expect(count).toBe(2);
      });

      it('notifies to update focus on the calendar when the user moves to the current month', () => {
        let count: number = 0;
        sub = dateNavigationService.focusOnCalendarChange.subscribe(() => {
          count++;
        });

        expect(count).toBe(0);
        dateNavigationService.moveToCurrentMonth();

        expect(count).toBe(1);
      });

      it('notifies the updated selectedDay', () => {
        let dayModel: DayModel;
        sub = dateNavigationService.selectedDayChange.subscribe((newDayModel: DayModel) => {
          dayModel = newDayModel;
        });

        const test: DayModel = new DayModel(2015, 1, 1);
        dateNavigationService.notifySelectedDayChanged(test);

        expect(dayModel).toEqual(test);
      });
    });
  });
}
