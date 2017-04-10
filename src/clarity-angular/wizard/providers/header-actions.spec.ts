/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";
import {Wizard} from "../wizard";
import {TestContext} from "../../utils/testing/helpers.spec";
import {HeaderActionService} from "./header-actions";
import {WizardNavigationService} from "./wizard-navigation";

export default function(): void {

    describe("Header Actions Service", function() {

        let context: TestContext<Wizard, HeaderActionsTest>;
        let headerActionService: HeaderActionService;
        let wizardNavigationService: WizardNavigationService;

        beforeEach(function() {
            context = this.create(Wizard, HeaderActionsTest);
            headerActionService = context.getClarityProvider(HeaderActionService);
            wizardNavigationService = context.getClarityProvider(WizardNavigationService);
            context.detectChanges();
        });

        it(".wizardHasHeaderActions indicates if wizard has header actions", function() {
            expect(headerActionService.wizardHasHeaderActions).toBe(true);
        });

        it(".currentPageHasHeaderActions indicates if the current page has header actions", function() {

            let lastPage = wizardNavigationService.pageCollection.lastPage;

            expect(headerActionService.currentPageHasHeaderActions).toBe(true);
            wizardNavigationService.setCurrentPage(lastPage);
            expect(headerActionService.currentPageHasHeaderActions).toBe(false);
        });

        it(".showWizardHeaderActions indicates if other pages have the header actions", function() {

            let lastPage = wizardNavigationService.pageCollection.lastPage;
            expect(headerActionService.showWizardHeaderActions).toBe(false);

            wizardNavigationService.setCurrentPage(lastPage);
            expect(headerActionService.showWizardHeaderActions).toBe(true);
        });

        /*
        * TODO: investigate displayHeaderActionsWrapper is needed as it seems to always return
         the same value as wizardHasHeaderActions*/
    });

}

@Component({
    template: `
            <clr-wizard #wizard [(clrWizardOpen)]="open" [clrWizardSize]="'lg'">
                <clr-wizard-title>My Wizard Title</clr-wizard-title>
                <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
                <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
                <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
                <clr-wizard-button [type]="'finish'">Fait Accompli</clr-wizard-button>
                <clr-wizard-header-action (actionClicked)="headerActionClicked($event)">
                    <clr-icon shape="cloud" class="is-solid"></clr-icon>
                </clr-wizard-header-action>
                <clr-wizard-page>
                    <ng-template clrPageTitle>Longer Title for Page 1</ng-template>
                    <p>Content for step 1</p>
                    <ng-template clrPageHeaderActions>
                        <clr-wizard-header-action (actionClicked)="headerActionClicked($event)" id="bell">
                            <clr-icon shape="bell" class="has-badge"></clr-icon>
                        </clr-wizard-header-action>
                        <clr-wizard-header-action (actionClicked)="headerActionClicked($event)" id="warning">
                            <clr-icon shape="warning"></clr-icon>
                        </clr-wizard-header-action>
                    </ng-template>
                </clr-wizard-page>
                <clr-wizard-page>
                    <ng-template clrPageTitle>Title for Page 2</ng-template>
                    <p>Content for step 2</p>
                </clr-wizard-page>
                <clr-wizard-page>
                    <ng-template clrPageTitle>Title for Page 3</ng-template>
                    <p>Content for step 3</p>
                </clr-wizard-page>
                <clr-wizard-page>
                    <ng-template clrPageTitle>Title for Page 4</ng-template>
                    <p>Content for step 4</p>
                </clr-wizard-page>
                <clr-wizard-page>
                    <ng-template clrPageTitle>Title for Page 5</ng-template>
                    <p>Content for step 5</p>
                </clr-wizard-page>
            </clr-wizard>
    `
})
class HeaderActionsTest {
    open: boolean = true;
    headerActionClicked = function() {
        // console.log("header action clicked!");
    };
}