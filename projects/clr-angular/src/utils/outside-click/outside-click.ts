/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({ selector: '[clrOutsideClick]' })
export class OutsideClick {
  constructor(private el: ElementRef) {}

  @Input('clrStrict') strict = false;

  @Output('clrOutsideClick') outsideClick = new EventEmitter<any>(false);

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    const target = event.target; // Get the element in the DOM on which the mouse was clicked
    const host = this.el.nativeElement; // Get the current actionMenu native HTML element

    if (target === host) {
      return;
    }
    if (!this.strict && host.contains(target)) {
      return;
    }
    this.outsideClick.emit(event);
  }
}
