/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { Directive, ElementRef, EventEmitter, Output, HostListener, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClrSmartPopoverEventsService } from './providers/smart-popover-events.service';
import { ClrSmartPopoverToggleService } from './providers/smart-popover-toggle.service';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[clrSmartCloseButton]',
  host: {
    '[class.clr-smart-close-button]': 'true',
  },
})
export class ClrSmartCloseButton implements OnDestroy, AfterViewInit {
  private subscriptions: Subscription[] = [];

  constructor(
    private elementRef: ElementRef,
    private smartEventsService: ClrSmartPopoverEventsService,
    private smartOpenService: ClrSmartPopoverToggleService
  ) {
    this.subscriptions.push(
      smartOpenService.openChange.pipe(filter(value => !value)).subscribe(() => {
        this.closeChange.next();
      })
    );
  }

  @Output('clrSmartOnCloseChange') closeChange: EventEmitter<void> = new EventEmitter<void>();

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent) {
    this.smartOpenService.toggleWithEvent(event);
    this.smartEventsService.setAnchorFocus();
  }

  ngAfterViewInit() {
    this.smartEventsService.closeButtonRef = this.elementRef;
    this.smartEventsService.setCloseFocus();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
