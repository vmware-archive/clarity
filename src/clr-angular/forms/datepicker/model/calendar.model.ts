/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { getNumberOfDaysInTheMonth } from '../utils/date-utils';

import { DayModel } from './day.model';

export class CalendarModel {
  constructor(public readonly year: number, public readonly month: number) {
    this.initializeDaysInCalendar();
  }

  days: DayModel[];

  /**
   * Populates the days array with the DayModels in the current Calendar.
   */
  private initializeDaysInCalendar(): void {
    const noOfDaysInCalendar: number = getNumberOfDaysInTheMonth(this.year, this.month);
    this.days = Array(noOfDaysInCalendar)
      .fill(null)
      .map((date, index) => {
        return new DayModel(this.year, this.month, index + 1);
      });
  }

  /**
   * Checks if the calendar passed is equal to the current calendar.
   */
  isEqual(calendar: CalendarModel) {
    if (calendar) {
      return this.year === calendar.year && this.month === calendar.month;
    }
    return false;
  }

  /**
   * Checks if a DayModel is in the Calendar
   */
  isDayInCalendar(day: DayModel): boolean {
    if (day) {
      return this.year === day.year && this.month === day.month;
    }
    return false;
  }

  /**
   * Returns CalendarModel of the previous month.
   */
  previousMonth(): CalendarModel {
    if (this.month === 0) {
      return new CalendarModel(this.year - 1, 11);
    } else {
      return new CalendarModel(this.year, this.month - 1);
    }
  }

  /**
   * Returns CalendarModel of the next month.
   */
  nextMonth(): CalendarModel {
    if (this.month === 11) {
      return new CalendarModel(this.year + 1, 0);
    } else {
      return new CalendarModel(this.year, this.month + 1);
    }
  }
}
