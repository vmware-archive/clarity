/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";
import {Wizard} from "../wizard";
import {TestContext} from "../../utils/testing/helpers.spec";
import {ButtonHubService} from "./button-hub";
import {WizardNavigationService} from "./wizard-navigation";
import {PageCollectionService} from "./page-collection";

export default function(): void {

    describe("Button Hub Service", function() {
        let context: TestContext<Wizard, ButtonHubTest>;
        let buttonHubService: ButtonHubService;
        let wizardNavigationService: WizardNavigationService;
        let pageCollectionService: PageCollectionService;

        beforeEach(function() {
            context = this.create(Wizard, ButtonHubTest);
            buttonHubService = context.getClarityProvider(ButtonHubService);
            wizardNavigationService = context.getClarityProvider(WizardNavigationService);
            pageCollectionService = context.getClarityProvider(PageCollectionService);
            context.detectChanges();
        });

        it("'next' calls wizardNavigationService.next", function() {
            spyOn(wizardNavigationService, "next");
            buttonHubService.buttonClicked("next");
            expect(wizardNavigationService.next).toHaveBeenCalled();
        });

        it("'previous' calls wizardNavigationService.previous", function() {
            wizardNavigationService.setCurrentPage(pageCollectionService.lastPage);
            spyOn(wizardNavigationService, "previous");
            buttonHubService.buttonClicked("previous");
            expect(wizardNavigationService.previous).toHaveBeenCalled();
        });

        it("'danger' calls wizardNavigationService.next or wizardNavigationService.finish", function() {
            spyOn(wizardNavigationService, "next");
            buttonHubService.buttonClicked("danger");
            expect(wizardNavigationService.next).toHaveBeenCalled();

            spyOn(wizardNavigationService, "finish");
            wizardNavigationService.setCurrentPage(wizardNavigationService.pageCollection.lastPage);
            buttonHubService.buttonClicked("danger");
            expect(wizardNavigationService.finish).toHaveBeenCalled();
        });

        it("'cancel' calls wizardNavigationService.cancel", function() {
            spyOn(wizardNavigationService, "cancel");
            buttonHubService.buttonClicked("cancel");
            expect(wizardNavigationService.cancel).toHaveBeenCalled();
        });

        // TODO: this isn't making it all the way up through wizard for some reason
        // so it is saying the spies aren't getting called...
        xit("'finish' calls wizard deactivateGhostPages, deactivateGhostPages.close, emit wizardFinished", function() {
            let wizard = context.clarityDirective;
            let finalPage = wizard.pageCollection.lastPage;

            spyOn(wizard.wizardFinished, "emit");
            spyOn(wizard, "deactivateGhostPages");
            spyOn(wizard, "close");

            // set up for finish
            // make last page current
            wizard.navService.setCurrentPage(finalPage);
            // make ready to complete
            finalPage.nextStepDisabled = false;
            context.detectChanges();

            buttonHubService.buttonClicked("finish");

            expect(wizard.deactivateGhostPages).toHaveBeenCalled();
            expect(wizard.wizardFinished.emit).toHaveBeenCalled();
            expect(wizard.close).toHaveBeenCalled();
        });

        it(".custom calls wizardNavigationService.currentPage.customButtonClicked", function() {
            spyOn(wizardNavigationService.currentPage.customButtonClicked, "emit");
            buttonHubService.buttonClicked("custom");
            expect(wizardNavigationService.currentPage.customButtonClicked.emit).toHaveBeenCalled();
        });
    });
}

@Component({
    template: `
        <clr-wizard #wizard [(clrWizardOpen)]="open" [clrWizardShowGhostPages]="true">
            <clr-wizard-title>My Wizard Title</clr-wizard-title>
            <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
            <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
            <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
            <clr-wizard-button [type]="'finish'">Fait Accompli</clr-wizard-button>

            <clr-wizard-page>
                <ng-template clrPageTitle>Title for Page 1</ng-template>
                <p>Content for step 1</p>
            </clr-wizard-page>
            <clr-wizard-page>
                <ng-template clrPageTitle>Title for Page 2</ng-template>
                <p>Content for step 2</p>
            </clr-wizard-page>
            <clr-wizard-page>
                <ng-template clrPageTitle>Title for Page 3</ng-template>
                <p>Content for step 3</p>
            </clr-wizard-page>
        </clr-wizard>
    `
})
class ButtonHubTest {
    open: boolean = true;
}