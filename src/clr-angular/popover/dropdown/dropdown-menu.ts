/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, Inject, Injector, Input, Optional, SkipSelf } from '@angular/core';
import { AbstractPopover } from '../common/abstract-popover';
import { Point } from '../common/popover';
import { POPOVER_HOST_ANCHOR } from '../common/popover-host-anchor.token';

@Component({
  selector: 'clr-dropdown-menu',
  template: `
        <ng-content></ng-content>
    `,
  host: {
    '[class.dropdown-menu]': 'true',
  },
})
export class ClrDropdownMenu extends AbstractPopover {
  constructor(
    injector: Injector,
    @Optional()
    @Inject(POPOVER_HOST_ANCHOR)
    parentHost: ElementRef,
    @Optional()
    @SkipSelf()
    nested: ClrDropdownMenu
  ) {
    if (!parentHost) {
      throw new Error('clr-dropdown-menu should only be used inside of a clr-dropdown');
    }
    super(injector, parentHost);
    if (!nested) {
      // Default positioning for normal dropdown is bottom-left
      this.anchorPoint = Point.BOTTOM_LEFT;
      this.popoverPoint = Point.LEFT_TOP;
    } else {
      // Default positioning for nested dropdown is right-top
      this.anchorPoint = Point.RIGHT_TOP;
      this.popoverPoint = Point.LEFT_TOP;
    }
    this.popoverOptions.allowMultipleOpen = true;
    this.closeOnOutsideClick = true;
  }

  @Input('clrPosition')
  set position(position: string) {
    // set the popover values based on menu position
    switch (position) {
      case 'top-right':
        this.anchorPoint = Point.TOP_RIGHT;
        this.popoverPoint = Point.RIGHT_BOTTOM;
        break;
      case 'top-left':
        this.anchorPoint = Point.TOP_LEFT;
        this.popoverPoint = Point.LEFT_BOTTOM;
        break;
      case 'bottom-right':
        this.anchorPoint = Point.BOTTOM_RIGHT;
        this.popoverPoint = Point.RIGHT_TOP;
        break;
      case 'bottom-left':
        this.anchorPoint = Point.BOTTOM_LEFT;
        this.popoverPoint = Point.LEFT_TOP;
        break;
      case 'right-top':
        this.anchorPoint = Point.RIGHT_TOP;
        this.popoverPoint = Point.LEFT_TOP;
        break;
      case 'right-bottom':
        this.anchorPoint = Point.RIGHT_BOTTOM;
        this.popoverPoint = Point.LEFT_BOTTOM;
        break;
      case 'left-top':
        this.anchorPoint = Point.LEFT_TOP;
        this.popoverPoint = Point.RIGHT_TOP;
        break;
      case 'left-bottom':
        this.anchorPoint = Point.LEFT_BOTTOM;
        this.popoverPoint = Point.RIGHT_BOTTOM;
        break;
      default:
        this.anchorPoint = Point.BOTTOM_LEFT;
        this.popoverPoint = Point.LEFT_TOP;
        break;
    }
  }
}
