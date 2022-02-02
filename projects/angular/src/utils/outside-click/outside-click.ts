/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, ElementRef, EventEmitter, Input, NgZone, OnDestroy, Output, Renderer2 } from '@angular/core';

@Directive({ selector: '[clrOutsideClick]' })
export class OutsideClick implements OnDestroy {
  @Input('clrStrict') strict = false;

  @Output('clrOutsideClick') outsideClick = new EventEmitter<any>(false);

  private documentClickListener: VoidFunction;

  constructor(host: ElementRef<HTMLElement>, renderer: Renderer2, ngZone: NgZone) {
    ngZone.runOutsideAngular(() => {
      this.documentClickListener = renderer.listen('document', 'click', (event: MouseEvent) => {
        // Compare the element in the DOM on which the mouse was clicked
        // with the current actionMenu native HTML element.
        if (host.nativeElement === event.target) {
          return;
        }

        if (!this.strict && host.nativeElement.contains(event.target as HTMLElement)) {
          return;
        }

        // We'll run change detection only if the click event actually happened outside of
        // the host element.
        ngZone.run(() => {
          this.outsideClick.emit(event);
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.documentClickListener();
  }
}
