/**
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Optional, ElementRef, AfterViewInit } from '@angular/core';
import { ControlIdService } from './providers/control-id.service';
import { AriaLiveService } from '../../utils/a11y/aria-live.service';

@Component({
  providers: [AriaLiveService],
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
    private ariaLiveService: AriaLiveService,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    this.ariaLiveService.announce(this.el.nativeElement);
  }
}
