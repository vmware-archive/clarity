/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
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
    SimpleChange, HostListener
} from "@angular/core";

import {Tabs} from "../tabs/tabs";
import {WizardStep} from "./wizard-step";
import {WizardPage} from "./wizard-page";
import {ScrollingService} from "../main/scrolling-service";

let nbWizardComponents: number = 0;

@Component({
    selector: "clr-wizard",
    viewProviders: [ScrollingService],
    templateUrl: "./wizard.html",
    host: {
        "[class.clr-wizard]": "true",
        "[class.main-container]": "true",
        "[class.wizard-md]": "size == 'md'",
        "[class.wizard-lg]": "size == 'lg'",
        "[class.wizard-lx]": "size == 'lx'"
    }
})
export class Wizard extends Tabs {
    id: string;

    @ContentChildren(WizardStep) wizardStepChildren: QueryList<WizardStep>;
    @ContentChildren(WizardPage) wizardPageChildren: QueryList<WizardPage>;

    @Input("clrWizardSize") size: string = "xl"; // xl is the default size

    // Variable that toggles open/close of the wizard component.
    @Input("clrWizardOpen") private _open: boolean = false;

    // Variable that toggles open/close of the wizard component.
    @Input("clrWizardClosable") closable: boolean = true;

    // EventEmitter which is emitted on open/close of the wizard.
    @Output("clrWizardOpenChanged") private _openChanged: EventEmitter<boolean> =
        new EventEmitter<boolean>(false);

    // User can bind his event handler for onCancel of the main content
    @Output("clrWizardOnCancel") onCancel: EventEmitter<any> =
        new EventEmitter<any>(false);

    // Flag to toggle between Next and Finish button
    isLast: boolean = false;

    // Flag to hide/show back button
    isFirst: boolean = true;

    // The current page
    currentPage: WizardPage = null;

    constructor(private _scrollingService: ScrollingService) {
        super();
        this.id = "clr-wizard-" + (nbWizardComponents++);
    }

    //Detect when _open is set to true and set no-scrolling to true
    ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
        if (changes && changes.hasOwnProperty("_open")) {
            if (changes["_open"].currentValue) {
                this._scrollingService.stopScrolling();
            } else {
                this._scrollingService.resumeScrolling();
            }
        }
    }

    ngAfterContentInit(): void {
        // set the tab content's title to match the tab link's title
        this.wizardPageChildren.forEach((wizardPage: WizardPage, index: number): void => {
            let children: WizardStep[] = this.wizardStepChildren.toArray();
            if (children[index] && !wizardPage.hasProjectedTitleContent) {
                wizardPage.title = children[index].title;
            }
        });

        // override superclass' children to setup the proper linked relationship between
        // tabs and contents
        super.overrideTabLinkChildren(this.wizardStepChildren);
        super.overrideTabContentChildren(this.wizardPageChildren);

        // set first step of the wizard as active/current one
        if (this.tabLinks.length > 0) {
            this.selectTab(this.tabLinks[0] as WizardStep);
        }
    }

    // returns only tabLinks that are not skipped
    get tabLinks(): WizardStep[] {
        return this.wizardStepChildren.filter((wizardStep: WizardStep) => {
            return !wizardStep.isSkipped;
        });
    }

    // returns only tabContents that are not skipped
    get tabContents(): WizardPage[] {
        return this.wizardPageChildren.filter((wizardPage: WizardPage) => {
            return !wizardPage.isSkipped;
        });
    }

    // open --
    //
    // This is a public function that can be used to programmatically open the
    // wizard.
    open(): void {
        this._open = true;
        this._openChanged.emit(true);
    }

    // close --
    //
    // This is a public function that can be used to programmatically close the
    // wizard.
    close(): void {
        this._open = false;
        this.onCancel.emit(null);
        this._openChanged.emit(false);
    }

    // _close --
    //
    // This is a private function that is called on the click of the close / cancel
    // button and emits the onCancel event of the active tab.
    @HostListener("body:keyup.escape")
    _close(): void {
        this.close();
    }

    // _next --
    //
    // This is a private function that is called on the click of the next
    // button and emits the onCommit event of the active tab.
    _next(): void {
        let totalSteps: number = this.tabLinks.length - 1;
        let i: number = this.currentTabIndex;
        let page: WizardPage = this.tabContents[i];
        if (!page.nextDisabled) {
            page.onCommit.emit(null);

            if (!page.preventDefault) {
                // If no handler for finish button, then close wizard on click
                // of finish by default
                if (totalSteps === i) {
                    this.close();
                } else {
                    this.next();
                }
            }
        }
    }

    // next --
    //
    // When called, after successful validation, the wizard will move to the
    // next page.
    // This is a public function that can be used to programmatically advance
    // the user to the next page.
    next(): void {
        let i: number = this.currentTabIndex;
        let totalSteps: number = this.tabLinks.length - 1;
        let page: WizardPage = this.tabContents[i];

        // Call the onCommit or the Validation function of that step, and if it
        // returns true, continue to the next step.
        if (i < totalSteps && !page.nextDisabled) {
            let wizardStep: WizardStep = this.tabLinks[i];
            let nextStep: WizardStep = this.tabLinks[i + 1];
            wizardStep.isCompleted = true;
            this.selectTab(nextStep);
        }
    }

    // prev --
    //
    // When called, the wizard will move to the prev page.
    // This is a public function that can be used to programmatically go back
    // to the previous step.
    prev(): void {
        let i: number = this.currentTabIndex;

        if (i > 0) {
            let wizardStep: WizardStep = this.tabLinks[i];
            let prevStep: WizardStep = this.tabLinks[i - 1];
            wizardStep.isCompleted = false;
            prevStep.isCompleted = false;
            this.selectTab(prevStep);
        }
    }

    // selectTab --
    //
    // Base class function overridden to call the onLoad event emitter
    selectTab(wizardNav: WizardStep): void {
        super.selectTab(wizardNav);

        let page: WizardPage = this.currentTabContent as WizardPage;
        this.currentPage = page;
        page.onLoad.emit(false);

        // Toggles next and finish button
        let totalSteps: number = this.tabLinks.length - 1;
        this.isLast = this.currentTabIndex === totalSteps;
        this.isFirst = this.currentTabIndex === 0;
    }

    // skipTab --
    //
    // Public function to skip a Tab given its uniqueId
    skipTab(tabId: String): void {
        this._setTabIsSkipped(tabId, true);
    }

    // unSkipTab --
    //
    // Public function to unSkip a tab given its uniqueId
    unSkipTab(tabId: String): void {
        this._setTabIsSkipped(tabId, false);
    }

    _setTabIsSkipped(tabId: String, isSkipped: boolean): void {
        this.wizardStepChildren.forEach((wizardStep: WizardStep, index: number) => {
            if (wizardStep.id === tabId) {
                wizardStep.isSkipped = isSkipped;
                // set the isSkipped property of the matching content if it exists
                if (index < this.wizardPageChildren.length) {
                    let children: WizardPage[] = this.wizardPageChildren.toArray();
                    children[index].isSkipped = isSkipped;
                }
            }
        });
    }
}
