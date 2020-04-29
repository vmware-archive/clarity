/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  AfterContentInit,
  Component,
  ContentChildren,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  IterableDiffers,
  OnDestroy,
  Output,
  QueryList,
  ViewChild,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ButtonHubService } from './providers/button-hub.service';
import { HeaderActionService } from './providers/header-actions.service';
import { PageCollectionService } from './providers/page-collection.service';
import { WizardNavigationService } from './providers/wizard-navigation.service';
import { ClrWizardHeaderAction } from './wizard-header-action';
import { ClrWizardPage } from './wizard-page';

@Component({
  selector: 'clr-wizard',
  providers: [WizardNavigationService, PageCollectionService, ButtonHubService, HeaderActionService],
  templateUrl: './wizard.html',
  host: {
    '[class.clr-wizard]': 'true',
    '[class.wizard-md]': "size == 'md'",
    '[class.wizard-lg]': "size == 'lg'",
    '[class.wizard-xl]': "size == 'xl'",
    '[class.lastPage]': 'navService.currentPageIsLast',
  },
})
export class ClrWizard implements OnDestroy, AfterContentInit, DoCheck {
  /**
   * Set the modal size of the wizard. Set using `[clrWizardSize]` input.
   */
  @Input('clrWizardSize') size = 'xl';

  /**
   * Tells the modal part of the wizard whether it should have a close "X"
   * in the top right corner. Set using `[clrWizardClosable]` input.
   */
  @Input('clrWizardClosable') closable = true;

  /**
   * Resets page completed states when navigating backwards.
   * Set using `[clrWizardForceForwardNavigation]` input.
   */
  @Input('clrWizardForceForwardNavigation')
  set forceForward(value: boolean) {
    this._forceForward = !!value;
    this.navService.forceForwardNavigation = value;
  }
  get forceForward(): boolean {
    return this._forceForward;
  }
  private _forceForward = false;

  _open = false;
  /**
   * Toggles open/close of the wizard component.
   * Set using the `[clrWizardOpen]` input.
   */
  @Input('clrWizardOpen')
  set clrWizardOpen(open: boolean) {
    if (open) {
      this.buttonService.buttonsReady = true;
    }
    this._open = open;
  }

  /**
   * Prevents ClrWizard from moving to the next page or closing itself on finishing.
   * Set using the `[clrWizardPreventDefaultNext]` input. Note that using stopNext
   * will require you to create your own calls to .next() and .finish() in your
   * host component to make the ClrWizard work as expected.
   */
  @Input('clrWizardPreventDefaultNext')
  set stopNext(value: boolean) {
    this._stopNext = !!value;
    this.navService.wizardHasAltNext = value;
  }
  get stopNext(): boolean {
    return this._stopNext;
  }
  private _stopNext = false;

  /**
   * Prevents ClrWizard from closing when the cancel button or close "X" is clicked.
   * Set using the `[clrWizardPreventDefaultCancel]` input.
   *
   * Note that using stopCancel will require you to create your own calls to `close()` in your host compone`nt
   * to make the ClrWizard work as expected. Useful for doing checks or prompts
   * before closing a ClrWizard.
   */
  @Input('clrWizardPreventDefaultCancel')
  set stopCancel(value: boolean) {
    this._stopCancel = !!value;
    this.navService.wizardHasAltCancel = value;
  }
  get stopCancel(): boolean {
    return this._stopCancel;
  }
  private _stopCancel = false;

  /**
   * Prevents ClrWizard from performing any form of navigation away from the current
   * page. Set using the `[clrWizardPreventNavigation]` input.
   * Note that stopNavigation is meant to freeze the wizard in place, typically
   * during a long validation or background action where you want the wizard to
   * display loading content but not allow the user to execute navigation in
   * the stepnav, close X, or the  back, finish, or next buttons.
   */
  @Input('clrWizardPreventNavigation')
  set stopNavigation(value: boolean) {
    this._stopNavigation = !!value;
    this.navService.wizardStopNavigation = value;
  }
  get stopNavigation(): boolean {
    return this._stopNavigation;
  }
  private _stopNavigation = false;

