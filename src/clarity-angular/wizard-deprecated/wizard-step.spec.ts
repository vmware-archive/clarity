/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, QueryList, ViewChildren } from "@angular/core";
import { ScrollingService } from "../utils/scrolling/scrolling-service";
import { WizardStep } from "./wizard-step";
import { WizardDeprecated } from "./wizard";
import { ClrWizardDeprecatedModule } from "./wizard-deprecated.module";

@Component({
    template: `
        <clr-wizard-step>Tab1</clr-wizard-step>
        <clr-wizard-step>Tab2</clr-wizard-step>
    `
})
class TestComponent {
    @ViewChildren(WizardStep) wizardStepChildren: QueryList<WizardStep>;
    open: boolean = true;
}

describe("WizardStep", () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;
    let wizardSteps: WizardStep[];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClrWizardDeprecatedModule],
            declarations: [TestComponent],
            providers: [WizardDeprecated, ScrollingService],
        });

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        wizardSteps = fixture.componentInstance.wizardStepChildren.toArray();
    });

    afterEach(() => {
        fixture.destroy();
    });

    it("has the correct css classes", () => {
        expect(compiled.querySelector(".nav-link")).not.toBeNull();
    });
});
