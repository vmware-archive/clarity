/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isPlatformBrowser } from '@angular/common';
import { ElementRef, Inject, Injectable, PLATFORM_ID, Renderer2 } from '@angular/core';
import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../../id-generator/id-generator.service';
import { FocusableItem } from './focusable-item';

@Injectable()
export class BasicFocusableItem implements FocusableItem {
  constructor(
    @Inject(UNIQUE_ID) public id: string,
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    renderer.setAttribute(el.nativeElement, 'id', id);
    renderer.setAttribute(el.nativeElement, 'tabindex', '-1');
  }

  disabled = false;

  focus() {
    this.renderer.addClass(this.el.nativeElement, 'focus');
  }
  blur() {
    this.renderer.removeClass(this.el.nativeElement, 'focus');
  }

  activate() {
    if (isPlatformBrowser(this.platformId)) {
      this.el.nativeElement.click();
    }
  }
}

export const BASIC_FOCUSABLE_ITEM_PROVIDER = [
  UNIQUE_ID_PROVIDER,
  {
    provide: FocusableItem,
    useClass: BasicFocusableItem,
  },
];
