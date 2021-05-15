/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Optional, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';

import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
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
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { ClrPopoverPositions } from '../../utils/popover/enums/positions.enum';
import { ClrPopoverPosition } from '../../utils/popover/interfaces/popover-position.interface';
import { ClrPopoverEventsService } from '../../utils/popover/providers/popover-events.service';
import { ClrPopoverPositionService } from '../../utils/popover/providers/popover-position.service';
import { ViewManagerService } from './providers/view-manager.service';
import { IfControlStateService } from '../common/if-control-state/if-control-state.service';
import { ClrAbstractContainer } from '../common/abstract-container';

@Component({
  selector: 'clr-date-container',
  template: `
    <ng-content select="label"></ng-content>
    <label *ngIf="!label && addGrid()"></label>
    <div class="clr-control-container" [ngClass]="controlClass()">
      <div class="clr-input-wrapper" clrPopoverAnchor>
        <div class="clr-input-group" [class.clr-focus]="focus">
          <ng-content select="[clrDate]"></ng-content>
          <button
            #actionButton
            type="button"
            clrPopoverOpenCloseButton
            class="clr-input-group-icon-action"
            [attr.title]="commonStrings.keys.datepickerToggle"
            [attr.aria-label]="commonStrings.keys.datepickerToggle"
            [disabled]="isInputDateDisabled"
            *ngIf="isEnabled"
          >
            <cds-icon status="info" shape="calendar"></cds-icon>
          </button>
          <clr-datepicker-view-manager
            *clrPopoverContent="open; at: popoverPosition; outsideClickToClose: true; scrollToClose: true"
            clrFocusTrap
          ></clr-datepicker-view-manager>
        </div>
        <cds-icon
          *ngIf="showInvalid"
          class="clr-validate-icon"
          status="danger"
          shape="exclamation-circle"
          aria-hidden="true"
        ></cds-icon>
        <cds-icon
          *ngIf="showValid"
          class="clr-validate-icon"
          shape="check-circle"
          status="success"
          aria-hidden="true"
        ></cds-icon>
      </div>
      <ng-content select="clr-control-helper" *ngIf="showHelper"></ng-content>
      <ng-content select="clr-control-error" *ngIf="showInvalid"></ng-content>
      <ng-content select="clr-control-success" *ngIf="showValid"></ng-content>
    </div>
  `,
  providers: [
    ControlIdService,
    ClrPopoverToggleService,
    ClrPopoverEventsService,
    ClrPopoverPositionService,
    LocaleHelperService,
    ControlClassService,
    FocusService,
    NgControlService,
    DateIOService,
    DateNavigationService,
    DatepickerEnabledService,
    DateFormControlService,
    ViewManagerService,
    IfControlStateService,
  ],
  host: {
    '[class.clr-date-container]': 'true',
    '[class.clr-form-control-disabled]': 'isInputDateDisabled',
    '[class.clr-form-control]': 'true',
    '[class.clr-row]': 'addGrid()',
  },
})
export class ClrDateContainer extends ClrAbstractContainer implements AfterViewInit {
  focus = false;

  @Input('clrPosition')
  set clrPosition(position: string) {
    if (position && (ClrPopoverPositions as Record<string, any>)[position]) {
      this.viewManagerService.position = (ClrPopoverPositions as Record<string, any>)[position];
    }
  }
  get popoverPosition(): ClrPopoverPosition {
    return this.viewManagerService.position;
  }

  public get open() {
    return this.toggleService.open;
  }

  private toggleButton: ElementRef;
  @ViewChild('actionButton')
  set actionButton(button: ElementRef) {
    this.toggleButton = button;
  }

  constructor(
    private toggleService: ClrPopoverToggleService,
    private dateNavigationService: DateNavigationService,
    private datepickerEnabledService: DatepickerEnabledService,
    private dateFormControlService: DateFormControlService,
    public commonStrings: ClrCommonStringsService,
    private focusService: FocusService,
    private viewManagerService: ViewManagerService,
    protected controlClassService: ControlClassService,
    @Optional() protected layoutService: LayoutService,
    protected ngControlService: NgControlService,
    protected ifControlStateService: IfControlStateService
  ) {
    super(ifControlStateService, layoutService, controlClassService, ngControlService);

    this.subscriptions.push(
      this.focusService.focusChange.subscribe(state => {
        this.focus = state;
      })
    );

    this.subscriptions.push(
      this.toggleService.openChange.subscribe(() => {
        this.dateFormControlService.markAsTouched();
      })
    );
  }

  ngAfterViewInit(): void {
    this.subscriptions.push(
      this.toggleService.openChange.subscribe(open => {
        if (open) {
          this.initializeCalendar();
        } else {
          this.toggleButton.nativeElement.focus();
        }
      })
    );
  }

  /**
   * Returns if the Datepicker is enabled or not. If disabled, hides the datepicker trigger.
   */
  get isEnabled(): boolean {
    return this.datepickerEnabledService.isEnabled;
  }

  /**
   * Return if Datepicker is diabled or not as Form Control
   */
  get isInputDateDisabled(): boolean {
    /* clrForm wrapper or without clrForm */
    return (
      (this.control && this.control.disabled) || (this.dateFormControlService && this.dateFormControlService.disabled)
    );
  }

  /**
   * Processes the user input and Initializes the Calendar everytime the datepicker popover is open.
   */
  private initializeCalendar(): void {
    this.dateNavigationService.initializeCalendar();
  }
}
