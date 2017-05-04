/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, QueryList, ViewChildren } from "@angular/core";
import { WizardPageDeprecated } from "./wizard-page";
import { ClrWizardDeprecatedModule } from "./wizard-deprecated.module";

@Component({
    template: `
        <clr-wizard-page-deprecated
            (clrWizardPageOnLoad)="myOnLoad()"
            [clrWizardPageNextDisabled]="nextDisabled">
            {{content1}}
        </clr-wizard-page-deprecated>
        <clr-wizard-page-deprecated
            (clrWizardPageOnCommit)="myOnCommit($event)">
            Content2
         </clr-wizard-page-deprecated>
         <clr-wizard-page-deprecated>
            Content3
         </clr-wizard-page-deprecated>
    `
})

class TestComponent {
    @ViewChildren(WizardPageDeprecated) wizardPageChildren: QueryList<WizardPageDeprecated>;
    open: boolean = true;
    nextDisabled: boolean = false;
    content1: String = "Content1";

    myOnLoad(): void {
        this.content1 = "This Works Better";
    }

    myOnCommit(event: any): void {
        event.preventDefault();
    }
}

describe("WizardPage", () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;
    let wizardPages: WizardPageDeprecated[];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClrWizardDeprecatedModule],
            declarations: [TestComponent]
        });
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        wizardPages = fixture.componentInstance.wizardPageChildren.toArray();
    });

    afterEach(() => {
        fixture.destroy();
    });

    it("has the correct css classes", () => {
        expect(compiled.querySelectorAll(".text-light").length).toEqual(3);
        expect(compiled.querySelectorAll(".content-wrapper").length).toEqual(3);
    });
});
