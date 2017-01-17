/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
    Component,
    ContentChildren,
    Input,
    Output,
    EventEmitter,
    QueryList,
    OnInit,
    OnDestroy,
    AfterViewInit,
    AfterContentInit
} from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { WizardPage } from "./wizard-page";
import { WizardHeaderAction } from "./wizard-header-action";

import { GHOST_PAGE_ANIMATION } from "../modal/utils/ghost-page-animations";

// providers
import { WizardNavigationService } from "./providers/wizard-navigation";
import { PageCollectionService } from "./providers/page-collection";
import { ButtonHubService } from "./providers/button-hub";
import { HeaderActionService } from "./providers/header-actions";

@Component({
    selector: "clr-wizard",
    providers: [ WizardNavigationService, PageCollectionService, ButtonHubService, HeaderActionService ],
    templateUrl: "./wizard.html",
    host: {
        "[class.clr-wizard]": "true",
        "[class.wizard-md]": "size == 'md'",
        "[class.wizard-lg]": "size == 'lg'",
        "[class.wizard-xl]": "size == 'xl'",
        "[class.lastPage]": "navService.currentPageIsLast",
        "[class.clr-wizard--ghosted]": "showGhostPages"
    }
})
export class Wizard implements OnInit, OnDestroy, AfterViewInit, AfterContentInit {

    constructor(public navService: WizardNavigationService,
                public pageCollection: PageCollectionService,
                public buttonService: ButtonHubService,
                public headerActionService: HeaderActionService) {

        this.goNextSubscription = this.navService.movedToNextPage.subscribe(() => {
            this.onMoveNext.emit();
        });

        this.goPreviousSubscription = this.navService.movedToPreviousPage.subscribe(() => {
            this.onMovePrevious.emit();
        });

        this.cancelSubscription = this.navService.notifyWizardCancel.subscribe(() => {
            let currentPage = this.navService.currentPage;

            currentPage.pageOnCancel.emit();
            this.onCancel.emit();

            if (!this.stopCancel && !currentPage.preventDefault && !currentPage.stopCancel) {
                this.close();
                // SPECME
            }
        });

        this.wizardFinishedSubscription = this.navService.wizardFinished.subscribe(() => {
            this.deactivateGhostPages();
            this.wizardFinished.emit();
            this.close();
        });
    }

    // LEGACY: Naming convention matches old wizard
    @Input("clrWizardSize") size: string = "xl"; // xl is the default size

    // can activate showing or hiding the ghost page effect
    // defaults to false
    @Input("clrWizardShowGhostPages") showGhostPages: boolean = false;

    // Variable that toggles open/close of the wizard component.
    // LEGACY: Naming convention matches old wizard
    @Input("clrWizardClosable") closable: boolean = true;

    // Variable that toggles open/close of the wizard component.
    // LEGACY: Naming convention matches old wizard
    @Input("clrWizardOpen") _open: boolean = false;

// TODOCUMENT: HERE IS HOW THE TWO-WAY BINDING HAPPENS...
// <clr-wizard [(clrWizardOpen)]="something"...?
// <clr-wizard [clrWizardOpen]="something" (clrWizardOpenChange)="doSomehtign($event)" ...?

// TOBREAK: THIS WAS CHANGED FROM "OPENCHANGED" TO "OPENCHANGE"
    // EventEmitter which is emitted on open/close of the wizard.
    @Output("clrWizardOpenChange") _openChanged: EventEmitter<boolean> =
        new EventEmitter<boolean>(false);

    // User can bind his event handler for onCancel of the main content
    // LEGACY: Naming convention matches old wizard
    @Output("clrWizardOnCancel") onCancel: EventEmitter<any> =
        new EventEmitter<any>(false);

// done
    @Output("clrWizardOnFinish") wizardFinished: EventEmitter<any> =
        new EventEmitter<any>(false);

    @Output("clrWizardOnReset") onReset: EventEmitter<any> =
        new EventEmitter<any>(false);

    @ContentChildren(WizardPage) public pages: QueryList<WizardPage>;
    @ContentChildren(WizardHeaderAction) public headerActions: QueryList<WizardHeaderAction>;

// done
    @Output("clrWizardCurrentPageChanged") currentPageChanged: EventEmitter<any> =
        new EventEmitter<any>(false);

    @Output("clrWizardOnNext") onMoveNext: EventEmitter<any> =
        new EventEmitter<any>(false);

    @Output("clrWizardOnPrevious") onMovePrevious: EventEmitter<any> =
        new EventEmitter<any>(false);

    @Input("clrWizardPreventDefaultCancel") stopCancel: boolean = false;

    @Input("clrWizardPreventModalAnimation") _stopModalAnimations: boolean = false;
    public get stopModalAnimations(): string {
        if (this._stopModalAnimations) {
            return "true";
        }
        return "false";
    }

    public ngOnInit(): void {
        let navService = this.navService;

        this.currentPageSubscription = navService.currentPageChanged.subscribe((page: WizardPage) => {
            this.setGhostPages();
            this.currentPageChanged.emit();
        });
    }

    private goNextSubscription: Subscription;
    private goPreviousSubscription: Subscription;
    private cancelSubscription: Subscription;
    private currentPageSubscription: Subscription;
    private wizardFinishedSubscription: Subscription;

