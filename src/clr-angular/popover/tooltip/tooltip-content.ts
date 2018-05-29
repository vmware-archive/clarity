/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, Inject, Injector, Input, Optional } from '@angular/core';
import { AbstractPopover } from '../common/abstract-popover';
import { Point } from '../common/popover';
import { POPOVER_HOST_ANCHOR } from '../common/popover-host-anchor.token';

const POSITIONS: string[] = ['bottom-left', 'bottom-right', 'top-left', 'top-right', 'right', 'left'];

const SIZES: string[] = ['xs', 'sm', 'md', 'lg'];

@Component({
  selector: 'clr-tooltip-content',
  template: `
        <ng-content></ng-content>
    `,
  host: {
    '[class.tooltip-content]': 'true',
    // I'm giving up on animation, they did not work before and will not work now.
    // Too many conflicts with Clarity UI.
    '[style.opacity]': '1',
  },
})
export class ClrTooltipContent extends AbstractPopover {
  constructor(
    injector: Injector,
    @Optional()
    @Inject(POPOVER_HOST_ANCHOR)
    parentHost: ElementRef
  ) {
    if (!parentHost) {
      throw new Error('clr-tooltip-content should only be used inside of a clr-tooltip');
    }
    super(injector, parentHost);
    // Defaults
    this.position = 'right';
    this.size = 'sm';
  }

  private _position: string;

  get position() {
    return this._position;
  }

  @Input('clrPosition')
  set position(position: string) {
    // Ugh
    this.renderer.removeClass(this.el.nativeElement, 'tooltip-' + this.position);
    if (position && POSITIONS.indexOf(position) > -1) {
      this._position = position;
    } else {
      this._position = 'right';
    }
    // Ugh
    this.renderer.addClass(this.el.nativeElement, 'tooltip-' + this.position);

    // set the popover values based on direction
    switch (position) {
      case 'top-right':
        this.anchorPoint = Point.TOP_CENTER;
        this.popoverPoint = Point.LEFT_BOTTOM;
        break;
      case 'top-left':
        this.anchorPoint = Point.TOP_CENTER;
        this.popoverPoint = Point.RIGHT_BOTTOM;
        break;
      case 'bottom-right':
        this.anchorPoint = Point.BOTTOM_CENTER;
        this.popoverPoint = Point.LEFT_TOP;
        break;
      case 'bottom-left':
        this.anchorPoint = Point.BOTTOM_CENTER;
        this.popoverPoint = Point.RIGHT_TOP;
        break;
      case 'right':
        this.anchorPoint = Point.RIGHT_CENTER;
        this.popoverPoint = Point.LEFT_TOP;
        break;
      case 'left':
        this.anchorPoint = Point.LEFT_CENTER;
        this.popoverPoint = Point.RIGHT_TOP;
        break;
      default:
        this.anchorPoint = Point.RIGHT_CENTER;
        this.popoverPoint = Point.LEFT_TOP;
        break;
    }
  }

  private _size: string;

  get size() {
    return this._size;
  }

  @Input('clrSize')
  set size(size: string) {
    // Ugh
    this.renderer.removeClass(this.el.nativeElement, 'tooltip-' + this.size);
    if (size && SIZES.indexOf(size) > -1) {
      this._size = size;
    } else {
      this._size = 'sm';
    }
    // Ugh
    this.renderer.addClass(this.el.nativeElement, 'tooltip-' + this.size);
  }
}
