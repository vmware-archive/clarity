/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
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

interface FocusTrapConfig {
  strict: boolean;
}

@Directive({ selector: '[clrFocusTrap]' })
export class FocusTrapDirective implements AfterViewInit, OnDestroy {
  private previousActiveElement: any;
  private previousTrappedActiveElement: any;
  private localFocusEscaped = false;
  private document: Document;
  private parentElement: Element;

  private topReboundEl: any;
  private bottomReboundEl: any;

  constructor(
    private el: ElementRef,
    private injector: Injector,
    private focusTrapsTracker: FocusTrapTracker,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.document = this.injector.get(DOCUMENT);
    this.focusTrapsTracker.current = this;

    this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '0');
  }

  private _config: FocusTrapConfig = {
    strict: true,
  };
  @Input('clrFocusTrap')
  set config(config: FocusTrapConfig) {
    this._config = Object.assign(this._config, config);
  }

  @HostListener('document:focusin', ['$event'])
  onFocusIn(event: any) {
    if (this.focusTrapsTracker.current !== this || !isPlatformBrowser(this.platformId) || this.localFocusEscaped) {
      return;
    }
    const nativeElement: HTMLElement = this.el.nativeElement;
    if (this._config.strict && event.target && !nativeElement.contains(event.target)) {
      // When the focus trap is global, always steal focus back if it goes outside
      nativeElement.focus();
    } else if (event.target === this.bottomReboundEl && nativeElement.contains(this.previousTrappedActiveElement)) {
      // When the focus trap is local, if the user navigates via keyboard to the end element from within the trap, move to top
      nativeElement.focus();
    } else if (event.target === this.topReboundEl) {
      // When the focus trap is local, if the user navigates via keyboard back to start element from within the trap, move to bottom
      // @TODO implement an acceptable solution to SHIFT+TAB navigation
    } else if (event.target !== nativeElement && !nativeElement.contains(event.target)) {
      // If a user has escaped the trap using the mouse
      // relax, don't do it, when you want to go to it, living those dreams, scheme those schemes, hit me with those laser beams
      this.localFocusEscaped = true;
    }
    // Track the last focused item, so we can check
    this.previousTrappedActiveElement = event.target;
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
    if (isPlatformBrowser(this.platformId)) {
      this.topReboundEl = this.createFocusableOffScreenEl();
      this.bottomReboundEl = this.createFocusableOffScreenEl();
      const hostElement = this.el.nativeElement;
      // Add reboundBeforeTrapEl right outside of host element
      this.renderer.insertBefore(hostElement.parentElement, this.topReboundEl, hostElement);
      // Add reboundAfterTrapEl right after host element
      if (hostElement.nextSibling) {
        this.renderer.insertBefore(hostElement.parentNode, this.bottomReboundEl, hostElement.nextSibling);
      } else {
        this.renderer.appendChild(hostElement.parentNode, this.bottomReboundEl);
      }
    }
  }

  private removeReboundEls() {
    if (isPlatformBrowser(this.platformId) && this.topReboundEl && this.bottomReboundEl) {
      this.parentElement.removeChild(this.topReboundEl);
      this.parentElement.removeChild(this.bottomReboundEl);
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
      this.previousActiveElement = this.document.activeElement as HTMLElement;
      this.parentElement = this.el.nativeElement.parentElement;
    }

    this.addReboundEls();
  }

  ngOnDestroy() {
    this.removeReboundEls();
    this.setPreviousFocus();
    this.focusTrapsTracker.activatePreviousTrapper();
  }
}
