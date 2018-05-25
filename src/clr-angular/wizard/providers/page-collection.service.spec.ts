/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TestContext } from '../../utils/testing/helpers.spec';
import { BasicWizardTestComponent } from '../test-components/basic-wizard.mock';
import { ClrWizard } from '../wizard';
import { ClrWizardPage } from '../wizard-page';

import { PageCollectionService } from './page-collection.service';

export default function(): void {
  describe('Page Collection Service', function() {
    let context: TestContext<ClrWizard, BasicWizardTestComponent>;
    let pageCollectionService: PageCollectionService;

    beforeEach(function() {
      context = this.create(ClrWizard, BasicWizardTestComponent);
      pageCollectionService = context.getClarityProvider(PageCollectionService);
      context.detectChanges();
    });

    it('.pagesAsArray should return the array of wizard pages', function() {
      expect(pageCollectionService.pagesAsArray).toEqual(context.clarityDirective.pages.toArray());
    });

    it('.pagesCount should return correct number of pages', function() {
      expect(pageCollectionService.pagesCount).toEqual(5);
    });

    it('.lastPage should return the last wizard page', function() {
      expect(pageCollectionService.lastPage.id).toEqual(context.clarityDirective.pages.last.id);
    });

    it('.firstPage should return the first wizard page', function() {
      expect(pageCollectionService.firstPage.id).toEqual(context.clarityDirective.pages.first.id);
    });

    it('.getPageById() should return the wizard page with a matching id', function() {
      // checkResults() method is tested here as well
      const firstPageId = context.clarityDirective.pages.first.id;
      const firstPageIdNumber = firstPageId.match(/\d+/)[0];
      const lastPageId = context.clarityDirective.pages.last.id;
      const nonExistingPageId = 'N0N-EX1ST1N-ID';

      expect(pageCollectionService.getPageById(firstPageId)).toEqual(pageCollectionService.firstPage);
      expect(pageCollectionService.getPageById(lastPageId)).toEqual(pageCollectionService.lastPage);

      expect(function() {
        pageCollectionService.getPageById(nonExistingPageId);
      }).toThrowError('No page can be found with the id ' + nonExistingPageId + '.');

      // Manually setting this id to make multiple pages have the same id.
      pageCollectionService.getPageById(lastPageId)._id = firstPageIdNumber;

      expect(function() {
        pageCollectionService.getPageById(firstPageId);
      }).toThrowError('More than one page has the requested id ' + firstPageId + '.');
    });

    it('.getPageByIndex() should return the index of the wizard page', function() {
      expect(pageCollectionService.getPageByIndex(0)).toEqual(pageCollectionService.firstPage);
      expect(pageCollectionService.getPageByIndex(4)).toEqual(pageCollectionService.lastPage);

      expect(function() {
        pageCollectionService.getPageByIndex(-20);
      }).toThrowError('Cannot retrieve page with index of -20');

      expect(function() {
        pageCollectionService.getPageByIndex(10);
      }).toThrowError('Page index is greater than length of pages array.');
    });

    it('.getPageIndex() should return the index of a wizard page', function() {
      expect(pageCollectionService.getPageIndex(pageCollectionService.firstPage)).toBe(0);
    });

    it('.pageRange() should return the range of wizard pages', function() {
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

    it('.getPageRangeFromPages() should return the range of wizard pages', function() {
      expect(
        pageCollectionService.getPageRangeFromPages(pageCollectionService.firstPage, pageCollectionService.lastPage)
      ).toEqual(pageCollectionService.pageRange(0, 4));

      expect(
        pageCollectionService.getPageRangeFromPages(pageCollectionService.firstPage, pageCollectionService.firstPage)
      ).toEqual(pageCollectionService.pageRange(0, 0));

      expect(
        pageCollectionService.getPageRangeFromPages(
          pageCollectionService.getPageByIndex(1),
          pageCollectionService.getPageByIndex(3)
        )
      ).toEqual(pageCollectionService.pageRange(1, 3));
    });

    it('.getPreviousPage() should return the previous page of the current page', function() {
      expect(pageCollectionService.getPreviousPage(pageCollectionService.lastPage)).toEqual(
        pageCollectionService.getPageByIndex(3)
      );

      expect(pageCollectionService.getPreviousPage(pageCollectionService.getPageByIndex(2))).toEqual(
        pageCollectionService.getPageByIndex(1)
      );

      expect(pageCollectionService.getPreviousPage(pageCollectionService.firstPage)).toBeNull();
    });

    it('.getNextPage() should return the next page of the current page', function() {
      expect(pageCollectionService.getNextPage(pageCollectionService.firstPage)).toEqual(
        pageCollectionService.getPageByIndex(1)
      );

      expect(pageCollectionService.getNextPage(pageCollectionService.getPageByIndex(2))).toEqual(
        pageCollectionService.getPageByIndex(3)
      );

      expect(pageCollectionService.getNextPage(pageCollectionService.lastPage)).toBeNull();
    });

    it('.getStepItemIdForPage() should return the step id of the page', function() {
      const firstPageId = context.clarityDirective.pages.first.id;
      const lastPageId = context.clarityDirective.pages.last.id;

      const firstPageStepId = firstPageId.replace('page', 'step');
      const lastPageStepId = lastPageId.replace('page', 'step');

      expect(pageCollectionService.getStepItemIdForPage(pageCollectionService.firstPage)).toBe(firstPageStepId);
      expect(pageCollectionService.getStepItemIdForPage(pageCollectionService.lastPage)).toBe(lastPageStepId);
    });

    it(".commitPage() should set the page's completed property to true", function() {
      const testPage = pageCollectionService.getPageByIndex(2);
      spyOn(testPage.onCommit, 'emit');

      pageCollectionService.commitPage(testPage);

      expect(testPage.onCommit.emit).toHaveBeenCalledTimes(1);
      expect(testPage.completed).toBe(true);
    });

    it('.commitPage() should not fire page.onCommit when page has overrides', function() {
      const testPage = pageCollectionService.getPageByIndex(2);
      spyOn(testPage.onCommit, 'emit');

      testPage.stopNext = true;
      context.detectChanges();

      pageCollectionService.commitPage(testPage);

      expect(testPage.onCommit.emit).not.toHaveBeenCalled();
      expect(testPage.completed).toBe(true);
    });

    it('.commitPage() should only fire page.onCommit once if there are wizard overrides', function() {
      const testPage = pageCollectionService.getPageByIndex(2);
      spyOn(testPage.onCommit, 'emit');

      context.clarityDirective.stopNext = true;
      context.detectChanges();

      pageCollectionService.commitPage(testPage);

      expect(testPage.onCommit.emit).toHaveBeenCalledTimes(1);
      expect(testPage.completed).toBe(true);
    });

    it('.reset() should set the completed properties back to false.', function() {
      pageCollectionService.firstPage.completed = true;
      pageCollectionService.lastPage.completed = true;

      pageCollectionService.reset();

      expect(pageCollectionService.firstPage.completed).toBe(false);
      expect(pageCollectionService.lastPage.completed).toBe(false);
    });

    it('.previousPageIsCompleted() should return true if previous page is completed', function() {
      const secondPage = pageCollectionService.getPageByIndex(1);
      pageCollectionService.firstPage.completed = true;
      context.detectChanges();
      expect(pageCollectionService.previousPageIsCompleted(secondPage)).toBe(true);
    });

    it('.previousPageIsCompleted() should return true if there is no previous page', function() {
      const firstPage = pageCollectionService.firstPage;
      expect(pageCollectionService.previousPageIsCompleted(firstPage)).toBe(true);
    });

    it('.previousPageIsCompleted() should return false if previous page is not complete', function() {
      const secondPage = pageCollectionService.getPageByIndex(1);
      expect(pageCollectionService.firstPage.completed).toBe(false, 'verify first page is not completed');
      expect(pageCollectionService.previousPageIsCompleted(secondPage)).toBe(
        false,
        "second page's previous page is not complete"
      );
    });

    it("updateCompletedStates() shouldn't update completed state if all pages completed", function() {
      const pageArray = [];
      pageArray.push(pageCollectionService.firstPage);
      pageArray.push(pageCollectionService.getPageByIndex(1));
      pageArray.push(pageCollectionService.getPageByIndex(2));
      pageArray.push(pageCollectionService.getPageByIndex(3));
      pageArray.push(pageCollectionService.getPageByIndex(4));

      pageArray.forEach((page: ClrWizardPage) => {
        page.completed = true;
      });
      pageCollectionService.updateCompletedStates();

      expect(pageCollectionService.firstPage.completed).toBe(true, 'first page not updated');
      expect(pageCollectionService.getPageByIndex(1).completed).toBe(true, 'second page not updated');
      expect(pageCollectionService.getPageByIndex(2).completed).toBe(true, 'third page not updated');
      expect(pageCollectionService.getPageByIndex(3).completed).toBe(true, 'fourth page not updated');
      expect(pageCollectionService.getPageByIndex(4).completed).toBe(true, 'fifth page not updated');
    });

    it('updateCompletedStates() should mark pages after first incomplete page as incomplete', function() {
      const pageArray = [];
      pageArray.push(pageCollectionService.firstPage);
      pageArray.push(pageCollectionService.getPageByIndex(1));
      pageArray.push(pageCollectionService.getPageByIndex(3));
      pageArray.push(pageCollectionService.getPageByIndex(4));

      pageArray.forEach((page: ClrWizardPage) => {
        page.completed = true;
      });

      pageCollectionService.updateCompletedStates();

      expect(pageCollectionService.firstPage.completed).toBe(true, 'first page not changed');
      expect(pageCollectionService.getPageByIndex(1).completed).toBe(true, 'second page not changed');
      expect(pageCollectionService.getPageByIndex(2).completed).toBe(false, 'third page never set');
      expect(pageCollectionService.getPageByIndex(3).completed).toBe(false, 'fourth page changed');
      expect(pageCollectionService.getPageByIndex(4).completed).toBe(false, 'fifth page changed');
    });

    it('findFirstIncompletePageIndex() should return index of first incomplete page', function() {
      pageCollectionService.firstPage.completed = true;
      pageCollectionService.getPageByIndex(1).completed = false;
      pageCollectionService.getPageByIndex(2).completed = true;
      pageCollectionService.getPageByIndex(3).completed = false;
      pageCollectionService.getPageByIndex(4).completed = true;
      expect(pageCollectionService.findFirstIncompletePageIndex()).toBe(1);
    });

    it('findFirstIncompletePageIndex() should return last index if all pages complete', function() {
      const pageArray = [];
      let indexToTest: number;
      const expectedIndex = pageCollectionService.pagesCount - 1;

      pageArray.push(pageCollectionService.firstPage);
      pageArray.push(pageCollectionService.getPageByIndex(1));
      pageArray.push(pageCollectionService.getPageByIndex(2));
      pageArray.push(pageCollectionService.getPageByIndex(3));
      pageArray.push(pageCollectionService.getPageByIndex(4));

      pageArray.forEach((page: ClrWizardPage) => {
        page.completed = true;
      });

      indexToTest = pageCollectionService.findFirstIncompletePageIndex();

      expect(indexToTest).toBe(expectedIndex);
    });
  });
}
