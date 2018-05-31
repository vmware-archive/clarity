/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import { ClrWizardPage } from '../wizard-page';

/**
 * PageCollectionService manages the collection of pages assigned to the wizard and offers
 * a number of functions useful across the wizards providers and subcomponents -- all related
 * to essentially lookups on the collection of pages.
 *
 * The easiest way to access PageCollectionService is via the wizard. The
 * following example would allow you to access your instance of the wizard from your host
 * component and thereby access the page collection via YourHostComponent.wizard.pageCollection.
 *
 * @example
 * <clr-wizard #wizard ...>
 *
 * @example
 * export class YourHostComponent {
 *   @ViewChild("wizard") wizard: Wizard;
 *   ...
 * }
 *
 * The heart of the page collection is the query list of pages, which it is assigned as a
 * reference to the Wizard.pages QueryList when the wizard is created.
 *
 */
@Injectable()
export class PageCollectionService {
  /**
   * A reference to the Wizard.pages QueryList.
   *
   * Populated when the wizard is created.
   *
   * @memberof PageCollectionService
   */
  public pages: QueryList<ClrWizardPage>;

  /**
   * Converts the PageCollectionService.pages QueryList to an array and returns it.
   *
   * Useful for many instances when you would prefer a QueryList to act like an array.
   *
   * @memberof PageCollectionService
   */
  public get pagesAsArray(): ClrWizardPage[] {
    return this.pages ? this.pages.toArray() : [];
  }

  /**
   * Returns the length of the pages query list.
   *
   * @memberof PageCollectionService
   */
  public get pagesCount(): number {
    return this.pages ? this.pages.length : 0;
  }

  /**
   * Returns the next-to-last page in the query list of pages. Operates as a getter
   * so that it isn't working with stale data.
   *
   * @memberof PageCollectionService
   */
  public get penultimatePage(): ClrWizardPage {
    const pageCount = this.pagesCount;

    if (pageCount < 2) {
      return;
    }

    return this.pagesAsArray[pageCount - 2];
  }

  /**
   * Returns the last page in the query list of pages. Operates as a getter
   * so that it isn't working with stale data.
   *
   * @memberof PageCollectionService
   */
  public get lastPage(): ClrWizardPage {
    const pageCount = this.pagesCount;

    if (pageCount < 1) {
      return;
    }

    return this.pagesAsArray[pageCount - 1];
  }

  /**
   * Returns the first page in the query list of pages. Operates as a getter
   * so that it isn't working with stale data.
   *
   * @memberof PageCollectionService
   */
  public get firstPage(): ClrWizardPage {
    if (!this.pagesCount) {
      return;
    }

    return this.pagesAsArray[0];
  }

  /**
   * Used mostly internally, but accepts a string ID and returns a ClrWizardPage
   * object that matches the ID passed. Note that IDs here should include the prefix
   * "clr-wizard-page-".
   *
   * Returns the next-to-last page in the query list of pages. Operates as a getter
   * so that it isn't working with stale data.
   *
   * @memberof PageCollectionService
   */
  public getPageById(id: string): ClrWizardPage {
    const foundPages: ClrWizardPage[] = this.pages.filter((page: ClrWizardPage) => id === page.id);
    return this.checkResults(foundPages, id);
  }

  /**
   * Accepts s number as a parameter and treats that number as the index of the page
   * you're looking for in the collection of pages. Returns a  wizard page object.
   *
   * @memberof PageCollectionService
   */
  public getPageByIndex(index: number): ClrWizardPage {
    const pageCount = this.pagesCount;
    const pagesLastIndex: number = pageCount > 1 ? pageCount - 1 : 0;

    if (index < 0) {
      throw new Error('Cannot retrieve page with index of ' + index);
    }

    if (index > pagesLastIndex) {
      throw new Error('Page index is greater than length of pages array.');
    }

    return this.pagesAsArray[index];
  }

  /**
   * Takes a wizard page object as a parameter and returns its index in the
   * collection of pages.
   *
   * @memberof PageCollectionService
   */
  public getPageIndex(page: ClrWizardPage): number {
    const index = this.pagesAsArray.indexOf(page);

    if (index < 0) {
      throw new Error('Requested page cannot be found in collection of pages.');
    }

    return index;
  }

  /**
   * Consolidates guard logic that prevents a couple of unfortunate edge cases with
   * look ups on the collection of pages.
   *
   * @memberof PageCollectionService
   */
  private checkResults(results: ClrWizardPage[], requestedPageId: string) {
    const foundPagesCount: number = results.length || 0;

    if (foundPagesCount > 1) {
      throw new Error('More than one page has the requested id ' + requestedPageId + '.');
    } else if (foundPagesCount < 1) {
      throw new Error('No page can be found with the id ' + requestedPageId + '.');
    } else {
      return results[0];
    }
  }

  /**
   * Accepts two numeric indexes and returns an array of wizard page objects that include
   * all wizard pages in the page collection from the first index to the second.
   *
   * @memberof PageCollectionService
   */
  public pageRange(start: number, end: number): ClrWizardPage[] {
    let pages: ClrWizardPage[] = [];

    if (start < 0 || end < 0) {
      return [];
    }

    if (start === null || typeof start === undefined || isNaN(start)) {
      return [];
    }

    if (end === null || typeof end === undefined || isNaN(end)) {
      return [];
    }

    if (end > this.pagesCount) {
      end = this.pagesCount;
    }

    pages = this.pagesAsArray;

    if (end - start === 0) {
      // just return the one page they want
      return [this.getPageByIndex(start)];
    }

    // slice end does not include item referenced by end index, which is weird for users
    // incrementing end index here to correct that so users and other methods
    // don't have to think about it
    end = end + 1;

    // slice does not return the last one in the range but it does include the first one
    // does not modify original array
    return pages.slice(start, end);
  }

