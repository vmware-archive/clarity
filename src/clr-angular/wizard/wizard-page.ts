/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

import { ButtonHubService } from './providers/button-hub.service';
import { PageCollectionService } from './providers/page-collection.service';
import { WizardNavigationService } from './providers/wizard-navigation.service';
import { ClrWizardPageButtons } from './wizard-page-buttons';
import { ClrWizardPageHeaderActions } from './wizard-page-header-actions';
import { ClrWizardPageNavTitle } from './wizard-page-navtitle';
import { ClrWizardPageTitle } from './wizard-page-title';

let wizardPageIndex = 0;

/**
 * The ClrWizardPage component is responsible for displaying the content of each step
 * in the wizard workflow.
 *
 * ClrWizardPage component has hooks into the navigation service (ClrWizardPage.navService),
 * page collection (ClrWizardPage.pageCollection), and button service
 * (ClrWizardPage.buttonService). These three providers are shared across the components
 * within each instance of a Wizard.
 *
 */
@Component({
  selector: 'clr-wizard-page',
  template: '<ng-content></ng-content>',
  host: {
    '[id]': 'id',
    role: 'tabpanel',
    '[attr.aria-hidden]': '!current',
    '[attr.aria-labelledby]': 'stepItemId',
    '[class.active]': 'current',
    '[class.clr-wizard-page]': 'true',
  },
})
export class ClrWizardPage implements OnInit {
  /**
   * Creates an instance of ClrWizardPage.
   *
   * @memberof WizardPage
   */
  constructor(
    private navService: WizardNavigationService,
    public pageCollection: PageCollectionService,
    public buttonService: ButtonHubService
  ) {}

  /**
   * Contains a reference to the page title which is used for a number
   * of different tasks for display in the wizard.
   *
   * @memberof WizardPage
   *
   */
  @ContentChild(ClrWizardPageTitle) public pageTitle: ClrWizardPageTitle;

  /**
   * Contains a reference to the desired title for the page's step in the
   * navigation on the left side of the wizard. Can be projected to change the
   * navigation link's text.
   *
   * If not defined, then ClrWizardPage.pageTitle will be displayed in the stepnav.
   *
   * @memberof WizardPage
   *
   */
  @ContentChild(ClrWizardPageNavTitle) public pageNavTitle: ClrWizardPageNavTitle;

  /**
   * Contains a reference to the buttons defined within the page. If not defined,
   * the wizard defaults to the set of buttons defined as a direct child of the
   * wizard.
   *
   * @memberof WizardPage
   *
   */
  @ContentChild(ClrWizardPageButtons) public _buttons: ClrWizardPageButtons;

  /**
   * Contains a reference to the header actions defined within the page. If not defined,
   * the wizard defaults to the set of header actions defined as a direct child of the
   * wizard.
   *
   * @memberof WizardPage
   *
   */
  @ContentChild(ClrWizardPageHeaderActions) public _headerActions: ClrWizardPageHeaderActions;

  /**
   *
   * @memberof WizardPage
   *
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
   * would if you were using ClrWizardPage.preventDefault or
   * Wizard.preventDefault.
   *
   * @memberof WizardPage
   *
   */
  public get nextStepDisabled(): boolean {
    return this._nextStepDisabled;
  }

  /**
   * Sets whether the page should allow forward navigation.
   *
   * @memberof WizardPage
   *
   */
  @Input('clrWizardPageNextDisabled')
  public set nextStepDisabled(val: boolean) {
    const valBool = !!val;
    if (valBool !== this._nextStepDisabled) {
      this._nextStepDisabled = valBool;
      this.nextStepDisabledChange.emit(valBool);
    }
  }

  /**
   * Emits when the value of ClrWizardPage.nextStepDisabled changes.
   * Should emit the new value of nextStepDisabled.
   *
   * @memberof WizardPage
   *
   */
  @Output('clrWizardPageNextDisabledChange') nextStepDisabledChange: EventEmitter<boolean> = new EventEmitter();

  /**
   *
   * @memberof WizardPage
   *
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
   * would if you were using ClrWizardPage.preventDefault or
   * Wizard.preventDefault.
   *
   * @memberof WizardPage
   *
   */
  public get previousStepDisabled(): boolean {
    return this._previousStepDisabled;
  }

