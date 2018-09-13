/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, Inject, Injector, Input, Optional } from '@angular/core';

import { AbstractPopover } from '../common/abstract-popover';
import { POPOVER_HOST_ANCHOR } from '../common/popover-host-anchor.token';

import { SIGNPOST_POSITIONS } from './signpost-positions';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';

// aka where the arrow / pointer is at in relation to the anchor
const POSITIONS: string[] = [
  'top-left',
  'top-middle',
  'top-right',
  'right-top',
  'right-middle', // default
  'right-bottom',
  'bottom-right',
  'bottom-middle',
  'bottom-left',
  'left-bottom',
  'left-middle',
  'left-top',
];

@Component({
  selector: 'clr-signpost-content',
  template: `
        <div class="signpost-flex-wrap">
            <div class="popover-pointer"></div>
            <div class="signpost-content-header">
                <button type="button" class="signpost-action close" (click)="close()">
                    <clr-icon shape="close" [attr.title]="commonStrings.close"></clr-icon>
                </button>
            </div>
            <div class="signpost-content-body">
                <ng-content></ng-content>
            </div>
        </div>
    `,
  host: { '[class.signpost-content]': 'true' },
})
export class ClrSignpostContent extends AbstractPopover {
  constructor(
    injector: Injector,
    @Optional()
    @Inject(POPOVER_HOST_ANCHOR)
    parentHost: ElementRef,
    commonStrings: ClrCommonStrings
  ) {
    if (!parentHost) {
      throw new Error('clr-signpost-content should only be used inside of a clr-signpost');
    }
    super(injector, parentHost);
    this.commonStrings = commonStrings;
    // Defaults
    this.position = 'right-middle';
    this.closeOnOutsideClick = true;
  }

  commonStrings: ClrCommonStrings;

  /**********
   *
   * @description
   * Close function that uses the signpost instance to toggle the state of the content popover.
   *
   */
  close() {
    this.ifOpenService.open = false;
  }

  private _position: string;

  get position() {
    return this._position;
  }

  /*********
   *
   * @description
   * A setter for the position of the ClrSignpostContent popover. This is a combination of the following:
   * - anchorPoint - where on the trigger to anchor the ClrSignpostContent
   * - popoverPoint - where on the ClrSignpostContent container to align with the anchorPoint
   * - offsetY - where on the Y axis to align the ClrSignpostContent so it meets specs
   * - offsetX - where on the X axis to align the ClrSignpostContent so it meets specs
   * There are 12 possible positions to place a ClrSignpostContent container:
   * - top-left
   * - top-middle
   * - top-right
   * - right-top
   * - right-middle
   * - right-bottom
   * - bottom-right
   * - bottom-middle
   * - bottom-left
   * - left-bottom
   * - left-middle
   * - left-top
   *
   * I think of it as follows for 'top-left' -> CONTAINER_SIDE-SIDE_POSITION. In this case CONTAINER_SIDE is 'top'
   * meaning the top of the trigger icon (above the icon that hides/shows) the ClrSignpostContent. And, SIDE_POSITION
   * is 'left' meaning two things: 1) the ClrSignpostContent container extends to the left and 2) the 'arrow/pointer'
   * linking the SingpostContent to the trigger points down at the horizontal center of the trigger icon.
   *
   * @param newPosition
   */
  @Input('clrPosition')
  set position(position: string) {
    // Ugh
    this.renderer.removeClass(this.el.nativeElement, this.position);
    if (position && POSITIONS.indexOf(position) > -1) {
      this._position = position;
    } else {
      this._position = 'right-middle';
    }
    // Ugh
    this.renderer.addClass(this.el.nativeElement, this.position);

    const setPosition = SIGNPOST_POSITIONS[this.position];
    this.anchorPoint = setPosition.anchorPoint;
    this.popoverPoint = setPosition.popoverPoint;
    this.popoverOptions.offsetY = setPosition.offsetY;
    this.popoverOptions.offsetX = setPosition.offsetX;
  }
}
