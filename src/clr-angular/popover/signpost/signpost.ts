/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChild, ElementRef } from '@angular/core';

import { IfOpenService } from '../../utils/conditional/if-open.service';
import { POPOVER_HOST_ANCHOR } from '../common/popover-host-anchor.token';

import { ClrSignpostTrigger } from './signpost-trigger';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';

@Component({
  selector: 'clr-signpost',
  template: `
        <ng-container *ngIf="!useCustomTrigger">
            <button
                type="button"
                class="signpost-action btn btn-small btn-link"
                clrSignpostTrigger>
                <clr-icon shape="info" [attr.title]="commonStrings.info"></clr-icon>
            </button>
        </ng-container>
        
        <ng-content></ng-content>
    `,
  host: { '[class.signpost]': 'true' },
  providers: [IfOpenService, { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef }],
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
  constructor(public commonStrings: ClrCommonStrings) {}

  /**********
   * @property useCustomTrigger
   *
   * @description
   * Flag used to determine if we need to use the default trigger or a user supplied trigger element.
   *
   */
  public useCustomTrigger: boolean = false;

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
