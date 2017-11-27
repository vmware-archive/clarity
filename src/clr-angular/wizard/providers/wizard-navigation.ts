/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable, OnDestroy, TemplateRef} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Subscription} from "rxjs/Subscription";

import {GHOST_PAGE_ANIMATION} from "../../modal/utils/ghost-page-animations";
import {WizardPage} from "../wizard-page";

import {ButtonHubService} from "./button-hub";
import {PageCollectionService} from "./page-collection";


/**
 * Performs navigation functions for a wizard and manages the current page. Presented as a
 * separate service to encapsulate the behavior of navigating and completing the wizard so
 * that it can be shared across the wizard and its sub-components.
 *
 * The easiest way to access the navigation service is there a reference on your wizard. The
 * Following example would allow you to access your instance of the wizard from your host
 * component and thereby access the navigation service via YourHostComponent.wizard.navService.
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
 * @export
 * @class WizardNavigationService
 * @implements {OnDestroy}
 */
@Injectable()
export class WizardNavigationService implements OnDestroy {
    /**
     * Is notified when a previous button is clicked in the wizard. Performs checks
     * before alerting the current page of the button click. Enacts navigation to
     * the previous page if not overridden at the page level.
     *
     * @type {Subscription}
     * @memberof WizardNavigationService
     */
    public previousButtonSubscription: Subscription;

    /**
     * Is notified when a Next button is clicked in the wizard.
     *
     * @type {Subscription}
     * @memberof WizardNavigationService
     */
    public nextButtonSubscription: Subscription;

    /**
     * Is notified when a danger button is clicked in the wizard.
     *
     * @type {Subscription}
     * @memberof WizardNavigationService
     */
    public dangerButtonSubscription: Subscription;

    /**
     * Is notified when a  finish button is clicked in the wizard.
     *
     * @type {Subscription}
     * @memberof WizardNavigationService
     */
    public finishButtonSubscription: Subscription;

    /**
     * Is notified when a Custom button is clicked in the wizard.
     *
     * @type {Subscription}
     * @memberof WizardNavigationService
     */
    public customButtonSubscription: Subscription;

    /**
     * Is notified when a Cancel button is clicked in the wizard. Notifies the wizard,
     * which handles all cancel functionality, if cancel is not overridden at the page
     * level.
     *
     * @type {Subscription}
     * @memberof WizardNavigationService
     */
    public cancelButtonSubscription: Subscription;

    /**
     * Resets navigation to make the first page current when the page collection service
     * emits an event notifying WizardNavigationService that it has reset all pages
     * to their pristine, incomplete state.
     *
     * @type {Subscription}
     * @memberof WizardNavigationService
     */
    public pagesResetSubscription: Subscription;

