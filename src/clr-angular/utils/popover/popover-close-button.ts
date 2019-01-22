/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { Directive, ElementRef, EventEmitter, Output, HostListener, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClrPopoverEventsService } from './providers/popover-events.service';
import { ClrPopoverToggleService } from './providers/popover-toggle.service';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[clrPopoverCloseButton]',
  host: {
    '[class.clr-smart-close-button]': 'true',
  },
})
export class ClrPopoverCloseButton implements OnDestroy, AfterViewInit {
  private subscriptions: Subscription[] = [];

  constructor(
    private elementRef: ElementRef,
    private smartEventsService: ClrPopoverEventsService,
    private smartOpenService: ClrPopoverToggleService
  ) {
    this.subscriptions.push(
      smartOpenService.openChange.pipe(filter(value => !value)).subscribe(() => {
        this.closeChange.next();
      })
    );
  }

  @Output('clrPopoverOnCloseChange') closeChange: EventEmitter<void> = new EventEmitter<void>();

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
