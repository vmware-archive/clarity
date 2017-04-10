/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable, QueryList } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { WizardPage } from "../wizard-page";

@Injectable()
export class PageCollectionService {
// TODO: create Observables for when list of pages changes?

    public pages: QueryList<WizardPage>;

    public get pagesAsArray(): WizardPage[] {
        return this.pages ? this.pages.toArray() : [];
    }

    public get pagesCount(): number {
        return this.pages ? this.pages.length : 0;
    }

    public get penultimatePage(): WizardPage {
        let pageCount = this.pagesCount;

        if (pageCount < 2) {
            return;
        }

        return this.pagesAsArray[pageCount - 2];
    }

    public get lastPage(): WizardPage {
        let pageCount = this.pagesCount;

        if (pageCount < 1) {
            return;
        }

        return this.pagesAsArray[pageCount - 1];
    }

    public get firstPage(): WizardPage {
        if (!this.pagesCount) {
            return;
        }

        return this.pagesAsArray[0];
    }

    public getPageById(id: string): WizardPage {
        let foundPages: WizardPage[] = this.pages.filter((page: WizardPage) => id === page.id);
        return this.checkResults(foundPages, id);
    }

    public getPageByIndex(index: number): WizardPage {
        let pageCount = this.pagesCount;
        let pagesLastIndex: number = (pageCount > 1) ? pageCount - 1 : 0;

        if (index < 0) {
            throw new Error("Cannot retrieve page with index of " + index);
        }

        if (index > pagesLastIndex) {
            throw new Error("Page index is greater than length of pages array.");
        }

        return this.pagesAsArray[index];
    }

    public getPageIndex(page: WizardPage): number {
        let index = this.pagesAsArray.indexOf(page);

        if (index < 0) {
            throw new Error("Requested page cannot be found in collection of pages.");
        }

        return index;
    }

    private checkResults(results: WizardPage[], requestedPageId: string) {
        let foundPagesCount: number = results.length || 0;

        if (foundPagesCount > 1) {
            throw new Error("More than one page has the requested id " + requestedPageId + ".");
        } else if (foundPagesCount < 1) {
            throw new Error("No page can be found with the id " + requestedPageId + ".");
        } else {
            return results[0];
        }
    }

    public pageRange(start: number, end: number): WizardPage[] {
        let pages: WizardPage[] = [];

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

        if ((end - start) === 0) {
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

    public getPageRangeFromPages(page: WizardPage, otherPage: WizardPage): WizardPage[] {
        let pageIndex = this.getPageIndex(page);
        let otherPageIndex = this.getPageIndex(otherPage);
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

    public getPreviousPage(page: WizardPage) {
        let myPageIndex = this.getPageIndex(page);
        let previousPageIndex = myPageIndex - 1;
        if (previousPageIndex < 0) {
            return null;
        }
        return this.getPageByIndex(previousPageIndex);
    }

    public getNextPage(page: WizardPage) {
        let myPageIndex = this.getPageIndex(page);
        let nextPageIndex = myPageIndex + 1;

        if (nextPageIndex >= this.pagesAsArray.length) {
            return null;
        }
        return this.getPageByIndex(nextPageIndex);
    }

    public getStepItemIdForPage(page: WizardPage) {
        let pageId = page.id;
        let pageIdParts = pageId.split("-").reverse();

        pageIdParts[1] = "step";
        return pageIdParts.reverse().join("-");
    }

    public commitPage(page: WizardPage) {
        page.completed = true;
        page.onCommit.emit(page.id);
    }

    // used by the navService to navigate back to first possible step after
    // pages are reset
    private _pagesReset = new Subject<boolean>();
    public get pagesReset(): Observable<boolean> {
        return this._pagesReset.asObservable();
    }

    public reset() {
        this.pagesAsArray.forEach((page: WizardPage) => {
            page.completed = false;
        });
        this._pagesReset.next(true);
    }

    public updateCompletedStates(): void {
        let firstIncompleteIndex = this.findFirstIncompletePageIndex();

        if (firstIncompleteIndex === this.pagesAsArray.length - 1) {
            // all complete no need to do anything
            return;
            // SPECME
        }

        this.pagesAsArray.forEach((page: WizardPage, index: number) => {
            if (index > firstIncompleteIndex) {
                page.completed = false;
            }
            // SPECME
        });
        // SPECME
    }

    public findFirstIncompletePageIndex(): number {
        let returnIndex: number = null;
        this.pagesAsArray.forEach((page: WizardPage, index: number) => {
            if (null === returnIndex && false === page.completed) {
                returnIndex = index;
            }
            // SPECME
        });
        // SPECME

        // fallthrough, all completed, return last page
        if (null === returnIndex) {
            returnIndex = this.pagesCount - 1;
        }
        // SPECME

        return returnIndex;
    }

    public findFirstIncompletePage(): WizardPage {
        let myIncompleteIndex = this.findFirstIncompletePageIndex();
        return this.pagesAsArray[myIncompleteIndex];
        // SPECME
    }
}