/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
    Component,
    Input,
    Output,
    EventEmitter,
    ContentChild,
    TemplateRef,
    OnInit
} from "@angular/core";
import { Subscription } from "rxjs/Subscription";

import { WizardNavigationService } from "./providers/wizard-navigation";
import { PageCollectionService } from "./providers/page-collection";
import { ButtonHubService } from "./providers/button-hub";

import { WizardPageTitleDirective } from "./directives/page-title";
import { WizardPageNavTitleDirective } from "./directives/page-navtitle";
import { WizardPageButtonsDirective } from "./directives/page-buttons";
import { WizardPageHeaderActionsDirective } from "./directives/page-header-actions";

let wizardPageIndex = 0;

@Component({
    selector: "clr-wizard-page",
    template: "<ng-content></ng-content>",
    host: {
        "[id]" : "id",
        "role" : "tabpanel",
        "[attr.aria-hidden]" : "!current",
        "[attr.aria-labelledby]": "stepItemId",
        "[class.active]" : "current",
        "[class.clr-wizard-page]": "true"
    }
})
export class WizardPage implements OnInit {

// TODO: NONE OF THESE WORK BECAUSE THEY AREN'T WIRED UP!!!
    public previousButtonSubscription: Subscription;
    public nextButtonSubscription: Subscription;
    public dangerButtonSubscription: Subscription;
    public finishButtonSubscription: Subscription;
    public customButtonSubscription: Subscription;

    constructor(private navService: WizardNavigationService,
                public pageCollection: PageCollectionService,
                public buttonService: ButtonHubService) {
    }

    @ContentChild(WizardPageTitleDirective) public pageTitle: WizardPageTitleDirective;
    @ContentChild(WizardPageNavTitleDirective) public pageNavTitle: WizardPageNavTitleDirective;
    @ContentChild(WizardPageButtonsDirective) public _buttons: WizardPageButtonsDirective;
    @ContentChild(WizardPageHeaderActionsDirective) public _headerActions: WizardPageHeaderActionsDirective;

    // Next button disabled
    // LEGACY: Naming convention of input matches old wizard; this.nextDisabled has been
    // changed to this.nextStepDisabled
    private _nextStepDisabled = false;
    public get nextStepDisabled(): boolean {
        return this._nextStepDisabled;
    }
    @Input("clrWizardPageNextDisabled")
    public set nextStepDisabled(val: boolean) {
        let valBool = !!val;
        if (valBool !== this._nextStepDisabled) {
            this._nextStepDisabled = valBool;
//TODO: SHOULD WE UPDATE PREVIOUS/NEXT STEPS WHEN THIS IS CHANGED? OR RELY ON USERS TO DO IT?
            this.nextStepDisabledChange.emit(valBool);
        }
    }

    // Emitter for Next button and readyToComplete state changes.
    // Need to manually call it. Not automagically called.
// TOBREAK: Naming convention does not match old wizard; supports default two-way binding instead
    @Output("clrWizardPageNextDisabledChange") nextStepDisabledChange: EventEmitter <boolean> =
        new EventEmitter();

    // Previous button disabled
    private _previousStepDisabled = false;
    public get previousStepDisabled(): boolean {
        return this._previousStepDisabled;
    }
    @Input("clrWizardPagePreviousDisabled")
    public set previousStepDisabled(val: boolean) {
        let valBool = !!val;
        if (valBool !== this._previousStepDisabled) {
            this._previousStepDisabled = valBool;
            this.previousStepDisabledChange.emit(valBool);
        }
    }

    @Output("clrWizardPagePreviousDisabledChange") public previousStepDisabledChange: EventEmitter <boolean> =
        new EventEmitter();

    // overrides all actions from the page level, so you can use an alternate function for
    // validation or data-munging with an onCommit or onCancel
    @Input("clrWizardPagePreventDefault") public preventDefault: boolean = false;

    // overrides cancel from the page level, so you can use an alternate function for
    // validation or data-munging with clrWizardPageOnCancel
    private _stopCancel = false;
    public get stopCancel(): boolean {
        return this._stopCancel;
    }
    @Input("clrWizardPagePreventDefaultCancel")
    public set stopCancel(val: boolean) {
        let valBool = !!val;
        if (valBool !== this._stopCancel) {
            this._stopCancel = valBool;
            this.stopCancelChange.emit(valBool);
        }
    }

