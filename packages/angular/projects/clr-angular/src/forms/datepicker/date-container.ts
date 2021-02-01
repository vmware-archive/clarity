/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
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
  AfterContentInit,
} from '@angular/core';
import { NgControl } from '@angular/forms';

import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
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
import { ClrPopoverPositions } from '../../utils/popover/enums/positions.enum';
import { ClrPopoverPosition } from '../../utils/popover/interfaces/popover-position.interface';
import { ClrPopoverEventsService } from '../../utils/popover/providers/popover-events.service';
import { ClrPopoverPositionService } from '../../utils/popover/providers/popover-position.service';
import { ViewManagerService } from './providers/view-manager.service';
import { Subscription } from 'rxjs';
import { IfControlStateService, CONTROL_STATE } from '../common/if-control-state/if-control-state.service';
import { ClrControlSuccess } from '../common/success';
import { ClrControlError } from '../common/error';
import { ClrControlHelper } from '../common/helper';

/**
 * @TODO
 * this container could be overwritten to use ClrAbstractContainer - to minimize the duplicate
 * of code and logic.
 */
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
            <clr-icon shape="calendar"></clr-icon>
          </button>
          <clr-datepicker-view-manager
            *clrPopoverContent="open; at: popoverPosition; outsideClickToClose: true; scrollToClose: true"
            clrFocusTrap
          ></clr-datepicker-view-manager>
        </div>
        <clr-icon
          *ngIf="showInvalid"
          class="clr-validate-icon"
          shape="exclamation-circle"
          aria-hidden="true"
        ></clr-icon>
        <clr-icon *ngIf="showValid" class="clr-validate-icon" shape="check-circle" aria-hidden="true"></clr-icon>
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
export class ClrDateContainer implements DynamicWrapper, OnDestroy, AfterViewInit, AfterContentInit {
  _dynamic = false;

  focus = false;
  state: CONTROL_STATE;
  control: NgControl;

  @ContentChild(ClrLabel) label: ClrLabel;
  @ContentChild(ClrControlSuccess) controlSuccessComponent: ClrControlSuccess;
  @ContentChild(ClrControlError) controlErrorComponent: ClrControlError;
  @ContentChild(ClrControlHelper) controlHelperComponent: ClrControlHelper;

  /* More information on showHelper could be found into `abstract-container` */
  get showHelper(): boolean {
    // without existence of helper component there is no need of additional checks.
    if (!!this.controlHelperComponent === false) {
      return false;
    }

    return (
      /* Helper Component exist and the state of the form is NONE (not touched) */
      (!!this.controlHelperComponent && this.state === CONTROL_STATE.NONE) ||
      /* or there is no success component but the state of the form is VALID - show helper information */
      (!!this.controlSuccessComponent === false && this.state === CONTROL_STATE.VALID) ||
      /* or there is no error component but the state of the form is INVALID - show helper information */
      (!!this.controlErrorComponent === false && this.state === CONTROL_STATE.INVALID)
    );
  }

  get showValid(): boolean {
    return this.state === CONTROL_STATE.VALID && !!this.controlSuccessComponent;
  }

  get showInvalid(): boolean {
    return this.state === CONTROL_STATE.INVALID && !!this.controlErrorComponent;
  }

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

  private subscriptions: Subscription[] = [];

  constructor(
    private toggleService: ClrPopoverToggleService,
    private dateNavigationService: DateNavigationService,
    private datepickerEnabledService: DatepickerEnabledService,
    private dateFormControlService: DateFormControlService,
    public commonStrings: ClrCommonStringsService,
    private focusService: FocusService,
    private viewManagerService: ViewManagerService,
    private controlClassService: ControlClassService,
    @Optional() private layoutService: LayoutService,
    private ngControlService: NgControlService,
    private ifControlStateService: IfControlStateService
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

    this.subscriptions.push(
      this.toggleService.openChange.subscribe(() => {
        this.dateFormControlService.markAsTouched();
      })
    );
  }

  ngOnInit() {
    this.subscriptions.push(
      this.ifControlStateService.statusChanges.subscribe((state: CONTROL_STATE) => {
        this.state = state;
        this.updateHelpers();
      })
    );
  }

  /**
   * Unsubscribe from subscriptions.
   */
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
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

  ngAfterContentInit() {
    /**
     * We gonna set the helper control state, after all or most of the components
     * are ready - also this will trigger some intial flows into wrappers and controls,
     * like locating IDs  and setting  attributes.
     */
    this.updateHelpers();
  }

  /**
   * Returns the classes to apply to the control
   */
  controlClass() {
    /**
     * When there is no controlSuccessComponent and the state is VALID,
     * we won't add `clr-success` control class. This way we won't change the styling
     * of the helper text if present.
     */
    if (!this.controlSuccessComponent && this.state === CONTROL_STATE.VALID) {
      return this.controlClassService.controlClass(CONTROL_STATE.NONE, this.addGrid());
    }

    return this.controlClassService.controlClass(this.state, this.addGrid());
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

  private updateHelpers() {
    if (this.ngControlService) {
      this.ngControlService.setHelpers({
        show: this.showInvalid || this.showHelper || this.showValid,
        showInvalid: this.showInvalid,
        showHelper: this.showHelper,
        showValid: this.showValid,
      });
    }
  }
}
