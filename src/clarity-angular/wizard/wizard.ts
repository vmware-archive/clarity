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
    AfterContentInit,
    DoCheck,
    IterableDiffers,
    ElementRef
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
export class Wizard implements OnInit, OnDestroy, AfterContentInit, DoCheck {

    constructor(public navService: WizardNavigationService,
                public pageCollection: PageCollectionService,
                public buttonService: ButtonHubService,
                public headerActionService: HeaderActionService,
                private elementRef: ElementRef,
                private differs: IterableDiffers) {

        this.goNextSubscription = this.navService.movedToNextPage.subscribe(() => {
            this.onMoveNext.emit();
        });

        this.goPreviousSubscription = this.navService.movedToPreviousPage.subscribe(() => {
            this.onMovePrevious.emit();
        });

        this.cancelSubscription = this.navService.notifyWizardCancel.subscribe(() => {
            this.checkAndCancel();
        });

        this.wizardFinishedSubscription = this.navService.wizardFinished.subscribe(() => {
            this.deactivateGhostPages();
            this.wizardFinished.emit();
            this.close();
        });

        this.differ = differs.find([]).create(null);
    }

    differ: any;

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

    public ngAfterContentInit() {
        this.pageCollection.pages = this.pages;
        this.navService.wizardHasAltCancel = this.stopCancel;
        this.headerActionService.wizardHeaderActions = this.headerActions;
        if (this.showGhostPages) {
            this.navService.hideWizardGhostPages = false;
            this.deactivateGhostPages();
        }
    }

    public ngDoCheck() {
        let changes = this.differ.diff(this.pages);
        if (changes) {
            changes.forEachAddedItem((r: any) => {
                this.navService.updateNavigation();
            });
            changes.forEachRemovedItem((r: any) => {
                this.navService.updateNavigation();
            });
        }
    }

    public get isStatic(): boolean {
        return this.elementRef.nativeElement.classList.contains("clr-wizard--inline");
        // SPECME
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

    // need to bust out some logic here because the modal openChange event is
    // messing up alt-cancel routines
    public modalCancel(): void {
        this.checkAndCancel();
        // SPECME
    }

    public checkAndCancel(): void {
        let currentPage = this.currentPage;
        let currentPageHasOverrides = currentPage.stopCancel || currentPage.preventDefault;

        currentPage.pageOnCancel.emit();
        if (!currentPageHasOverrides) {
            this.onCancel.emit();
        }
        // SPECME

        if (!this.stopCancel && !currentPageHasOverrides) {
            this.close();
        }
        // SPECME
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
}
