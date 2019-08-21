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
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';

/*  This directive is for guiding the document focus to the newly added content when its view is initialized 
    so that assistive technologies can read its content. */
@Directive({
  selector: '[clrFocusOnViewInit]',
})
export class ClrFocusOnViewInit implements AfterViewInit {
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    private injector: Injector,
    private renderer: Renderer2
  ) {
    this.document = this.injector.get(DOCUMENT);
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

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.document.activeElement === this.el.nativeElement) {
        return;
      }
      if (this.el.nativeElement) {
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
}
