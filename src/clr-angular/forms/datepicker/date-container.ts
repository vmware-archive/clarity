/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IfOpenService } from '../../utils/conditional/if-open.service';
import { DynamicWrapper } from '../../utils/host-wrapping';
import { ControlIdService } from '../common/providers/control-id.service';

import { DateFormControlService } from './providers/date-form-control.service';
import { DateIOService } from './providers/date-io.service';
import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerEnabledService } from './providers/datepicker-enabled.service';
import { LocaleHelperService } from './providers/locale-helper.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';

@Component({
  selector: 'clr-date-container',
  template: `
        <ng-content></ng-content>
        <!--
          Isn't this button supposed to be aria-hidden="true"? 
          I thought we decided screenreaders just typed the date in.
        -->
        <button
            type="button"
            class="datepicker-trigger"
            (click)="toggleDatepicker($event)"
            *ngIf="isEnabled">
            <clr-icon shape="calendar" class="datepicker-trigger-icon" [attr.title]="commonStrings.open"></clr-icon>
        </button>
        <clr-datepicker-view-manager *clrIfOpen clrFocusTrap></clr-datepicker-view-manager>
    `,
  providers: [
    ControlIdService,
    IfOpenService,
    LocaleHelperService,
    DateIOService,
    DateNavigationService,
    DatepickerEnabledService,
    DateFormControlService,
  ],
  host: { '[class.date-container]': 'true' },
})
export class ClrDateContainer implements DynamicWrapper, OnDestroy {
  // Unused but have to add it :-(
  _dynamic: boolean = false;

  private _sub: Subscription;

  constructor(
    private _ifOpenService: IfOpenService,
    private _dateNavigationService: DateNavigationService,
    private _datepickerEnabledService: DatepickerEnabledService,
    private dateFormControlService: DateFormControlService,
    public commonStrings: ClrCommonStrings
  ) {
    this._sub = this._ifOpenService.openChange.subscribe(open => {
      if (open) {
        this.initializeCalendar();
      }
    });
  }

  /**
   * Returns if the Datepicker is enabled or not. If disabled, hides the datepicker trigger.
   */
  get isEnabled(): boolean {
    return this._datepickerEnabledService.isEnabled;
  }

  /**
   * Processes the user input and Initializes the Calendar everytime the datepicker popover is open.
   */
  private initializeCalendar(): void {
    this._dateNavigationService.initializeCalendar();
  }

  /**
   * Toggles the Datepicker Popover.
   */
  toggleDatepicker(event: MouseEvent) {
    this._ifOpenService.toggleWithEvent(event);
    this.dateFormControlService.markAsTouched();
  }

  /**
   * Unsubscribe from subscriptions.
   */
  ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
