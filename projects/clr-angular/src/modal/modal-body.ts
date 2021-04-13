/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, ElementRef, NgZone, OnDestroy, Renderer2 } from '@angular/core';

/**
 * Allows modal overflow area to be scrollable via keyboard.
 * The modal body will focus with keyboard navigation only.
 * This allows inner focusable items to be focused without
 * the overflow scroll being focused.
 */
@Directive({ selector: '.modal-body' })
export class ClrModalBody implements OnDestroy {
  private tabindex = '0';
  private unlisteners: VoidFunction[] = [];

  constructor(ngZone: NgZone, renderer: Renderer2, host: ElementRef<HTMLElement>) {
    renderer.setAttribute(host.nativeElement, 'tabindex', this.tabindex);

    ngZone.runOutsideAngular(() => {
      this.unlisteners.push(
        renderer.listen(host.nativeElement, 'mouseup', () => {
          // set the tabindex binding back when click is completed with mouseup
          renderer.setAttribute(host.nativeElement, 'tabindex', this.tabindex);
        }),
        renderer.listen(host.nativeElement, 'mousedown', () => {
          // tabindex = 0 binding should be removed
          // so it won't be focused when click starts with mousedown
          renderer.removeAttribute(host.nativeElement, 'tabindex');
        })
      );
    });
  }

  ngOnDestroy(): void {
    while (this.unlisteners.length) {
      this.unlisteners.pop()();
    }
  }
}