    /**
     * Creates an instance of WizardNavigationService. Also sets up subscriptions
     * that listen to the button service to determine when a button has been clicked
     * in the wizard. Is also responsible for taking action when the page collection
     * requests that navigation be reset to its pristine state.
     *
     * @param {PageCollectionService} pageCollection
     * @param {ButtonHubService} buttonService
     *
     * @memberof WizardNavigationService
     */
    constructor(public pageCollection: PageCollectionService, public buttonService: ButtonHubService) {
        this.previousButtonSubscription = this.buttonService.previousBtnClicked.subscribe(() => {
            const currentPage = this.currentPage;
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
            if (!this.wizardStopNavigation) {
                this.currentPage.customButtonClicked.emit(type);
            }
        });

        this.cancelButtonSubscription = this.buttonService.cancelBtnClicked.subscribe(() => {
            if (this.wizardStopNavigation) {
                return;
            }

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


    /**
     *
     * @ignore
     *
     * @memberof WizardNavigationService
     */
    ngOnDestroy(): void {
        this.previousButtonSubscription.unsubscribe();
        this.nextButtonSubscription.unsubscribe();
        this.dangerButtonSubscription.unsubscribe();
        this.finishButtonSubscription.unsubscribe();
        this.customButtonSubscription.unsubscribe();
        this.cancelButtonSubscription.unsubscribe();
        this.pagesResetSubscription.unsubscribe();
    }


    /**
     *
     * @ignore
     * @private
     *
     * @memberof WizardNavigationService
     */
    private _currentChanged = new Subject<WizardPage>();

    /**
     * An Observable that is predominantly used amongst the subcomponents and services
     * of the wizard. It is recommended that users listen to the WizardPage.onLoad
     * (clrWizardPageOnLoad) output instead of this Observable.
     *
     * @private
     *
     * @memberof WizardNavigationService
     */
    public get currentPageChanged(): Observable<WizardPage> {
        // TODO: MAKE SURE EXTERNAL OUTPUTS SAY 'CHANGE' NOT 'CHANGED'
        // A BREAKING CHANGE SO AWAITING MINOR RELEASE
        return this._currentChanged.asObservable();
    }

    /**
     * A Boolean flag used by the WizardPage to avoid a race condition when pages are
     * loading and there is no current page defined.
     *
     * @type {boolean}
     * @memberof WizardNavigationService
     */
    public navServiceLoaded = false;

    /**
     * A boolean flag shared across the Wizard subcomponents that follows the value
     * of the Wizard.forceForward (clrWizardForceForwardNavigation) input. When true,
     * navigating backwards in the stepnav menu will reset any skipped pages' completed
     * state to false.
     *
     * This is useful when a wizard executes validation on a page-by-page basis when
     * the next button is clicked.
     *
     * @type {boolean}
     * @memberof WizardNavigationService
     */
    public forceForwardNavigation = false;

    /**
     *
     * @ignore
     * @readonly
     * @type {TemplateRef<any>}
     * @memberof WizardNavigationService
     */
    public get currentPageTitle(): TemplateRef<any> {
        // when the querylist of pages is empty. this is the first place it fails...
        if (!this.currentPage) {
            return null;
        }
        return this.currentPage.title;
    }

    /**
     * Returns a Boolean that tells you whether or not the current page is the first
     * page in the Wizard.
     *
     * This is helpful for determining whether a page is navigable.
     *
     * @readonly
     * @type {boolean}
     * @memberof WizardNavigationService
     */
    public get currentPageIsFirst(): boolean {
        return this.pageCollection.firstPage === this.currentPage;
    }

    /**
     * Returns a Boolean that tells you whether or not the current page is the
     * next to last page in the Wizard.
     *
     * This is used to determine the animation state of ghost pages.
     *
     * @readonly
     * @type {boolean}
     * @memberof WizardNavigationService
     */
    public get currentPageIsNextToLast(): boolean {
        return this.pageCollection.penultimatePage === this.currentPage;
    }

    /**
     * Returns a Boolean that tells you whether or not the current page is the
     * last page in the Wizard.
     *
     * This is used to determine the animation state of ghost pages as well as
     * which buttons should display in the wizard footer.
     *
     * @readonly
     * @type {boolean}
     * @memberof WizardNavigationService
     */
    public get currentPageIsLast(): boolean {
        return this.pageCollection.lastPage === this.currentPage;
    }

    /**
     *
     * @ignore
     * @private
     * @type {WizardPage}
     * @memberof WizardNavigationService
     */
    private _currentPage: WizardPage;

    /**
     * Returns the WizardPage object of the current page or null.
     *
     * @type {WizardPage}
     * @memberof WizardNavigationService
     */
    get currentPage(): WizardPage {
        if (!this._currentPage) {
            return null;
        }
        return this._currentPage;
    }

    /**
     * Accepts a WizardPage object, since that object to be the current/active
     * page in the wizard, and emits the WizardPage.onLoad (clrWizardPageOnLoad)
     * event for that page.
     *
     * Note that all of this work is bypassed if the WizardPage object is already
     * the current page.
     *
     * @memberof WizardNavigationService
     */
    set currentPage(page: WizardPage) {
        if (this._currentPage !== page && !this.wizardStopNavigation) {
            this._currentPage = page;
            page.onLoad.emit(page.id);
            this._currentChanged.next(page);
        }
    }

    /**
     * (DEPRECATED) A legacy means of setting the current page in the wizard.
     * Deprecated in 0.9.4. Accepts a WizardPage object as a parameter and then
     * tries to set that page to be the current page in the wizard.
     *
     * @param {WizardPage} page
     *
     * @memberof WizardNavigationService
     */
    public setCurrentPage(page: WizardPage): void {
        this.currentPage = page;
    }

    /**
     *
     * @ignore
     * @private
     *
     * @memberof WizardNavigationService
     */
    private _movedToNextPage = new Subject<boolean>();

    /**
     * An observable used internally to alert the wizard that forward navigation
     * has occurred. It is recommended that you use the Wizard.onMoveNext
     * (clrWizardOnNext) output instead of this one.
     *
     * @readonly
     * @type {Observable<boolean>}
     * @memberof WizardNavigationService
     */
    public get movedToNextPage(): Observable<boolean> {
        return this._movedToNextPage.asObservable();
    }

    /**
     *
     * @ignore
     * @private
     *
     * @memberof WizardNavigationService
     */
    private _wizardFinished = new Subject<boolean>();

    /**
     * An observable used internally to alert the wizard that the nav service
     * has approved completion of the wizard.
     *
     * It is recommended that you use the Wizard.wizardFinished (clrWizardOnFinish)
     * output instead of this one.
     *
     * @readonly
     * @type {Observable<boolean>}
     * @memberof WizardNavigationService
     */
    public get wizardFinished(): Observable<boolean> {
        return this._wizardFinished.asObservable();
    }

    /**
     * This is a public function that can be used to programmatically advance
     * the user to the next page.
     *
     * When invoked, this method will move the wizard to the next page after
     * successful validation. Note that this method goes through all checks
     * and event emissions as if Wizard.next(false) had been called.
     *
     * In most cases, it makes more sense to use Wizard.next(false).
     *
     * @returns {void}
     *
     * @memberof WizardNavigationService
     */
    public next(): void {
        if (this.currentPageIsLast) {
            this.checkAndCommitCurrentPage("finish");
            return;
        }

        this.checkAndCommitCurrentPage("next");

        if (!this.wizardHasAltNext && !this.wizardStopNavigation) {
            this._movedToNextPage.next(true);
        }
    }

    /**
     * Bypasses checks and most event emissions to force a page to navigate forward.
     *
     * Comparable to calling Wizard.next() or Wizard.forceNext().
     *
     * @memberof WizardNavigationService
     */
    public forceNext(): void {
        const currentPage: WizardPage = this.currentPage;
        const nextPage: WizardPage = this.pageCollection.getNextPage(currentPage);

        // catch errant null or undefineds that creep in
        if (!nextPage) {
            throw new Error("The wizard has no next page to go to.");
        }

        if (this.wizardStopNavigation) {
            return;
        }

        if (!currentPage.completed) {
            // this is a state that alt next flows can get themselves in...
            this.pageCollection.commitPage(currentPage);
        }
        this.currentPage = nextPage;
    }

    /**
     * Accepts a button/action type as a parameter. Encapsulates all logic for
     * event emissions, state of the current page, and wizard and page level overrides.
     *
     * Avoid calling this function directly unless you really know what you're doing.
     *
     * @param {string} buttonType
     * @returns {void}
     *
     * @memberof WizardNavigationService
     */
    public checkAndCommitCurrentPage(buttonType: string): void {
        const currentPage: WizardPage = this.currentPage;
        let iAmTheLastPage: boolean;

        let isNext: boolean;
        let isDanger: boolean;
        let isDangerNext: boolean;
        let isDangerFinish: boolean;
        let isFinish: boolean;

        if (!currentPage.readyToComplete || this.wizardStopNavigation) {
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
        if (isFinish) {
            // mark page as complete
            if (!this.wizardHasAltNext) {
                this.pageCollection.commitPage(currentPage);
            }
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

    /**
     * This is a public function that can be used to programmatically conclude
     * the wizard.
     *
     * When invoked, this method will  initiate the work involved with finalizing
     * and finishing the wizard workflow. Note that this method goes through all
     * checks and event emissions as if Wizard.finish(false) had been called.
     *
     * In most cases, it makes more sense to use Wizard.finish(false).
     *
     * @memberof WizardNavigationService
     */
    public finish(): void {
        this.checkAndCommitCurrentPage("finish");
    }

    /**
     *
     * @ignore
     * @private
     *
     * @memberof WizardNavigationService
     */
    private _movedToPreviousPage = new Subject<boolean>();

    /**
     * Notifies the wizard when backwards navigation has occurred via the
     * previous button.
     *
     * @readonly
     * @type {Observable<boolean>}
     * @memberof WizardNavigationService
     */
    public get movedToPreviousPage(): Observable<boolean> {
        return this._movedToPreviousPage.asObservable();
    }

    /**
     * Programmatically moves the wizard to the page before the current page.
     *
     * In most instances, it makes more sense to call Wizard.previous()
     * which does the same thing.
     *
     * @returns {void}
     *
     * @memberof WizardNavigationService
     */
    public previous(): void {
        let previousPage: WizardPage;

        if (this.currentPageIsFirst || this.wizardStopNavigation) {
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

        this.currentPage = previousPage;
    }

    /**
     *
     * @ignore
     * @private
     *
     * @memberof WizardNavigationService
     */
    private _cancelWizard = new Subject<any>();

    /**
     * Notifies the wizard that a user is trying to cancel it.
     *
     * @readonly
     * @type {Observable<any>}
     * @memberof WizardNavigationService
     */
    public get notifyWizardCancel(): Observable<any> {
        return this._cancelWizard.asObservable();
    }

    /**
     * Allows a hook into the cancel workflow of the wizard from the nav service. Note that
     * this route goes through all checks and event emissions as if a cancel button had
     * been clicked.
     *
     * In most cases, users looking for a hook into the cancel routine are actually looking
     * for a way to close the wizard from their host component because they have prevented
     * the default cancel action.
     *
     * In this instance, it is recommended that you use Wizard.close() to avoid any event
     * emission loop resulting from an event handler calling back into routine that will
     * again evoke the events it handles.
     *
     * @memberof WizardNavigationService
     */
    public cancel(): void {
        this._cancelWizard.next();
    }

    /**
     * A boolean flag shared across the Wizard subcomponents that follows the value
     * of the Wizard.stopCancel (clrWizardPreventDefaultCancel) input. When true, the cancel
     * routine is subverted and must be reinstated in the host component calling Wizard.close()
     * at some point.
     *
     * @type {boolean}
     * @memberof WizardNavigationService
     */
    public wizardHasAltCancel: boolean = false;

    /**
     * A boolean flag shared across the Wizard subcomponents that follows the value
     * of the Wizard.stopNext (clrWizardPreventDefaultNext) input. When true, the next and finish
     * routines are subverted and must be reinstated in the host component calling Wizard.next(),
     * Wizard.forceNext(), Wizard.finish(), or Wizard.forceFinish().
     *
     * @type {boolean}
     * @memberof WizardNavigationService
     */
    public wizardHasAltNext: boolean = false;

    /**
     * A boolean flag shared across the Wizard subcomponents that follows the value
     * of the Wizard.stopNavigation (clrWizardPreventNavigation) input. When true, all
     * navigational elements in the wizard are disabled.
     *
     * This is intended to freeze the wizard in place. Events are not fired so this is
     * not a way to implement alternate functionality for navigation.
     *
     * @type {boolean}
     * @memberof WizardNavigationService
     */
    public wizardStopNavigation: boolean = false;

    /**
     * A boolean flag shared with the stepnav items that prevents user clicks on
     * stepnav items from navigating the wizard.
     *
     * @type {boolean}
     * @memberof WizardNavigationService
     */
    public wizardDisableStepnav: boolean = false;

    /**
     * Performs all required checks to determine if a user can navigate to a page. Checking at each
     * point if a page is navigable -- completed where the page immediately after the last completed
     * page.
     *
     * Takes two parameters. The first one must be either the WizardPage object or the ID of the
     * WizardPage object that you want to make the current page.
     *
     * The second parameter is optional and is a Boolean flag for "lazy completion". What this means
     * is the Wizard will mark all pages between the current page and the page you want to navigate
     * to as completed. This is useful for informational wizards that do not require user action,
     * allowing an easy means for users to jump ahead.
     *
     * To avoid checks on navigation, use WizardPage.makeCurrent() instead.
     *
     * @param {*} pageToGoToOrId
     * @param {boolean} [lazyComplete=false]
     * @returns
     *
     * @memberof WizardNavigationService
     */
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
        // also hard block on any navigation when stopNavigation is true
        if (pageToGoTo === currentPage || this.wizardStopNavigation) {
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

        this.currentPage = pageToGoTo;
    }

    /**
     * Accepts a range of WizardPage objects as a parameter. Performs the work of checking
     * those objects to determine if navigation can be accomplished.
     *
     * @param {WizardPage[]} pagesToCheck
     * @returns {boolean}
     *
     * @memberof WizardNavigationService
     */
    public canGoTo(pagesToCheck: WizardPage[]): boolean {
        let okayToMove = true;
        const myPages = this.pageCollection;

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

            // we are false if not the current page AND previous page is not completed
            // (but must have a previous page)
            if (!page.current && !previousPagePasses) {
                okayToMove = false;
            }
            // falls through to true as default
        });

        return okayToMove;
    }


    /**
     * Looks through the collection of pages to find the first one that is incomplete
     * and makes that page the current/active page.
     *
     * @memberof WizardNavigationService
     */
    public setLastEnabledPageCurrent(): void {
        const allPages: WizardPage[] = this.pageCollection.pagesAsArray;
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

        this.currentPage = allPages[lastCompletedPageIndex];
    }

    /**
     * Finds the first page in the collection of pages and makes that page the
     * current/active page.
     *
     * @memberof WizardNavigationService
     */
    public setFirstPageCurrent(): void {
        this.currentPage = this.pageCollection.pagesAsArray[0];
    }

    /**
     *
     * @ignore
     * @private
     * @type {string}
     * @memberof WizardNavigationService
     */
    private _wizardGhostPageState: string = GHOST_PAGE_ANIMATION.STATES.NO_PAGES;


    /**
     *
     * @ignore
     * @type {string}
     * @memberof WizardNavigationService
     */
    public get wizardGhostPageState(): string {
        return this._wizardGhostPageState;
    }

    /**
     *
     * @ignore
     *
     * @memberof WizardNavigationService
     */
    public set wizardGhostPageState(value: string) {
        if (this.hideWizardGhostPages) {
            this._wizardGhostPageState = GHOST_PAGE_ANIMATION.STATES.NO_PAGES;
        } else {
            this._wizardGhostPageState = value;
        }
    }

    /**
     *
     * @ignore
     * @private
     * @type {boolean}
     * @memberof WizardNavigationService
     */
    private _hideWizardGhostPages: boolean = true;

    /**
     *
     * @ignore
     * @type {boolean}
     * @memberof WizardNavigationService
     */
    public get hideWizardGhostPages(): boolean {
        return this._hideWizardGhostPages;
    }

    /**
     *
     * @ignore
     *
     * @memberof WizardNavigationService
     */
    public set hideWizardGhostPages(value: boolean) {
        this._hideWizardGhostPages = value;
    }

    /**
     * Updates the stepnav on the left side of the wizard when pages are dynamically
     * added or removed from the collection of pages.
     *
     * @memberof WizardNavigationService
     */
    public updateNavigation(): void {
        let toSetCurrent: WizardPage;
        let currentPageRemoved: boolean;

        this.pageCollection.updateCompletedStates();

        currentPageRemoved = this.pageCollection.pagesAsArray.indexOf(this.currentPage) < 0;
        if (currentPageRemoved) {
            toSetCurrent = this.pageCollection.findFirstIncompletePage();
            this.currentPage = toSetCurrent;
        }
    }
}
