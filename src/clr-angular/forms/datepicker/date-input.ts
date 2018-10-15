/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  Self,
  ViewContainerRef,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { FocusService } from '../common/providers/focus.service';

import { WrappedFormControl } from '../common/wrapped-control';

import { ClrDateContainer } from './date-container';
import { DayModel } from './model/day.model';
import { DateFormControlService } from './providers/date-form-control.service';
import { DateIOService } from './providers/date-io.service';
import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerEnabledService } from './providers/datepicker-enabled.service';
import { IS_NEW_FORMS_LAYOUT } from '../common/providers/new-forms.service';

@Directive({
  selector: '[clrDate]',
  host: {
    '[class.date-input]': '!newFormsLayout',
    '[class.clr-input]': 'newFormsLayout',
  },
})
export class ClrDateInput extends WrappedFormControl<ClrDateContainer> implements OnInit, AfterViewInit, OnDestroy {
  protected index = 4;

  //We need this variable because if the date input has a value initialized
  //we do not output it. This variable is false during initial load. We make sure that
  //during initial load dayModelOutputted is equal to the value entered by the user so that initialized
  //value isn't emitted back to the user. After initial load,
  //we set this to true and the dayModelOutputted is set only
  //when the Output is emitted to the user.
  private previousOutputInitializedFlag: boolean = false;
  private previousOutput: DayModel;

  private initializePreviousOutput(dayModel: DayModel) {
    if (!this.previousOutputInitializedFlag) {
      this.previousOutput = dayModel;
      this.previousOutputInitializedFlag = true;
    }
  }

  @Input() clrNewLayout: boolean;

  constructor(
    vcr: ViewContainerRef,
    injector: Injector,
    protected el: ElementRef,
    protected renderer: Renderer2,
    @Self()
    @Optional()
    protected control: NgControl,
    @Optional() private container: ClrDateContainer,
    @Optional() private _dateIOService: DateIOService,
    @Optional() private _dateNavigationService: DateNavigationService,
    @Optional() private _datepickerEnabledService: DatepickerEnabledService,
    @Optional() private dateFormControlService: DateFormControlService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() private focusService: FocusService,
    @Optional()
    @Inject(IS_NEW_FORMS_LAYOUT)
    public newFormsLayout: boolean
  ) {
    super(vcr, ClrDateContainer, injector, control, renderer, el);
  }

  /**
   * 1. Populate services if the date container is not present.
   * 2. Initialize Subscriptions.
   * 3. Process User Input.
   */
  ngOnInit() {
    super.ngOnInit();
    if (!this.container) {
      this.populateContainerServices();
    }
    this.initializeSubscriptions();
    this.processInitialInputs();
    if (this.clrNewLayout !== undefined) {
      this.newFormsLayout = !!this.clrNewLayout;
    }
  }

  /**
   * Process the inputs initialized by the user which were missed
   * because of late subscriptions or lifecycle method calls.
   */
  private processInitialInputs(): void {
    this.processUserDateObject(this.dateValueOnInitialLoad);

    // Handle Inital Value from Reactive Forms
    // TODO: We are repeating this logic at multiple places. This makes me think
    // if this class should have implemented the ControlValueAccessor interface.
    // Will explore that later and see if its a cleaner solution.
    if (this.control && this.control.value) {
      this.updateInputValue(this.control.value);
      this.initializePreviousOutput(this._dateNavigationService.selectedDay);
    }
  }

  /**
   * Write the initial input set by the user on to the input field.
   */
  ngAfterViewInit() {
    // I don't know why I have to do this but after using the new HostWrapping Module I have to delay the processing
    // of the initial Input set by the user to here.  If I do not 2 issues occur:
    // 1. the Input setter is called before ngOnInit. ngOnInit initializes the services without which the setter
    // fails
    // 2. The Renderer doesn't work before ngAfterViewInit
    //(It used to before the new HostWrapping Module for some reason).
    // I need the renderer to set the value property on the input to make sure that if the user has supplied a Date
    // input object,  we reflect it with the right date on the input field using the IO service.  I am not sure if
    // these are major issues or not but just noting them down here.
    if (this._dateNavigationService) {
      const selDay: DayModel = this._dateNavigationService.selectedDay;
      if (selDay) {
        const dateStr: string = this._dateIOService.toLocaleDisplayFormatString(selDay.toDate());
        this.writeDateStrToInputField(dateStr);
      }
    }
    this.initialLoad = false;
  }

  /**
   * Populates the services from the container component.
   */
  private populateContainerServices(): void {
    this._dateIOService = this.getProviderFromContainer(DateIOService);
    this._dateNavigationService = this.getProviderFromContainer(DateNavigationService);
    this._datepickerEnabledService = this.getProviderFromContainer(DatepickerEnabledService);
    this.dateFormControlService = this.getProviderFromContainer(DateFormControlService);
  }

  /**
   * Writes the date string value to the input field
   */
  private writeDateStrToInputField(value: string): void {
    this.renderer.setProperty(this.el.nativeElement, 'value', value);
  }

  private initialLoad: boolean = true;
  private dateValueOnInitialLoad: Date;

  /**
   * Javascript Date object input set by the user.
   */
  @Input('clrDate')
  set date(value: Date) {
    if (this.initialLoad) {
      // Store date value passed by the user to process after the services have been initialized by
      // the ngOnInit hook.
      this.dateValueOnInitialLoad = value;
    } else {
      this.processUserDateObject(value);
    }
  }

