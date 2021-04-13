/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Input } from '@angular/core';

import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';

import { DayViewModel } from './model/day-view.model';
import { DayModel } from './model/day.model';
import { DateFormControlService } from './providers/date-form-control.service';
import { DateNavigationService } from './providers/date-navigation.service';

@Component({
  selector: 'clr-day',
  template: `
    <button
      class="day-btn"
      type="button"
      [class.is-today]="dayView.isTodaysDate"
      [class.is-excluded]="dayView.isExcluded"
      [class.is-disabled]="dayView.isDisabled"
      [class.is-selected]="dayView.isSelected"
      [attr.tabindex]="dayView.tabIndex"
      (click)="selectDay()"
      (focus)="onDayViewFocus()"
      [attr.aria-label]="dayString"
    >
      {{ dayView.dayModel.date }}
    </button>
  `,
  host: { '[class.day]': 'true' },
})
export class ClrDay {
  private _dayView: DayViewModel;
  public dayString: string;

  constructor(
    private _dateNavigationService: DateNavigationService,
    private _toggleService: ClrPopoverToggleService,
    private dateFormControlService: DateFormControlService
  ) {}

  /**
   * DayViewModel input which is used to build the Day View.
   */

  @Input('clrDayView')
  public set dayView(day: DayViewModel) {
    this._dayView = day;
    this.dayString = this._dayView.dayModel.toDateString();
  }

  public get dayView(): DayViewModel {
    return this._dayView;
  }

  /**
   * Updates the focusedDay in the DateNavigationService when the ClrDay is focused.
   */
  onDayViewFocus() {
    this._dateNavigationService.focusedDay = this.dayView.dayModel;
  }

  /**
   * Updates the selectedDay when the ClrDay is selected and closes the datepicker popover.
   */
  selectDay(): void {
    const day: DayModel = this.dayView.dayModel;
    this._dateNavigationService.notifySelectedDayChanged(day);
    this.dateFormControlService.markAsDirty();
    this._toggleService.open = false;
  }
}
