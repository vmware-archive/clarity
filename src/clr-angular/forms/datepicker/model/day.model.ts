/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export class DayModel {
  constructor(public readonly year: number, public readonly month: number, public readonly date: number) {}

  /**
   * Checks if the passed CalendarDate is equal to itself.
   */
  isEqual(day: DayModel) {
    if (day) {
      return this.year === day.year && this.month === day.month && this.date === day.date;
    }
    return false;
  }

  toDate(): Date {
    return new Date(this.year, this.month, this.date);
  }

  /**
   * Returns a new DayModel which is incremented based on the value passed.
   */
  incrementBy(value: number): DayModel {
    // Creating new Javascript Date object to increment because
    // it will automatically take care of switching to next or previous
    // months & years without we having to worry about it.
    const date: Date = new Date(this.year, this.month, this.date + value);
    return new DayModel(date.getFullYear(), date.getMonth(), date.getDate());
  }

  /**
   * Clones the current day model.
   */
  clone(): DayModel {
    return new DayModel(this.year, this.month, this.date);
  }

  toComparisonString(): string {
    return `${this.year}${this.pad(this.month)}${this.pad(this.date)}`;
  }

  private pad(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  public toDateString(): string {
    return this.toDate().toLocaleDateString();
  }
}
