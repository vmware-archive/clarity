import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component, QueryList, ViewChildren} from "@angular/core";
import {ScrollingService} from "../main/scrolling-service";
import {ClarityModule} from "../clarity.module";
import {WizardStep} from "./wizard-step";
import {Wizard} from "./wizard";

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
            imports: [ClarityModule],
            declarations: [TestComponent],
            providers: [Wizard, ScrollingService],
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
