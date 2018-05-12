/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Directive, NgModule, Type, ViewContainerRef} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

import {DynamicWrapper} from "../../utils/host-wrapping/dynamic-wrapper";
import {HostWrapper} from "../../utils/host-wrapping/host-wrapper";
import {ClrHostWrappingModule} from "../../utils/host-wrapping/host-wrapping.module";

import {FormControlService} from "./form-control.service";
import {WrappedFormControl} from "./wrapped-form-control";

/*
 * Components using the WrappedFormControl we want to test.
 */
@Component({selector: "test-wrapper", template: `<ng-content></ng-content>`, providers: [FormControlService]})
class TestWrapper implements DynamicWrapper {
    _dynamic = false;
}

@Directive({selector: "[testControl]"})
class TestControl extends WrappedFormControl<TestWrapper> {
    constructor(vcr: ViewContainerRef) {
        super(TestWrapper, vcr);
    }
}

@NgModule({
    imports: [ClrHostWrappingModule],
    declarations: [TestWrapper, TestControl],
    exports: [TestWrapper, TestControl],
    entryComponents: [TestWrapper]
})
class WrappedFormControlTestModule {
}


/*
 * Actual test components, one for each case we support
 */
@Component({template: `<input testControl />`})
class NoWrapperNoId {
}

@Component({template: `<input testControl id="hello" />`})
class NoWrapperWithId {
}

@Component({template: `<test-wrapper><input testControl /></test-wrapper>`})
class WithWrapperNoId {
}

@Component({template: `<test-wrapper><input testControl id="hello" /></test-wrapper>`})
class WithWrapperWithId {
}

interface TestContext {
    fixture: ComponentFixture<any>;
    wrapper: TestWrapper;
    control: TestControl;
    formControlService: FormControlService;
    input: any;
}

export default function(): void {
    describe("WrappedFormControl", () => {
        function setupTest<T>(testContext: TestContext, testComponent: Type<T>) {
            TestBed.configureTestingModule({imports: [WrappedFormControlTestModule], declarations: [testComponent]});
            testContext.fixture = TestBed.createComponent(testComponent);
            testContext.fixture.detectChanges();
            const wrapperDebugElement = testContext.fixture.debugElement.query(By.directive(TestWrapper));
            testContext.wrapper = wrapperDebugElement.componentInstance;
            testContext.control =
                testContext.fixture.debugElement.query(By.directive(TestControl)).injector.get(TestControl);
            testContext.formControlService = wrapperDebugElement.injector.get(FormControlService);
            testContext.input = testContext.fixture.nativeElement.querySelector("input");
        }

        describe("with an explicit wrapper", function() {
            it("uses HostWrapper to inject the FormControlService", function(this: TestContext) {
                spyOn(HostWrapper.prototype, "get").and.callThrough();
                setupTest(this, WithWrapperNoId);
                expect(HostWrapper.prototype.get).toHaveBeenCalledWith(FormControlService);
                expect(this.wrapper._dynamic).toBe(false);
            });

            it("sets the id of the host to the id given by the service", function(this: TestContext) {
                setupTest(this, WithWrapperNoId);
                expect(this.input.getAttribute("id")).toBe(this.formControlService.id);
            });

            it("updates the service to the correct id if it exists", function(this: TestContext) {
                setupTest(this, WithWrapperWithId);
                expect(this.input.getAttribute("id")).toBe("hello");
                expect(this.formControlService.id).toBe("hello");
            });
        });

        describe("without an explicit wrapper", function() {
            it("uses HostWrapper to inject the FormControlService", function(this: TestContext) {
                spyOn(HostWrapper.prototype, "get").and.callThrough();
                setupTest(this, NoWrapperNoId);
                expect(HostWrapper.prototype.get).toHaveBeenCalledWith(FormControlService);
                expect(this.wrapper._dynamic).toBe(true);
            });

            it("sets the id of the host to the id given by the service", function(this: TestContext) {
                setupTest(this, NoWrapperNoId);
                expect(this.input.getAttribute("id")).toBe(this.formControlService.id);
            });

            it("updates the service to the correct id if it exists", function(this: TestContext) {
                setupTest(this, NoWrapperWithId);
                expect(this.input.getAttribute("id")).toBe("hello");
                expect(this.formControlService.id).toBe("hello");
            });
        });
    });
}