  /**
   * Processes a date object to check if its valid or not.
   */
  private processUserDateObject(value: Date) {
    if (this._dateIOService) {
      // The date object is converted back to string because in Javascript you can create a date object
      // like this: new Date("Test"). This is a date object but it is invalid. Converting the date object
      // that the user passed helps us to verify the validity of the date object.
      const dateStr: string = this._dateIOService.toLocaleDisplayFormatString(value);
      this.updateInputValue(dateStr);
    }
  }

  private updateInputValue(dateStr: string): void {
    const date: Date = this._dateIOService.isValidInput(dateStr);
    if (date) {
      const dayModel: DayModel = new DayModel(date.getFullYear(), date.getMonth(), date.getDate());
      if (!dayModel.isEqual(this._dateNavigationService.selectedDay)) {
        this._dateNavigationService.selectedDay = dayModel;
        this.writeDateStrToInputField(dateStr);
      }
    } else {
      this._dateNavigationService.selectedDay = null;
    }
  }

  @Input() placeholder: string;

  /**
   * Returns the date format for the placeholder according to which the input should be entered by the user.
   */
  @HostBinding('attr.placeholder')
  get placeholderText(): string {
    return this.placeholder ? this.placeholder : this._dateIOService.placeholderText;
  }

  /**
   * Sets the input type to text when the datepicker is enabled. Reverts back to the native date input
   * when the datepicker is disabled. Datepicker is disabled on mobiles.
   */
  @HostBinding('attr.type')
  get inputType(): string {
    return isPlatformBrowser(this.platformId) && this._datepickerEnabledService.isEnabled ? 'text' : 'date';
  }

  //
  // Output Management
  // Note: For now we will not emit both clrDateChange and ngControl outputs
  // at the same time. This requires us to listen to keydown and blur events to figure out
  // exactly when the Output should be emitted.
  // Our recommendation right now is to either use clrDate or use ngModel/FormControl.
  // Do not use both of them together.
  //

  @Output('clrDateChange') _dateUpdated: EventEmitter<Date> = new EventEmitter<Date>(false);

  private emitDateOutput(dayModel: DayModel): void {
    if (dayModel && !dayModel.isEqual(this.previousOutput)) {
      this._dateUpdated.emit(dayModel.toDate());
      this.previousOutput = dayModel;
    } else if (!dayModel && this.previousOutput) {
      this._dateUpdated.emit(null);
      this.previousOutput = null;
    }
  }

  @HostListener('focus')
  setFocusStates() {
    if (this.focusService) {
      this.focusService.focused = true;
    }
  }

  @HostListener('blur')
  triggerValidation() {
    super.triggerValidation();
    if (this.focusService) {
      this.focusService.focused = false;
    }
  }

  /**
   * Fires this method when the user changes the input focuses out of the input field.
   */
  @HostListener('change', ['$event.target'])
  onValueChange(target: HTMLInputElement) {
    const value: string = target.value;
    const date: Date = this._dateIOService.isValidInput(value);
    if (date) {
      const dayModel: DayModel = new DayModel(date.getFullYear(), date.getMonth(), date.getDate());
      this._dateNavigationService.selectedDay = dayModel;
      this.emitDateOutput(dayModel);
    } else {
      this._dateNavigationService.selectedDay = null;
      this.emitDateOutput(null);
    }
  }

  /**
   * Initialize DateIO Subscriptions
   */
  private initializeSubscriptions(): void {
    if (this._dateNavigationService && this._dateIOService) {
      // This subscription is fired when the user selects a date from the popover.
      this.subscriptions.push(
        this._dateNavigationService.selectedDayChange.subscribe((dayModel: DayModel) => {
          const dateStr: string = this._dateIOService.toLocaleDisplayFormatString(dayModel.toDate());
          this.writeDateStrToInputField(dateStr);
          // This makes sure that ngModelChange is fired
          // TODO: Check if there is a better way to do this.
          // NOTE: Its important to use NgControl and not NgModel because
          // NgModel only works with template driven forms
          if (this.control) {
            this.control.control.setValue(dateStr);
          }
          this.emitDateOutput(dayModel);
        })
      );

      // We do not emit an Output from this subscription because
      // we only emit the Output when the user has focused out of the input.
      if (this.control) {
        this.subscriptions.push(
          this.control.valueChanges.subscribe((value: string) => {
            const date: Date = this._dateIOService.isValidInput(value);
            if (date) {
              const dayModel: DayModel = new DayModel(date.getFullYear(), date.getMonth(), date.getDate());
              this._dateNavigationService.selectedDay = dayModel;
              this.initializePreviousOutput(dayModel);
            } else if (value === '' || value === null) {
              this._dateNavigationService.selectedDay = null;
              this.initializePreviousOutput(null);
            } else {
              this.initializePreviousOutput(null);
            }
          })
        );
      }
    }

    if (this.dateFormControlService) {
      this.subscriptions.push(
        this.dateFormControlService.touchedChange.subscribe(() => {
          if (this.control) {
            this.control.control.markAsTouched();
          }
        })
      );

      this.subscriptions.push(
        this.dateFormControlService.dirtyChange.subscribe(() => {
          if (this.control) {
            this.control.control.markAsDirty();
          }
        })
      );
    }
  }
}
