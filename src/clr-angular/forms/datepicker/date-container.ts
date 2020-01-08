/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  Component,
  OnDestroy,
  Optional,
  ContentChild,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NgControl } from '@angular/forms';

import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
import { IfErrorService } from '../common/if-error/if-error.service';
import { ControlClassService } from '../common/providers/control-class.service';
import { ControlIdService } from '../common/providers/control-id.service';
import { FocusService } from '../common/providers/focus.service';
import { LayoutService } from '../common/providers/layout.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { ClrLabel } from '../common/label';

import { DateFormControlService } from './providers/date-form-control.service';
import { DateIOService } from './providers/date-io.service';
import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerEnabledService } from './providers/datepicker-enabled.service';
import { LocaleHelperService } from './providers/locale-helper.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { PopoverPosition } from '../../popover/common/popover-positions';

@Component({
  selector: 'clr-date-container',
  template: `
      <ng-content select="label"></ng-content>
      <label *ngIf="!label && addGrid()"></label>
      <div class="clr-control-container" [ngClass]="controlClass()">
        <div class="clr-input-wrapper">
          <div class="clr-input-group" [class.clr-focus]="focus">
            <ng-content select="[clrDate]"></ng-content>
            <button #actionButton
                    type="button"
                    class="clr-input-group-icon-action"
                    [attr.title]="commonStrings.keys.datepickerToggle"
                    [attr.aria-label]="commonStrings.keys.datepickerToggle"
                    [disabled]="control?.disabled"
                    (click)="toggleDatepicker($event)"
                    *ngIf="isEnabled">
              <clr-icon shape="calendar"></clr-icon>
            </button>
            <clr-datepicker-view-manager *clrIfOpen clrFocusTrap [clrPosition]="position"></clr-datepicker-view-manager>
          </div>
          <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
        </div>
        <ng-content select="clr-control-helper" *ngIf="!invalid"></ng-content>
        <ng-content select="clr-control-error" *ngIf="invalid"></ng-content>
      </div>
    `,
  providers: [
    ControlIdService,
    ClrPopoverToggleService,
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
    '[class.clr-form-control-disabled]': 'control?.disabled',
    '[class.clr-form-control]': 'true',
    '[class.clr-row]': 'addGrid()',
  },
})
export class ClrDateContainer implements DynamicWrapper, OnDestroy, AfterViewInit {
  _dynamic: boolean = false;
  invalid = false;
  focus = false;
  control: NgControl;
  @ContentChild(ClrLabel, { static: false })
  label: ClrLabel;
  @Input('clrPosition') position: PopoverPosition;

  private toggleButton: ElementRef;
  @ViewChild('actionButton', { static: false })
  set actionButton(button: ElementRef) {
    this.toggleButton = button;
  }

  private subscriptions: Subscription[] = [];

  constructor(
    private _toggleService: ClrPopoverToggleService,
    private _dateNavigationService: DateNavigationService,
    private _datepickerEnabledService: DatepickerEnabledService,
    private dateFormControlService: DateFormControlService,
    public commonStrings: ClrCommonStringsService,
    private ifErrorService: IfErrorService,
    private focusService: FocusService,
    private controlClassService: ControlClassService,
    @Optional() private layoutService: LayoutService,
    private ngControlService: NgControlService
  ) {
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

  ngAfterViewInit(): void {
    this.subscriptions.push(
      this._toggleService.openChange.subscribe(open => {
        if (open) {
          this.initializeCalendar();
        } else {
          this.toggleButton.nativeElement.focus();
        }
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
    return this.layoutService && !this.layoutService.isVertical();
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
    this._toggleService.toggleWithEvent(event);
    this.dateFormControlService.markAsTouched();
  }

  /**
   * Unsubscribe from subscriptions.
   */
  ngOnDestroy() {
    this.subscriptions.map(sub => sub.unsubscribe());
  }
}
