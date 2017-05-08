/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable, OnDestroy, TemplateRef } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { WizardPage } from "../wizard-page";
import { PageCollectionService } from "./page-collection";
import { ButtonHubService } from "./button-hub";
import { GHOST_PAGE_ANIMATION } from "../../modal/utils/ghost-page-animations";

@Injectable()
export class WizardNavigationService implements OnDestroy {

    public previousButtonSubscription: Subscription;
    public nextButtonSubscription: Subscription;
    public dangerButtonSubscription: Subscription;
    public finishButtonSubscription: Subscription;
    public customButtonSubscription: Subscription;
    public cancelButtonSubscription: Subscription;
    public pagesResetSubscription: Subscription;

    constructor(public pageCollection: PageCollectionService, public buttonService: ButtonHubService) {
        this.previousButtonSubscription = this.buttonService.previousBtnClicked.subscribe(() => {
            let currentPage = this.currentPage;
            if (this.currentPageIsFirst || currentPage.previousStepDisabled) {
                return;
            }
            currentPage.previousButtonClicked.emit(currentPage);
            if (!currentPage.preventDefault) {
                this.previous();
            }
        });

        this.nextButtonSubscription = this.buttonService.nextBtnClicked.subscribe(() => {
            this.checkAndCommitCurrentPage("next");
        });

        this.dangerButtonSubscription = this.buttonService.dangerBtnClicked.subscribe(() => {
            this.checkAndCommitCurrentPage("danger");
        });

        this.finishButtonSubscription = this.buttonService.finishBtnClicked.subscribe(() => {
            this.checkAndCommitCurrentPage("finish");
        });

        this.customButtonSubscription = this.buttonService.customBtnClicked.subscribe((type: string) => {
            this.currentPage.customButtonClicked.emit(type);
        });

        this.cancelButtonSubscription = this.buttonService.cancelBtnClicked.subscribe(() => {
            if (this.currentPage.preventDefault) {
                this.currentPage.pageOnCancel.emit(this.currentPage);
            } else {
                this.cancel();
            }
        });

        this.pagesResetSubscription = this.pageCollection.pagesReset.subscribe(() => {
            this.setFirstPageCurrent();
        });
    }

    ngOnDestroy(): void {
        this.previousButtonSubscription.unsubscribe();
        this.nextButtonSubscription.unsubscribe();
        this.dangerButtonSubscription.unsubscribe();
        this.finishButtonSubscription.unsubscribe();
        this.customButtonSubscription.unsubscribe();
        this.cancelButtonSubscription.unsubscribe();
        this.pagesResetSubscription.unsubscribe();
    }

// TODO: MAKE SURE EXTERNAL OUTPUTS SAY 'CHANGE' NOT 'CHANGED'
    // lets other components subscribe to when the current page changes
    private _currentChanged = new Subject<WizardPage>();
    public get currentPageChanged(): Observable<WizardPage> {
        return this._currentChanged.asObservable();
    };

    public currentPage: WizardPage;
    public navServiceLoaded = false;
    public forceForwardNavigation = false;

    public get currentPageTitle(): TemplateRef<any> {
        // when the querylist of pages is empty. this is the first place it fails...
        if (!this.currentPage) {
            throw new Error("Current page does not exist. QueryList of pages is probably empty and should not be.");
        }
        return this.currentPage.title;
    }

    public get currentPageIsFirst(): boolean {
        return this.pageCollection.firstPage === this.currentPage;
    }

    public get currentPageIsNextToLast(): boolean {
        return this.pageCollection.penultimatePage === this.currentPage;
    }

    public get currentPageIsLast(): boolean {
        return this.pageCollection.lastPage === this.currentPage;
    }

    public setCurrentPage(page: WizardPage): void {
        this.currentPage = page;
        page.onLoad.emit(page.id);
        this._currentChanged.next(page);
    }

    private _movedToNextPage = new Subject<boolean>();
    public get movedToNextPage(): Observable<boolean> {
        return this._movedToNextPage.asObservable();
    }

    private _wizardFinished = new Subject<boolean>();
    public get wizardFinished(): Observable<boolean> {
        return this._wizardFinished.asObservable();
    }

