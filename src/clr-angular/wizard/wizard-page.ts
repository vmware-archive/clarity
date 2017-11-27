/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef} from "@angular/core";

import {WizardPageButtonsDirective} from "./directives/page-buttons";
import {WizardPageHeaderActionsDirective} from "./directives/page-header-actions";
import {WizardPageNavTitleDirective} from "./directives/page-navtitle";
import {WizardPageTitleDirective} from "./directives/page-title";
import {ButtonHubService} from "./providers/button-hub";
import {PageCollectionService} from "./providers/page-collection";
import {WizardNavigationService} from "./providers/wizard-navigation";

let wizardPageIndex = 0;

/**
 * The WizardPage component is responsible for displaying the content of each step
 * in the wizard workflow.
 *
 * WizardPage component has hooks into the navigation service (WizardPage.navService),
 * page collection (WizardPage.pageCollection), and button service
 * (WizardPage.buttonService). These three providers are shared across the components
 * within each instance of a Wizard.
 *
 * @export
 * @class WizardPage
 * @implements {OnInit}
 */
@Component({
    selector: "clr-wizard-page",
    template: "<ng-content></ng-content>",
    host: {
        "[id]": "id",
        "role": "tabpanel",
        "[attr.aria-hidden]": "!current",
        "[attr.aria-labelledby]": "stepItemId",
        "[class.active]": "current",
        "[class.clr-wizard-page]": "true"
    }
})
export class WizardPage implements OnInit {
    /**
     * Creates an instance of WizardPage.
     *
     * @param {WizardNavigationService} navService
     * @param {PageCollectionService} pageCollection
     * @param {ButtonHubService} buttonService
     *
     * @memberof WizardPage
     */
    constructor(private navService: WizardNavigationService, public pageCollection: PageCollectionService,
                public buttonService: ButtonHubService) {}

    /**
     * Contains a reference to the page title which is used for a number
     * of different tasks for display in the wizard.
     *
     * @type {WizardPageTitleDirective}
     * @memberof WizardPage
     */
    @ContentChild(WizardPageTitleDirective) public pageTitle: WizardPageTitleDirective;

    /**
     * Contains a reference to the desired title for the page's step in the
     * navigation on the left side of the wizard. Can be projected to change the
     * navigation link's text.
     *
     * If not defined, then WizardPage.pageTitle will be displayed in the stepnav.
     *
     * @
     * @type {WizardPageNavTitleDirective}
     * @memberof WizardPage
     */
    @ContentChild(WizardPageNavTitleDirective) public pageNavTitle: WizardPageNavTitleDirective;

    /**
     * Contains a reference to the buttons defined within the page. If not defined,
     * the wizard defaults to the set of buttons defined as a direct child of the
     * wizard.
     *
     * @type {WizardPageButtonsDirective}
     * @memberof WizardPage
     */
    @ContentChild(WizardPageButtonsDirective) public _buttons: WizardPageButtonsDirective;

    /**
     * Contains a reference to the header actions defined within the page. If not defined,
     * the wizard defaults to the set of header actions defined as a direct child of the
     * wizard.
     *
     * @type {WizardPageHeaderActionsDirective}
     * @memberof WizardPage
     */
    @ContentChild(WizardPageHeaderActionsDirective) public _headerActions: WizardPageHeaderActionsDirective;

    /**
     * @private
     * @ignore
     * @memberof WizardPage
     */
    private _nextStepDisabled = false;

    /**
     * A getter that tells whether or not the wizard should be allowed
     * to move to the next page.
     *
     * Useful for in-page validation because it prevents forward navigation
     * and visibly disables the next button.
     *
     * Does not require that you re-implement navigation routines like you
     * would if you were using WizardPage.preventDefault or
     * Wizard.preventDefault.
     *
     * @readonly
     * @type {boolean}
     * @memberof WizardPage
     */
    public get nextStepDisabled(): boolean {
        return this._nextStepDisabled;
    }

    /**
     * Sets whether the page should allow forward navigation.
     *
     * @memberof WizardPage
     */
    @Input("clrWizardPageNextDisabled")
    public set nextStepDisabled(val: boolean) {
        const valBool = !!val;
        if (valBool !== this._nextStepDisabled) {
            this._nextStepDisabled = valBool;
            this.nextStepDisabledChange.emit(valBool);
        }
    }

