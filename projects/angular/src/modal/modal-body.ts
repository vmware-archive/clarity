/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
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

  constructor(private readonly renderer: Renderer2, private readonly host: ElementRef<HTMLElement>, ngZone: NgZone) {
    ngZone.runOutsideAngular(() => {
      new ResizeObserver(() => this.addOrRemoveTabIndex()).observe(this.host.nativeElement);

      this.unlisteners.push(
        this.renderer.listen(this.host.nativeElement, 'mouseup', () => {
          // set the tabindex binding back when click is completed with mouseup
          this.addOrRemoveTabIndex();
        }),
        this.renderer.listen(this.host.nativeElement, 'mousedown', () => {
          // tabindex = 0 binding should be removed
          // so it won't be focused when click starts with mousedown
          this.removeTabIndex();
        })
      );
    });
  }

  ngOnDestroy(): void {
    while (this.unlisteners.length) {
      this.unlisteners.pop()();
    }
  }

  private addTabIndex() {
    this.renderer.setAttribute(this.host.nativeElement, 'tabindex', this.tabindex);
  }

  private removeTabIndex() {
    this.renderer.removeAttribute(this.host.nativeElement, 'tabindex');
  }

  private addOrRemoveTabIndex() {
    const modalBody = this.host.nativeElement.parentElement;

    if (modalBody.clientHeight < modalBody.scrollHeight) {
      this.addTabIndex();
    } else {
      this.removeTabIndex();
    }
  }
}