  /**
   * Prevents clicks on the links in the stepnav from working.
   * Set using `[clrWizardDisableStepnav]` input.
   * A more granular bypassing of navigation which can be useful when your
   * ClrWizard is in a state of completion and you don't want users to be
   * able to jump backwards and change things.
   */
  @Input('clrWizardDisableStepnav')
  set disableStepnav(value: boolean) {
    this._disableStepnav = !!value;
    this.navService.wizardDisableStepnav = value;
  }
  get disableStepnav(): boolean {
    return this._disableStepnav;
  }
  private _disableStepnav = false;

  /**
   * Used to communicate to the underlying modal that animations are not
   * wanted. Primary use is for the display of static/inline wizards.
   * Set using `[clrWizardPreventModalAnimation]` input.
   */
  /** @deprecated since 3.0, input should be removed in 4.0 because is only related to inline wizards */
  @Input('clrWizardPreventModalAnimation') _stopModalAnimations = false;
  get stopModalAnimations(): string {
    return this._stopModalAnimations ? 'true' : 'false';
  }

  /**
   * Emits when the wizard is opened or closed.
   * Listen via `(clrWizardOpenChange)` event.
   */
  @Output('clrWizardOpenChange') _openChanged: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  /**
   * Emits when the wizard is canceled. Listen via `(clrWizardOnCancel)` event.
   * Can be combined with the `[clrWizardPreventDefaultCancel]` input to create
   * wizard-level custom cancel routines.
   */
  @Output('clrWizardOnCancel') onCancel: EventEmitter<any> = new EventEmitter<any>(false);

  /**
   * Emits when the wizard is completed. Listen via `(clrWizardOnFinish)` event.
   * Can be combined with the `[clrWizardPreventDefaultNext]` input to create
   * wizard-level custom completion routines.
   */
  @Output('clrWizardOnFinish') wizardFinished: EventEmitter<any> = new EventEmitter<any>(false);

  /**
   * Emits when the wizard is reset. Listen via `(clrWizardOnReset)` event.
   */
  @Output('clrWizardOnReset') onReset: EventEmitter<any> = new EventEmitter<any>(false);

  /**
   * Emits when the current page has changed. Listen via `(clrWizardCurrentPageChanged)` event.
   * output. Useful for non-blocking validation.
   */
  @Output('clrWizardCurrentPageChanged') currentPageChanged: EventEmitter<any> = new EventEmitter<any>(false);

  /**
   * Emits when the wizard moves to the next page. Listen via `(clrWizardOnNext)` event.
   * Can be combined with the `[clrWizardPreventDefaultNext]` input to create
   * wizard-level custom navigation routines, which are useful for validation.
   */
  @Output('clrWizardOnNext') onMoveNext: EventEmitter<any> = new EventEmitter<any>(false);

  /**
   * Emits when the wizard moves to the previous page. Can be useful for validation.
   * Listen via `(clrWizardOnPrevious)` event.
   */

  @Output('clrWizardOnPrevious') onMovePrevious: EventEmitter<any> = new EventEmitter<any>(false);

  @ContentChildren(ClrWizardPage, { descendants: true })
  pages: QueryList<ClrWizardPage>;
  @ContentChildren(ClrWizardHeaderAction) headerActions: QueryList<ClrWizardHeaderAction>;
  @ViewChild('wizardTitle') wizardTitle: ElementRef;

  public get currentPage(): ClrWizardPage {
    return this.navService.currentPage;
  }

  public set currentPage(page: ClrWizardPage) {
    this.navService.goTo(page, true);
  }

  public get isLast(): boolean {
    return this.navService.currentPageIsLast;
  }

  public get isFirst(): boolean {
    return this.navService.currentPageIsFirst;
  }

