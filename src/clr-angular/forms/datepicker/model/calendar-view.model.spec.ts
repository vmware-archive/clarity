/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CalendarViewModel } from './calendar-view.model';
import { CalendarModel } from './calendar.model';
import { DayViewModel } from './day-view.model';
import { DayModel } from './day.model';
import { DateRange } from '../interfaces/date-range.interface';

export default function(): void {
  describe('CalendarViewModel', function() {
    const calJan2018: CalendarModel = new CalendarModel(2018, 0);
    const todaysDateInCal: DayModel = new DayModel(2018, 0, 1);
    const todaysDateNotInCal: DayModel = new DayModel(2018, 3, 25);
    const dateRange: DateRange = {
      minDate: new DayModel(2000, 1, 15),
      maxDate: new DayModel(2020, 1, 15),
    };

    function testCalendarViewDates(
      prev: number[],
      curr: number[],
      next: number[],
      calendarViewModel: CalendarViewModel
    ): void {
      for (const calendarView of calendarViewModel.calendarView) {
        for (const day of calendarView) {
          if (prev.length > 0) {
            expect(prev.splice(0, 1)[0]).toBe(day.dayModel.date);
          } else if (curr.length > 0) {
            expect(curr.splice(0, 1)[0]).toBe(day.dayModel.date);
          } else {
            expect(next.splice(0, 1)[0]).toBe(day.dayModel.date);
          }
        }
      }
      expect(prev.length).toBe(0);
      expect(curr.length).toBe(0);
      expect(next.length).toBe(0);
    }

    function testCalendarViewSelectedDates(
      calendarViewModel: CalendarViewModel,
      x: number,
      y: number,
      checkAllFalse: boolean
    ) {
      const calView: DayViewModel[][] = calendarViewModel.calendarView;
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
          if (checkAllFalse) {
            expect(calView[i][j].isSelected).toBe(false);
          } else if (i === x && j === y) {
            expect(calView[i][j].isSelected).toBe(true);
          } else {
            expect(calView[i][j].isSelected).toBe(false);
          }
        }
      }
    }

    function testCalendarViewFocusableDates(calendarViewModel: CalendarViewModel, x: number, y: number) {
      const calView: DayViewModel[][] = calendarViewModel.calendarView;
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
          if (i === x && j === y) {
            expect(calView[i][j].isFocusable).toBe(true);
          } else {
            expect(calView[i][j].isFocusable).toBe(false);
          }
        }
      }
    }

    function checkMonthYearAndExcluded(year: number, month: number, dayViewModel: DayViewModel[], flag: boolean) {
      for (const day of dayViewModel) {
        expect(day.dayModel.year).toBe(year);
        expect(day.dayModel.month).toBe(month);
        expect(day.isExcluded).toBe(flag);
      }
    }

    function testCalendarDayViews(
      year: number,
      month: number,
      prevDays: number[],
      noOfCurrDays: number,
      nextDays: number[]
    ): void {
      const calViewModel: CalendarViewModel = new CalendarViewModel(
        new CalendarModel(year, month),
        null,
        null,
        todaysDateInCal,
        0,
        dateRange
      );
      const calView: DayViewModel[][] = calViewModel.calendarView;

      let count = 1;
      for (const view of calView) {
        for (const day of view) {
          if (prevDays.length > 0) {
            expect(prevDays[0]).toBe(day.dayModel.date);
            prevDays.splice(0, 1);
            expect(day.isExcluded).toBe(true);
          } else if (count <= noOfCurrDays) {
            expect(count).toBe(day.dayModel.date);
            expect(day.isExcluded).toBe(false);
            count++;
          } else if (nextDays.length > 0) {
            expect(nextDays[0]).toBe(day.dayModel.date);
            nextDays.splice(0, 1);
            expect(day.isExcluded).toBe(true);
          }
        }
      }

      expect(prevDays.length).toBe(0);
      expect(count).toBe(noOfCurrDays + 1);
      expect(nextDays.length).toBe(0);
    }

    function testCalendarDisabledDayViews(year: number, month: number) {
      // Uses the given year/month to create a new CalendarModel
      // Note that dateRange is defined above for use in multiple places
      const calendar = new CalendarViewModel(new CalendarModel(year, month), null, null, todaysDateInCal, 0, dateRange);
      // calView is an array of 'week' arrays that represents the six possible lines (including days for end of previous / beginning of next month)
      // for the days of the month.
      const calView: DayViewModel[][] = calendar.calendarView;
      for (const view of calView) {
        // iterate all the week arrays
        for (const day of view) {
          // iterate all of the days
          if (day.dayModel.toComparisonString() < dateRange.minDate.toComparisonString()) {
            expect(day.isDisabled).toBe(true, `Expected ${day.dayModel.toDateString()} to be disabled`); // if the date is less than the minDate should be  disabled
          } else if (day.dayModel.toComparisonString() > dateRange.maxDate.toComparisonString()) {
            expect(day.isDisabled).toBe(true, `Expected ${day.dayModel.toDateString()} to be disabled`); // if the date is above the max date it should be disabled
          } else {
            expect(day.isDisabled).toBe(false, `Expected ${day.dayModel.toDateString()} to be enabled`); // otherwise, the date should not be disabled
          }
        }
      }
    }

    it('generates a CalendarViewModel with the CalendarView of 6x7', () => {
      const testJan2018: CalendarViewModel = new CalendarViewModel(
        calJan2018,
        null,
        null,
        todaysDateInCal,
        0,
        dateRange
      );

      expect(testJan2018).not.toBeNull();
      expect(testJan2018.calendarView).not.toBeNull();
      expect(testJan2018.calendarView.length).toBe(6);

      for (const view of testJan2018.calendarView) {
        expect(view.length).toBe(7);
      }
    });

    it('generates the calendar view with the correct prev, curr and next day views', () => {
      // Jan 2018
      testCalendarDayViews(2018, 0, [31], 31, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

      // July 2018
      testCalendarDayViews(2018, 6, [], 31, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

      // Feb 2015
      testCalendarDayViews(2015, 1, [], 28, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    });

    it('generates the calendar with the correct month, year and excluded values', () => {
      const testJan2018: CalendarViewModel = new CalendarViewModel(
        calJan2018,
        null,
        null,
        todaysDateInCal,
        0,
        dateRange
      );

      const calView: DayViewModel[][] = testJan2018.calendarView;

      let prevCount = 1;
      let currCount = 31;

      const prev: DayViewModel[] = [];
      const curr: DayViewModel[] = [];
      const next: DayViewModel[] = [];

      for (const view of calView) {
        for (const day of view) {
          if (prevCount > 0) {
            prevCount--;
            prev.push(day);
          } else if (currCount > 0) {
            currCount--;
            curr.push(day);
          } else {
            next.push(day);
          }
        }
      }

      checkMonthYearAndExcluded(2017, 11, prev, true);
      checkMonthYearAndExcluded(2018, 0, curr, false);
      checkMonthYearAndExcluded(2018, 1, next, true);
    });

    it('generates a CalendarView w.r.t to the first day of the week', () => {
      const testJan2018US: CalendarViewModel = new CalendarViewModel(
        calJan2018,
        null,
        null,
        todaysDateInCal,
        0,
        dateRange
      );
      const prevUS: number[] = [31];
      const currUS: number[] = Array(31)
        .fill(0)
        .map((_e, i) => i + 1);
      const nextUS: number[] = Array(10)
        .fill(0)
        .map((_e, i) => i + 1);
      testCalendarViewDates(prevUS, currUS, nextUS, testJan2018US);

      const testJan2018Fr = new CalendarViewModel(calJan2018, null, null, todaysDateInCal, 1, dateRange);
      const prevFr: number[] = [];
      const currFr: number[] = Array(31)
        .fill(0)
        .map((_e, i) => i + 1);
      const nextFr: number[] = Array(11)
        .fill(0)
        .map((_e, i) => i + 1);
      testCalendarViewDates(prevFr, currFr, nextFr, testJan2018Fr);

      const testJan2018Random = new CalendarViewModel(calJan2018, null, null, todaysDateInCal, 5, dateRange);
      const prevRandom: number[] = [29, 30, 31];
      const currRandom: number[] = Array(31)
        .fill(0)
        .map((_e, i) => i + 1);
      const nextRandom: number[] = Array(8)
        .fill(0)
        .map((_e, i) => i + 1);
      testCalendarViewDates(prevRandom, currRandom, nextRandom, testJan2018Random);
    });

    it('generates a CalendarView with the correct selected flag', () => {
      let dayModel: DayModel = new DayModel(2018, 0, 5);
      let testJan2018US: CalendarViewModel = new CalendarViewModel(
        calJan2018,
        dayModel,
        null,
        todaysDateInCal,
        0,
        dateRange
      );

      // Only 1/5/2018 should be true
      testCalendarViewSelectedDates(testJan2018US, 0, 5, false);

      dayModel = new DayModel(2017, 0, 5);
      testJan2018US = new CalendarViewModel(calJan2018, dayModel, null, todaysDateInCal, 0, dateRange);

      // Everything should be false
      testCalendarViewSelectedDates(testJan2018US, 0, 5, true);
    });

    it(
      'sets the focusable date to today if focused ' + 'or selected is not BUT todays date IS present in the calendar',
      () => {
        const testJan2018US: CalendarViewModel = new CalendarViewModel(
          calJan2018,
          null,
          null,
          todaysDateInCal,
          0,
          dateRange
        );

        // Only 1/1/2018 should be true
        testCalendarViewFocusableDates(testJan2018US, 0, 1);
      }
    );

    it(
      'sets the focusable date to 15th of that calendar if focused, ' +
        'selected or todays date is not present in the calendar',
      () => {
        const testJan2018US: CalendarViewModel = new CalendarViewModel(
          calJan2018,
          null,
          null,
          todaysDateNotInCal,
          0,
          dateRange
        );

        // Only 1/15/2018 should be true
        testCalendarViewFocusableDates(testJan2018US, 2, 1);
      }
    );

    it('set the focusable date to the selected date if the focused date is null', () => {
      const dayModel: DayModel = new DayModel(2018, 0, 5);
      const testJan2018US: CalendarViewModel = new CalendarViewModel(
        calJan2018,
        dayModel,
        null,
        todaysDateInCal,
        0,
        dateRange
      );

      // Only 1/5/2018 should be true
      testCalendarViewFocusableDates(testJan2018US, 0, 5);
    });

    it('sets the focusable date to the focused date', () => {
      const dayModel: DayModel = new DayModel(2018, 0, 5);
      const testJan2018US: CalendarViewModel = new CalendarViewModel(
        calJan2018,
        null,
        dayModel,
        todaysDateInCal,
        0,
        dateRange
      );

      // Only 1/5/2018 should be true
      testCalendarViewFocusableDates(testJan2018US, 0, 5);
    });

    it('sets the old focusable flag to false before setting the new one to true', () => {
      let dayModel: DayModel = new DayModel(2018, 0, 5);
      const testJan2018US: CalendarViewModel = new CalendarViewModel(
        calJan2018,
        null,
        dayModel,
        todaysDateInCal,
        0,
        dateRange
      );

      // Only 1/15/2018 should be true
      testCalendarViewFocusableDates(testJan2018US, 0, 5);

      dayModel = new DayModel(2018, 0, 24);
      testJan2018US.updateFocusableDay(dayModel);

      // Only 1/24/2018 should be true
      testCalendarViewFocusableDates(testJan2018US, 3, 3);

      dayModel = new DayModel(2018, 0, 13);
      testJan2018US.updateFocusableDay(dayModel);

      // Only 1/24/2018 should be true
      testCalendarViewFocusableDates(testJan2018US, 1, 6);
    });

    it('disables dates which are under the bottom range', () => {
      // January 2000 / 1 to 15 should be disabled.
      testCalendarDisabledDayViews(2000, 1);

      // February 2000 / all should be disabled.
      testCalendarDisabledDayViews(2000, 2);

      // January 1999 / all should be disabled
      testCalendarDisabledDayViews(1999, 1);
    });

    it('disables dates which are above the maxDate', () => {
      // January 2020 / 16 to 31 should be disabled
      testCalendarDisabledDayViews(2020, 1);

      // February 2020 / all should be disabled.
      testCalendarDisabledDayViews(2020, 2);

      // January 2021 / all should be disabled
      testCalendarDisabledDayViews(2021, 1);
    });

    it('enables dates which are in the date range', () => {
      // January 2010 / all should be enabled
      testCalendarDisabledDayViews(2010, 1);
    });
  });
}
