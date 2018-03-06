/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";
import {Subscription} from "rxjs/Subscription";

import {TestContext} from "../../data/datagrid/helpers.spec";
import {IfOpenService} from "../../utils/conditional/if-open.service";
import {FormControlService} from "../common/form-control.service";

import {ClrDateContainer} from "./date-container";
import {DateIOService} from "./providers/date-io.service";
import {DateNavigationService} from "./providers/date-navigation.service";
import {DatepickerEnabledService} from "./providers/datepicker-enabled.service";
import {MockDatepickerEnabledService} from "./providers/datepicker-enabled.service.mock";
import {LocaleHelperService} from "./providers/locale-helper.service";

export default function() {
    describe("Date Container Component", () => {
        let context: TestContext<ClrDateContainer, TestComponent>;
        let enabledService: MockDatepickerEnabledService;

        beforeEach(function() {
            TestBed.overrideComponent(ClrDateContainer, {
                set: {
                    providers: [
                        {provide: DatepickerEnabledService, useClass: MockDatepickerEnabledService}, IfOpenService,
                        DateNavigationService, LocaleHelperService, DateIOService, FormControlService
                    ]
                }
            });

            context = this.create(ClrDateContainer, TestComponent, []);

            enabledService = <MockDatepickerEnabledService>context.getClarityProvider(DatepickerEnabledService);
        });

        describe("View Basics", () => {
            it("renders the datepicker toggle button based on the enabled service", () => {
                expect(enabledService.isEnabled).toBe(true);
                expect(context.clarityElement.querySelector(".datepicker-trigger")).not.toBeNull();

                enabledService.fakeIsEnabled = false;
                context.detectChanges();

                expect(context.clarityElement.querySelector(".datepicker-trigger")).toBeNull();
            });

            it("clicking on the button toggles the datepicker popover", () => {
                spyOn(context.clarityDirective, "toggleDatepicker");
                const button: HTMLButtonElement = context.clarityElement.querySelector(".datepicker-trigger");

                button.click();
                context.detectChanges();

                expect(context.clarityDirective.toggleDatepicker).toHaveBeenCalled();
            });

            it("projects the date input", () => {
                expect(context.clarityElement.querySelector("input")).not.toBeNull();
            });

            it("shows the datepicker view manager when .datepicker-trigger is clicked", () => {
                expect(context.clarityElement.querySelector("clr-datepicker-view-manager")).toBeNull();

                const button: HTMLButtonElement = context.clarityElement.querySelector(".datepicker-trigger");
                button.click();
                context.detectChanges();

                expect(context.clarityElement.querySelector("clr-datepicker-view-manager")).not.toBeNull();
            });
        });

        describe("Typescript API", () => {
            it("toggles the datepicker popover", () => {
                const ifOpenService: IfOpenService = context.getClarityProvider(IfOpenService);
                const fakeEvent: MouseEvent = new MouseEvent("fakeEvent");
                let flag: boolean;
                const sub: Subscription = ifOpenService.openChange.subscribe((open) => {
                    flag = open;
                });

                expect(flag).toBeUndefined();
                context.clarityDirective.toggleDatepicker(fakeEvent);
                context.detectChanges();

                expect(flag).toBe(true);

                sub.unsubscribe();
            });
        });
    });
}

@Component({
    template: `
        <clr-date-container>
            <input type="date" clrDate>
        </clr-date-container>
    `
})
class TestComponent {}
