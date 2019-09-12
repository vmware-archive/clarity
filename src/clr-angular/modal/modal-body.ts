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
    '[attr.tabindex]': 'tabindex',
  },
})
export class ClrModalBody {
  tabindex = 0;

  @HostListener('mousedown')
  mouseDown() {
    // tabindex = 0 binding should be removed
    // so it won't be focused when click starts with mousedown
    delete this.tabindex;
  }

  @HostListener('mouseup')
  mouseUp() {
    // set the tabindex binding back when click is completed with mouseup
    this.tabindex = 0;
  }
}
