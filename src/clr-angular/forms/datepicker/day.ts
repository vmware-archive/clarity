/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Input } from '@angular/core';

import { IfOpenService } from '../../utils/conditional/if-open.service';

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
            [class.is-disabled]="dayView.isDisabled"
            [class.is-selected]="dayView.isSelected"
            [attr.tabindex]="dayView.tabIndex"
            (click)="selectDay()"
            (focus)="onDayViewFocus()">
            {{dayView.dayModel.date}}
        </button>
    `,
  host: { '[class.day]': 'true' },
})
export class ClrDay {
  constructor(
    private _dateNavigationService: DateNavigationService,
    private _ifOpenService: IfOpenService,
    private dateFormControlService: DateFormControlService
  ) {}

  /**
   * DayViewModel input which is used to build the Day View.
   */
  @Input('clrDayView') dayView: DayViewModel;

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
    this._ifOpenService.open = false;
  }
}