    ngOnDestroy() {
        this.goNextSubscription.unsubscribe();
        this.goPreviousSubscription.unsubscribe();
        this.cancelSubscription.unsubscribe();
        this.currentPageSubscription.unsubscribe();
        this.wizardFinishedSubscription.unsubscribe();
    }

    public ngAfterViewInit() {
    }

    public ngAfterContentInit() {
        this.pageCollection.pages = this.pages;
        this.navService.wizardHasAltCancel = this.stopCancel;
        this.headerActionService.wizardHeaderActions = this.headerActions;
        if (this.showGhostPages) {
            this.navService.hideWizardGhostPages = false;
            this.deactivateGhostPages();
        }
    }

    // The current page
    public get currentPage(): WizardPage {
        return this.navService.currentPage;
    }

    // LEGACY: convenience function to match legacy API
    public get isLast(): boolean {
        return this.navService.currentPageIsLast;
    }

    // LEGACY: convenience function to match legacy API
    public get isFirst(): boolean {
        return this.navService.currentPageIsFirst;
    }

    // This is a public function that can be used to programmatically open the
    // wizard.
    // LEGACY: Naming convention matches old wizard
    public open(): void {
        let navService = this.navService;

        this._open = true;
        if (!this.currentPage) {
            navService.setFirstPageCurrent();
        }

        this.setGhostPages();
        this._openChanged.emit(true);
    }

    // This is a public function that can be used to programmatically close the
    // wizard.
    // LEGACY: Naming convention matches old wizard
    public close(): void {
        this._open = false;
        this.deactivateGhostPages();
        this._openChanged.emit(false);
    }

    // Convenience function that can be used to programmatically toggle the
    // wizard.
    public toggle(value: boolean): void {
        if (value) {
            this.open();
        } else {
            this.close();
        }
    }

    // prev -- DEPRECATED
    // calls previous(); kept here to avoid breaking change where unnecessary
    // LEGACY: Naming convention matches old wizard
    public prev(): void {
        this.previous();
    }

    // the following are convenience functions that are carried over from an older
    // implementation of the wizard. They have been preserved so as not to create
    // a breaking change.
    public previous(): void {
        this.navService.previous();
    }

    // LEGACY: Naming convention matches old wizard
    public next(): void {
        this.navService.next();
    }

    public finish(): void {
        this.navService.finish();
    }

    public cancel(): void {
        this.navService.cancel();
    }

    public goTo(pageId: string): void {
        if (!pageId) {
            return;
        }

        this.navService.goTo(pageId);
    }

    public reset() {
        this.pageCollection.reset();
        this.navService.setFirstPageCurrent();
        this.onReset.next();
    }

    public get ghostPageState(): string {
        return this.navService.wizardGhostPageState;
    }

    public deactivateGhostPages(): void {
        this.setGhostPages("deactivate");
    }

    public setGhostPages(deactivateOrNot: string = ""): void {
        let navService = this.navService;
        let ghostpageStates = GHOST_PAGE_ANIMATION.STATES;

        if (this.showGhostPages) {
            if (deactivateOrNot === "deactivate") {
                navService.wizardGhostPageState = ghostpageStates.NO_PAGES;
            } else if (navService.currentPageIsLast) {
                navService.wizardGhostPageState = ghostpageStates.LAST_PAGE;
            } else if (navService.currentPageIsNextToLast) {
                navService.wizardGhostPageState = ghostpageStates.NEXT_TO_LAST_PAGE;
            } else {
                navService.wizardGhostPageState = ghostpageStates.ALL_PAGES;
            }
        }
    }

// TOREMOVE: NOTE REMOVAL. SHOULDN'T BE A BREAKING CHANGE
    // this is a straggler from the old tabs dependency which accepted a stepnav
    // item and made its corresponding page the current page.
    // selectTab --
    //
    // Base class function overridden to call the onLoad event emitter
    // selectTab(wizardNav: WizardStep): void {
    // selectTab(wizardNav: any): void {
        // super.selectTab(wizardNav);

        // let page: WizardPage = this.currentTabContent as WizardPage;
        // let page: any = {};
        // this.currentPage = page;
        // page.onLoad.emit(false);

        // // Toggles next and finish button
        // let totalSteps: number = this.tabLinks.length - 1;
        // // this.isLast = this.currentTabIndex === totalSteps;
        // // this.isFirst = this.currentTabIndex === 0;
        // this.isLast = 1 === totalSteps;
        // this.isFirst = 0 === 0;
    // }

// TOREMOVE: REPLACED BY NGIF -- NOTE BREAKING CHANGE
    // skipTab --
    //
    // Public function to skip a Tab given its uniqueId
    // skipTab(tabId: string): void {
    //     this._setTabIsSkipped(tabId, true);
    // }

// TOREMOVE: REPLACED BY NGIF -- NOTE BREAKING CHANGE
    // unSkipTab --
    //
    // Public function to unSkip a tab given its uniqueId
    // unSkipTab(tabId: string): void {
    //     this._setTabIsSkipped(tabId, false);
    // }

// TOBREAK: old this.wizardStepChildren is no longer a thing.
// Shouldn't need it because we don't need to use it to do skipping, highlighting, and stuff.
// Set page state via the navService or pageCollection service and stepItems will follow suit.

// TOBREAK: old this.wizardPageChildren is now just this.pages

// TOBREAK: no longer has this.id
}
