/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Injector,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';

import { FocusTrapTracker } from './focus-trap-tracker.service';

@Directive({ selector: '[clrFocusTrap]' })
export class FocusTrapDirective implements AfterViewInit, OnDestroy {
  private previousActiveElement: any;
  private document: Document;

  private topReboundEl: any;
  private bottomReboundEl: any;

  constructor(
    private el: ElementRef,
    private injector: Injector,
    private focusTrapsTracker: FocusTrapTracker,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.document = this.injector.get(DOCUMENT);
    this.focusTrapsTracker.current = this;

    this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '0');
  }

  @HostListener('document:focusin', ['$event'])
  onFocusIn(event: any) {
    const nativeElement: HTMLElement = this.el.nativeElement;

    if (this.focusTrapsTracker.current === this && event.target && !nativeElement.contains(event.target)) {
      nativeElement.focus();
    }
  }

  private createFocusableOffScreenEl(): any {
    // Not using Renderer2's createElement method because that leads to DOM leakage.
    // https://github.com/angular/angular/issues/26954
    const offScreenSpan = this.document.createElement('span');
    this.renderer.setAttribute(offScreenSpan, 'tabindex', '0');
    this.renderer.addClass(offScreenSpan, 'offscreen-focus-rebounder');

    return offScreenSpan;
  }

  private addReboundEls() {
    // We will add these focus rebounding elements only in the following conditions:
    // 1. It should be running inside browser platform as it accesses document.body element
    // 2. We should NOT add them more than once. Hence, we are counting a number of focus trappers
    //    and only add on the first focus trapper.

    if (isPlatformBrowser(this.platformId) && this.focusTrapsTracker.nbFocusTrappers === 1) {
      this.topReboundEl = this.createFocusableOffScreenEl();
      this.bottomReboundEl = this.createFocusableOffScreenEl();
      // Add reboundBeforeTrapEl to the document body as the first child
      this.renderer.insertBefore(this.document.body, this.topReboundEl, this.document.body.firstChild);
      // Add reboundAfterTrapEl to the document body as the last child
      this.renderer.appendChild(this.document.body, this.bottomReboundEl);
    }
  }

  private removeReboundEls() {
    if (
      isPlatformBrowser(this.platformId) &&
      this.focusTrapsTracker.nbFocusTrappers === 1 &&
      this.topReboundEl &&
      this.bottomReboundEl
    ) {
      this.renderer.removeChild(this.document.body, this.topReboundEl);
      this.renderer.removeChild(this.document.body, this.bottomReboundEl);

      // These are here to to make sure that
      // we completely delete all traces of the removed DOM objects.
      delete this.topReboundEl;
      delete this.bottomReboundEl;
    }
  }

  public setPreviousFocus(): void {
    if (this.previousActiveElement && this.previousActiveElement.focus) {
      this.previousActiveElement.focus();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.previousActiveElement = <HTMLElement>this.document.activeElement;
    }

    this.addReboundEls();
  }

  ngOnDestroy() {
    this.removeReboundEls();
    this.setPreviousFocus();
    this.focusTrapsTracker.activatePreviousTrapper();
  }
}
