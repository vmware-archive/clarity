/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { Directive, EventEmitter, HostListener, OnDestroy, Output } from '@angular/core';
import { ClrPopoverToggleService } from './providers/popover-toggle.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[clrPopoverOpenCloseButton]',
  host: {
    '[class.clr-smart-open-close]': 'true',
  },
})
export class ClrPopoverOpenCloseButton implements OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(private smartOpenService: ClrPopoverToggleService) {
    this.subscriptions.push(
      this.smartOpenService.openChange.subscribe(change => {
        this.openCloseChange.next(change);
      })
    );
  }

  @Output('clrPopoverOpenCloseChange') openCloseChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent) {
    this.smartOpenService.toggleWithEvent(event);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