  /**
   * Sets whether the page should allow backward navigation.
   *
   * @memberof WizardPage
   *
   */
  @Input('clrWizardPagePreviousDisabled')
  public set previousStepDisabled(val: boolean) {
    const valBool = !!val;
    if (valBool !== this._previousStepDisabled) {
      this._previousStepDisabled = valBool;
      this.previousStepDisabledChange.emit(valBool);
    }
  }

  /**
   * Emits when the value of ClrWizardPage.previousStepDisabled changes.
   * Should emit the new value of previousStepDisabled.
   *
   * @memberof WizardPage
   *
   */
  @Output('clrWizardPagePreviousDisabledChange')
  public previousStepDisabledChange: EventEmitter<boolean> = new EventEmitter();

  /**
   * Overrides all actions from the page level, so you can use an alternate function for
   * validation or data-munging with a ClrWizardPage.onCommit (clrWizardPageOnCommit output),
   * ClrWizardPage.onCancel (clrWizardPageOnCancel output), or one
   * of the granular page-level button click event emitters.
   *
   * @memberof WizardPage
   *
   */
  @Input('clrWizardPagePreventDefault') public preventDefault: boolean = false;

  /**
   *
   * @memberof WizardPage
   *
   */
  private _stopCancel = false;

  /**
   * A getter that retrieves whether the page is preventing the cancel action.
   *
   * @memberof WizardPage
   *
   */
  public get stopCancel(): boolean {
    return this._stopCancel;
  }

  /**
   * Overrides the cancel action from the page level. Allows you to use an
   * alternate function for validation or data-munging before cancelling the
   * wizard when combined with the ClrWizardPage.onCancel
   * (the clrWizardPageOnCancel output).
   *
   * Requires that you manually close the wizard from your host component,
   * usually with a call to Wizard.forceNext() or wizard.next();
   *
   * @memberof ClrWizardPage
   */
  @Input('clrWizardPagePreventDefaultCancel')
  public set stopCancel(val: boolean) {
    const valBool = !!val;
    if (valBool !== this._stopCancel) {
      this._stopCancel = valBool;
      this.stopCancelChange.emit(valBool);
    }
  }

  /**
   *
   * @memberof WizardPage
   *
   */
  @Output('clrWizardPagePreventDefaultCancelChange') stopCancelChange: EventEmitter<boolean> = new EventEmitter();

  /**
   *
   * @memberof WizardPage
   *
   */
  private _stopNext = false;

  /**
   * A getter that tells you whether the page is preventing the next action.
   *
   * @memberof WizardPage
   *
   */
  public get stopNext(): boolean {
    return this._stopNext;
  }

  /**
   * Overrides forward navigation from the page level. Allows you to use an
   * alternate function for validation or data-munging before moving the
   * wizard to the next pagewhen combined with the ClrWizardPage.onCommit
   * (clrWizardPageOnCommit) or ClrWizardPage.nextButtonClicked
   * (clrWizardPageNext) outputs.
   *
   * Requires that you manually tell the wizard to navigate forward from
   * the hostComponent, usually with a call to Wizard.forceNext() or
   * wizard.next();
   *
   * @memberof ClrWizardPage
   */
  @Input('clrWizardPagePreventDefaultNext')
  public set stopNext(val: boolean) {
    const valBool = !!val;
    if (valBool !== this._stopNext) {
      this._stopNext = valBool;
    }
  }

  /**
   * An event emitter carried over from a legacy version of ClrWizardPage.
   * Fires an event on ClrWizardPage whenever the next or finish buttons
   * are clicked and the page is the current page of the Wizard.
   *
   * Note that this does not automatically emit an event when a custom
   * button is used in place of a next or finish button.
   *
   * @memberof WizardPage
   *
   */
  @Output('clrWizardPageOnCommit') onCommit: EventEmitter<string> = new EventEmitter<string>(false);

  /**
   * Emits an event when ClrWizardPage becomes the current page of the
   * Wizard.
   *
   * @memberof WizardPage
   *
   */
  @Output('clrWizardPageOnLoad') onLoad: EventEmitter<string> = new EventEmitter();

