/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
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
  Input,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';

import { FocusTrapTracker } from './focus-trap-tracker.service';

@Directive({ selector: '[clrFocusTrap]' })
export class FocusTrapDirective implements AfterViewInit, OnDestroy {
  private previousActiveElement: any;
  private lastActiveElement: any;
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

  @Input() localizeTrap = false;

  @HostListener('document:focusin', ['$event'])
  onFocusIn(event: FocusEvent) {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const target: HTMLElement = <HTMLElement>event.target;

    console.log(event.target);
    const focusableItems: NodeListOf<HTMLElement> = nativeElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (
      !this.localizeTrap &&
      this.focusTrapsTracker.current === this &&
      event.target &&
      !nativeElement.contains(target)
    ) {
      nativeElement.focus();
    } else if (this.localizeTrap && target.classList.contains('offscreen-focus-rebounder-end')) {
      console.log('hit end');
      // focusableItems[1].focus();
      nativeElement.focus();
    } else if (this.localizeTrap && target.classList.contains('offscreen-focus-rebounder-start')) {
      console.log('hit start', this.lastActiveElement, focusableItems);
      focusableItems[focusableItems.length - 2].focus();
    }
    this.lastActiveElement = nativeElement;
  }

  private createFocusableOffScreenEl(position: 'start' | 'end'): any {
    // Not using Renderer2's createElement method because that leads to DOM leakage.
    // https://github.com/angular/angular/issues/26954
    const offScreenSpan = this.document.createElement('span');
    this.renderer.setAttribute(offScreenSpan, 'tabindex', '0');
    this.renderer.addClass(offScreenSpan, 'offscreen-focus-rebounder');
    this.renderer.addClass(offScreenSpan, `offscreen-focus-rebounder-${position}`);

    return offScreenSpan;
  }

  private getTargetElement() {
    return this.localizeTrap ? this.el.nativeElement : this.document.body;
  }

  private addReboundEls() {
    // We will add these focus rebounding elements only in the following conditions:
    // 1. It should be running inside browser platform as it accesses document.body element
    // 2. We should NOT add them more than once. Hence, we are counting a number of focus trappers
    //    and only add on the first focus trapper.

    if (isPlatformBrowser(this.platformId) && this.focusTrapsTracker.nbFocusTrappers === 1) {
      this.topReboundEl = this.createFocusableOffScreenEl('start');
      this.bottomReboundEl = this.createFocusableOffScreenEl('end');
      // Add reboundBeforeTrapEl to the document body as the first child
      const element = this.getTargetElement();
      if (this.localizeTrap) {
        this.renderer.insertBefore(element.parentElement, this.topReboundEl, element);
      } else {
        this.renderer.insertBefore(element, this.topReboundEl, element.firstChild);
      }
      // Add reboundAfterTrapEl to the document body as the last child
      this.renderer.appendChild(element, this.bottomReboundEl);
    }
  }

  private removeReboundEls() {
    if (
      isPlatformBrowser(this.platformId) &&
      this.focusTrapsTracker.nbFocusTrappers === 1 &&
      this.topReboundEl &&
      this.bottomReboundEl
    ) {
      const element = this.getTargetElement();
      this.renderer.removeChild(element, this.topReboundEl);
      this.renderer.removeChild(element, this.bottomReboundEl);

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
