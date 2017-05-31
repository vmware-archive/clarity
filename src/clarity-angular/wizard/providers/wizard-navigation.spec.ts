/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { BasicWizardTestComponent } from "../test-components/basic-wizard.mock";
import { WizardNavigationService } from "./wizard-navigation";
import { PageCollectionService } from "./page-collection";
import { Wizard } from "../wizard";
import { WizardPage } from "../wizard-page";
import { TestContext } from "../../utils/testing/helpers.spec";

export default function(): void {

    describe("Wizard Navigation Service", function() {
        let context: TestContext<Wizard, BasicWizardTestComponent>;
        let wizardNavigationService: WizardNavigationService;
        let pageCollectionService: PageCollectionService;

        beforeEach(function() {
            context = this.create(Wizard, BasicWizardTestComponent);
            wizardNavigationService = context.getClarityProvider(WizardNavigationService);
            pageCollectionService = context.getClarityProvider(PageCollectionService);
            context.detectChanges();
        });

        it("currentPage should set the current page and emit the event", function() {
            wizardNavigationService.currentPage = pageCollectionService.getPageByIndex(1);
            expect(wizardNavigationService.currentPage).toEqual(pageCollectionService.getPageByIndex(1));
            wizardNavigationService.currentPage = pageCollectionService.lastPage;
            expect(wizardNavigationService.currentPage).toEqual(pageCollectionService.lastPage);
        });

        it(".next() should call finish() if the current page is the last page.", function() {
            let testPage = wizardNavigationService.pageCollection.lastPage;
            let wizard = context.clarityDirective;

            wizardNavigationService.currentPage = testPage;
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

        it(".next() should not navigate if the next page is disabled", function() {
            let testPage = wizardNavigationService.pageCollection.getPageByIndex(2);
            testPage.nextStepDisabled = true;
            wizardNavigationService.currentPage = testPage;
            wizardNavigationService.next();
            expect(wizardNavigationService.currentPage).toBe(testPage);
        });

        it(".next() should not do anything if set to stop navigation", function() {
            let testPage = wizardNavigationService.pageCollection.getPageByIndex(2);
            wizardNavigationService.currentPage = testPage;
            wizardNavigationService.wizardStopNavigation = true;
            wizardNavigationService.next();
            expect(wizardNavigationService.currentPage).toBe(testPage, "wizard did not navigate");
        });

        /*
         * TODO: as next() calls finish(), it seems that there are repetition in the following tests.
         * We should investigate possibilities of stripping down some of these tests on finish() and next() */

        it(".finish() should commit the current page and emit the event", function() {
            let testPage = wizardNavigationService.pageCollection.lastPage;

            spyOn(testPage.primaryButtonClicked, "emit");
            spyOn(testPage.onCommit, "emit");
            spyOn(context.clarityDirective.wizardFinished, "emit");

            wizardNavigationService.currentPage = testPage;

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

            wizardNavigationService.currentPage = testPage;
            wizardNavigationService.finish();
            expect(testPage.primaryButtonClicked.emit).not.toHaveBeenCalled();
            expect(testPage.onCommit.emit).not.toHaveBeenCalled();
            expect(testPage.completed).toBe(false);
            expect(context.clarityDirective.wizardFinished.emit).not.toHaveBeenCalled();
        });

        it(".previous() should do nothing if the current page is the first page", function() {
            let testPage = wizardNavigationService.pageCollection.firstPage;
            let pageCollectionSpy = spyOn(wizardNavigationService.pageCollection, "getPreviousPage");
            wizardNavigationService.currentPage = testPage;
            wizardNavigationService.previous();
            expect(wizardNavigationService.currentPage).toBe(testPage);
            expect(pageCollectionSpy).not.toHaveBeenCalled();
        });

        it(".previous() should not do anything if stop navigation is true", function() {
            let testPage = wizardNavigationService.pageCollection.getPageByIndex(1);
            wizardNavigationService.currentPage = testPage;
            wizardNavigationService.wizardStopNavigation = true;
            wizardNavigationService.previous();
            expect(wizardNavigationService.currentPage).toBe(testPage);
        });

        it(".previous() should set the current page to the previous page", function() {
            let testPage = wizardNavigationService.pageCollection.getPageByIndex(2);
            let previousPage = wizardNavigationService.pageCollection.getPageByIndex(1);
            wizardNavigationService.currentPage = testPage;
            wizardNavigationService.previous();
            expect(wizardNavigationService.currentPage).toEqual(previousPage);

        });

        it(".previous() set current page to incomplete if set to forceForward navigation", function() {
            let testPage = wizardNavigationService.pageCollection.getPageByIndex(2);
            let previousPage = wizardNavigationService.pageCollection.getPageByIndex(1);

            wizardNavigationService.currentPage = testPage;
            testPage.completed = true;

            wizardNavigationService.forceForwardNavigation = true;
            wizardNavigationService.previous();

            expect(wizardNavigationService.currentPage).toEqual(previousPage);
            expect(testPage.completed).toBe(false, "forceForward should set old current page to incomplete");
        });

        it(".goTo() should not do anything if the given page is equal to the current page", function() {
            let navSvc = wizardNavigationService;
            let startPage = navSvc.pageCollection.getPageByIndex(0);
            let testPage = navSvc.pageCollection.getPageByIndex(1);
            let goToPage = navSvc.pageCollection.getPageByIndex(1);
            let pageCollectionSpy = spyOn(navSvc.pageCollection, "getPageIndex");

            startPage.completed = true;
            navSvc.currentPage = testPage;

            navSvc.goTo(goToPage);
            expect(navSvc.currentPage).toBe(testPage, "does not navigate with object");

            navSvc.goTo(goToPage.id);
            expect(navSvc.currentPage).toBe(testPage, "does not navigate with id");

            expect(pageCollectionSpy).not.toHaveBeenCalled();
        });

        it(".goTo() should not do anything if stop navigation is true", function() {
            let navSvc = wizardNavigationService;
            let startPage = navSvc.pageCollection.getPageByIndex(0);
            let goToPage = navSvc.pageCollection.getPageByIndex(1);

            navSvc.currentPage = startPage;
            startPage.completed = true;
            navSvc.wizardStopNavigation = true;
            navSvc.goTo(goToPage);

            expect(navSvc.currentPage).not.toBe(goToPage);
            expect(navSvc.currentPage).toBe(startPage);
        });

        it(".goTo() should set the current page as the given page", function() {
            let startPage = wizardNavigationService.pageCollection.getPageByIndex(0);
            let testPage = wizardNavigationService.pageCollection.getPageByIndex(1);
            let goToPage = wizardNavigationService.pageCollection.getPageByIndex(2);
            let pageAsExpected: boolean;

            // goTo checks completed states
            startPage.completed = true;
            testPage.completed = true;

            wizardNavigationService.goTo(goToPage);
            context.detectChanges();

            pageAsExpected = (wizardNavigationService.currentPage === goToPage);

            expect(pageAsExpected).toBe(true);
        });

        it(".goTo() should not mark pages incomplete if moving forward and wizard is set to forceForward", function() {
            let startPage = wizardNavigationService.pageCollection.getPageByIndex(0);
            let testPage = wizardNavigationService.pageCollection.getPageByIndex(1);
            let goToPage = wizardNavigationService.pageCollection.getPageByIndex(2);

            // goTo checks completed states
            startPage.completed = true;
            testPage.completed = true;
            wizardNavigationService.forceForwardNavigation = true;

            wizardNavigationService.goTo(goToPage);

            expect(wizardNavigationService.currentPage).toEqual(goToPage);
            expect(startPage.completed).toBe(true);
            expect(testPage.completed).toBe(true);
        });

        it(".goTo() should mark pages incomplete if moving backward and wizard is set to forceForward", function() {
            let startPage = wizardNavigationService.pageCollection.getPageByIndex(0);
            let secondPage = wizardNavigationService.pageCollection.getPageByIndex(1);
            let thirdPage = wizardNavigationService.pageCollection.getPageByIndex(2);
            let fourthPage = wizardNavigationService.pageCollection.getPageByIndex(3);

            // goTo checks completed states
            startPage.completed = true;
            secondPage.completed = true;
            thirdPage.completed = true;
            wizardNavigationService.forceForwardNavigation = true;

            wizardNavigationService.goTo(fourthPage);
            context.detectChanges();

            expect(wizardNavigationService.currentPage).toEqual(fourthPage, "move forward as expected");
            expect(startPage.completed).toBe(true, "validate startPage.completed is true as expected");
            expect(secondPage.completed).toBe(true, "validate secondPage.completed is true as expected");
            expect(thirdPage.completed).toBe(true, "validate thirdPage.completed is true as expected");
            expect(fourthPage.completed).toBe(false, "validate fourthPage.completed is false as expected");

            wizardNavigationService.goTo(secondPage);
            context.detectChanges();

            expect(wizardNavigationService.currentPage).toEqual(secondPage, "now move backward");
            expect(startPage.completed).toBe(true, "startPage.completed should still be true");
            expect(secondPage.completed).toBe(false, "secondPage.completed should be set to false");
            expect(thirdPage.completed).toBe(false, "thirdPage.completed should be set to false");
            expect(fourthPage.completed).toBe(false, "fourthPage.completed should remain false");
        });

        it(".goTo() should mark pages complete if moving forward and told to lazyComplete", function() {
            let startPage = wizardNavigationService.pageCollection.getPageByIndex(0);
            let secondPage = wizardNavigationService.pageCollection.getPageByIndex(1);
            let thirdPage = wizardNavigationService.pageCollection.getPageByIndex(2);
            let fourthPage = wizardNavigationService.pageCollection.getPageByIndex(3);

            expect(startPage.completed).toBe(false, "validate startPage.completed is false as expected");
            expect(secondPage.completed).toBe(false, "validate secondPage.completed is false as expected");
            expect(thirdPage.completed).toBe(false, "validate thirdPage.completed is false as expected");
            expect(fourthPage.completed).toBe(false, "validate fourthPage.completed is false as expected");

            // lazyComplete (second parameter as true) ignores completed states
            wizardNavigationService.goTo(fourthPage, true);
            context.detectChanges();

            expect(wizardNavigationService.currentPage).toEqual(fourthPage, "move forward as expected");
            expect(startPage.completed).toBe(true, "validate startPage.completed is true as expected");
            expect(secondPage.completed).toBe(true, "validate secondPage.completed is true as expected");
            expect(thirdPage.completed).toBe(true, "validate thirdPage.completed is true as expected");
            expect(fourthPage.completed).toBe(false, "validate fourthPage.completed is false as expected");
        });

        it(".goTo() should not allow lazyComplete by default", function() {
            let startPage = wizardNavigationService.pageCollection.getPageByIndex(0);
            let secondPage = wizardNavigationService.pageCollection.getPageByIndex(1);
            let thirdPage = wizardNavigationService.pageCollection.getPageByIndex(2);
            let fourthPage = wizardNavigationService.pageCollection.getPageByIndex(3);

            expect(startPage.completed).toBe(false, "validate startPage.completed is false as expected");
            expect(secondPage.completed).toBe(false, "validate secondPage.completed is false as expected");
            expect(thirdPage.completed).toBe(false, "validate thirdPage.completed is false as expected");
            expect(fourthPage.completed).toBe(false, "validate fourthPage.completed is false as expected");

            wizardNavigationService.goTo(fourthPage);
            context.detectChanges();

            expect(wizardNavigationService.currentPage).toEqual(startPage, "wizard did not move forward");
            expect(startPage.completed).toBe(false, "validate startPage.completed is still false as expected");
            expect(secondPage.completed).toBe(false, "validate secondPage.completed is still false as expected");
            expect(thirdPage.completed).toBe(false, "validate thirdPage.completed is still false as expected");
            expect(fourthPage.completed).toBe(false, "validate fourthPage.completed is still false as expected");
        });

        it(".goTo() should not mark last page complete if moving forward with lazy complete", function() {
            let startPage = wizardNavigationService.pageCollection.getPageByIndex(0);
            let secondPage = wizardNavigationService.pageCollection.getPageByIndex(1);
            let thirdPage = wizardNavigationService.pageCollection.getPageByIndex(2);
            let fourthPage = wizardNavigationService.pageCollection.getPageByIndex(3);

            expect(startPage.completed).toBe(false, "validate startPage.completed is false as expected");
            expect(secondPage.completed).toBe(false, "validate secondPage.completed is false as expected");
            expect(thirdPage.completed).toBe(false, "validate thirdPage.completed is false as expected");
            expect(fourthPage.completed).toBe(false, "validate fourthPage.completed is false as expected");

            wizardNavigationService.goTo(thirdPage, true);
            context.detectChanges();

            expect(wizardNavigationService.currentPage).toEqual(thirdPage, "wizard moved forward");
            expect(startPage.completed).toBe(true, "validate startPage.completed was turned true as expected");
            expect(secondPage.completed).toBe(true, "validate secondPage.completed was turned true as expected");
            expect(thirdPage.completed).toBe(false, "validate thirdPage.completed is still false as expected");
            expect(fourthPage.completed).toBe(false, "validate fourthPage.completed is still false as expected");
        });

        it(".setFirstPageCurrent() should set the first page as the current page", function() {
            let testPage = wizardNavigationService.pageCollection.getPageByIndex(2);
            let firstPage = wizardNavigationService.pageCollection.getPageByIndex(0);
            let pageCollectionBeforeReset = wizardNavigationService.pageCollection;
            wizardNavigationService.currentPage = testPage;
            wizardNavigationService.setFirstPageCurrent();
            let pageCollectionAfterReset = wizardNavigationService.pageCollection;
            expect(wizardNavigationService.currentPage).toEqual(firstPage);
            expect(pageCollectionBeforeReset).toEqual(pageCollectionAfterReset);
        });

        it(".forceNext() should throw an error if there's no next page to go to", function() {
            let testPage = wizardNavigationService.pageCollection.lastPage;
            wizardNavigationService.currentPage = testPage;
            expect(wizardNavigationService.currentPage).toEqual(testPage);
            expect(() => { wizardNavigationService.forceNext(); }).toThrowError();
        });

        it(".forceNext() should do nothing if stop navigation is set", function() {
            let testPage = wizardNavigationService.pageCollection.firstPage;
            wizardNavigationService.currentPage = testPage;
            expect(wizardNavigationService.currentPage).toEqual(testPage);
            wizardNavigationService.wizardStopNavigation = true;
            wizardNavigationService.forceNext();
            expect(wizardNavigationService.currentPage).toBe(testPage);
        });

        it(".forceNext() set next page to be current and commit old current page if incomplete", function() {
            let firstPage = wizardNavigationService.pageCollection.getPageByIndex(0);
            let testPage = wizardNavigationService.pageCollection.getPageByIndex(1);

            spyOn(wizardNavigationService.pageCollection, "commitPage").and.callThrough();

            expect(wizardNavigationService.currentPage).toBe(firstPage, "initialized to first page");

            wizardNavigationService.forceNext();
            context.detectChanges();

            expect(wizardNavigationService.currentPage).toBe(testPage, "moved to next page");
            expect(wizardNavigationService.pageCollection.commitPage).toHaveBeenCalledTimes(1);
            expect(wizardNavigationService.pageCollection.commitPage).toHaveBeenCalledWith(firstPage);
        });

        describe(".checkAndCommitCurrentPage() -- ", function() {
            it("should do nothing if the current page is not ready to complete", function() {
                let currentPage = wizardNavigationService.currentPage;
                currentPage.nextStepDisabled = true;

                // whole lotta spies!
                spyOn(currentPage.primaryButtonClicked, "emit");
                spyOn(currentPage.nextButtonClicked, "emit");
                spyOn(wizardNavigationService.pageCollection, "commitPage");
                spyOn(wizardNavigationService, "forceNext");

                context.detectChanges();
                expect(currentPage.readyToComplete).toBe(false, "validate page is not ready to complete");
                wizardNavigationService.checkAndCommitCurrentPage("next");

                expect(currentPage.primaryButtonClicked.emit).not.toHaveBeenCalled();
                expect(currentPage.nextButtonClicked.emit).not.toHaveBeenCalled();
                expect(wizardNavigationService.pageCollection.commitPage).not.toHaveBeenCalled();
                expect(wizardNavigationService.forceNext).not.toHaveBeenCalled();
            });

            it("should do nothing if stop navigation is set to true", function() {
                let currentPage = wizardNavigationService.currentPage;
                currentPage.nextStepDisabled = false;
                wizardNavigationService.wizardStopNavigation = true;

                // whole lotta spies!
                spyOn(currentPage.primaryButtonClicked, "emit");
                spyOn(currentPage.nextButtonClicked, "emit");
                spyOn(wizardNavigationService.pageCollection, "commitPage");
                spyOn(wizardNavigationService, "forceNext");

                context.detectChanges();
                expect(currentPage.readyToComplete).toBe(true, "validate page is ok to navigate");
                wizardNavigationService.checkAndCommitCurrentPage("next");

                expect(currentPage.primaryButtonClicked.emit).not.toHaveBeenCalled();
                expect(currentPage.nextButtonClicked.emit).not.toHaveBeenCalled();
                expect(wizardNavigationService.pageCollection.commitPage).not.toHaveBeenCalled();
                expect(wizardNavigationService.forceNext).not.toHaveBeenCalled();
            });

            it("should do nothing if the action type is finish and stop navigation is true", function() {
                let lastPage = wizardNavigationService.pageCollection.lastPage;
                wizardNavigationService.currentPage = lastPage;
                let currentPage = wizardNavigationService.currentPage;
                wizardNavigationService.wizardStopNavigation = true;
                currentPage.nextStepDisabled = false;

                expect(currentPage).toBe(lastPage, "validate current page is last page");

                // whole lotta spies!
                spyOn(currentPage.primaryButtonClicked, "emit");
                spyOn(currentPage.nextButtonClicked, "emit");
                spyOn(wizardNavigationService.pageCollection, "commitPage");
                spyOn(wizardNavigationService, "forceNext");

                wizardNavigationService.checkAndCommitCurrentPage("finish");

                expect(currentPage.primaryButtonClicked.emit).not.toHaveBeenCalled();
                expect(currentPage.nextButtonClicked.emit).not.toHaveBeenCalled();
                expect(wizardNavigationService.pageCollection.commitPage).not.toHaveBeenCalled();
                expect(wizardNavigationService.forceNext).not.toHaveBeenCalled();
            });

            it("should do nothing if the action type is finish and current page is not the last page", function() {
                let lastPage = wizardNavigationService.pageCollection.getPageByIndex(3);
                let currentPage = wizardNavigationService.currentPage;
                let lastPageIsNotCurrent = (wizardNavigationService.currentPage !== lastPage);

                // whole lotta spies!
                spyOn(currentPage.primaryButtonClicked, "emit");
                spyOn(currentPage.nextButtonClicked, "emit");
                spyOn(wizardNavigationService.pageCollection, "commitPage");
                spyOn(wizardNavigationService, "forceNext");

                expect(lastPageIsNotCurrent).toBe(true, "verify last page is not the current page");

                wizardNavigationService.checkAndCommitCurrentPage("finish");

                expect(currentPage.primaryButtonClicked.emit).not.toHaveBeenCalled();
                expect(currentPage.nextButtonClicked.emit).not.toHaveBeenCalled();
                expect(wizardNavigationService.pageCollection.commitPage).not.toHaveBeenCalled();
                expect(wizardNavigationService.forceNext).not.toHaveBeenCalled();
            });

            it("should emit that a primary button was clicked", function() {
                let currentPage = wizardNavigationService.currentPage;
                spyOn(currentPage.primaryButtonClicked, "emit");
                wizardNavigationService.checkAndCommitCurrentPage("next");
                expect(currentPage.primaryButtonClicked.emit).toHaveBeenCalledTimes(1);
            });

            it("should emit finish button was clicked", function() {
                let lastPage = wizardNavigationService.pageCollection.lastPage;
                let currentPage: WizardPage;
                let lastPageIsCurrent: boolean;

                wizardNavigationService.currentPage = lastPage;
                context.detectChanges();
                currentPage = wizardNavigationService.currentPage;

                lastPageIsCurrent = (currentPage === lastPage);
                expect(lastPageIsCurrent).toBe(true, "verify last page is the current page");

                spyOn(currentPage.primaryButtonClicked, "emit");
                spyOn(currentPage.finishButtonClicked, "emit");

                wizardNavigationService.checkAndCommitCurrentPage("finish");

                expect(currentPage.primaryButtonClicked.emit).toHaveBeenCalledTimes(1);
                expect(currentPage.finishButtonClicked.emit).toHaveBeenCalledTimes(1);
            });

            it("should emit danger button was clicked", function() {
                let lastPage = wizardNavigationService.pageCollection.lastPage;
                let currentPage: WizardPage;
                let lastPageIsCurrent: boolean;

                wizardNavigationService.currentPage = lastPage;
                context.detectChanges();

                currentPage = wizardNavigationService.currentPage;
                lastPageIsCurrent = (currentPage === lastPage);
                expect(lastPageIsCurrent).toBe(true, "verify last page is the current page");

                spyOn(currentPage.primaryButtonClicked, "emit");
                spyOn(currentPage.nextButtonClicked, "emit");
                spyOn(currentPage.finishButtonClicked, "emit");
                spyOn(wizardNavigationService, "forceNext");

                wizardNavigationService.checkAndCommitCurrentPage("danger");

                expect(currentPage.primaryButtonClicked.emit).toHaveBeenCalledTimes(1);
                expect(currentPage.finishButtonClicked.emit).toHaveBeenCalledTimes(1);
                expect(currentPage.nextButtonClicked.emit).not.toHaveBeenCalled();
                expect(wizardNavigationService.forceNext).not.toHaveBeenCalled();
            });

            it("should emit next button was clicked", function() {
                let currentPage = wizardNavigationService.currentPage;

                spyOn(currentPage.primaryButtonClicked, "emit");
                spyOn(currentPage.nextButtonClicked, "emit");
                spyOn(currentPage.finishButtonClicked, "emit");
                spyOn(wizardNavigationService, "forceNext");

                wizardNavigationService.checkAndCommitCurrentPage("next");

                expect(currentPage.primaryButtonClicked.emit).toHaveBeenCalledTimes(1);
                expect(currentPage.finishButtonClicked.emit).not.toHaveBeenCalledTimes(1);
                expect(currentPage.nextButtonClicked.emit).toHaveBeenCalled();
                expect(wizardNavigationService.forceNext).toHaveBeenCalled();
            });

            it("should commit the current page -- but only once", function() {
                let currentPage = wizardNavigationService.currentPage;
                spyOn(currentPage.onCommit, "emit");
                wizardNavigationService.checkAndCommitCurrentPage("next");
                expect(currentPage.onCommit.emit).toHaveBeenCalledTimes(1);
            });

            it("should notify wizardFinished if finish", function() {
                let calledAsExpected = false;
                let checkMe = wizardNavigationService.wizardFinished.subscribe(() => {
                    calledAsExpected = true;
                });
                let lastPage = wizardNavigationService.pageCollection.lastPage;
                let currentPage: WizardPage;
                let lastPageIsCurrent: boolean;

                wizardNavigationService.currentPage = lastPage;
                context.detectChanges();
                currentPage = wizardNavigationService.currentPage;

                lastPageIsCurrent = (currentPage === lastPage);
                expect(lastPageIsCurrent).toBe(true, "verify last page is the current page");

                wizardNavigationService.checkAndCommitCurrentPage("finish");

                expect(calledAsExpected).toBe(true, "wizard notification sent");

                checkMe.unsubscribe();
            });

            it("should notify wizardFinished if danger button on last page", function() {
                let calledAsExpected = false;
                let checkMe = wizardNavigationService.wizardFinished.subscribe(() => {
                    calledAsExpected = true;
                });
                let lastPage = wizardNavigationService.pageCollection.lastPage;
                let currentPage: WizardPage;
                let lastPageIsCurrent: boolean;

                wizardNavigationService.currentPage = lastPage;
                context.detectChanges();
                currentPage = wizardNavigationService.currentPage;

                lastPageIsCurrent = (currentPage === lastPage);
                expect(lastPageIsCurrent).toBe(true, "verify last page is the current page");

                wizardNavigationService.checkAndCommitCurrentPage("danger");

                expect(calledAsExpected).toBe(true, "wizard notification sent");

                checkMe.unsubscribe();
            });

            it("should notify movedToNextPage if wizard has alt-next and next clicked", function() {
                let calledAsExpected = false;
                let checkMe = wizardNavigationService.movedToNextPage.subscribe(() => {
                    calledAsExpected = true;
                });

                wizardNavigationService.wizardHasAltNext = true;
                context.detectChanges();

                wizardNavigationService.checkAndCommitCurrentPage("next");

                expect(calledAsExpected).toBe(true, "next page notification sent to wizard");

                checkMe.unsubscribe();
            });

            it("should notify movedToNextPage if wizard has alt-next and danger-next clicked", function() {
                let calledAsExpected = false;
                let checkMe = wizardNavigationService.movedToNextPage.subscribe(() => {
                    calledAsExpected = true;
                });

                wizardNavigationService.wizardHasAltNext = true;
                context.detectChanges();

                wizardNavigationService.checkAndCommitCurrentPage("danger");

                expect(calledAsExpected).toBe(true, "next page notification sent to wizard");

                checkMe.unsubscribe();
            });

            it("should emit onCommit if next overridden at page level", function() {
                let currentPage = wizardNavigationService.currentPage;
                spyOn(currentPage.onCommit, "emit");

                currentPage.stopNext = true;
                context.detectChanges();

                wizardNavigationService.checkAndCommitCurrentPage("next");

                expect(currentPage.onCommit.emit).toHaveBeenCalledTimes(1);
            });

            it("should emit onCommit if next overridden at wizard level", function() {
                let currentPage = wizardNavigationService.currentPage;
                spyOn(currentPage.onCommit, "emit");

                wizardNavigationService.wizardHasAltNext = true;
                wizardNavigationService.checkAndCommitCurrentPage("next");

                expect(currentPage.onCommit.emit).toHaveBeenCalledTimes(1);
            });

            it("should not commit page, fire events, or navigate if next overridden at wizard level", function() {
                let currentPage = wizardNavigationService.currentPage;
                let expectedPage = wizardNavigationService.pageCollection.getPageByIndex(0);
                let currentAsExpected: boolean;

                spyOn(currentPage.primaryButtonClicked, "emit");
                spyOn(currentPage.nextButtonClicked, "emit");
                spyOn(currentPage.onCommit, "emit");
                spyOn(wizardNavigationService.pageCollection, "commitPage");
                spyOn(wizardNavigationService, "forceNext");

                wizardNavigationService.wizardHasAltNext = true;
                wizardNavigationService.checkAndCommitCurrentPage("next");
                currentAsExpected = (currentPage === expectedPage);

                // still need some events fired
                expect(currentPage.primaryButtonClicked.emit).toHaveBeenCalled();
                expect(currentPage.nextButtonClicked.emit).toHaveBeenCalled();
                expect(wizardNavigationService.pageCollection.commitPage).toHaveBeenCalled();

                expect(currentPage.onCommit.emit).not.toHaveBeenCalled();
                expect(wizardNavigationService.forceNext).not.toHaveBeenCalled();
                expect(currentAsExpected).toBe(true, "wizard did not navigate");
            });

            it("should not commit page, fire events, or navigate if next overridden at page level", function() {
                let currentPage = wizardNavigationService.currentPage;
                let expectedPage = wizardNavigationService.pageCollection.getPageByIndex(0);
                let currentAsExpected: boolean;

                spyOn(currentPage.primaryButtonClicked, "emit");
                spyOn(currentPage.nextButtonClicked, "emit");
                spyOn(currentPage.onCommit, "emit");
                spyOn(wizardNavigationService.pageCollection, "commitPage");
                spyOn(wizardNavigationService, "forceNext");

                currentPage.stopNext = true;
                context.detectChanges();

                wizardNavigationService.checkAndCommitCurrentPage("next");
                currentAsExpected = (currentPage === expectedPage);

                // still need some events fired
                expect(currentPage.primaryButtonClicked.emit).toHaveBeenCalled();
                expect(currentPage.nextButtonClicked.emit).toHaveBeenCalled();
                expect(currentPage.onCommit.emit).toHaveBeenCalled();

                expect(wizardNavigationService.pageCollection.commitPage).not.toHaveBeenCalled();
                expect(wizardNavigationService.forceNext).not.toHaveBeenCalled();
                expect(currentAsExpected).toBe(true, "wizard did not navigate");
            });

            it("should not commit page, fire events, or navigate if stop navigation is set", function() {
                let currentPage = wizardNavigationService.currentPage;
                let expectedPage = wizardNavigationService.pageCollection.getPageByIndex(0);
                let currentAsExpected: boolean;

                spyOn(currentPage.primaryButtonClicked, "emit");
                spyOn(currentPage.nextButtonClicked, "emit");
                spyOn(currentPage.onCommit, "emit");
                spyOn(wizardNavigationService.pageCollection, "commitPage");
                spyOn(wizardNavigationService, "forceNext");

                wizardNavigationService.wizardStopNavigation = true;
                wizardNavigationService.checkAndCommitCurrentPage("next");
                currentAsExpected = (currentPage === expectedPage);

                // should not fire events at all
                expect(currentPage.primaryButtonClicked.emit).not.toHaveBeenCalled();
                expect(currentPage.nextButtonClicked.emit).not.toHaveBeenCalled();
                expect(wizardNavigationService.pageCollection.commitPage).not.toHaveBeenCalled();
                expect(currentPage.onCommit.emit).not.toHaveBeenCalled();
                expect(wizardNavigationService.forceNext).not.toHaveBeenCalled();
                expect(currentAsExpected).toBe(true, "wizard did not navigate");
            });

            it("should navigate if not overridden and next clicked", function() {
                let currentPage = wizardNavigationService.currentPage;
                let expectedPage = wizardNavigationService.pageCollection.getPageByIndex(1);
                let currentAsExpected: boolean;

                spyOn(currentPage.primaryButtonClicked, "emit");
                spyOn(currentPage.nextButtonClicked, "emit");
                spyOn(currentPage.onCommit, "emit");
                spyOn(wizardNavigationService.pageCollection, "commitPage");
                spyOn(wizardNavigationService, "forceNext").and.callThrough();

                expect(wizardNavigationService.wizardHasAltNext).toBe(false, "wizard alt-next false by default");
                expect(currentPage.stopNext).toBe(false, "page alt-next false by default");
                expect(currentPage.preventDefault).toBe(false, "page prevent default false by default");

                wizardNavigationService.checkAndCommitCurrentPage("next");
                currentAsExpected = (wizardNavigationService.currentPage === expectedPage);

                // still need some events fired
                expect(currentPage.primaryButtonClicked.emit).toHaveBeenCalledTimes(1);
                expect(currentPage.nextButtonClicked.emit).toHaveBeenCalledTimes(1);
                // expect(currentPage.onCommit.emit).toHaveBeenCalledTimes(1);
                expect(wizardNavigationService.pageCollection.commitPage).toHaveBeenCalledTimes(1);
                expect(wizardNavigationService.forceNext).toHaveBeenCalledTimes(1);

                expect(currentAsExpected).toBe(true, "wizard navigated");
            });

            it("should navigate if not overridden and danger-next clicked", function() {
                let currentPage = wizardNavigationService.currentPage;
                let expectedPage = wizardNavigationService.pageCollection.getPageByIndex(1);
                let currentAsExpected: boolean;

                spyOn(currentPage.primaryButtonClicked, "emit");
                spyOn(currentPage.dangerButtonClicked, "emit");
                spyOn(currentPage.onCommit, "emit");
                spyOn(wizardNavigationService.pageCollection, "commitPage");
                spyOn(wizardNavigationService, "forceNext").and.callThrough();

                expect(wizardNavigationService.wizardHasAltNext).toBe(false, "wizard alt-next false by default");
                expect(currentPage.stopNext).toBe(false, "page alt-next false by default");
                expect(currentPage.preventDefault).toBe(false, "page prevent default false by default");

                wizardNavigationService.checkAndCommitCurrentPage("danger");
                currentAsExpected = (wizardNavigationService.currentPage === expectedPage);

                // these get called in routines outside of checkAndCommit by default. simplify in the future?
                expect(currentPage.onCommit.emit).not.toHaveBeenCalled();

                // still need some events fired
                expect(wizardNavigationService.pageCollection.commitPage).toHaveBeenCalledTimes(1);
                expect(currentPage.primaryButtonClicked.emit).toHaveBeenCalledTimes(1);
                expect(currentPage.dangerButtonClicked.emit).toHaveBeenCalledTimes(1);
                expect(wizardNavigationService.forceNext).toHaveBeenCalledTimes(1);

                expect(currentAsExpected).toBe(true, "wizard navigated");
            });
        });

        describe(".canGoTo() -- ", function() {
            it("should return false if pages parameter is falsy", function() {
                expect(wizardNavigationService.canGoTo(null)).toBe(false, "null returns false");
            });

            it("should return false if pages parameter is empty array", function() {
                expect(wizardNavigationService.canGoTo([])).toBe(false, "empty array returns false");
            });

            it("should return true if all pages passed to it are completed", function() {
                let firstPage = wizardNavigationService.pageCollection.getPageByIndex(0);
                let secondPage = wizardNavigationService.pageCollection.getPageByIndex(1);
                let thirdPage = wizardNavigationService.pageCollection.getPageByIndex(2);
                let pagesToTest: WizardPage[];

                firstPage.completed = true;
                secondPage.completed = true;
                thirdPage.completed = true;
                pagesToTest = [ firstPage, secondPage, thirdPage ];

                expect(wizardNavigationService.canGoTo(pagesToTest)).toBe(true);
            });

            it("should return true if last page is incomplete but page before it is complete", function() {
                let firstPage = wizardNavigationService.pageCollection.getPageByIndex(0);
                let secondPage = wizardNavigationService.pageCollection.getPageByIndex(1);
                let thirdPage = wizardNavigationService.pageCollection.getPageByIndex(2);
                let pagesToTest: WizardPage[];

                firstPage.completed = true;
                secondPage.completed = true;
                thirdPage.completed = false;
                pagesToTest = [ firstPage, secondPage, thirdPage ];

                expect(wizardNavigationService.canGoTo(pagesToTest)).toBe(true);
            });

            it("should return true if last page is incomplete but current page", function() {
                let firstPage = wizardNavigationService.pageCollection.getPageByIndex(0);
                let secondPage = wizardNavigationService.pageCollection.getPageByIndex(1);
                let pagesToTest: WizardPage[];

                firstPage.completed = true;
                secondPage.completed = false;
                wizardNavigationService.currentPage = secondPage;

                pagesToTest = [ firstPage, secondPage ];

                expect(wizardNavigationService.canGoTo(pagesToTest)).toBe(true);
            });

            it("should return false if last page is incomplete and page before it is also incomplete", function() {
                let firstPage = wizardNavigationService.pageCollection.getPageByIndex(0);
                let secondPage = wizardNavigationService.pageCollection.getPageByIndex(1);
                let thirdPage = wizardNavigationService.pageCollection.getPageByIndex(2);
                let pagesToTest: WizardPage[];

                firstPage.completed = true;
                secondPage.completed = false;
                thirdPage.completed = false;
                pagesToTest = [ firstPage, secondPage, thirdPage ];

                expect(wizardNavigationService.canGoTo(pagesToTest)).toBe(false);
            });
        });
    });
}