  public get isStatic(): boolean {
    return (this.elementRef.nativeElement as HTMLElement).classList.contains('clr-wizard--inline');
  }

  private differ: any; // for marking when the collection of wizard pages has been added to or deleted from
  private subscriptions: Subscription[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    public navService: WizardNavigationService,
    public pageCollection: PageCollectionService,
    public buttonService: ButtonHubService,
    public headerActionService: HeaderActionService,
    private elementRef: ElementRef,
    differs: IterableDiffers
  ) {
    this.subscriptions.push(
      this.listenForNextPageChanges(),
      this.listenForPreviousPageChanges(),
      this.listenForCancelChanges(),
      this.listenForFinishedChanges(),
      this.listenForPageChanges()
    );

    this.differ = differs.find([]).create(null);
  }

  public ngAfterContentInit(): void {
    this.pageCollection.pages = this.pages;
    this.headerActionService.wizardHeaderActions = this.headerActions;
    this.initializeButtons();
  }

  public ngDoCheck(): void {
    this.updateNavOnPageChanges();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  /**
   * Marks Wizard as finished. By default it does not execute event
   * emissions or checks before completing and closing. This method is commonly
   * used as part of an alternative navigation with `[clrWizardPreventDefaultNext]`.
   *
   * If `skipChecksAndEmits` is true, the wizard will complete and close
   * regardless of the state of its current page. This is useful for alternative
   * navigation where event emissions have already been done and firing them again
   * may cause an event loop.
   */
  public finish(skipChecksAndEmits = true): void {
    if (skipChecksAndEmits) {
      this.forceFinish();
    } else {
      this.navService.finish();
    }
  }

  /**
   * Marks the wizard as finished but does run checks and emissions.
   * Good for a last step in an alternate workflow. Does the same thing as
   * calling `ClrWizard.finish(true)` or `ClrWizard.finish()` without a parameter.
   */
  public forceFinish(): void {
    if (this.stopNavigation) {
      return;
    }

    this.close();
  }

  /**
   * Opens the wizard. If there is no current page defined, sets the first page in the wizard to be current.
   */
  public open(): void {
    this._open = true;

    if (!this.currentPage) {
      this.navService.setFirstPageCurrent();
    }

    // Only render buttons when wizard is opened, to avoid chocolate errors
    this.buttonService.buttonsReady = true;

    this._openChanged.emit(true);
  }

  /**
   * Closes the wizard. Call this directly instead of `cancel()` to implement alternative cancel functionality.
   */
  public close(): void {
    if (this.stopNavigation) {
      return;
    }

    this._open = false;
    this._openChanged.emit(false);
  }

  /**
   * Used to open and close the wizard. By default the wizard will
   * close if invoked with no parameter. If parameter is true wizard will open
   * else if false will close.
   */
  public toggle(open: boolean): void {
    if (open) {
      this.open();
    } else {
      this.close();
    }
  }

  /**
   * Moves the wizard to the previous page.
   */
  public previous(): void {
    this.navService.previous();
  }

  /**
   * By default, `next()` does not execute event emissions.
   * This method is commonly called as part of an alternative navigation
   * with `[clrWizardPreventDefaultNext]`. The wizard will move to the next page
   * regardless of the state of its current page. This is useful for alternative
   * navigation where event emissions have already been done and firing them again
   * may cause an event loop.
   *
   * If `skipChecksAndEmits` is false, the wizard will execute default checks
   * and emit events as normal. This is useful for custom buttons or programmatic
   * workflows that are not executing the wizards default checks and emissions.
   * It is another way to navigate without having to rewrite the wizard’s default
   * functionality from scratch.
   */
  public next(skipChecksAndEmits = true): void {
    if (skipChecksAndEmits) {
      this.forceNext();
    } else {
      this.navService.next();
    }
  }

  /**
   * Moves the wizard to the next page without the checks and emissions.
   * Good for a last step in an alternate workflow.
   * Alias for `ClrWizard.next(true)` or `ClrWizard.next()`
   */
  public forceNext(): void {
    this.navService.forceNext();
  }

  /**
   * Cancels and closes the wizard. Do not use this for an override of the cancel
   * the functionality with `[clrWizardPreventDefaultCancel]`, `[clrWizardPreventPageDefaultCancel]`,
   * or `[clrWizardPagePreventDefault]` because it will initiate the same checks
   * and event emissions that invoked your event handler. Use `ClrWizard.close()` instead.
   */
  public cancel(): void {
    this.navService.cancel();
  }

  /**
   * Overrides behavior of the underlying modal to avoid collisions with
   * alternative cancel functionality. In most cases, use `ClrWizard.cancel()` instead.
   */
  public modalCancel(): void {
    if (this.closable) {
      this.checkAndCancel();
    }
  }

  /**
   * Checks for alternative cancel flows defined at the current page or
   * wizard level. Performs a canceled if not. Emits events that initiate
   * the alternative cancel outputs `(clrWizardPageOnCancel)` and `(clrWizardOnCancel)`.
   */
  public checkAndCancel(): void {
    const currentPage = this.currentPage;
    const currentPageHasOverrides = currentPage.stopCancel || currentPage.preventDefault;

    if (this.stopNavigation) {
      return;
    }

    currentPage.pageOnCancel.emit();
    if (!currentPageHasOverrides) {
      this.onCancel.emit();
    }

    if (!this.stopCancel && !currentPageHasOverrides) {
      this.close();
    }
  }

  /**
   * Navigates to a given page in the Wizard. Navigation will invoke the wizard’s default
   * checks and event emissions.
   *
   * The format of the expected ID parameter can be found in the return of the
   * ClrWizardPage.id getter, usually prefixed with `clr-wizard-page-` and then either a
   * numeric ID or the ID specified for the `ClrWizardPage` component’s `id` input.
   */
  public goTo(pageId: string): void {
    if (!pageId) {
      return;
    }

    this.navService.goTo(pageId);
  }

  /**
   * Reset sets all WizardPages to incomplete and sets the first page in the `ClrWizard` to
   * be the current page, resetting the wizard navigation.
   * Use `(clrWizardOnReset)` event to reset the data or model of your wizard.
   */
  public reset(): void {
    this.pageCollection.reset();
    this.onReset.next();
  }

  private listenForNextPageChanges(): Subscription {
    return this.navService.movedToNextPage.pipe(filter(() => isPlatformBrowser(this.platformId))).subscribe(() => {
      this.onMoveNext.emit();
      this.wizardTitle.nativeElement.focus();
    });
  }

  private listenForPreviousPageChanges(): Subscription {
    return this.navService.movedToPreviousPage.pipe(filter(() => isPlatformBrowser(this.platformId))).subscribe(() => {
      this.onMovePrevious.emit();
      this.wizardTitle.nativeElement.focus();
    });
  }

  private listenForCancelChanges(): Subscription {
    return this.navService.notifyWizardCancel.subscribe(() => this.checkAndCancel());
  }

  private listenForFinishedChanges(): Subscription {
    return this.navService.wizardFinished.subscribe(() => this.emitWizardFinished());
  }

  private listenForPageChanges(): Subscription {
    return this.navService.currentPageChanged.subscribe(() => this.currentPageChanged.emit());
  }

  private updateNavOnPageChanges(): void {
    const changes = this.differ.diff(this.pages);
    if (changes) {
      changes.forEachAddedItem(() => this.navService.updateNavigation());
      changes.forEachRemovedItem(() => this.navService.updateNavigation());
    }
  }

  private initializeButtons(): void {
    // Only trigger buttons ready if default is open (inlined)
    if (this._open) {
      this.buttonService.buttonsReady = true;
    }
  }

  private emitWizardFinished(): void {
    if (!this.stopNext) {
      this.forceFinish();
    }
    this.wizardFinished.emit();
  }
}
