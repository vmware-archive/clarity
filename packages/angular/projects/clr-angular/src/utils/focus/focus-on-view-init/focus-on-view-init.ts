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
  Input,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { FOCUS_ON_VIEW_INIT } from './focus-on-view-init.provider';

/*  This directive is for guiding the document focus to the newly added content when its view is initialized
    so that assistive technologies can read its content. */
@Directive({
  selector: '[clrFocusOnViewInit]',
})
export class ClrFocusOnViewInit implements AfterViewInit {
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(FOCUS_ON_VIEW_INIT) private focusOnViewInit: boolean,
    @Inject(DOCUMENT) document: any,
    private renderer: Renderer2
  ) {
    this._isEnabled = this.focusOnViewInit;

    // Angular compiler doesn't understand the type Document
    // when working out the metadata for injectable parameters,
    // even though it understands the injection token DOCUMENT
    // https://github.com/angular/angular/issues/20351
    this.document = document;
  }

  private document: Document;
  private directFocus = true; // true if the element gets focused without need to set tabindex;

  @HostListener('focusout')
  onFocusout() {
    if (!this.directFocus) {
      // manually set attributes and styles should be removed
      this.renderer.removeAttribute(this.el.nativeElement, 'tabindex');
      this.renderer.setStyle(this.el.nativeElement, 'outline', null);
    }
  }

  private _isEnabled: boolean;
  @Input('clrFocusOnViewInit')
  set isEnabled(value: boolean) {
    if (this.focusOnViewInit && typeof value === 'boolean') {
      this._isEnabled = value;
    }
  }

  ngAfterViewInit() {
    this.focus();
  }

  private focus() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    if (!this._isEnabled) {
      return;
    }
    if (this.document && this.document.activeElement !== this.el.nativeElement) {
      this.el.nativeElement.focus();
      if (this.document.activeElement !== this.el.nativeElement) {
        // if it's not directly focused now, it means it was a non-interactive element
        // so we need to give it a tabindex.
        this.directFocus = false;
        this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '-1');
        this.renderer.setStyle(this.el.nativeElement, 'outline', 'none');
        this.el.nativeElement.focus();
      }
    }
  }
}
