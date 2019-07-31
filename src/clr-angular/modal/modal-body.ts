/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, HostListener } from '@angular/core';

/**
 * Allows modal overflow area to be scrollable via keyboard.
 * The modal body will focus with keyboard navigation only.
 * This allows inner focusable items to be focused without
 * the overflow scroll being focused.
 */
@Directive({
  selector: '.modal-body',
  host: {
    '[attr.tabindex]': '"0"',
  },
})
export class ClrModalBody {
  private _mouseDown = false;

  @HostListener('focus', ['$event'])
  focus(event) {
    if (this._mouseDown) {
      event.target.blur();
    }
  }

  @HostListener('mousedown')
  mouseDown() {
    this._mouseDown = true;
  }

  @HostListener('mouseup')
  mouseUp() {
    this._mouseDown = false;
  }
}