    /**
     * Emits when the value of WizardPage.nextStepDisabled changes.
     * Should emit the new value of nextStepDisabled.
     *
     * @type {EventEmitter <boolean>}
     * @memberof WizardPage
     */
    @Output("clrWizardPageNextDisabledChange") nextStepDisabledChange: EventEmitter<boolean> = new EventEmitter();

    /**
     * @private
     * @ignore
     * @memberof WizardPage
     */
    private _previousStepDisabled = false;

    /**
     * A getter that tells whether or not the wizard should be allowed
     * to move to the previous page.
     *
     * Useful for in-page validation because it prevents backward navigation
     * and visibly disables the previous button.
     *
     * Does not require that you re-implement navigation routines like you
     * would if you were using WizardPage.preventDefault or
     * Wizard.preventDefault.
     *
     * @readonly
     * @type {boolean}
     * @memberof WizardPage
     */
    public get previousStepDisabled(): boolean {
        return this._previousStepDisabled;
    }

    /**
     * Sets whether the page should allow backward navigation.
     *
     * @memberof WizardPage
     */
    @Input("clrWizardPagePreviousDisabled")
    public set previousStepDisabled(val: boolean) {
        const valBool = !!val;
        if (valBool !== this._previousStepDisabled) {
            this._previousStepDisabled = valBool;
            this.previousStepDisabledChange.emit(valBool);
        }
    }

    /**
     * Emits when the value of WizardPage.previousStepDisabled changes.
     * Should emit the new value of previousStepDisabled.
     *
     * @type {EventEmitter <boolean>}
     * @memberof WizardPage
     */
    @Output("clrWizardPagePreviousDisabledChange")
    public previousStepDisabledChange: EventEmitter<boolean> = new EventEmitter();

    /**
     * Overrides all actions from the page level, so you can use an alternate function for
     * validation or data-munging with a WizardPage.onCommit (clrWizardPageOnCommit output),
     * WizardPage.onCancel (clrWizardPageOnCancel output), or one
     * of the granular page-level button click event emitters.
     *
     * @type {boolean}
     * @memberof WizardPage
     */
    @Input("clrWizardPagePreventDefault") public preventDefault: boolean = false;

    /**
     *
     * @ignore
     * @private
     *
     * @memberof WizardPage
     */
    private _stopCancel = false;

    /**
     * A getter that retrieves whether the page is preventing the cancel action.
     *
     * @readonly
     * @type {boolean}
     * @memberof WizardPage
     */
    public get stopCancel(): boolean {
        return this._stopCancel;
    }

    /**
     * Overrides the cancel action from the page level. Allows you to use an
     * alternate function for validation or data-munging before cancelling the
     * wizard when combined with the WizardPage.onCancel
     * (the clrWizardPageOnCancel output).
     *
     * Requires that you manually close the wizard from your host component,
     * usually with a call to Wizard.forceNext() or wizard.next();
     *
     * @memberof WizardPage
     */
    @Input("clrWizardPagePreventDefaultCancel")
    public set stopCancel(val: boolean) {
        const valBool = !!val;
        if (valBool !== this._stopCancel) {
            this._stopCancel = valBool;
            this.stopCancelChange.emit(valBool);
        }
    }

    /**
     *
     * @ignore
     * @type {EventEmitter <boolean>}
     * @memberof WizardPage
     */
    @Output("clrWizardPagePreventDefaultCancelChange") stopCancelChange: EventEmitter<boolean> = new EventEmitter();

    /**
     *
     *
     * @private
     * @ignore
     * @memberof WizardPage
     */
    private _stopNext = false;

    /**
     * A getter that tells you whether the page is preventing the next action.
     *
     * @readonly
     * @type {boolean}
     * @memberof WizardPage
     */
    public get stopNext(): boolean {
        return this._stopNext;
    }

    /**
     * Overrides forward navigation from the page level. Allows you to use an
     * alternate function for validation or data-munging before moving the
     * wizard to the next pagewhen combined with the WizardPage.onCommit
     * (clrWizardPageOnCommit) or WizardPage.nextButtonClicked
     * (clrWizardPageNext) outputs.
     *
     * Requires that you manually tell the wizard to navigate forward from
     * the hostComponent, usually with a call to Wizard.forceNext() or
     * wizard.next();
     *
     * @memberof WizardPage
     */
    @Input("clrWizardPagePreventDefaultNext")
    public set stopNext(val: boolean) {
        const valBool = !!val;
        if (valBool !== this._stopNext) {
            this._stopNext = valBool;
        }
    }

