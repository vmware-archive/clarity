/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Optional, ElementRef, AfterViewInit } from '@angular/core';
import { ControlIdService } from './providers/control-id.service';
import { ClrAriaLiveService } from '../../utils/a11y/aria-live.service';

@Component({
  providers: [ClrAriaLiveService],
  selector: 'clr-control-error',
  template: `
    <ng-content></ng-content>
    `,
  host: {
    '[class.clr-subtext]': 'true',
    '[id]': 'controlIdService?.id + "-error"',
  },
})
export class ClrControlError implements AfterViewInit {
  constructor(
    @Optional() public controlIdService: ControlIdService,
    private ariaLiveService: ClrAriaLiveService,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    /** @deprecated since 3.0, remove in 4.0 */
    this.ariaLiveService.announce(this.el.nativeElement);
  }
}
