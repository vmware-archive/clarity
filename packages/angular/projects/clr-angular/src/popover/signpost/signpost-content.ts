/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, Inject, Injector, Input, Optional, OnDestroy, PLATFORM_ID } from '@angular/core';

import { AbstractPopover } from '../common/abstract-popover';
import { POPOVER_HOST_ANCHOR } from '../common/popover-host-anchor.token';

import { SIGNPOST_POSITIONS } from './signpost-positions';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { SignpostIdService } from './providers/signpost-id.service';
import { SignpostFocusManager } from './providers/signpost-focus-manager.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

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
    <div class="signpost-wrap">
      <div class="popover-pointer"></div>
      <div class="signpost-content-body">
        <ng-content></ng-content>
      </div>
      <div class="signpost-content-header">
        <button
          type="button"
          [attr.aria-label]="commonStrings.keys.signpostClose"
          class="signpost-action close"
          (click)="close()"
          [attr.aria-controls]="signpostContentId"
        >
          <clr-icon shape="close" [attr.title]="commonStrings.keys.close"></clr-icon>
        </button>
      </div>
    </div>
  `,
  host: { '[class.signpost-content]': 'true', '[id]': 'signpostContentId' },
  providers: [UNIQUE_ID_PROVIDER],
})
export class ClrSignpostContent extends AbstractPopover implements OnDestroy {
  private document: Document;

  constructor(
    injector: Injector,
    @Optional()
    @Inject(POPOVER_HOST_ANCHOR)
    parentHost: ElementRef,
    public commonStrings: ClrCommonStringsService,
    @Inject(UNIQUE_ID) public signpostContentId: string,
    private signpostIdService: SignpostIdService,
    private signpostFocusManager: SignpostFocusManager,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(DOCUMENT) document: any
  ) {
    super(injector, parentHost);
    if (!parentHost) {
      throw new Error('clr-signpost-content should only be used inside of a clr-signpost');
    }
    // Defaults
    this.position = 'right-middle';
    this.closeOnOutsideClick = true;
    this.signpostIdService.setId(signpostContentId);

    this.document = document;
  }

  /**********
   *
   * @description
   * Close function that uses the signpost instance to toggle the state of the content popover.
   *
   */
  close() {
    this.toggleService.open = false;
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

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId) && this.el.nativeElement.contains(this.document.activeElement)) {
      this.signpostFocusManager.focusTrigger();
    }
  }
}
