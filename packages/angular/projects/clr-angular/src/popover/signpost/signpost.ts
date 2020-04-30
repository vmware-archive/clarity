/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChild, ElementRef } from '@angular/core';

import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { POPOVER_HOST_ANCHOR } from '../common/popover-host-anchor.token';

import { ClrSignpostTrigger } from './signpost-trigger';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { SignpostIdService } from './providers/signpost-id.service';
import { SignpostFocusManager } from './providers/signpost-focus-manager.service';

@Component({
  selector: 'clr-signpost',
  template: `
    <ng-container *ngIf="!useCustomTrigger">
      <button type="button" class="signpost-action btn btn-small btn-link" clrSignpostTrigger>
        <clr-icon shape="info" [attr.title]="commonStrings.keys.info"></clr-icon>
      </button>
    </ng-container>

    <ng-content></ng-content>
  `,
  host: { '[class.signpost]': 'true' },
  providers: [
    ClrPopoverToggleService,
    SignpostFocusManager,
    { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef },
    SignpostIdService,
  ],
})

/*********
 *
 * @class ClrSignpost
 *
 * @description
 * Class used to configure and control the state of a ClrSignpost and its associated ClrSignpostContent.
 * It supports the clrPosition with a 'right-middle' default.
 *
 */
export class ClrSignpost {
  constructor(public commonStrings: ClrCommonStringsService) {}

  /**********
   * @property useCustomTrigger
   *
   * @description
   * Flag used to determine if we need to use the default trigger or a user supplied trigger element.
   *
   */
  public useCustomTrigger = false;

  /**********
   * @property signPostTrigger
   *
   * @description
   * Uses ContentChild to check for a user supplied element with the ClrSignpostTrigger on it.
   *
   */
  @ContentChild(ClrSignpostTrigger)
  set customTrigger(trigger: ClrSignpostTrigger) {
    this.useCustomTrigger = !!trigger;
  }
}
