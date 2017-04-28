/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {WizardNavigationService} from "./wizard-navigation";
import {PageCollectionService} from "./page-collection";
import {Component} from "@angular/core";
import {Wizard} from "../wizard";
import {TestContext} from "../../utils/testing/helpers.spec";

export default function(): void {

    describe("Wizard Navigation Service", function() {

        let context: TestContext<Wizard, NavigationTest>;
        let wizardNavigationService: WizardNavigationService;
        let pageCollectionService: PageCollectionService;

        beforeEach(function() {
            context = this.create(Wizard, NavigationTest);
            wizardNavigationService = context.getClarityProvider(WizardNavigationService);
            pageCollectionService = context.getClarityProvider(PageCollectionService);
            context.detectChanges();
        });

        it(".setCurrentPage() should set the current page and emit the event", function() {
            wizardNavigationService.setCurrentPage(pageCollectionService.getPageByIndex(1));
            expect(wizardNavigationService.currentPage).toEqual(pageCollectionService.getPageByIndex(1));
            wizardNavigationService.setCurrentPage(pageCollectionService.lastPage);
            expect(wizardNavigationService.currentPage).toEqual(pageCollectionService.lastPage);
        });

        it(".next() should call finish() if the current page is the last page.", function() {
            let testPage = wizardNavigationService.pageCollection.lastPage;
            let wizard = context.clarityDirective;

            wizardNavigationService.setCurrentPage(testPage);
            spyOn(testPage.primaryButtonClicked, "emit");
            spyOn(testPage.onCommit, "emit");
            spyOn(wizard.wizardFinished, "emit");

            wizardNavigationService.wizardFinished.subscribe(function() {
                wizard.wizardFinished.emit();
            });

            wizardNavigationService.next();

            expect(testPage.primaryButtonClicked.emit).toHaveBeenCalled();
            expect(testPage.onCommit.emit).toHaveBeenCalled();
            expect(testPage.completed).toBe(true);
            expect(wizard.wizardFinished.emit).toHaveBeenCalled();
        });

        it(".next() should set the current page to the next page.", function() {
            expect(wizardNavigationService.currentPage)
                .toEqual(wizardNavigationService.pageCollection.getPageByIndex(0));

            wizardNavigationService.next();

            expect(wizardNavigationService.currentPage)
                .toEqual(wizardNavigationService.pageCollection.getPageByIndex(1));
        });

        it(".next() should return undefined if the next page is disabled", function() {

            let testPage = wizardNavigationService.pageCollection.getPageByIndex(2);
            testPage.nextStepDisabled = true;
            wizardNavigationService.setCurrentPage(testPage);
            expect(wizardNavigationService.next()).toBeUndefined();
        });

        /*
         * TODO: as next() calls finish(), it seems that there are repetition in the following tests.
         * We should investigate possibilities of stripping down some of these tests on finish() and next() */

        it(".finish() should commit the current page and emit the event", function() {
            let testPage = wizardNavigationService.pageCollection.getPageByIndex(2);

            spyOn(testPage.primaryButtonClicked, "emit");
            spyOn(testPage.onCommit, "emit");
            spyOn(context.clarityDirective.wizardFinished, "emit");

            wizardNavigationService.setCurrentPage(testPage);

            wizardNavigationService.finish();

            expect(testPage.primaryButtonClicked.emit).toHaveBeenCalled();
            expect(testPage.onCommit.emit).toHaveBeenCalled();
            expect(testPage.completed).toBe(true);
            expect(context.clarityDirective.wizardFinished.emit).toHaveBeenCalled();
        });

        it(".finish() should not commit the current page and emit events if next is disabled", function() {
            let testPage = wizardNavigationService.pageCollection.getPageByIndex(2);

            testPage.nextStepDisabled = true;
            context.detectChanges();

            spyOn(testPage.primaryButtonClicked, "emit");
            spyOn(testPage.onCommit, "emit");
            spyOn(context.clarityDirective.wizardFinished, "emit");

            wizardNavigationService.wizardFinished.subscribe(function() {
                context.clarityDirective.wizardFinished.emit();
            });

            wizardNavigationService.setCurrentPage(testPage);
            wizardNavigationService.finish();
            expect(testPage.primaryButtonClicked.emit).not.toHaveBeenCalled();
            expect(testPage.onCommit.emit).not.toHaveBeenCalled();
            expect(testPage.completed).toBe(false);
            expect(context.clarityDirective.wizardFinished.emit).not.toHaveBeenCalled();
        });

        it(".previous() should return undefined if the current page is the first page", function() {
            let testPage = wizardNavigationService.pageCollection.getPageByIndex(0);
            wizardNavigationService.setCurrentPage(testPage);
            expect(wizardNavigationService.previous()).toBeUndefined();
        });

        it(".previous() should set the current page to the previous page", function() {
            let testPage = wizardNavigationService.pageCollection.getPageByIndex(2);
            let previousPage = wizardNavigationService.pageCollection.getPageByIndex(1);
            wizardNavigationService.setCurrentPage(testPage);
            wizardNavigationService.previous();
            expect(wizardNavigationService.currentPage).toEqual(previousPage);

        });

        it(".goTo() should return undefined if the given page is equal to the current page", function() {
            let testPage = wizardNavigationService.pageCollection.getPageByIndex(1);
            let goToPage = wizardNavigationService.pageCollection.getPageByIndex(1);
            wizardNavigationService.setCurrentPage(testPage);
            expect(wizardNavigationService.goTo(goToPage)).toBeUndefined();
            expect(wizardNavigationService.goTo(goToPage.id)).toBeUndefined();
        });

        it(".goTo() should set the current page as the given page", function() {
            let testPage = wizardNavigationService.pageCollection.getPageByIndex(1);
            let goToPage = wizardNavigationService.pageCollection.getPageByIndex(2);
            wizardNavigationService.setCurrentPage(testPage);
            wizardNavigationService.setCurrentPage(goToPage);
            expect(wizardNavigationService.currentPage).toEqual(goToPage);
        });

        it(".setFirstPageCurrent() should set the first page as the current page", function() {
            let testPage = wizardNavigationService.pageCollection.getPageByIndex(2);
            let firstPage = wizardNavigationService.pageCollection.getPageByIndex(0);
            let pageCollectionBeforeReset = wizardNavigationService.pageCollection;
            wizardNavigationService.setCurrentPage(testPage);
            wizardNavigationService.setFirstPageCurrent();
            let pageCollectionAfterReset = wizardNavigationService.pageCollection;
            expect(wizardNavigationService.currentPage).toEqual(firstPage);
            expect(pageCollectionBeforeReset).toEqual(pageCollectionAfterReset);
        });


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
                    <!-- CUSTOME HDR ACTIONS GO HERE -->
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
            </clr-wizard>
    `
})
class NavigationTest {
    open: boolean = true;

    headerActionClicked = function(){
        // console.log("header action clicked!");
    };

}