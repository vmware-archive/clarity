/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, ElementRef, Inject, PLATFORM_ID, HostBinding } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[clrKeyFocusItem]',
})
export class ClrKeyFocusItem {
  @HostBinding('attr.tabindex') tabIndex = -1;

  get nativeElement() {
    return this.elementRef.nativeElement;
  }

  constructor(private elementRef: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  focus() {
    if (isPlatformBrowser(this.platformId)) {
      this.elementRef.nativeElement.focus();
    }
  }
}
