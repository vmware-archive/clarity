/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component, QueryList, ViewChildren} from "@angular/core";
import {WizardPage} from "./wizard-page";
import {ClarityModule} from "../clarity.module";

@Component({
    template: `
        <clr-wizard-page
            (clrWizardPageOnLoad)="myOnLoad()"
            [clrWizardPageNextDisabled]="nextDisabled">
            {{content1}}
        </clr-wizard-page>
        <clr-wizard-page
            (clrWizardPageOnCommit)="myOnCommit($event)">
            Content2
         </clr-wizard-page>
         <clr-wizard-page>
            Content3
         </clr-wizard-page>
    `
})

class TestComponent {
    @ViewChildren(WizardPage) wizardPageChildren: QueryList<WizardPage>;
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
    let wizardPages: WizardPage[];
    let elements: HTMLElement[];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClarityModule.forRoot()],
            declarations: [TestComponent]
        });
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        wizardPages = fixture.componentInstance.wizardPageChildren.toArray();
        elements = fixture.nativeElement.querySelectorAll("clr-wizard-page");
    });

    afterEach(() => {
        fixture.destroy();
    });

    it("has the correct css classes", () => {
        expect(compiled.querySelectorAll(".text-light").length).toEqual(3);
        expect(compiled.querySelectorAll(".content-wrapper").length).toEqual(3);
    });
});