    /**
     * An event emitter carried over from a legacy version of WizardPage.
     * Fires an event on WizardPage whenever the next or finish buttons
     * are clicked and the page is the current page of the Wizard.
     *
     * Note that this does not automatically emit an event when a custom
     * button is used in place of a next or finish button.
     *
     * @type {EventEmitter <string>}
     * @memberof WizardPage
     */
    @Output("clrWizardPageOnCommit") onCommit: EventEmitter<string> = new EventEmitter<string>(false);

    /**
     * Emits an event when WizardPage becomes the current page of the
     * Wizard.
     *
     * @type {EventEmitter <string>}
     * @memberof WizardPage
     */
    @Output("clrWizardPageOnLoad") onLoad: EventEmitter<string> = new EventEmitter();

    /**
     * Emits an event when the WizardPage invokes the cancel routine for the wizard.
     *
     * Can be used in conjunction with the WizardPage.stopCancel
     * (clrWizardPagePreventDefaultCancel) or WizardPage.preventDefault
     * (clrWizardPagePagePreventDefault) inputs to implement custom cancel
     * functionality at the page level. This is useful if you would like to do
     * validation, save data, or warn users before cancelling the wizard.
     *
     * Note that this requires you to call Wizard.close() from the host component.
     * This constitues a full replacement of the cancel functionality.
     *
     * @type {EventEmitter <WizardPage>}
     * @memberof WizardPage
     */
    @Output("clrWizardPageOnCancel") pageOnCancel: EventEmitter<WizardPage> = new EventEmitter();

    /**
     * Emits an event when the finish button is clicked and the WizardPage is
     * the wizard's current page.
     *
     * Can be used in conjunction with the WizardPage.preventDefault
     * (clrWizardPagePagePreventDefault) input to implement custom finish
     * functionality at the page level. This is useful if you would like to do
     * validation, save data, or warn users before allowing them to complete
     * the wizard.
     *
     * Note that this requires you to call Wizard.finish() or Wizard.forceFinish()
     * from the host component. This combination creates a full replacement of
     * the finish functionality.
     *
     * @type {EventEmitter <WizardPage>}
     * @memberof WizardPage
     */
    @Output("clrWizardPageFinish") finishButtonClicked: EventEmitter<WizardPage> = new EventEmitter();

    /**
     * Emits an event when the previous button is clicked and the WizardPage is
     * the wizard's current page.
     *
     * Can be used in conjunction with the WizardPage.preventDefault
     * (clrWizardPagePagePreventDefault) input to implement custom backwards
     * navigation at the page level. This is useful if you would like to do
     * validation, save data, or warn users before allowing them to go
     * backwards in the wizard.
     *
     * Note that this requires you to call Wizard.previous()
     * from the host component. This combination creates a full replacement of
     * the backwards navigation functionality.
     *
     * @type {EventEmitter <WizardPage>}
     * @memberof WizardPage
     */
    @Output("clrWizardPagePrevious") previousButtonClicked: EventEmitter<WizardPage> = new EventEmitter();

    /**
     * Emits an event when the next button is clicked and the WizardPage is
     * the wizard's current page.
     *
     * Can be used in conjunction with the WizardPage.preventDefault
     * (clrWizardPagePagePreventDefault) input to implement custom forwards
     * navigation at the page level. This is useful if you would like to do
     * validation, save data, or warn users before allowing them to go
     * to the next page in the wizard.
     *
     * Note that this requires you to call Wizard.forceNext() or Wizard.next()
     * from the host component. This combination creates a full replacement of
     * the forward navigation functionality.
     *
     * @type {EventEmitter <WizardPage>}
     * @memberof WizardPage
     */
    @Output("clrWizardPageNext") nextButtonClicked: EventEmitter<WizardPage> = new EventEmitter();

