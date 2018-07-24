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
  }

  @HostListener('document:focusin', ['$event'])
  onFocusIn(event: any) {
    const nativeElement: HTMLElement = this.el.nativeElement;

    if (this.focusTrapsTracker.current === this && event.target && !nativeElement.contains(event.target)) {
      nativeElement.focus();
    }
  }

  private createFocusableOffScreenEl(nodeName: string, optionalClass?: string): any {
    const offScreenSpan = this.renderer.createElement(nodeName);
    this.renderer.setAttribute(offScreenSpan, 'tabindex', '0');
    this.renderer.addClass(offScreenSpan, 'offscreen-focus-rebounder');

    if (optionalClass) {
      this.renderer.addClass(offScreenSpan, optionalClass);
    }

    return offScreenSpan;
  }

  private addReboundEls() {
    // We will add these focus rebounding elements only in the following conditions:
    // 1. It should be running inside browser platform as it accesses document.body element
    // 2. We should add them more than once. Hence, we are counting a number of focus trappers
    //    and only add on the first focus trapper.

    if (this.focusTrapsTracker.nbFocusTrappers === 1) {
      this.topReboundEl = this.createFocusableOffScreenEl('span', 'before-focus-trap');
      this.bottomReboundEl = this.createFocusableOffScreenEl('span', 'after-focus-trap');

      // Add reboundBeforeTrapEl to the document body as the first child
      const bodyFirstChild = this.document.body.firstChild;
      if (bodyFirstChild) {
        this.renderer.insertBefore(this.document.body, this.topReboundEl, bodyFirstChild);
      }

      // Add reboundAfterTrapEl to the document body as the last child
      this.renderer.appendChild(this.document.body, this.bottomReboundEl);
    }
  }

  private removeReboundEls() {
    if (this.focusTrapsTracker.nbFocusTrappers === 1 && this.topReboundEl && this.bottomReboundEl) {
      this.renderer.removeChild(this.document.body, this.topReboundEl);
      this.renderer.removeChild(this.document.body, this.bottomReboundEl);
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
      this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '0');

      this.addReboundEls();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.removeReboundEls();
    }

    this.setPreviousFocus();
    this.focusTrapsTracker.activatePreviousTrapper();
  }
}