    // next --
    //
    // When called, after successful validation, the wizard will move to the
    // next page.
    // This is a public function that can be used to programmatically advance
    // the user to the next page.
    public next(): void {
        if (this.currentPageIsLast) {
            this.checkAndCommitCurrentPage("finish");
            return;
        }

        this.checkAndCommitCurrentPage("next");

        if (!this.wizardHasAltNext) {
            this._movedToNextPage.next(true);
        }
    }

    public forceNext(): void {
        let currentPage: WizardPage = this.currentPage;
        let nextPage: WizardPage = this.pageCollection.getNextPage(currentPage);

        // catch errant null or undefineds that creep in
        if (!nextPage) {
            throw new Error("The wizard has no next page to go to.");
        }

        if (!currentPage.completed) {
            // this is a state that alt next flows can get themselves in...
            this.pageCollection.commitPage(currentPage);
        }
        this.setCurrentPage(nextPage);
    }

    public checkAndCommitCurrentPage(buttonType: string): void {
        let currentPage: WizardPage = this.currentPage;
        let iAmTheLastPage: boolean;

        let isNext: boolean;
        let isDanger: boolean;
        let isDangerNext: boolean;
        let isDangerFinish: boolean;
        let isFinish: boolean;

        if (!currentPage.readyToComplete) {
            return;
        }

        iAmTheLastPage = this.currentPageIsLast;

        isNext = buttonType === "next";
        isDanger = buttonType === "danger";
        isDangerNext = isDanger && !iAmTheLastPage;
        isDangerFinish = isDanger && iAmTheLastPage;
        isFinish = buttonType === "finish" || isDangerFinish;

        if (isFinish && !iAmTheLastPage) {
            return;
        }

        currentPage.primaryButtonClicked.emit(buttonType);

        if (isFinish) {
            currentPage.finishButtonClicked.emit(currentPage);
        } else if (isDanger) {
            currentPage.dangerButtonClicked.emit();
        } else if (isNext) {
            currentPage.nextButtonClicked.emit();
        }

        if (currentPage.stopNext || currentPage.preventDefault) {
            currentPage.onCommit.emit(currentPage.id);
            return;
        }

        // order is very important with these emitters!
        if (isFinish || isDangerFinish) {
            // mark page as complete
            this.pageCollection.commitPage(currentPage);
            this._wizardFinished.next();
        }

        if (this.wizardHasAltNext) {
            this.pageCollection.commitPage(currentPage);

            if (isNext || isDangerNext) {
                this._movedToNextPage.next(true);
            }
            // jump out here, no matter what type we're looking at
            return;
        }

        if (isNext || isDangerNext) {
            this.forceNext();
        }
    }

    public finish(): void {
        this.checkAndCommitCurrentPage("finish");
    }

    // When called, the wizard will move to the prev page.
    // This is a public function that can be used to programmatically go back
    // to the previous step.
    private _movedToPreviousPage = new Subject<boolean>();
    public get movedToPreviousPage(): Observable<boolean> {
        return this._movedToPreviousPage.asObservable();
    }
    public previous(): void {
        let previousPage: WizardPage;

        if (this.currentPageIsFirst) {
            return;
        }

        previousPage = this.pageCollection.getPreviousPage(this.currentPage);

        if (!previousPage) {
            return;
        }

        this._movedToPreviousPage.next(true);

        if (this.forceForwardNavigation) {
            this.currentPage.completed = false;
        }

        this.setCurrentPage(previousPage);
    }

    private _cancelWizard = new Subject<any>();
    public get notifyWizardCancel(): Observable<any> {
        return this._cancelWizard.asObservable();
    }

    public cancel(): void {
        this._cancelWizard.next();
    }

    public wizardHasAltCancel: boolean = false;

    public wizardHasAltNext: boolean = false;

