/**
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Optional, HostBinding, Input } from '@angular/core';
import { ControlIdService } from './providers/control-id.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clr-control-error',
  template: `
    <ng-content></ng-content>
    `,
  host: {
    '[class.clr-subtext]': 'true',
    '[attr.aria-live]': '"polite"',
  },
})
export class ClrControlError {
  @Input('aria-describedby')
  @HostBinding('attr.aria-describedby')
  describedByAttr: string = null;

  private subscriptions: Subscription[] = [];

  constructor(@Optional() private controlIdService: ControlIdService) {}

  ngOnInit() {
    if (this.controlIdService && !this.describedByAttr) {
      this.subscriptions.push(this.controlIdService.idChange.subscribe(id => (this.describedByAttr = id)));
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
