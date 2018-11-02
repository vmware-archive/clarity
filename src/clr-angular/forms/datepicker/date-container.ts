/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Inject, OnDestroy, Optional } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgControl } from '@angular/forms';

import { IfOpenService } from '../../utils/conditional/if-open.service';
import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
import { IfErrorService } from '../common/if-error/if-error.service';
import { ControlClassService } from '../common/providers/control-class.service';
import { ControlIdService } from '../common/providers/control-id.service';
import { FocusService } from '../common/providers/focus.service';
import { LayoutService } from '../common/providers/layout.service';
import { NgControlService } from '../common/providers/ng-control.service';

import { DateFormControlService } from './providers/date-form-control.service';
import { DateIOService } from './providers/date-io.service';
import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerEnabledService } from './providers/datepicker-enabled.service';
import { LocaleHelperService } from './providers/locale-helper.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
import { IS_NEW_FORMS_LAYOUT } from '../common/providers/new-forms.service';

/**
 * This component contains two template for the old and new forms layouts.
 * When it is time to remove the old forms layouts support, remove the ng-templates
 * and ng-container, and just keep the inner content of the #newLayout as the template
 * and move the ng-content for clrDate.
 */

@Component({
  selector: 'clr-date-container',
  template: `
    <ng-template #oldLayout>
        <ng-content></ng-content>
        <ng-container *ngTemplateOutlet="clrDate"></ng-container>
        <button
            type="button"
            class="datepicker-trigger"
            (click)="toggleDatepicker($event)"
            *ngIf="isEnabled">
            <clr-icon shape="calendar" class="datepicker-trigger-icon" [attr.title]="commonStrings.open"></clr-icon>
        </button>
        <clr-datepicker-view-manager *clrIfOpen clrFocusTrap></clr-datepicker-view-manager>
    </ng-template>
    
    <ng-template #newLayout>
      <ng-content select="label"></ng-content>
      <div class="clr-control-container" [ngClass]="controlClass()">
        <div class="clr-input-wrapper">
          <div class="clr-input-group" [class.clr-focus]="focus">
            <ng-container *ngTemplateOutlet="clrDate"></ng-container>
            <button type="button" class="datepicker-trigger" (click)="toggleDatepicker($event)" *ngIf="isEnabled" [attr.title]="commonStrings.open" [disabled]="control?.disabled">
              <clr-icon shape="calendar" class="clr-input-group-icon-action"></clr-icon>
            </button>
            <clr-datepicker-view-manager *clrIfOpen clrFocusTrap></clr-datepicker-view-manager>
          </div>
          <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
        </div>
        <ng-content select="clr-control-helper" *ngIf="!invalid"></ng-content>
        <ng-content select="clr-control-error" *ngIf="invalid"></ng-content>
      </div>
    </ng-template>
    
    <ng-template #clrDate>
      <ng-content select="[clrDate]"></ng-content>
    </ng-template>
    
    <ng-container *ngIf="newFormsLayout; then newLayout else oldLayout"></ng-container>
    `,
  providers: [
    ControlIdService,
    IfOpenService,
    LocaleHelperService,
    IfErrorService,
    ControlClassService,
    FocusService,
    NgControlService,
    DateIOService,
    DateNavigationService,
    DatepickerEnabledService,
    DateFormControlService,
  ],
  host: {
    '[class.date-container]': '!newFormsLayout',
    '[class.clr-form-control-disabled]': 'control?.disabled',
    '[class.clr-form-control]': 'newFormsLayout',
  },
})
export class ClrDateContainer implements DynamicWrapper, OnDestroy {
  _dynamic: boolean = false;
  invalid = false;
  focus = false;
  control: NgControl;

  private subscriptions: Subscription[] = [];

  constructor(
    private _ifOpenService: IfOpenService,
    private _dateNavigationService: DateNavigationService,
    private _datepickerEnabledService: DatepickerEnabledService,
    private dateFormControlService: DateFormControlService,
    public commonStrings: ClrCommonStrings,
    private ifErrorService: IfErrorService,
    private focusService: FocusService,
    private controlClassService: ControlClassService,
    @Optional() private layoutService: LayoutService,
    @Optional()
    @Inject(IS_NEW_FORMS_LAYOUT)
    public newFormsLayout: boolean,
    private ngControlService: NgControlService
  ) {
    this.subscriptions.push(
      this._ifOpenService.openChange.subscribe(open => {
        if (open) {
          this.initializeCalendar();
        }
      })
    );
    this.subscriptions.push(
      this.focusService.focusChange.subscribe(state => {
        this.focus = state;
      })
    );
    this.subscriptions.push(
      this.ngControlService.controlChanges.subscribe(control => {
        this.control = control;
      })
    );
  }

  ngOnInit() {
    this.subscriptions.push(
      this.ifErrorService.statusChanges.subscribe(invalid => {
        this.invalid = invalid;
      })
    );
  }

  /**
   * Returns the classes to apply to the control
   */
  controlClass() {
    return this.controlClassService.controlClass(this.invalid, this.addGrid());
  }

  /**
   * Determines if the control needs to add grid classes
   */
  addGrid() {
    if (this.layoutService && !this.layoutService.isVertical()) {
      return true;
    }
    return false;
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
    this.subscriptions.map(sub => sub.unsubscribe());
  }
}