  /**
   * Emits an event when the ClrWizardPage invokes the cancel routine for the wizard.
   *
   * Can be used in conjunction with the ClrWizardPage.stopCancel
   * (clrWizardPagePreventDefaultCancel) or ClrWizardPage.preventDefault
   * (clrWizardPagePagePreventDefault) inputs to implement custom cancel
   * functionality at the page level. This is useful if you would like to do
   * validation, save data, or warn users before cancelling the wizard.
   *
   * Note that this requires you to call Wizard.close() from the host component.
   * This constitues a full replacement of the cancel functionality.
   *
   * @memberof WizardPage
   *
   */
  @Output('clrWizardPageOnCancel') pageOnCancel: EventEmitter<ClrWizardPage> = new EventEmitter();

  /**
   * Emits an event when the finish button is clicked and the ClrWizardPage is
   * the wizard's current page.
   *
   * Can be used in conjunction with the ClrWizardPage.preventDefault
   * (clrWizardPagePagePreventDefault) input to implement custom finish
   * functionality at the page level. This is useful if you would like to do
   * validation, save data, or warn users before allowing them to complete
   * the wizard.
   *
   * Note that this requires you to call Wizard.finish() or Wizard.forceFinish()
   * from the host component. This combination creates a full replacement of
   * the finish functionality.
   *
   * @memberof WizardPage
   *
   */
  @Output('clrWizardPageFinish') finishButtonClicked: EventEmitter<ClrWizardPage> = new EventEmitter();

  /**
   * Emits an event when the previous button is clicked and the ClrWizardPage is
   * the wizard's current page.
   *
   * Can be used in conjunction with the ClrWizardPage.preventDefault
   * (clrWizardPagePagePreventDefault) input to implement custom backwards
   * navigation at the page level. This is useful if you would like to do
   * validation, save data, or warn users before allowing them to go
   * backwards in the wizard.
   *
   * Note that this requires you to call Wizard.previous()
   * from the host component. This combination creates a full replacement of
   * the backwards navigation functionality.
   *
   * @memberof WizardPage
   *
   */
  @Output('clrWizardPagePrevious') previousButtonClicked: EventEmitter<ClrWizardPage> = new EventEmitter();

  /**
   * Emits an event when the next button is clicked and the ClrWizardPage is
   * the wizard's current page.
   *
   * Can be used in conjunction with the ClrWizardPage.preventDefault
   * (clrWizardPagePagePreventDefault) input to implement custom forwards
   * navigation at the page level. This is useful if you would like to do
   * validation, save data, or warn users before allowing them to go
   * to the next page in the wizard.
   *
   * Note that this requires you to call Wizard.forceNext() or Wizard.next()
   * from the host component. This combination creates a full replacement of
   * the forward navigation functionality.
   *
   * @memberof WizardPage
   *
   */
  @Output('clrWizardPageNext') nextButtonClicked: EventEmitter<ClrWizardPage> = new EventEmitter();

  /**
   * Emits an event when a danger button is clicked and the ClrWizardPage is
   * the wizard's current page. By default, a danger button will act as
   * either a "next" or "finish" button depending on if the ClrWizardPage is the
   * last page or not.
   *
   * Can be used in conjunction with the ClrWizardPage.preventDefault
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
   * @memberof WizardPage
   *
   */
  @Output('clrWizardPageDanger') dangerButtonClicked: EventEmitter<ClrWizardPage> = new EventEmitter();

  /**
   * Emits an event when a next, finish, or danger button is clicked and the
   * ClrWizardPage is the wizard's current page.
   *
   * Can be used in conjunction with the ClrWizardPage.preventDefault
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
   * @memberof WizardPage
   *
   */
  @Output('clrWizardPagePrimary') primaryButtonClicked: EventEmitter<string> = new EventEmitter();

  @Output('clrWizardPageCustomButton') customButtonClicked: EventEmitter<string> = new EventEmitter();

  /**
   * An input value that is used internally to generate the ClrWizardPage ID as
   * well as the step nav item ID.
   *
   * Typed as any because it should be able to accept numbers as well as
   * strings. Passing an index for wizard whose pages are created with an
   * ngFor loop is a common use case.
   *
   * @memberof WizardPage
   *
   */
  @Input('id') _id: any = (wizardPageIndex++).toString();

