/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { Directive, EventEmitter, HostListener, OnDestroy, Output } from '@angular/core';
import { ClrSmartPopoverToggleService } from './providers/smart-popover-toggle.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[clrSmartOpenCloseButton]',
  host: {
    '[class.clr-smart-open-close]': 'true',
  },
})
export class ClrSmartOpenCloseButton implements OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(private smartOpenService: ClrSmartPopoverToggleService) {
    this.subscriptions.push(
      this.smartOpenService.openChange.subscribe(change => {
        this.openCloseChange.next(change);
      })
    );
  }

  @Output('clrSmartOpenCloseChange') openCloseChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent) {
    this.smartOpenService.toggleWithEvent(event);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
