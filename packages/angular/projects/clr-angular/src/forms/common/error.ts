/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Optional, ElementRef, AfterViewInit } from '@angular/core';
import { ControlIdService } from './providers/control-id.service';
import { ClrAriaLiveService } from '../../utils/a11y/aria-live.service';
import { ControlClassService } from './providers/control-class.service';

@Component({
  providers: [ClrAriaLiveService],
  selector: 'clr-control-error',
  template: ` <ng-content></ng-content> `,
  host: {
    '[class.clr-subtext]': 'true',
    '[id]': 'controlIdService?.id + "-error"',
  },
})
export class ClrControlError implements AfterViewInit {
  constructor(
    @Optional() public controlIdService: ControlIdService,
    @Optional() public controlClassService: ControlClassService,
    private ariaLiveService: ClrAriaLiveService,
    private el: ElementRef
  ) {}

  /** @deprecated since 3.0, remove in 4.0 - ariaLiveService */
  ngAfterViewInit() {
    /**
     * The way we render elements inside the `clr-control-container make this
     * component announce itself without been visible on the screen.
     *
     * The check below try to guess is clr-controll-error used in some of the
     * cases mention above and prevent us from announcing without the need of that.
     *
     * This change won't create breaking change - but will make aria live announcment
     * work only when the component is used outside forms or some of the components.
     *
     * This is temporary solution - until better is found.
     *
     */
    if (this.controlClassService === null) {
      this.ariaLiveService.announce(this.el.nativeElement);
    }
  }
}