    /**
     * Emits an event when a danger button is clicked and the WizardPage is
     * the wizard's current page. By default, a danger button will act as
     * either a "next" or "finish" button depending on if the WizardPage is the
     * last page or not.
     *
     * Can be used in conjunction with the WizardPage.preventDefault
     * (clrWizardPagePagePreventDefault) input to implement custom forwards
     * or finish navigation at the page level when the danger button is clicked.
     * This is useful if you would like to do validation, save data, or warn
     * users before allowing them to go to the next page in the wizard or
     * finish the wizard.
     *
     * Note that this requires you to call Wizard.finish(), Wizard.forceFinish(),
     * Wizard.forceNext() or Wizard.next() from the host component. This
     * combination creates a full replacement of the forward navigation and
     * finish functionality.
     *
     * @type {EventEmitter <WizardPage>}
     * @memberof WizardPage
     */
    @Output("clrWizardPageDanger") dangerButtonClicked: EventEmitter<WizardPage> = new EventEmitter();

    /**
     * Emits an event when a next, finish, or danger button is clicked and the
     * WizardPage is the wizard's current page.
     *
     * Can be used in conjunction with the WizardPage.preventDefault
     * (clrWizardPagePagePreventDefault) input to implement custom forwards
     * or finish navigation at the page level, regardless of the type of
     * primary button.
     *
     * This is useful if you would like to do validation, save data, or warn
     * users before allowing them to go to the next page in the wizard or
     * finish the wizard.
     *
     * Note that this requires you to call Wizard.finish(), Wizard.forceFinish(),
     * Wizard.forceNext() or Wizard.next() from the host component. This
     * combination creates a full replacement of the forward navigation and
     * finish functionality.
     *
     * @type {EventEmitter <WizardPage>}
     * @memberof WizardPage
     */
    @Output("clrWizardPagePrimary") primaryButtonClicked: EventEmitter<string> = new EventEmitter();

    @Output("clrWizardPageCustomButton") customButtonClicked: EventEmitter<string> = new EventEmitter();

    /**
     * An input value that is used internally to generate the WizardPage ID as
     * well as the step nav item ID.
     *
     * Typed as any because it should be able to accept numbers as well as
     * strings. Passing an index for wizard whose pages are created with an
     * ngFor loop is a common use case.
     *
     * @type {*}
     * @memberof WizardPage
     */
    @Input("id")
    _id: any = (wizardPageIndex++).toString();

    /**
     * A read-only getter that generates an ID string for the wizard page from
     * either the value passed to the WizardPage "id" input or a wizard page
     * counter shared across all wizard pages in the application.
     *
     * Note that the value passed into the ID input Will be prefixed with
     * "clr-wizard-page-".
     *
     * @readonly
     *
     * @memberof WizardPage
     */
    public get id() {
        // covers things like null, undefined, false, and empty string
        // while allowing zero to pass
        const idIsNonZeroFalsy = (!this._id && this._id !== 0);

        // in addition to non-zero falsy we also want to make sure _id is not a negative
        // number.
        if (idIsNonZeroFalsy || this._id < 0) {
            // guard here in the event that input becomes undefined or null by accident
            this._id = (wizardPageIndex++).toString();
        }
        return `clr-wizard-page-${this._id}`;
    }

    /**
     * A read-only getter that serves as a convenience for those who would rather
     * not think in the terms of !WizardPage.nextStepDisabled. For some use cases,
     * WizardPage.readyToComplete is more logical and declarative.
     *
     * @readonly
     *
     * @memberof WizardPage
     */
    public get readyToComplete(): boolean {
        return !this.nextStepDisabled;
    }

    /**
     *
     * @ignore
     * @private
     * @type {boolean}
     * @memberof WizardPage
     */
    private _complete: boolean = false;

    /**
     * A page is marked as completed if it is both readyToComplete and completed,
     * as in the next or finish action has been executed while this page was current.
     *
     * Note there is and open question about how to handle pages that are marked
     * complete but who are no longer readyToComplete. This might indicate an error
     * state for the WizardPage. Currently, the wizard does not acknowledge this state
     * and only returns that the page is incomplete.
     *
     * @type {boolean}
     * @memberof WizardPage
     */
    public get completed(): boolean {
        return this._complete && this.readyToComplete;

        // FOR V2: UNWIND COMPLETED, READYTOCOMPLETE, AND ERRORS
        // SUCH THAT ERRORS IS ITS OWN INPUT. IF A STEP IS
        // INCOMPLETE AND ERRORED, ERRORED WILL NOT SHOW.
        // FIRST QUESTION: AM I GREY OR COLORED?
        // SECOND QUESTION: AM I GREEN OR RED?
    }

