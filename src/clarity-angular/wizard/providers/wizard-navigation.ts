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
            let currentPage = this.currentPage;
            if (!this.currentPageIsLast && currentPage.readyToComplete) {
                currentPage.primaryButtonClicked.emit("next");
                currentPage.nextButtonClicked.emit(currentPage);
                if (currentPage.preventDefault) {
                    this.pageCollection.commitPage(currentPage);
                } else {
                    this.next();
                }
            }
        });

        this.dangerButtonSubscription = this.buttonService.dangerBtnClicked.subscribe(() => {
            let currentPage: WizardPage = this.currentPage;

            if (!currentPage.readyToComplete) {
                return;
            }

            // because we made it past the guard up there ^ we know the current page is ready
            if (this.currentPageIsLast) {
                currentPage.primaryButtonClicked.emit("danger");
                currentPage.dangerButtonClicked.emit(currentPage);
                if (currentPage.preventDefault) {
                    this.pageCollection.commitPage(currentPage);
                } else {
                    this.finish();
                }
            } else {
                currentPage.primaryButtonClicked.emit("danger");
                currentPage.dangerButtonClicked.emit(currentPage);
                if (currentPage.preventDefault) {
                    this.pageCollection.commitPage(currentPage);
                } else {
                    this.next();
                }
            }
        });

        this.finishButtonSubscription = this.buttonService.finishBtnClicked.subscribe(() => {
            let currentPage = this.currentPage;
            if (currentPage.readyToComplete && this.currentPageIsLast) {
                if (currentPage.preventDefault) {
                    this.pageCollection.commitPage(currentPage);
                } else {
                    this.finish();
                }
            }
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
            // SPECME
        });

        this.pagesResetSubscription = this.pageCollection.pagesReset.subscribe(() => {
            this.setLastEnabledPageCurrent();
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

    public get currentPageTitle(): TemplateRef<any> {
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
// TODO: emit page onload here
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
        let currentPage = this.currentPage;
        let nextPage: WizardPage;

        if (this.currentPageIsLast) {
            this.finish();
        }

        if (!currentPage.readyToComplete) {
            return;
        }

        if (!currentPage.preventDefault) {
            // when preventDefault is enacted, this is called manually
            // after an onCommit. put check in here to avoid duplicate
            // onCommit calls
            this.pageCollection.commitPage(currentPage);
        }
        nextPage = this.pageCollection.getNextPage(currentPage);

        // catch errant null or undefineds that creep in
        if (nextPage) {
            this.setCurrentPage(nextPage);
            this._movedToNextPage.next(true);
        } else {
            throw new Error("The wizard has no next page to go to.");
        }
    }

    public finish(): void {
        let currentPage = this.currentPage;
        if (!currentPage.readyToComplete) {
            return;
        }

        currentPage.primaryButtonClicked.emit("finish");
        currentPage.finishButtonClicked.emit(currentPage);
        if (!currentPage.preventDefault) {
            // when preventDefault is enacted, this is called manually
            // after an onCommit. put check in here to avoid duplicate
            // onCommit calls
            this.pageCollection.commitPage(currentPage);
        }
        this._wizardFinished.next();

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

    public goTo(pageToGoToOrId: any) {
        let pageToGoTo: WizardPage;
        let currentPage: WizardPage;
        let myPages: PageCollectionService;
        let pagesToCheck: WizardPage[];
        let okayToMove: boolean = true;

        myPages = this.pageCollection;

        if (typeof pageToGoToOrId === "string") {
            // we have an ID so we need to look up our page
            pageToGoTo = myPages.getPageById(pageToGoToOrId);
        } else {
            pageToGoTo = pageToGoToOrId;
        }

        currentPage = this.currentPage;

        if (pageToGoTo === currentPage) {
            return;
        } else {
            pagesToCheck = myPages.getPageRangeFromPages(this.currentPage, pageToGoTo);
        }

        pagesToCheck.forEach((page: WizardPage) => {
            if (!okayToMove) {
                return;
            }
            if (!page.completed && !page.current) {
                okayToMove = false;
            }
        });

        if (!okayToMove) {
            return;
        }

        this.setCurrentPage(pageToGoTo);
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
// SPECME: TEST FOR IF ARRAY OF PAGES CHANGE AFTER RESET HAPPENS
// ID...
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