    @Output("clrWizardPagePreventDefaultCancelChange") stopCancelChange: EventEmitter <boolean> =
        new EventEmitter();

// TODO: SHOULD USE A CUSTOM BUTTON INSTEAD. NOTE BREAKING CHANGE...
    // User can bind an event handler for onCommit of the main content
    // LEGACY: Naming convention matches old wizard
    @Output("clrWizardPageOnCommit") onCommit: EventEmitter <string> =
        new EventEmitter<string>(false);

    // User can bind an event handler for onLoad of the main content
    // LEGACY: Naming convention matches old wizard
    @Output("clrWizardPageOnLoad") onLoad: EventEmitter <string> = new EventEmitter();

    // This output can subvert the default cancel routine at the page level, if
    // used with clrWizardPagePreventDefaultCancel.
    // You will need to execute actual cancel from your event handler at some point
    // because this is a full replacement of the cancel functionality, not a detour.
    @Output("clrWizardPageOnCancel") pageOnCancel: EventEmitter <WizardPage> =
        new EventEmitter();

    @Output("clrWizardPageFinish") finishButtonClicked: EventEmitter <WizardPage> =
        new EventEmitter();

    @Output("clrWizardPagePrevious") previousButtonClicked: EventEmitter <WizardPage> =
        new EventEmitter();

    @Output("clrWizardPageNext") nextButtonClicked: EventEmitter <WizardPage> =
        new EventEmitter();

    @Output("clrWizardPageDanger") dangerButtonClicked: EventEmitter <WizardPage> =
        new EventEmitter();

    @Output("clrWizardPagePrimary") primaryButtonClicked: EventEmitter <string> =
        new EventEmitter();

    @Output("clrWizardPageCustomButton") customButtonClicked: EventEmitter <string> =
        new EventEmitter();

    // If our host has an ID attribute, we use this instead of our index.
    @Input("id")
    _id: string = (wizardPageIndex++).toString();

    public get id() {
        if (!this._id) {
            // guard here in the event that input becomes undefined or null by accident
            this._id = (wizardPageIndex++).toString();
        }
        return `clr-wizard-page-${this._id}`;
    }

    public get readyToComplete(): boolean {
        return !this.nextStepDisabled;
    }

    private _complete: boolean = false;
    public get completed(): boolean {
        return this._complete && this.readyToComplete;

        // FOR V2: UNWIND COMPLETED, READYTOCOMPLETE, AND ERRORS
        // SUCH THAT ERRORS IS ITS OWN INPUT. IF A STEP IS
        // INCOMPLETE AND ERRORED, ERRORED WILL NOT SHOW.
        // FIRST QUESTION: AM I GREY OR COLORED?
        // SECOND QUESTION: AM I GREEN OR RED?
    }
    public set completed(value: boolean) {
        this._complete = value;
    }

    // asks navService if it is the currentPage
    public get current(): boolean {
        return this.navService.currentPage === this;
    }

    public get disabled(): boolean {
        return !this.enabled;
    }

    public get enabled(): boolean {
        return this.current || this.completed || this.previousCompleted;
    }

    public get previousCompleted(): boolean {
        let previousPage = this.pageCollection.getPreviousPage(this);

        if (!previousPage) {
            return true;
        }

        return previousPage.completed;
    }

// TOBREAK: this is now a templateRef and no longer a string
    public get title(): TemplateRef < any > {
        return this.pageTitle.pageTitleTemplateRef;
    }

    public get navTitle(): TemplateRef < any > {
        if (this.pageNavTitle) {
            return this.pageNavTitle.pageNavTitleTemplateRef;
        }
        return this.pageTitle.pageTitleTemplateRef;
    }

    public get headerActions(): TemplateRef < any > {
        if (!this._headerActions) {
            return;
        }
        return this._headerActions.pageHeaderActionsTemplateRef;
    }

    public get hasHeaderActions(): boolean {
        return !!this._headerActions;
    }

    public get buttons(): TemplateRef < any > {
        if (!this._buttons) {
            return;
        }
        return this._buttons.pageButtonsTemplateRef;
    }

    public get hasButtons(): boolean {
        return !!this._buttons;
    }

    public makeCurrent(): void {
        this.navService.setCurrentPage(this);
        this.onLoad.emit(this.id);
    }

    public ngOnInit(): void {
        let navService = this.navService;
        if (!navService.currentPage && !navService.navServiceLoaded) {
            this.makeCurrent();
            this.navService.navServiceLoaded = true;
        }
    }

    public get stepItemId(): string {
        return this.pageCollection.getStepItemIdForPage(this);
    }
}