    /**
     * A WizardPage can be manually set to completed using this boolean setter.
     * It is recommended that users rely on the convenience functions in the wizard
     * and navigation service instead of manually setting pages’ completion state.
     *
     * @memberof WizardPage
     */
    public set completed(value: boolean) {
        this._complete = value;
    }

    /**
     * Checks with the navigation service to see if it is the current page.
     *
     * @readonly
     * @type {boolean}
     * @memberof WizardPage
     */
    public get current(): boolean {
        return this.navService.currentPage === this;
    }

    public get disabled(): boolean {
        return !this.enabled;
    }

    /**
     * A read-only getter that returns whether or not the page is navigable
     * in the wizard. A wizard page can be navigated to if it is completed
     * or the page before it is completed.
     *
     * This getter handles the logic for enabling or disabling the links in
     * the step nav on the left Side of the wizard.
     *
     * @readonly
     * @type {boolean}
     * @memberof WizardPage
     */
    public get enabled(): boolean {
        return this.current || this.completed || this.previousCompleted;
    }

    /**
     * A read-only getter that returns whether or not the page before this
     * WizardPage is completed. This is useful for determining whether or not
     * a page is navigable if it is not current or already completed.
     *
     * @readonly
     * @type {boolean}
     * @memberof WizardPage
     */
    public get previousCompleted(): boolean {
        const previousPage = this.pageCollection.getPreviousPage(this);

        if (!previousPage) {
            return true;
        }

        return previousPage.completed;
    }

    /**
     *
     * @ignore
     * @readonly
     * @type {TemplateRef < any >}
     * @memberof WizardPage
     */
    public get title(): TemplateRef<any> {
        return this.pageTitle.pageTitleTemplateRef;
    }

    /**
     *
     * @ignore
     * @readonly
     * @type {TemplateRef < any >}
     * @memberof WizardPage
     */
    public get navTitle(): TemplateRef<any> {
        if (this.pageNavTitle) {
            return this.pageNavTitle.pageNavTitleTemplateRef;
        }
        return this.pageTitle.pageTitleTemplateRef;
    }

    /**
     *
     * @ignore
     * @readonly
     * @type {TemplateRef < any >}
     * @memberof WizardPage
     */
    public get headerActions(): TemplateRef<any> {
        if (!this._headerActions) {
            return;
        }
        return this._headerActions.pageHeaderActionsTemplateRef;
    }

    /**
     *
     * @ignore
     * @readonly
     * @type {TemplateRef < any >}
     * @memberof WizardPage
     */
    public get hasHeaderActions(): boolean {
        return !!this._headerActions;
    }

    /**
     *
     * @ignore
     * @readonly
     * @type {TemplateRef < any >}
     * @memberof WizardPage
     */
    public get buttons(): TemplateRef<any> {
        if (!this._buttons) {
            return;
        }
        return this._buttons.pageButtonsTemplateRef;
    }

    /**
     * A read-only getter that returns a boolean that says whether or
     * not the WizardPage includes buttons. Used to determine if the
     * Wizard should override the default button set defined as
     * its direct children.
     *
     * @readonly
     * @type {boolean}
     * @memberof WizardPage
     */
    public get hasButtons(): boolean {
        return !!this._buttons;
    }

    /**
     * Uses the nav service to make the WizardPage the current page in the
     * wizard. Bypasses all checks but still emits the WizardPage.onLoad
     * (clrWizardPageOnLoad) output.
     *
     * In most cases, it is better to use the default navigation functions
     * in Wizard.
     *
     * @memberof WizardPage
     */
    public makeCurrent(): void {
        this.navService.currentPage = this;
    }

    /**
     * Links the nav service and establishes the current page if one is not defined.
     *
     * @memberof WizardPage
     */
    public ngOnInit(): void {
        const navService = this.navService;
        if (!navService.currentPage && !navService.navServiceLoaded) {
            this.makeCurrent();
            this.navService.navServiceLoaded = true;
        }
    }

    /**
     * A read-only getter that returns the id used by the step nav item associated with the page.
     *
     * WizardPage needs this ID string for aria information.
     *
     * @readonly
     * @type {string}
     * @memberof WizardPage
     */
    public get stepItemId(): string {
        return this.pageCollection.getStepItemIdForPage(this);
    }
}
