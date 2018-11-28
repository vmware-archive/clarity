/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  Component,
  ElementRef,
  Inject,
  Injector,
  OnDestroy,
  Optional,
  AfterViewInit,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { AbstractPopover } from '../../popover/common/abstract-popover';
import { Point } from '../../popover/common/popover';
import { POPOVER_HOST_ANCHOR } from '../../popover/common/popover-host-anchor.token';
import { ClrOption } from './option';

@Component({ selector: 'clr-options', templateUrl: './options.html', host: { '[class.clr-options]': 'true' } })
export class ClrOptions<T> extends AbstractPopover implements OnDestroy, AfterViewInit {
  private sub: Subscription;
  @ContentChildren(ClrOption) options: QueryList<ClrOption<T>>;

  constructor(
    injector: Injector,
    @Optional()
    @Inject(POPOVER_HOST_ANCHOR)
    parentHost: ElementRef
  ) {
    if (!parentHost) {
      throw new Error('clr-options should only be used inside of a clr-combobox');
    }
    super(injector, parentHost);

    // Configure Popover
    this.initializeSubscriptions();
    this.configurePopover();
  }

  /**
   * Configure Popover Direction and Close indicators
   */
  private configurePopover(): void {
    this.anchorPoint = Point.BOTTOM_LEFT;
    this.popoverPoint = Point.LEFT_TOP;
    this.closeOnOutsideClick = true;
  }

  private initializeSubscriptions(): void {
    this.sub = this.ifOpenService.ignoredElementChange.subscribe((el: ElementRef) => {
      if (el) {
        this.ignoredElement = el.nativeElement;
      }
      this.sub.unsubscribe();
    });
  }

  // Lifecycle hooks
  ngAfterViewInit() {
    // set anchor element for dropdown to the input
    this.anchorElem = this.parentHost.nativeElement.getElementsByClassName('clr-combobox-input')[0] || this.anchorElem;
  }

  ngOnDestroy() {
    if (!this.sub.closed) {
      this.sub.unsubscribe();
    }
  }
}
