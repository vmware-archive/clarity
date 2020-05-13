/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
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
import { filter, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { FocusService } from '../common/providers/focus.service';
import { WrappedFormControl } from '../common/wrapped-control';
import { ClrDateContainer } from './date-container';
import { DayModel } from './model/day.model';
import { DateFormControlService } from './providers/date-form-control.service';
import { DateIOService } from './providers/date-io.service';
import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerEnabledService } from './providers/datepicker-enabled.service';
import { DatepickerFocusService } from './providers/datepicker-focus.service';
import { datesAreEqual } from './utils/date-utils';
import { isBooleanAttributeSet } from '../../utils/component/is-boolean-attribute-set';

// There are four ways the datepicker value is set
// 1. Value set by user typing into text input as a string ex: '01/28/2015'
// 2. Value set explicitly by Angular Forms APIs as a string ex: '01/28/2015'
// 3. Value set by user via datepicker UI as a Date Object
// 4. Value set via `clrDate` input as a Date Object

@Directive({
  selector: '[clrDate]',
  host: {
    '[class.clr-input]': 'true',
  },
  providers: [DatepickerFocusService],
})
export class ClrDateInput extends WrappedFormControl<ClrDateContainer> implements OnInit, AfterViewInit, OnDestroy {
  public static ngAcceptInputType_date: Date | null;

  @Input() placeholder: string;
  @Output('clrDateChange') dateChange: EventEmitter<Date> = new EventEmitter<Date>(false);
  @Input('clrDate')
  set date(date: Date) {
    if (this.previousDateChange !== date) {
      this.updateDate(this.getValidDateValueFromDate(date));
    }

    if (!this.initialClrDateInputValue) {
      this.initialClrDateInputValue = date;
    }
  }

  @Input()
  set min(dateString: string) {
    this.dateIOService.setMinDate(dateString);
  }

  @Input()
  set max(dateString: string) {
    this.dateIOService.setMaxDate(dateString);
  }

  protected index = 1;
  private initialClrDateInputValue: Date;
  private previousDateChange: Date;

  constructor(
    viewContainerRef: ViewContainerRef,
    injector: Injector,
    protected el: ElementRef,
    protected renderer: Renderer2,
    @Self()
    @Optional()
    protected control: NgControl,
    @Optional() private container: ClrDateContainer,
    @Optional() private dateIOService: DateIOService,
    @Optional() private dateNavigationService: DateNavigationService,
    @Optional() private datepickerEnabledService: DatepickerEnabledService,
    @Optional() private dateFormControlService: DateFormControlService,
    @Inject(PLATFORM_ID) private platformId: any,
    @Optional() private focusService: FocusService,
    private datepickerFocusService: DatepickerFocusService
  ) {
    super(viewContainerRef, ClrDateContainer, injector, control, renderer, el);
  }

  ngOnInit() {
    super.ngOnInit();
    this.populateServicesFromContainerComponent();

    this.subscriptions.push(
      this.listenForUserSelectedDayChanges(),
      this.listenForControlValueChanges(),
      this.listenForTouchChanges(),
      this.listenForDirtyChanges(),
      this.listenForInputRefocus()
    );
  }

  ngAfterViewInit() {
    // I don't know why I have to do this but after using the new HostWrapping Module I have to delay the processing
    // of the initial Input set by the user to here. If I do not 2 issues occur:
    // 1. The Input setter is called before ngOnInit. ngOnInit initializes the services without which the setter fails.
    // 2. The Renderer doesn't work before ngAfterViewInit (It used to before the new HostWrapping Module for some reason).
    // I need the renderer to set the value property on the input to make sure that if the user has supplied a Date
    // input object, we reflect it with the right date on the input field using the IO service. I am not sure if
    // these are major issues or not but just noting them down here.
    this.processInitialInputs();
  }

  @HostListener('focus')
  setFocusStates() {
    this.setFocus(true);
  }

  @HostListener('blur')
  triggerValidation() {
    super.triggerValidation();
    this.setFocus(false);
  }

  @HostBinding('attr.placeholder')
  get placeholderText(): string {
    return this.placeholder ? this.placeholder : this.dateIOService.placeholderText;
  }

  @HostBinding('attr.type')
  get inputType(): string {
    return isPlatformBrowser(this.platformId) && this.usingNativeDatepicker() ? 'date' : 'text';
  }

  @HostListener('change', ['$event.target'])
  onValueChange(target: HTMLInputElement) {
    const validDateValue = this.dateIOService.getDateValueFromDateString(target.value);
    if (this.usingClarityDatepicker() && validDateValue) {
      this.updateDate(validDateValue, true);
    } else if (this.usingNativeDatepicker()) {
      const [year, month, day] = target.value.split('-');
      this.updateDate(new Date(+year, +month - 1, +day), true);
    } else {
      this.emitDateOutput(null);
    }
  }