    public goTo(pageToGoToOrId: any, lazyComplete: boolean = false) {
        let pageToGoTo: WizardPage;
        let currentPage: WizardPage;
        let myPages: PageCollectionService;
        let pagesToCheck: WizardPage[];
        let okayToMove: boolean = true;
        let goingForward: boolean;
        let currentPageIndex: number;
        let goToPageIndex: number;

        myPages = this.pageCollection;
        pageToGoTo = (typeof pageToGoToOrId === "string") ? myPages.getPageById(pageToGoToOrId) : pageToGoToOrId;
        currentPage = this.currentPage;

        // no point in going to the current page. you're there already!
        if (pageToGoTo === currentPage) {
            return;
        }

        currentPageIndex = myPages.getPageIndex(currentPage);
        goToPageIndex = myPages.getPageIndex(pageToGoTo);
        goingForward = (goToPageIndex > currentPageIndex);
        pagesToCheck = myPages.getPageRangeFromPages(this.currentPage, pageToGoTo);

        okayToMove = lazyComplete || this.canGoTo(pagesToCheck);

        if (!okayToMove) {
            return;
        }

        if (goingForward && lazyComplete) {
            pagesToCheck.forEach((page: WizardPage) => {
                if (page !== pageToGoTo) {
                    page.completed = true;
                }
            });
        } else if (!goingForward && this.forceForwardNavigation) {
            pagesToCheck.forEach((page: WizardPage) => {
                page.completed = false;
            });
        }

        this.setCurrentPage(pageToGoTo);
    }

    public canGoTo(pagesToCheck: WizardPage[]): boolean {
        let okayToMove = true;
        let myPages = this.pageCollection;

        // previous page can be important when moving because if it's completed it
        // allows us to move to the page even if it's incomplete...
        let previousPagePasses: boolean;

        if (!pagesToCheck || pagesToCheck.length < 1) {
            return false;
        }

        pagesToCheck.forEach((page: WizardPage) => {
            let previousPage: WizardPage;

            if (!okayToMove) {
                return;
            }

            if (page.completed) {
                // default is true. just jump out instead of complicating it.
                return;
            }

            // so we know our page is not completed...
            previousPage = myPages.getPageIndex(page) > 0 ? myPages.getPreviousPage(page) : null;
            previousPagePasses = (previousPage === null) || (previousPage.completed === true);

            // we are false if not the current page AND previous page is not completed (but must have a previous page)
            if (!page.current && !previousPagePasses) {
                okayToMove = false;
            }
            // falls through to true as default
        });

        return okayToMove;
    }

    public setLastEnabledPageCurrent(): void {
        let allPages: WizardPage[] = this.pageCollection.pagesAsArray;
        let lastCompletedPageIndex: number = null;

        allPages.forEach((page: WizardPage, index: number) => {
            if (page.completed) {
                lastCompletedPageIndex = index;
            }
        });

        if (lastCompletedPageIndex === null) {
            // always is at least the first item...
            lastCompletedPageIndex = 0;
        } else if ((lastCompletedPageIndex + 1) < allPages.length) {
            lastCompletedPageIndex = lastCompletedPageIndex + 1;
        }

        this.setCurrentPage(allPages[lastCompletedPageIndex]);
    }

    // used to reset to the first page
// TODO?: EASIEST WAY TO SOLVE IS TO HAVE A GENERIC INPUT TO RESET TO A SPECIFIC ID
    public setFirstPageCurrent(): void {
        this.setCurrentPage(this.pageCollection.pagesAsArray[0]);
    }

    private _wizardGhostPageState: string = GHOST_PAGE_ANIMATION.STATES.NO_PAGES;
    public get wizardGhostPageState(): string {
        return this._wizardGhostPageState;
    }

    public set wizardGhostPageState(value: string) {
        if (this.hideWizardGhostPages) {
            this._wizardGhostPageState = GHOST_PAGE_ANIMATION.STATES.NO_PAGES;
        } else {
            this._wizardGhostPageState = value;
        }
    }

    private _hideWizardGhostPages: boolean = true;
    public get hideWizardGhostPages(): boolean {
        return this._hideWizardGhostPages;
    }
    public set hideWizardGhostPages(value: boolean) {
        this._hideWizardGhostPages = value;
    }

    public updateNavigation(): void {
        let toSetCurrent: WizardPage;
        let currentPageRemoved: boolean;

        this.pageCollection.updateCompletedStates();

        currentPageRemoved = this.pageCollection.pagesAsArray.indexOf(this.currentPage) < 0;
        toSetCurrent = this.pageCollection.findFirstIncompletePage();
        this.setCurrentPage(toSetCurrent);
    }
}