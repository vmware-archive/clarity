/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, DebugElement, Injectable, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, NgControl, NgForm, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { itIgnore } from '../../../../tests/tests.helpers';
import { TestContext } from '../../data/datagrid/helpers.spec';
import { ClrFormsModule } from '../../forms/forms.module';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { IfErrorService } from '../common/if-error/if-error.service';
import { ControlClassService } from '../common/providers/control-class.service';
import { ControlIdService } from '../common/providers/control-id.service';
import { FocusService } from '../common/providers/focus.service';
import { NgControlService } from '../common/providers/ng-control.service';

import { ClrDateContainer } from './date-container';
import { ClrDateInput } from './date-input';
import { DayModel } from './model/day.model';
import { DateFormControlService } from './providers/date-form-control.service';
import { DateIOService } from './providers/date-io.service';
import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerEnabledService } from './providers/datepicker-enabled.service';
import { MockDatepickerEnabledService } from './providers/datepicker-enabled.service.mock';
import { LocaleHelperService } from './providers/locale-helper.service';
import { DatepickerFocusService } from './providers/datepicker-focus.service';

export default function() {
  describe('Date Input Component', () => {
    let context: TestContext<ClrDateInput, TestComponent>;
    let enabledService: MockDatepickerEnabledService;
    let dateIOService: DateIOService;
    let dateNavigationService: DateNavigationService;
    let dateFormControlService: DateFormControlService;
    let ifErrorService: IfErrorService;
    let focusService: FocusService;
    let controlClassService: ControlClassService;
    let datepickerFocusService: DatepickerFocusService;
    const setControlSpy = jasmine.createSpy();

    @Injectable()
    class MockNgControlService extends NgControlService {
      // @ts-ignore
      setControl = setControlSpy;
    }

    describe('Basics', () => {
      beforeEach(function() {
        TestBed.overrideComponent(ClrDateContainer, {
          set: {
            providers: [{ provide: DatepickerEnabledService, useClass: MockDatepickerEnabledService }],
          },
        });

        context = this.create(ClrDateInput, TestComponent, [
          ControlClassService,
          { provide: NgControlService, useClass: MockNgControlService },
          NgControl,
          IfErrorService,
          IfOpenService,
          FocusService,
          DatepickerFocusService,
          DateNavigationService,
          LocaleHelperService,
          DateIOService,
          ControlIdService,
          DateFormControlService,
        ]);

        enabledService = <MockDatepickerEnabledService>context.fixture.debugElement
          .query(By.directive(ClrDateContainer))
          .injector.get(DatepickerEnabledService);
        dateIOService = context.fixture.debugElement.query(By.directive(ClrDateContainer)).injector.get(DateIOService);
        dateNavigationService = context.fixture.debugElement
          .query(By.directive(ClrDateContainer))
          .injector.get(DateNavigationService);
        ifErrorService = context.fixture.debugElement.injector.get(IfErrorService);
        focusService = context.fixture.debugElement.injector.get(FocusService);
        controlClassService = context.fixture.debugElement.injector.get(ControlClassService);
        datepickerFocusService = context.fixture.debugElement.injector.get(DatepickerFocusService);

        spyOn(ifErrorService, 'triggerStatusChange');
        spyOn(datepickerFocusService, 'focusInput');
      });

      // @TODO Figure out how to make these tests conform to the rest of the forms tests, which test these already
      describe('View', () => {
        beforeEach(() => {
          context.detectChanges();
        });

        it('should apply the correct host classes', () => {
          expect(context.clarityElement.classList).toContain('clr-input');
        });

        it('should capture any classes set on the control', () => {
          expect(controlClassService).toBeTruthy();
          expect(controlClassService.className).toContain('test-class');
        });

        it('should set the control on NgControlService', () => {
          expect(setControlSpy).toHaveBeenCalled();
        });

        it('should handle focus and blur events', () => {
          let focusState;
          const sub = focusService.focusChange.subscribe(state => (focusState = state));
          expect(focusState).toEqual(false);
          context.clarityElement.dispatchEvent(new Event('focus'));
          context.clarityElement.value = 'abc';
          context.detectChanges();
          expect(focusState).toEqual(true);
          context.clarityElement.dispatchEvent(new Event('input'));
          context.clarityElement.dispatchEvent(new Event('blur'));
          context.detectChanges();
          expect(ifErrorService.triggerStatusChange).toHaveBeenCalled();
          expect(focusState).toEqual(false);
          sub.unsubscribe();
        });

        it('should refocus input after selecting a date for a11y', () => {
          const input: HTMLInputElement = context.testElement.querySelector('input');
          expect(document.activeElement).not.toBe(input);

          dateNavigationService.notifySelectedDayChanged(new DayModel(2019, 1, 1));
          context.detectChanges();

          expect(document.activeElement).toBe(input);
        });

        it('should allow a date be re-selected if date was previously selected and the erased from the input by the user', () => {
          const input: HTMLInputElement = context.testElement.querySelector('input');
          input.value = '04/12/2019';
          input.dispatchEvent(new Event('change'));

          input.value = '';
          input.dispatchEvent(new Event('change'));

          dateNavigationService.notifySelectedDayChanged(new DayModel(2019, 3, 12));
          context.detectChanges();

          expect(input.value).toBe('04/12/2019');
        });

        it('should set override classes and remove them from the control', () => {
          expect(controlClassService.className).toContain('clr-col-12');
          expect(context.clarityElement.className).not.toContain('clr-col-12');
        });
      });

      describe('Typescript API', () => {
        it('gets the placeholder from the IO service', () => {
          // since we are testing with en-US
          expect(context.clarityDirective.placeholderText).toBe(dateIOService.placeholderText);
        });

        it('does not override placeholder provided by the user', () => {
          context.clarityDirective.placeholder = 'Test';
          expect(context.clarityDirective.placeholderText).toBe('Test');
        });

        it('gets whether the datepicker is enabled or not', () => {
          expect(enabledService.isEnabled).toBe(true);
          expect(context.clarityDirective.inputType).toBe('text');

          enabledService.fakeIsEnabled = false;
          expect(enabledService.isEnabled).toBe(false);

          context.detectChanges();
          expect(context.clarityDirective.inputType).toBe('date');
        });

        it('sets the selectedDay if the value of the input is valid', () => {
          const testEl: HTMLInputElement = <HTMLInputElement>document.createElement('INPUT');
          testEl.value = '01/02/2015';

          expect(dateNavigationService.selectedDay).toBeNull(); // TestComponent is <input clrDate>. null Input

          context.clarityDirective.onValueChange(testEl);
          expect(dateNavigationService.selectedDay).toEqual(new DayModel(2015, 0, 2));
        });

        it('sets the selectedDay to a null if the value of the input is invalid', () => {
          const testEl: HTMLInputElement = <HTMLInputElement>document.createElement('INPUT');
          testEl.value = '01/02/201';

          expect(dateNavigationService.selectedDay).toBeNull();
          context.clarityDirective.onValueChange(testEl);

          expect(dateNavigationService.selectedDay).toBeNull();
        });

        it('outputs the date when the user selects a Date from the Date Picker', () => {
          expect(context.testComponent.date).toBeUndefined();

          dateNavigationService.notifySelectedDayChanged(new DayModel(2015, 1, 1));

          expect(context.testComponent.date.getFullYear()).toBe(2015);
          expect(context.testComponent.date.getMonth()).toBe(1);
          expect(context.testComponent.date.getDate()).toBe(1);
        });

        it('outputs the date when the user changes the date manually in the input', () => {
          expect(context.testComponent.date).toBeUndefined();

          const input: HTMLInputElement = context.testElement.querySelector('input');
          input.value = '01/01/2015';
          input.dispatchEvent(new Event('change'));

          expect(context.testComponent.date.getFullYear()).toBe(2015);
          expect(context.testComponent.date.getMonth()).toBe(0);
          expect(context.testComponent.date.getDate()).toBe(1);

          input.value = '01/01/201';
          input.dispatchEvent(new Event('change'));

          expect(context.testComponent.date).toBe(null);
        });
      });

      describe('Date Display', () => {
        it('displays correct date on mobile in specific timezones', () => {
          const inputEl: HTMLInputElement = context.testElement.querySelector('input');
          enabledService.fakeIsEnabled = false;
          context.detectChanges();

          const userInputDate = '1997-06-22';
          inputEl.value = userInputDate;
          inputEl.dispatchEvent(new Event('change'));
          expect(inputEl.value).toBe(userInputDate);
        });

        it('displays the date on the input when the selectedDay is updated', () => {
          dateNavigationService.notifySelectedDayChanged(new DayModel(2015, 1, 1));
          expect(context.clarityElement.value).toBe('02/01/2015');

          dateNavigationService.notifySelectedDayChanged(new DayModel(2018, 5, 1));
          expect(context.clarityElement.value).toBe('06/01/2018');
        });

        it('calls the DateIOService toLocaleDisplayFormatString method to display the selectedDay', () => {
          spyOn(dateIOService, 'toLocaleDisplayFormatString');
          dateNavigationService.notifySelectedDayChanged(new DayModel(2015, 1, 1));
          expect(dateIOService.toLocaleDisplayFormatString).toHaveBeenCalled();
        });
      });

      describe('Host Bindings & Listeners', () => {
        it('binds the placeholderText to the placeholder of the input', () => {
          expect(context.clarityElement.placeholder).toBe('MM/DD/YYYY');
        });

        // Ignore Safari and IE here because it silently disallows setting to `date` types
        // since it is not supported.
        itIgnore(['safari', 'ie'], 'binds the input type correctly', () => {
          expect(context.clarityElement.type).toBe('text');

          enabledService.fakeIsEnabled = false;
          context.detectChanges();

          expect(context.clarityElement.type).toBe('date');
        });

        it('listens to the input change events', () => {
          spyOn(context.clarityDirective, 'onValueChange');

          const inputEl = context.fixture.debugElement.query(By.directive(ClrDateInput));
          inputEl.triggerEventHandler('change', inputEl);

          expect(context.clarityDirective.onValueChange).toHaveBeenCalled();
        });
      });
    });

    describe('Datepicker with ngModel', () => {
      let fixture: ComponentFixture<TestComponentWithNgModel>;
      let dateContainerDebugElement: DebugElement;
      let dateInputDebugElement: DebugElement;

      beforeEach(function() {
        TestBed.configureTestingModule({
          imports: [FormsModule, ClrFormsModule],
          declarations: [TestComponentWithNgModel],
        });

        fixture = TestBed.createComponent(TestComponentWithNgModel);
        fixture.detectChanges();
        dateContainerDebugElement = fixture.debugElement.query(By.directive(ClrDateContainer));
        dateInputDebugElement = fixture.debugElement.query(By.directive(ClrDateInput));
        dateNavigationService = dateContainerDebugElement.injector.get(DateNavigationService);
      });

      it(
        'updates the selectedDay when the app changes the ngModel value',
        fakeAsync(() => {
          fixture.componentInstance.dateValue = '01/02/2015';

          fixture.detectChanges();
          tick();

          expect(dateInputDebugElement.nativeElement.value).toBe('01/02/2015');
          expect(dateNavigationService.selectedDay).toEqual(new DayModel(2015, 0, 2));

          fixture.componentInstance.dateValue = '05/05/2015';

          fixture.detectChanges();
          tick();

          expect(dateInputDebugElement.nativeElement.value).toBe('05/05/2015');
          expect(dateNavigationService.selectedDay).toEqual(new DayModel(2015, 4, 5));
        })
      );

      it('updates the model and the input element when selectedDay updated notification is received', () => {
        expect(fixture.componentInstance.dateValue).toBeUndefined();

        dateNavigationService.notifySelectedDayChanged(new DayModel(2015, 1, 1));

        fixture.detectChanges();

        expect(dateInputDebugElement.nativeElement.value).toBe('02/01/2015');
        expect(fixture.componentInstance.dateValue).toBe('02/01/2015');
      });

      it(
        'allows you to reset the model',
        fakeAsync(() => {
          fixture.componentInstance.dateValue = '01/02/2015';
          fixture.detectChanges();
          tick();

          expect(dateInputDebugElement.nativeElement.value).toBe('01/02/2015');
          expect(dateNavigationService.selectedDay).toEqual(new DayModel(2015, 0, 2));

          fixture.nativeElement.querySelector('#reset').click();
          fixture.detectChanges();
          tick();

          expect(dateInputDebugElement.nativeElement.value).toBe('');
          expect(dateNavigationService.selectedDay).toEqual(null);

          fixture.componentInstance.dateValue = '01/02/2015';
          fixture.detectChanges();
          tick();

          expect(dateInputDebugElement.nativeElement.value).toBe('01/02/2015');
          expect(dateNavigationService.selectedDay).toEqual(new DayModel(2015, 0, 2));
        })
      );

      // IE doesn't handle Event constructor
      itIgnore(
        ['ie'],
        'updates the model and the selectedDay when the changes the input field',
        fakeAsync(() => {
          dateInputDebugElement.nativeElement.value = '01/02/2015';
          dateInputDebugElement.nativeElement.dispatchEvent(new Event('change'));

          fixture.detectChanges();
          tick();

          expect(dateNavigationService.selectedDay).toEqual(new DayModel(2015, 0, 2));
        })
      );
    });

    describe('Datepicker with Reactive Forms', () => {
      let fixture: ComponentFixture<TestComponentWithReactiveForms>;

      let dateContainerDebugElement: DebugElement;
      let dateInputDebugElement: DebugElement;

      beforeEach(function() {
        TestBed.configureTestingModule({
          imports: [ReactiveFormsModule, ClrFormsModule],
          declarations: [TestComponentWithReactiveForms],
        });

        fixture = TestBed.createComponent(TestComponentWithReactiveForms);
        fixture.detectChanges();
        dateContainerDebugElement = fixture.debugElement.query(By.directive(ClrDateContainer));
        dateInputDebugElement = fixture.debugElement.query(By.directive(ClrDateInput));
        dateNavigationService = dateContainerDebugElement.injector.get(DateNavigationService);
        dateFormControlService = dateContainerDebugElement.injector.get(DateFormControlService);
      });

      it('initializes the input and the selected day with the value set by the user', () => {
        expect(fixture.componentInstance.testForm.get('date').value).not.toBeNull();

        expect(dateInputDebugElement.nativeElement.value).toBe(fixture.componentInstance.dateInput);
        expect(dateNavigationService.selectedDay.year).toBe(2015);
        expect(dateNavigationService.selectedDay.month).toBe(0);
        expect(dateNavigationService.selectedDay.date).toBe(1);
      });

      it('updates the input and the selected day when the value is updated by the user', () => {
        fixture.componentInstance.testForm.setValue({ date: '05/05/2018' });

        expect(dateInputDebugElement.nativeElement.value).toBe('05/05/2018');
        expect(dateNavigationService.selectedDay.year).toBe(2018);
        expect(dateNavigationService.selectedDay.month).toBe(4);
        expect(dateNavigationService.selectedDay.date).toBe(5);
      });

      it('outputs the date when the user manually changes the date', () => {
        const inputEl: HTMLInputElement = fixture.nativeElement.querySelector('input');
        let date: Date = fixture.componentInstance.dateOutput;

        expect(date).toBeUndefined();
        inputEl.value = '01/01/2012';
        inputEl.dispatchEvent(new Event('change'));
        fixture.detectChanges();

        date = fixture.componentInstance.dateOutput;

        expect(date.getFullYear()).toBe(2012);
        expect(date.getMonth()).toBe(0);
        expect(date.getDate()).toBe(1);

        inputEl.value = '01/01/201';
        inputEl.dispatchEvent(new Event('change'));
        fixture.detectChanges();

        date = fixture.componentInstance.dateOutput;

        expect(date).toBeNull();
      });

      it('marks the form as touched when the markAsTouched event is received', () => {
        const date = fixture.componentInstance.testForm.get('date');
        expect(date.touched).toBe(false);

        dateFormControlService.markAsTouched();

        expect(date.touched).toBe(true);
      });

      it('marks the form as dirty when the markAsDirty event is received', () => {
        const date = fixture.componentInstance.testForm.get('date');
        expect(date.dirty).toBe(false);

        dateFormControlService.markAsDirty();

        expect(date.dirty).toBe(true);
      });
    });

    describe('Datepicker with Template Driven Forms', () => {
      let fixture: ComponentFixture<TestComponentWithTemplateDrivenForms>;
      let dateContainerDebugElement: DebugElement;

      beforeEach(function() {
        TestBed.configureTestingModule({
          imports: [FormsModule, ClrFormsModule],
          declarations: [TestComponentWithTemplateDrivenForms],
        });
        fixture = TestBed.createComponent(TestComponentWithTemplateDrivenForms);
        fixture.detectChanges();

        dateContainerDebugElement = fixture.debugElement.query(By.directive(ClrDateContainer));
        dateFormControlService = dateContainerDebugElement.injector.get(DateFormControlService);
      });

      it('marks the form as touched when the markAsTouched event is received', done => {
        fixture.whenStable().then(() => {
          const form = fixture.componentInstance.templateForm.form;
          expect(form.get('date').touched).toBe(false);

          dateFormControlService.markAsTouched();

          fixture.detectChanges();
          expect(form.get('date').touched).toBe(true);
          done();
        });
      });

      it('marks the form as dirty when the markAsDirty event is received', done => {
        fixture.whenStable().then(() => {
          const form = fixture.componentInstance.templateForm.form;
          expect(form.get('date').dirty).toBe(false);

          dateFormControlService.markAsDirty();

          fixture.detectChanges();
          expect(form.get('date').dirty).toBe(true);
          done();
        });
      });

      it('outputs the date when the user manually changes the date', () => {
        const inputEl: HTMLInputElement = fixture.nativeElement.querySelector('input');
        let date: Date = fixture.componentInstance.dateOutput;

        expect(date).toBeUndefined();
        inputEl.value = '01/01/2012';
        inputEl.dispatchEvent(new Event('change'));
        fixture.detectChanges();

        date = fixture.componentInstance.dateOutput;

        expect(date.getFullYear()).toBe(2012);
        expect(date.getMonth()).toBe(0);
        expect(date.getDate()).toBe(1);

        inputEl.value = '01/01/201';
        inputEl.dispatchEvent(new Event('change'));
        fixture.detectChanges();

        date = fixture.componentInstance.dateOutput;

        expect(date).toBeNull();
      });
    });

    describe('Datepicker with clrDate', () => {
      let fixture: ComponentFixture<TestComponentWithClrDate>;
      let dateContainerDebugElement: DebugElement;
      let dateInputDebugElement: DebugElement;

      beforeEach(function() {
        TestBed.configureTestingModule({
          imports: [FormsModule, ClrFormsModule],
          declarations: [TestComponentWithClrDate],
        });

        fixture = TestBed.createComponent(TestComponentWithClrDate);
        fixture.detectChanges();
        dateContainerDebugElement = fixture.debugElement.query(By.directive(ClrDateContainer));
        dateInputDebugElement = fixture.debugElement.query(By.directive(ClrDateInput));
        dateNavigationService = dateContainerDebugElement.injector.get(DateNavigationService);
      });

      it('supports a clrDate Input', () => {
        const date: Date = new Date();

        fixture.componentInstance.date = date;

        fixture.detectChanges();

        expect(dateNavigationService.selectedDay.year).toBe(date.getFullYear());
        expect(dateNavigationService.selectedDay.month).toBe(date.getMonth());
        expect(dateNavigationService.selectedDay.date).toBe(date.getDate());

        // Change the Date
        fixture.componentInstance.date = new Date(2015, 1, 1);

        fixture.detectChanges();

        expect(dateNavigationService.selectedDay.year).toBe(2015);
        expect(dateNavigationService.selectedDay.month).toBe(1);
        expect(dateNavigationService.selectedDay.date).toBe(1);
      });

      it('emits the output date correctly if using clarity datepicker', () => {
        expect(fixture.componentInstance.date).toBeUndefined();

        const date = new Date();
        dateNavigationService.notifySelectedDayChanged(
          new DayModel(date.getFullYear(), date.getMonth(), date.getDate())
        );
        fixture.detectChanges();

        expect(fixture.componentInstance.date.getFullYear()).toBe(date.getFullYear());
        expect(fixture.componentInstance.date.getMonth()).toBe(date.getMonth());
        expect(fixture.componentInstance.date.getDate()).toBe(date.getDate());
      });

      it('emits the output date correctly if using native datepicker', () => {
        expect(fixture.componentInstance.date).toBeUndefined();

        dateInputDebugElement.nativeElement.value = '02/19/2015';
        dateInputDebugElement.nativeElement.dispatchEvent(new Event('change'));

        expect(fixture.componentInstance.date.getFullYear()).toBe(2015);
        expect(fixture.componentInstance.date.getMonth()).toBe(1);
        expect(fixture.componentInstance.date.getDate()).toBe(19);
      });

      it('outputs the date appropriately when switching between user updates and programmatic updates', () => {
        expect(fixture.componentInstance.date).toBeUndefined();

        dateNavigationService.notifySelectedDayChanged(new DayModel(2015, 1, 1));
        fixture.detectChanges();
        expect(fixture.componentInstance.date.getFullYear()).toBe(2015);

        fixture.componentInstance.date = new Date(2019, 1, 1);
        fixture.detectChanges();
        expect(fixture.componentInstance.date.getFullYear()).toBe(2019);

        dateNavigationService.notifySelectedDayChanged(new DayModel(2015, 1, 1));
        fixture.detectChanges();
        expect(fixture.componentInstance.date.getFullYear()).toBe(2015);
      });

      // IE doesn't like event constructors
      itIgnore(['ie'], 'emits the date when the user changes the input', () => {
        dateInputDebugElement.nativeElement.value = '01/02/2015';
        dateInputDebugElement.nativeElement.dispatchEvent(new Event('change'));

        fixture.detectChanges();

        expect(fixture.componentInstance.date.getFullYear()).toBe(2015);
        expect(fixture.componentInstance.date.getMonth()).toBe(0);
        expect(fixture.componentInstance.date.getDate()).toBe(2);

        dateInputDebugElement.nativeElement.value = '01/02/201';
        dateInputDebugElement.nativeElement.dispatchEvent(new Event('change'));

        fixture.detectChanges();

        expect(fixture.componentInstance.date).toBeNull();
      });

      it('preserves input value from user when date is invalid', () => {
        dateInputDebugElement.nativeElement.value = '01/02/201';
        dateInputDebugElement.nativeElement.dispatchEvent(new Event('change'));
        fixture.detectChanges();

        expect(fixture.componentInstance.date).toBe(null);
        expect(dateInputDebugElement.nativeElement.value).toBe('01/02/201');
      });

      it('updates the HTML input with value from clrDate input', () => {
        expect(fixture.componentInstance.date).toBeUndefined();
        fixture.detectChanges();
        expect(dateInputDebugElement.nativeElement.value).toBe('');

        fixture.componentInstance.date = new Date(2019, 2, 1);
        fixture.detectChanges();
        expect(dateInputDebugElement.nativeElement.value).toBe('03/01/2019');

        fixture.componentInstance.date = null;
        fixture.detectChanges();
        expect(dateInputDebugElement.nativeElement.value).toBe('');
      });
    });
  });
}