  @HostBinding('disabled')
  @Input('disabled')
  set disabled(value: boolean | string) {
    if (this.dateFormControlService) {
      this.dateFormControlService.setDisabled(isBooleanAttributeSet(value));
    }
  }
  get disabled() {
    if (this.dateFormControlService) {
      return this.dateFormControlService.disabled;
    }
    return null;
  }

  private usingClarityDatepicker() {
    return this.datepickerEnabledService.isEnabled;
  }

  private usingNativeDatepicker() {
    return !this.datepickerEnabledService.isEnabled;
  }

  private setFocus(focus: boolean) {
    if (this.focusService) {
      this.focusService.focused = focus;
    }
  }

  private populateServicesFromContainerComponent() {
    if (!this.container) {
      this.dateIOService = this.getProviderFromContainer(DateIOService);
      this.dateNavigationService = this.getProviderFromContainer(DateNavigationService);
      this.datepickerEnabledService = this.getProviderFromContainer(DatepickerEnabledService);
      this.dateFormControlService = this.getProviderFromContainer(DateFormControlService);
    }
  }

  private processInitialInputs() {
    if (this.datepickerHasFormControl()) {
      this.updateDate(this.dateIOService.getDateValueFromDateString(this.control.value));
    } else {
      this.updateDate(this.initialClrDateInputValue);
    }
  }

  private updateDate(value: Date, setByUserInteraction = false) {
    const date = this.getValidDateValueFromDate(value);

    if (setByUserInteraction) {
      this.emitDateOutput(date);
    } else {
      this.previousDateChange = date;
    }

    if (this.dateNavigationService) {
      this.dateNavigationService.selectedDay = date
        ? new DayModel(date.getFullYear(), date.getMonth(), date.getDate())
        : null;
    }

    this.updateInput(date);
  }

  private updateInput(date: Date) {
    if (date) {
      const dateString = this.dateIOService.toLocaleDisplayFormatString(date);
      if (this.usingNativeDatepicker()) {
        // valueAsDate expects UTC, date from input is time-zoned
        date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
        this.renderer.setProperty(this.el.nativeElement, 'valueAsDate', date);
      } else if (this.datepickerHasFormControl() && dateString !== this.control.value) {
        this.control.control.setValue(dateString);
      } else {
        this.renderer.setProperty(this.el.nativeElement, 'value', dateString);
      }
    } else {
      this.renderer.setProperty(this.el.nativeElement, 'value', '');
    }
  }

  private getValidDateValueFromDate(date: Date) {
    if (this.dateIOService) {
      const dateString = this.dateIOService.toLocaleDisplayFormatString(date);
      return this.dateIOService.getDateValueFromDateString(dateString);
    } else {
      return null;
    }
  }

  private emitDateOutput(date: Date) {
    if (!datesAreEqual(date, this.previousDateChange)) {
      this.dateChange.emit(date);
      this.previousDateChange = date;
    } else if (!date && this.previousDateChange) {
      this.dateChange.emit(null);
      this.previousDateChange = null;
    }
  }

  private datepickerHasFormControl() {
    return !!this.control;
  }

  private listenForControlValueChanges() {
    return of(this.datepickerHasFormControl())
      .pipe(
        filter(hasControl => hasControl),
        switchMap(() => this.control.valueChanges),
        // only update date value if not being set by user
        filter(() => !this.datepickerFocusService.elementIsFocused(this.el.nativeElement))
      )
      .subscribe((value: string) => this.updateDate(this.dateIOService.getDateValueFromDateString(value)));
  }

  private listenForUserSelectedDayChanges() {
    return this.dateNavigationService.selectedDayChange.subscribe(dayModel => this.updateDate(dayModel.toDate(), true));
  }

  private listenForTouchChanges() {
    return this.dateFormControlService.touchedChange
      .pipe(filter(() => this.datepickerHasFormControl()))
      .subscribe(() => this.control.control.markAsTouched());
  }

  private listenForDirtyChanges() {
    return this.dateFormControlService.dirtyChange
      .pipe(filter(() => this.datepickerHasFormControl()))
      .subscribe(() => this.control.control.markAsDirty());
  }

  private listenForInputRefocus() {
    return this.dateNavigationService.selectedDayChange
      .pipe(filter(date => !!date))
      .subscribe(() => this.datepickerFocusService.focusInput(this.el.nativeElement));
  }
}
