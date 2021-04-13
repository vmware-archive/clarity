/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { SignpostFocusManager } from './providers/signpost-focus-manager.service';
import { SignpostIdService } from './providers/signpost-id.service';

@Directive({
  selector: '[clrSignpostTrigger]',
  host: {
    class: 'signpost-trigger',
    '[attr.aria-label]': 'commonStrings.keys.signpostToggle',
    '[attr.aria-expanded]': 'ariaExpanded',
    '[attr.aria-controls]': 'ariaControl',
    '[class.active]': 'isOpen',
  },
})

/*********
 *
 * @description
 * A Directive added to the ClrSignpost Trigger button that will call the ClrSignpost.toggle() function to hide/show the
 * ClrSignpostContent.
 *
 */
export class ClrSignpostTrigger implements OnDestroy {
  private subscriptions: Subscription[] = [];

  public ariaExpanded: boolean;
  public ariaControl: string;
  public isOpen: boolean;

  private document: Document;

  constructor(
    private toggleService: ClrPopoverToggleService,
    private el: ElementRef,
    public commonStrings: ClrCommonStringsService,
    private signpostIdService: SignpostIdService,
    private signpostFocusManager: SignpostFocusManager,
    @Inject(DOCUMENT) document: any,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.document = document;
  }

  ngOnInit() {
    this.signpostFocusManager.triggerEl = this.el.nativeElement;
    this.subscriptions.push(
      this.toggleService.openChange.subscribe((isOpen: boolean) => {
        this.ariaExpanded = isOpen;

        const prevIsOpen = this.isOpen;
        this.isOpen = isOpen;

        // openChange fires false on initialization because signpost starts as closed by default
        // but we shouldn't focus on that initial false value
        // we should focus back only if it's closed after being opened
        if (!this.isOpen && prevIsOpen) {
          this.focusOnClose();
        }
      }),
      this.signpostIdService.id.subscribe(idChange => (this.ariaControl = idChange))
    );
  }

  private focusOnClose() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    // we have to set the focus back on the trigger only if the focus is reset back to the body element
    // if the focus is on another element, we are not allowed to move that focus back to this trigger again.
    if (!this.isOpen && this.document.activeElement === this.document.body) {
      this.signpostFocusManager.focusTrigger();
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  /**********
   *
   * @description
   * click handler for the ClrSignpost trigger button used to hide/show ClrSignpostContent.
   */
  @HostListener('click', ['$event'])
  onSignpostTriggerClick(event: Event): void {
    this.toggleService.toggleWithEvent(event);
  }
}
