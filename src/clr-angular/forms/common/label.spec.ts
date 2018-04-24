/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";

import {FormControlService} from "./form-control.service";
import {ClrLabel} from "./label";


@Component({template: `<label></label>`})
class NoForTest {
}

@Component({template: `<label for="hello"></label>`})
class ExplicitForTest {
}

export default function(): void {
    describe("ClrLabel", () => {
        it("doesn't crash if it is not used in an Angular form", function() {
            TestBed.configureTestingModule({declarations: [ClrLabel, NoForTest]});
            expect(() => {
                const fixture = TestBed.createComponent(NoForTest);
                fixture.detectChanges();
            }).not.toThrow();
        });

        it("sets the for attribute to the id given by the service", function() {
            TestBed.configureTestingModule({declarations: [ClrLabel, NoForTest], providers: [FormControlService]});
            const fixture = TestBed.createComponent(NoForTest);
            fixture.detectChanges();
            const formControlService = fixture.debugElement.injector.get(FormControlService);
            const label = fixture.nativeElement.querySelector("label");
            expect(label.getAttribute("for")).toBe(formControlService.id);
            formControlService.id = "test";
            fixture.detectChanges();
            expect(label.getAttribute("for")).toBe("test");
        });

        it("leaves the for attribute untouched if it exists", function() {
            TestBed.configureTestingModule(
                {declarations: [ClrLabel, ExplicitForTest], providers: [FormControlService]});
            const fixture = TestBed.createComponent(ExplicitForTest);
            fixture.detectChanges();
            const label = fixture.nativeElement.querySelector("label");
            expect(label.getAttribute("for")).toBe("hello");
        });
    });
}