  /**
   * Accepts two wizard page objects and returns those page objects with all other page
   * objects between them in the page collection. It doesn't care which page is ahead of the
   * other in the parameters. It will be smart enough to figure that out  on its own.
   *
   * @memberof PageCollectionService
   */
  public getPageRangeFromPages(page: ClrWizardPage, otherPage: ClrWizardPage): ClrWizardPage[] {
    const pageIndex = this.getPageIndex(page);
    const otherPageIndex = this.getPageIndex(otherPage);
    let startIndex: number;
    let endIndex: number;

    if (pageIndex <= otherPageIndex) {
      startIndex = pageIndex;
      endIndex = otherPageIndex;
    } else {
      startIndex = otherPageIndex;
      endIndex = pageIndex;
    }
    return this.pageRange(startIndex, endIndex);
  }

  /**
   * Takes a wizard page object as a parameter and returns the wizard page object of
   * the page immediately before it in the page collection. Returns null if there is
   * no page before the page it is passed.
   *
   * @memberof PageCollectionService
   */
  public getPreviousPage(page: ClrWizardPage) {
    const myPageIndex = this.getPageIndex(page);
    const previousPageIndex = myPageIndex - 1;
    if (previousPageIndex < 0) {
      return null;
    }
    return this.getPageByIndex(previousPageIndex);
  }

  /**
   * Accepts a wizard page object as a parameter and returns a Boolean that says if
   * the page you sent it is complete.
   *
   * @memberof PageCollectionService
   */
  public previousPageIsCompleted(page: ClrWizardPage) {
    let previousPage: ClrWizardPage;

    if (!page) {
      return false;
    }

    previousPage = this.getPreviousPage(page);

    if (null === previousPage) {
      // page is the first page. no previous page.
      return true;
    }

    return previousPage.completed;
  }

  /**
   * Takes a wizard page object as a parameter and returns the wizard page object of
   * the page immediately after it in the page collection. Returns null if there is
   * no page after the page it is passed.
   *
   * @memberof PageCollectionService
   */
  public getNextPage(page: ClrWizardPage) {
    const myPageIndex = this.getPageIndex(page);
    const nextPageIndex = myPageIndex + 1;

    if (nextPageIndex >= this.pagesAsArray.length) {
      return null;
    }
    return this.getPageByIndex(nextPageIndex);
  }

  /**
   * Takes a wizard page object as a parameter and generates a step item id from the
   * page ID. Returns the generated step item ID as a string.
   *
   * @memberof PageCollectionService
   */
  public getStepItemIdForPage(page: ClrWizardPage) {
    const pageId = page.id;
    const pageIdParts = pageId.split('-').reverse();

    pageIdParts[1] = 'step';
    return pageIdParts.reverse().join('-');
  }

  /**
   * Generally only used internally to mark that a specific page has been "committed".
   * This involves marking the page complete and firing the ClrWizardPage.onCommit
   * (clrWizardPageOnCommit) output. Takes the wizard page object that you intend to
   * mark completed as a parameter.
   *
   * @memberof PageCollectionService
   */
  public commitPage(page: ClrWizardPage) {
    const pageHasOverrides = page.stopNext || page.preventDefault;
    page.completed = true;

    if (!pageHasOverrides) {
      // prevent loop of event emission; alternate flows work off
      // of event emitters this is how they break that cycle.
      page.onCommit.emit(page.id);
    }
  }

  // used by the navService to navigate back to first possible step after
  // pages are reset

  /**
   *
   * @memberof PageCollectionService
   */
  private _pagesReset = new Subject<boolean>();

  /**
   * An observable that the navigation service listens to in order to know when
   * the page collection completed states have been reset to false so that way it
   * can also reset the navigation to make the first page in the page collection
   * current/active.
   *
   * @memberof PageCollectionService
   */
  public get pagesReset(): Observable<boolean> {
    return this._pagesReset.asObservable();
  }

  /**
   * Sets all completed states of the pages in the page collection to false and
   * notifies the navigation service to likewise reset the navigation.
   *
   * @memberof PageCollectionService
   */
  public reset() {
    this.pagesAsArray.forEach((page: ClrWizardPage) => {
      page.completed = false;
    });
    this._pagesReset.next(true);
  }

  /**
   * Rolls through all the pages in the page collection to make sure there are no
   * incomplete pages sandwiched between completed pages in the workflow. Identifies
   * the first incomplete page index and sets all pages behind it to a completed
   * state of false.
   *
   * @memberof PageCollectionService
   */
  public updateCompletedStates(): void {
    const firstIncompleteIndex = this.findFirstIncompletePageIndex();

    if (firstIncompleteIndex === this.pagesAsArray.length - 1) {
      // all complete no need to do anything
      return;
    }

    this.pagesAsArray.forEach((page: ClrWizardPage, index: number) => {
      if (index > firstIncompleteIndex) {
        page.completed = false;
      }
    });
  }

  /**
   * Retrieves the index of the first incomplete page in the page collection.
   *
   * @memberof PageCollectionService
   */
  public findFirstIncompletePageIndex(): number {
    let returnIndex: number = null;
    this.pagesAsArray.forEach((page: ClrWizardPage, index: number) => {
      if (null === returnIndex && false === page.completed) {
        returnIndex = index;
      }
    });

    // fallthrough, all completed, return last page
    if (null === returnIndex) {
      returnIndex = this.pagesCount - 1;
    }

    return returnIndex;
  }

  public findFirstIncompletePage(): ClrWizardPage {
    const myIncompleteIndex = this.findFirstIncompletePageIndex();
    return this.pagesAsArray[myIncompleteIndex];
  }
}
