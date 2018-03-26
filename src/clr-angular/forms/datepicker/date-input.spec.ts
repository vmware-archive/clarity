/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, DebugElement, ViewChild} from "@angular/core";
import {ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";

import {TestContext} from "../../data/datagrid/helpers.spec";
import {ClrFormsModule} from "../../forms-deprecated";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {FormControlService} from "../common/form-control.service";

import {ClrDateContainer} from "./date-container";
import {ClrDateInput} from "./date-input";
import {DayModel} from "./model/day.model";
import {DateIOService} from "./providers/date-io.service";
import {DateNavigationService} from "./providers/date-navigation.service";
import {DatepickerEnabledService} from "./providers/datepicker-enabled.service";
import {MockDatepickerEnabledService} from "./providers/datepicker-enabled.service.mock";
import {LocaleHelperService} from "./providers/locale-helper.service";

export default function() {
    describe("Date Input Component", () => {
        let context: TestContext<ClrDateInput, TestComponent>;
        let enabledService: MockDatepickerEnabledService;
        let dateIOService: DateIOService;
        let dateNavigationService: DateNavigationService;

        describe("Basics", () => {
            beforeEach(function() {
                TestBed.overrideComponent(ClrDateContainer, {
                    set: {
                        providers: [
                            {provide: DatepickerEnabledService, useClass: MockDatepickerEnabledService}, IfOpenService,
                            DateNavigationService, LocaleHelperService, DateIOService, FormControlService
                        ]
                    }
                });

                context = this.create(ClrDateInput, TestComponent, []);

                enabledService =
                    <MockDatepickerEnabledService>context.fixture.debugElement.query(By.directive(ClrDateContainer))
                        .injector.get(DatepickerEnabledService);
                dateIOService =
                    context.fixture.debugElement.query(By.directive(ClrDateContainer)).injector.get(DateIOService);
                dateNavigationService = context.fixture.debugElement.query(By.directive(ClrDateContainer))
                                            .injector.get(DateNavigationService);
            });

            describe("Typescript API", () => {
                it("gets the placeholder from the IO service", () => {
                    // since we are testing with en-US
                    expect(context.clarityDirective.placeholderText).toBe(dateIOService.placeholderText);
                });

                it("does not override placeholder provided by the user", () => {
                    context.clarityDirective.placeholder = "Test";
                    expect(context.clarityDirective.placeholderText).toBe("Test");
                });

                it("gets whether the datepicker is enabled or not", () => {
                    expect(enabledService.isEnabled).toBe(true);
                    expect(context.clarityDirective.inputType).toBe("text");

                    enabledService.fakeIsEnabled = false;
                    expect(enabledService.isEnabled).toBe(false);

                    context.detectChanges();
                    expect(context.clarityDirective.inputType).toBe("date");
                });

                it("sets the selectedDay if the value of the input is valid", () => {
                    const testEl: HTMLInputElement = <HTMLInputElement>document.createElement("INPUT");
                    testEl.value = "01/02/2015";

                    expect(dateNavigationService.selectedDay)
                        .toBeNull();  // TestComponent is <input clrDate>. null Input

                    context.clarityDirective.onValueChange(testEl);
                    expect(dateNavigationService.selectedDay).toEqual(new DayModel(2015, 0, 2));
                });

                it("sets the selectedDay to a null if the value of the input is invalid", () => {
                    const testEl: HTMLInputElement = <HTMLInputElement>document.createElement("INPUT");
                    testEl.value = "01/02/201";

                    expect(dateNavigationService.selectedDay).toBeNull();
                    context.clarityDirective.onValueChange(testEl);

                    expect(dateNavigationService.selectedDay).toBeNull();
                });
            });

            describe("Date Display", () => {
                it("displays the date on the input when the selectedDay is updated", () => {
                    dateNavigationService.notifySelectedDayChanged(new DayModel(2015, 1, 1));
                    expect(context.clarityElement.value).toBe("02/01/2015");

                    dateNavigationService.notifySelectedDayChanged(new DayModel(2018, 5, 1));
                    expect(context.clarityElement.value).toBe("06/01/2018");
                });

                it("calls the DateIOService toLocaleDisplayFormatString method to display the selectedDay", () => {
                    spyOn(dateIOService, "toLocaleDisplayFormatString");
                    dateNavigationService.notifySelectedDayChanged(new DayModel(2015, 1, 1));
                    expect(dateIOService.toLocaleDisplayFormatString).toHaveBeenCalled();
                });
            });

            describe("Host Bindings & Listeners", () => {
                it("binds the placeholderText to the placeholder of the input", () => {
                    expect(context.clarityElement.placeholder).toBe("MM/DD/YYYY");
                });

                it("binds the input type correctly", () => {
                    expect(context.clarityElement.type).toBe("text");

                    enabledService.fakeIsEnabled = false;
                    context.detectChanges();

                    expect(context.clarityElement.type).toBe("date");
                });

                it("listens to the input change events", () => {
                    spyOn(context.clarityDirective, "onValueChange");

                    const inputEl = context.fixture.debugElement.query(By.directive(ClrDateInput));
                    inputEl.triggerEventHandler("change", inputEl);

                    expect(context.clarityDirective.onValueChange).toHaveBeenCalled();
                });
            });
        });

        describe("Datepicker with ngModel", () => {
            let fixture: ComponentFixture<TestComponentWithNgModel>;
            let compiled: any;
            let dateContainerDebugElement: DebugElement;
            let dateInputDebugElement: DebugElement;

            beforeEach(function() {
                TestBed.configureTestingModule(
                    {imports: [FormsModule, ClrFormsModule], declarations: [TestComponentWithNgModel]});

                fixture = TestBed.createComponent(TestComponentWithNgModel);
                fixture.detectChanges();
                compiled = fixture.nativeElement;
                dateContainerDebugElement = fixture.debugElement.query(By.directive(ClrDateContainer));
                dateInputDebugElement = fixture.debugElement.query(By.directive(ClrDateInput));
                dateNavigationService = dateContainerDebugElement.injector.get(DateNavigationService);
            });

            it("updates the selectedDay when the app changes the ngModel value", fakeAsync(() => {
                   fixture.componentInstance.dateValue = "01/02/2015";

                   fixture.detectChanges();
                   tick();

                   expect(dateInputDebugElement.nativeElement.value).toBe("01/02/2015");
                   expect(dateNavigationService.selectedDay).toEqual(new DayModel(2015, 0, 2));

                   fixture.componentInstance.dateValue = "05/05/2015";

                   fixture.detectChanges();
                   tick();

                   expect(dateInputDebugElement.nativeElement.value).toBe("05/05/2015");
                   expect(dateNavigationService.selectedDay).toEqual(new DayModel(2015, 4, 5));
               }));

            it("updates the model and the input element when selectedDay updated notification is received", () => {
                expect(fixture.componentInstance.dateValue).toBeUndefined();

                dateNavigationService.notifySelectedDayChanged(new DayModel(2015, 1, 1));

                fixture.detectChanges();

                expect(dateInputDebugElement.nativeElement.value).toBe("02/01/2015");
                expect(fixture.componentInstance.dateValue).toBe("02/01/2015");
            });

            it("updates the model and the selectedDay when the changes the input field", fakeAsync(() => {
                   dateInputDebugElement.nativeElement.value = "01/02/2015";
                   dateInputDebugElement.nativeElement.dispatchEvent(new Event("change"));

                   fixture.detectChanges();
                   tick();

                   expect(dateNavigationService.selectedDay).toEqual(new DayModel(2015, 0, 2));
               }));
        });

        describe("Datepicker with Reactive Forms", () => {
            let fixture: ComponentFixture<TestComponentWithReactiveForms>;
            let compiled: any;

            let dateContainerDebugElement: DebugElement;
            let dateInputDebugElement: DebugElement;

            beforeEach(function() {
                TestBed.configureTestingModule(
                    {imports: [ReactiveFormsModule, ClrFormsModule], declarations: [TestComponentWithReactiveForms]});

                fixture = TestBed.createComponent(TestComponentWithReactiveForms);
                fixture.detectChanges();
                compiled = fixture.nativeElement;
                dateContainerDebugElement = fixture.debugElement.query(By.directive(ClrDateContainer));
                dateInputDebugElement = fixture.debugElement.query(By.directive(ClrDateInput));
                dateNavigationService = dateContainerDebugElement.injector.get(DateNavigationService);
            });

            it("initializes the input and the selected day with the value set by the user", () => {
                expect(fixture.componentInstance.date.value).not.toBeNull();

                expect(dateInputDebugElement.nativeElement.value).toBe(fixture.componentInstance.dateInput);
                expect(dateNavigationService.selectedDay.year).toBe(2015);
                expect(dateNavigationService.selectedDay.month).toBe(0);
                expect(dateNavigationService.selectedDay.date).toBe(1);
            });

            it("updates the input and the selected day when the value is updated by the user", () => {
                fixture.componentInstance.date.setValue("05/05/2018");

                expect(dateInputDebugElement.nativeElement.value).toBe("05/05/2018");
                expect(dateNavigationService.selectedDay.year).toBe(2018);
                expect(dateNavigationService.selectedDay.month).toBe(4);
                expect(dateNavigationService.selectedDay.date).toBe(5);
            });
        });

        describe("Datepicker with clrDate", () => {
            let fixture: ComponentFixture<TestComponentWithClrDate>;
            let compiled: any;
            let dateContainerDebugElement: DebugElement;
            let dateInputDebugElement: DebugElement;

            beforeEach(function() {
                TestBed.configureTestingModule(
                    {imports: [FormsModule, ClrFormsModule], declarations: [TestComponentWithClrDate]});

                fixture = TestBed.createComponent(TestComponentWithClrDate);
                fixture.detectChanges();
                compiled = fixture.nativeElement;
                dateContainerDebugElement = fixture.debugElement.query(By.directive(ClrDateContainer));
                dateInputDebugElement = fixture.debugElement.query(By.directive(ClrDateInput));
                dateNavigationService = dateContainerDebugElement.injector.get(DateNavigationService);
            });

            it("supports a clrDate Input", () => {
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

            it("emits the output date correctly", () => {
                expect(fixture.componentInstance.date).toBeUndefined();

                const date: Date = new Date();
                dateNavigationService.notifySelectedDayChanged(
                    new DayModel(date.getFullYear(), date.getMonth(), date.getDate()));
                fixture.detectChanges();

                expect(fixture.componentInstance.date.getFullYear()).toBe(date.getFullYear());
                expect(fixture.componentInstance.date.getMonth()).toBe(date.getMonth());
                expect(fixture.componentInstance.date.getDate()).toBe(date.getDate());
            });

            it("emits the date when the user changes the input", () => {
                dateInputDebugElement.nativeElement.value = "01/02/2015";
                dateInputDebugElement.nativeElement.dispatchEvent(new Event("change"));

                fixture.detectChanges();

                expect(fixture.componentInstance.date.getFullYear()).toBe(2015);
                expect(fixture.componentInstance.date.getMonth()).toBe(0);
                expect(fixture.componentInstance.date.getDate()).toBe(2);

                dateInputDebugElement.nativeElement.value = "01/02/201";
                dateInputDebugElement.nativeElement.dispatchEvent(new Event("change"));

                fixture.detectChanges();

                expect(fixture.componentInstance.date).toBeNull();
            });
        });
    });
}

@Component({
    template: `
        <input type="date" clrDate>
    `
})
class TestComponent {}

@Component({
    template: `
        <input type="date" clrDate [(ngModel)]="dateValue">
    `
})
class TestComponentWithNgModel {
    dateValue: string;

    @ViewChild(ClrDateInput) dateInputInstance: ClrDateInput;
}

@Component({
    template: `
        <input type="date" [(clrDate)]="date">
    `
})
class TestComponentWithClrDate {
    date: Date;
}

@Component({
    template: `
        <input id="dateControl" type="date" clrDate [formControl]="date">
    `
})
class TestComponentWithReactiveForms {
    dateInput: string = "01/01/2015";
    date: FormControl = new FormControl(this.dateInput);
}
