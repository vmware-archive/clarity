/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from "@angular/core";
import { PageCollectionService } from "./page-collection";
import { Wizard } from "../wizard";
import { TestContext } from "../../utils/testing/helpers.spec";

export default function(): void {

    describe("Page Collection Service", function() {
        describe("With pages", function() {
            let context: TestContext<Wizard, PageCollectionTest>;
            let pageCollectionService: PageCollectionService;

            beforeEach(function() {
                context = this.create(Wizard, PageCollectionTest);
                pageCollectionService = context.getClarityProvider(PageCollectionService);
                context.detectChanges();
            });

            it(".pagesAsArray should return the array of wizard pages", function() {
                expect(pageCollectionService.pagesAsArray).toEqual(context.clarityDirective.pages.toArray());
            });

            it(".pagesCount should return correct number of pages", function() {
                expect(pageCollectionService.pagesCount).toEqual(5);
            });

            it(".lastPage should return the last wizard page", function() {
                expect(pageCollectionService.lastPage.id).toEqual(context.clarityDirective.pages.last.id);
            });

            it(".firstPage should return the first wizard page", function() {
                expect(pageCollectionService.firstPage.id).toEqual(context.clarityDirective.pages.first.id);
            });


            it(".getPageById() should return the wizard page with a matching id", function() {
                // checkResults() method is tested here as well
                let firstPageId = context.clarityDirective.pages.first.id;
                let firstPageIdNumber = firstPageId.match(/\d+/)[0];
                let lastPageId = context.clarityDirective.pages.last.id;
                let nonExistingPageId = "N0N-EX1ST1N-ID";

                expect(pageCollectionService.getPageById(firstPageId)).toEqual(pageCollectionService.firstPage);
                expect(pageCollectionService.getPageById(lastPageId)).toEqual(pageCollectionService.lastPage);

                expect(function() {
                    pageCollectionService.getPageById(nonExistingPageId);
                }).toThrowError("No page can be found with the id " + nonExistingPageId + ".");

                //Manually setting this id to make multiple pages have the same id.
                pageCollectionService.getPageById(lastPageId)._id = firstPageIdNumber;

                expect(function() {
                    pageCollectionService.getPageById(firstPageId);
                }).toThrowError("More than one page has the requested id " + firstPageId + ".");
            });

            it(".getPageByIndex() should return the index of the wizard page", function() {
                expect(pageCollectionService.getPageByIndex(0)).toEqual(pageCollectionService.firstPage);
                expect(pageCollectionService.getPageByIndex(4)).toEqual(pageCollectionService.lastPage);

                expect(function() {
                    pageCollectionService.getPageByIndex(-20);
                }).toThrowError("Cannot retrieve page with index of -20");

                expect(function() {
                    pageCollectionService.getPageByIndex(10);
                }).toThrowError("Page index is greater than length of pages array.");
            });

            it(".getPageIndex() should return the index of a wizard page", function() {
                expect(pageCollectionService.getPageIndex(pageCollectionService.firstPage)).toBe(0);
            });

            it(".pageRange() should return the range of wizard pages", function() {

                expect(pageCollectionService.pageRange(0, 0)).toEqual([pageCollectionService.firstPage]);

                expect(pageCollectionService.pageRange(4, 4)).toEqual([pageCollectionService.lastPage]);

                expect(pageCollectionService.pageRange(1, 3)).toEqual(pageCollectionService.pagesAsArray.slice(1, 4));

                expect(pageCollectionService.pageRange(1, 3)).toEqual(pageCollectionService.pagesAsArray.slice(1, 4));

                expect(pageCollectionService.pageRange(3, 3)).toEqual(pageCollectionService.pagesAsArray.slice(3, 4));

                expect(pageCollectionService.pageRange(-1, 3)).toEqual([]);

                expect(pageCollectionService.pageRange(-3, -1)).toEqual([]);

                expect(pageCollectionService.pageRange(1, -3)).toEqual([]);

                expect(pageCollectionService.pageRange(null, 3)).toEqual([]);

                expect(pageCollectionService.pageRange(3, undefined)).toEqual([]);

                expect(pageCollectionService.pageRange(null, undefined)).toEqual([]);

            });

            it(".getPageRangeFromPages() should return the range of wizard pages", function() {

                expect(pageCollectionService.getPageRangeFromPages(pageCollectionService.firstPage,
                    pageCollectionService.lastPage))
                    .toEqual(pageCollectionService.pageRange(0, 4));

                expect(pageCollectionService.getPageRangeFromPages(pageCollectionService.firstPage,
                    pageCollectionService.firstPage))
                    .toEqual(pageCollectionService.pageRange(0, 0));

                expect(pageCollectionService.getPageRangeFromPages(pageCollectionService.getPageByIndex(1),
                    pageCollectionService.getPageByIndex(3)))
                    .toEqual(pageCollectionService.pageRange(1, 3));

            });

            it(".getPreviousPage() should return the previous page of the current page", function() {

                expect(pageCollectionService.getPreviousPage(pageCollectionService.lastPage))
                    .toEqual(pageCollectionService.getPageByIndex(3));

                expect(pageCollectionService.getPreviousPage(pageCollectionService.getPageByIndex(2)))
                    .toEqual(pageCollectionService.getPageByIndex(1));

                expect(pageCollectionService.getPreviousPage(pageCollectionService.firstPage)).toBeNull();

            });

            it(".getNextPage() should return the next page of the current page", function() {

                expect(pageCollectionService.getNextPage(pageCollectionService.firstPage))
                    .toEqual(pageCollectionService.getPageByIndex(1));

                expect(pageCollectionService.getNextPage(pageCollectionService.getPageByIndex(2)))
                    .toEqual(pageCollectionService.getPageByIndex(3));

                expect(pageCollectionService.getNextPage(pageCollectionService.lastPage)).toBeNull();

            });

            it(".getStepItemIdForPage() should return the step id of the page", function() {

                let firstPageId = context.clarityDirective.pages.first.id;
                let lastPageId = context.clarityDirective.pages.last.id;

                let firstPageStepId = firstPageId.replace("page", "step");
                let lastPageStepId = lastPageId.replace("page", "step");

                expect(pageCollectionService.getStepItemIdForPage(pageCollectionService.firstPage))
                    .toBe(firstPageStepId);
                expect(pageCollectionService.getStepItemIdForPage(pageCollectionService.lastPage))
                    .toBe(lastPageStepId);

            });

            it(".commitPage() should set the page's completed property to true", function() {
                let secondPage = pageCollectionService.getPageByIndex(2);
                spyOn(secondPage.onCommit, "emit");

                pageCollectionService.commitPage(secondPage);

                expect(secondPage.onCommit.emit).toHaveBeenCalled();
                expect(secondPage.completed).toBe(true);
            });

            xit(".commitPage() should only fire page.onCommit once", function() {

            });

            xit(".commitPage() should only fire page.onCommit once -- even if there are page overrides", function() {

            });

            xit(".commitPage() should only fire page.onCommit once -- even if there are wizard overrides", function() {

            });

            it(".reset() should set the completed properties back to false.", function() {
                pageCollectionService.firstPage.completed = true;
                pageCollectionService.lastPage.completed = true;

                pageCollectionService.reset();

                expect(pageCollectionService.firstPage.completed).toBe(false);
                expect(pageCollectionService.lastPage.completed).toBe(false);
            });

            xit(".previousPageComplete() should return true if previous page is completed", function() {

            });

            xit(".previousPageComplete() should return true if there is no previous page", function() {

            });

            xit(".previousPageComplete() should return false if previous page is not complete", function() {

            });

            xit("updateCompletedStates() shouldn't update completed state if all pages completed", function() {

            });

            xit("updateCompletedStates() should mark pages after first incomplete page as incomplete", function() {

            });

            xit("findFirstIncompletePageIndex() should return index of first incomplete page", function() {
                // mixing up complete/incomplete states...
            });

            xit("findFirstIncompletePageIndex() should return last index if all pages complete", function() {
            });

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
class PageCollectionTest {
    open: boolean = true;
}
