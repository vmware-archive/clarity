/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
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
  OnInit,
} from '@angular/core';
import { FocusTrapTracker } from './focus-trap-tracker.service';
import { FocusTrapConfig } from './focus-trap-config.interface';

export const FOCUSABLES =
  '[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [contenteditable="true"]:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"]) ';

@Directive({ selector: '[clrFocusTrap]' })
export class FocusTrapDirective implements OnInit, AfterViewInit, OnDestroy {
  private previousActiveElement: any;
  private localFocusEscaped = false;
  private document: Document;
  private parentElement: Element;

  private topReboundEl: any;
  private bottomReboundEl: any;

  private firstFocusableEl: HTMLElement;
  private lastFocusableEl: HTMLElement;

  constructor(
    private el: ElementRef,
    private injector: Injector,
    private focusTrapsTracker: FocusTrapTracker,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.document = this.injector.get(DOCUMENT);
    this.focusTrapsTracker.current = this;
  }

  private _config: FocusTrapConfig = {
    strict: true,
  };
  @Input('clrFocusTrap')
  set config(config: FocusTrapConfig | string) {
    this._config = Object.assign(this._config, config === '' ? {} : config);
  }

  @HostListener('document:focusin', ['$event'])
  onFocusIn(event: any) {
    const nativeElement: HTMLElement = this.el.nativeElement;
    if (
      this.focusTrapsTracker.current !== this ||
      !isPlatformBrowser(this.platformId) ||
      this.localFocusEscaped ||
      nativeElement.contains(event.target)
    ) {
      return;
    }
    if (event.target === this.topReboundEl && nativeElement.contains(event.relatedTarget)) {
      this.focusLastFocusable();
      // if it fails to focus element inside the trap, focus the trap element.
      this.focusTrapElIfOutside();
    } else if (event.target === this.bottomReboundEl && nativeElement.contains(event.relatedTarget)) {
      this.focusFirstFocusable();
      // if it fails to focus element inside the trap, focus the trap element.
      this.focusTrapElIfOutside();
    } else {
      this._config.strict ? this.el.nativeElement.focus() : (this.localFocusEscaped = true);
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

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '-1');
      this.el.nativeElement.focus();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.previousActiveElement = this.document.activeElement as HTMLElement;
      this.parentElement = this.el.nativeElement.parentElement;
    }

    this.addReboundEls();
  }

  private get potentiallyFocusableEls(): HTMLElement[] {
    return [...this.el.nativeElement.querySelectorAll(FOCUSABLES)];
  }

  private focusFirstFocusable() {
    for (let i = 0; i < this.potentiallyFocusableEls.length; i++) {
      this.firstFocusableEl = this.focusElement(this.potentiallyFocusableEls[i]);
      if (this.firstFocusableEl) {
        break;
      }
    }
  }

  private focusLastFocusable() {
    for (let i = this.potentiallyFocusableEls.length - 1; i >= 0; i--) {
      this.lastFocusableEl = this.focusElement(this.potentiallyFocusableEls[i]);
      if (this.lastFocusableEl) {
        break;
      }
    }
  }

  private focusTrapElIfOutside() {
    if (!this.el.nativeElement.contains(document.activeElement)) {
      this.el.nativeElement.focus();
    }
  }

  private focusElement(el: HTMLElement): HTMLElement | null {
    if (el && el.focus) {
      el.focus();
      if (document.activeElement === el) {
        return el;
      }
    }
    return null;
  }

  ngOnDestroy() {
    this.removeReboundEls();
    this.setPreviousFocus();
    this.focusTrapsTracker.activatePreviousTrapper();
  }
}