  /**
   * A read-only getter that generates an ID string for the wizard page from
   * either the value passed to the ClrWizardPage "id" input or a wizard page
   * counter shared across all wizard pages in the application.
   *
   * Note that the value passed into the ID input Will be prefixed with
   * "clr-wizard-page-".
   *
   * @readonly
   *
   * @memberof ClrWizardPage
   */
  public get id() {
    // covers things like null, undefined, false, and empty string
    // while allowing zero to pass
    const idIsNonZeroFalsy = !this._id && this._id !== 0;

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
   * not think in the terms of !ClrWizardPage.nextStepDisabled. For some use cases,
   * ClrWizardPage.readyToComplete is more logical and declarative.
   *
   * @memberof WizardPage
   *
   */
  public get readyToComplete(): boolean {
    return !this.nextStepDisabled;
  }

  /**
   *
   * @memberof WizardPage
   *
   */
  private _complete: boolean = false;

  /**
   * A page is marked as completed if it is both readyToComplete and completed,
   * as in the next or finish action has been executed while this page was current.
   *
   * Note there is and open question about how to handle pages that are marked
   * complete but who are no longer readyToComplete. This might indicate an error
   * state for the ClrWizardPage. Currently, the wizard does not acknowledge this state
   * and only returns that the page is incomplete.
   *
   * @memberof WizardPage
   *
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
   * A ClrWizardPage can be manually set to completed using this boolean setter.
   * It is recommended that users rely on the convenience functions in the wizard
   * and navigation service instead of manually setting pages’ completion state.
   *
   * @memberof ClrWizardPage
   */
  public set completed(value: boolean) {
    this._complete = value;
  }

  /**
   * Checks with the navigation service to see if it is the current page.
   *
   * @memberof WizardPage
   *
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
   * @memberof WizardPage
   *
   */
  public get enabled(): boolean {
    return this.current || this.completed || this.previousCompleted;
  }

  /**
   * A read-only getter that returns whether or not the page before this
   * ClrWizardPage is completed. This is useful for determining whether or not
   * a page is navigable if it is not current or already completed.
   *
   * @memberof WizardPage
   *
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
   * @memberof WizardPage
   *
   */
  public get title(): TemplateRef<any> {
    return this.pageTitle.pageTitleTemplateRef;
  }

  /**
   *
   * @memberof WizardPage
   *
   */
  public get navTitle(): TemplateRef<any> {
    if (this.pageNavTitle) {
      return this.pageNavTitle.pageNavTitleTemplateRef;
    }
    return this.pageTitle.pageTitleTemplateRef;
  }

  /**
   *
   * @memberof WizardPage
   *
   */
  public get headerActions(): TemplateRef<any> {
    if (!this._headerActions) {
      return;
    }
    return this._headerActions.pageHeaderActionsTemplateRef;
  }

  /**
   *
   * @memberof WizardPage
   *
   */
  public get hasHeaderActions(): boolean {
    return !!this._headerActions;
  }

  /**
   *
   * @memberof WizardPage
   *
   */
  public get buttons(): TemplateRef<any> {
    if (!this._buttons) {
      return;
    }
    return this._buttons.pageButtonsTemplateRef;
  }

  /**
   * A read-only getter that returns a boolean that says whether or
   * not the ClrWizardPage includes buttons. Used to determine if the
   * Wizard should override the default button set defined as
   * its direct children.
   *
   * @memberof WizardPage
   *
   */
  public get hasButtons(): boolean {
    return !!this._buttons;
  }

  /**
   * Uses the nav service to make the ClrWizardPage the current page in the
   * wizard. Bypasses all checks but still emits the ClrWizardPage.onLoad
   * (clrWizardPageOnLoad) output.
   *
   * In most cases, it is better to use the default navigation functions
   * in Wizard.
   *
   * @memberof WizardPage
   *
   */
  public makeCurrent(): void {
    this.navService.currentPage = this;
  }

  /**
   * Links the nav service and establishes the current page if one is not defined.
   *
   * @memberof WizardPage
   *
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
   * ClrWizardPage needs this ID string for aria information.
   *
   * @memberof WizardPage
   *
   */
  public get stepItemId(): string {
    return this.pageCollection.getStepItemIdForPage(this);
  }
}
