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
} from '@angular/core';

import { FocusTrapTracker } from './focus-trap-tracker.service';

@Directive({ selector: '[clrFocusTrap]' })
export class FocusTrapDirective implements AfterViewInit, OnDestroy {
  private previousActiveElement: any;
  private document: Document;

  constructor(
    private el: ElementRef,
    private injector: Injector,
    private focusTrapsTracker: FocusTrapTracker,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.document = this.injector.get(DOCUMENT);
    this.focusTrapsTracker.current = this;
  }

  @HostListener('document:focusin', ['$event'])
  onFocusIn(event: any) {
    const nativeElement: HTMLElement = this.el.nativeElement;

    if (this.focusTrapsTracker.current === this && !nativeElement.contains(event.target)) {
      nativeElement.focus();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.previousActiveElement = <HTMLElement>this.document.activeElement;
      this.el.nativeElement.setAttribute('tabindex', '0');
    }
  }

  public setPreviousFocus(): void {
    if (this.previousActiveElement && this.previousActiveElement.focus) {
      this.previousActiveElement.focus();
    }
  }

  ngOnDestroy() {
    this.setPreviousFocus();
    this.focusTrapsTracker.activatePreviousTrapper();
  }
}