@Component({
  template: `
        <input type="date" clrDate (clrDateChange)="dateChanged($event)" class="test-class clr-col-12 clr-col-md-8">
    `,
})
class TestComponent {
  date: Date;

  dateChanged(date: Date) {
    this.date = date;
  }
}

@Component({
  template: `
        <input type="date" clrDate [(ngModel)]="dateValue" #picker="ngModel">
        <button id="reset" (click)="picker.reset()">Reset</button>
    `,
})
class TestComponentWithNgModel {
  dateValue: string;

  @ViewChild(ClrDateInput, { static: false })
  dateInputInstance: ClrDateInput;
}

@Component({
  template: `
        <input type="date" [(clrDate)]="date">
    `,
})
class TestComponentWithClrDate {
  date: Date;
}

@Component({
  template: `
        <form [formGroup]="testForm">
            <input id="dateControl" type="date" clrDate (clrDateChange)="dateChanged($event)" formControlName="date">
        </form>
    `,
})
class TestComponentWithReactiveForms {
  dateInput: string = '01/01/2015';
  testForm = new FormGroup({ date: new FormControl(this.dateInput) });

  dateOutput: Date;

  dateChanged(date: Date) {
    this.dateOutput = date;
  }
}

@Component({
  template: `
        <form #templateForm="ngForm">
            <input type="date" clrDate (clrDateChange)="dateChanged($event)" [(ngModel)]="dateInput" name="date">
        </form>
    `,
})
class TestComponentWithTemplateDrivenForms {
  @ViewChild('templateForm', { static: false })
  templateForm: NgForm;
  dateInput: string = '01/01/2015';
  dateOutput: Date;

  dateChanged(date: Date) {
    this.dateOutput = date;
  }
}
