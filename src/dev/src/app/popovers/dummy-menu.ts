/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, Inject, Injector, Optional } from '@angular/core';

import { AbstractPopover } from '../../../../clr-angular/popover/common/abstract-popover';
import { Point } from '../../../../clr-angular/popover/common/popover';
import { POPOVER_HOST_ANCHOR } from '../../../../clr-angular/popover/common/popover-host-anchor.token';

import { DummyAnchor } from './dummy-anchor';

@Component({
  selector: 'clr-dummy-menu',
  styleUrls: ['./popovers.demo.scss'],
  template: `
        <ng-content></ng-content>
    `,
  host: { '[class.dummy-menu]': 'true' },
})
export class DummyMenu extends AbstractPopover {
  constructor(
    injector: Injector,
    @Optional()
    @Inject(POPOVER_HOST_ANCHOR)
    parentHost: ElementRef,
    private parent: DummyAnchor
  ) {
    super(injector, parentHost);
    this.configurePopover();
    if (this.parent && this.parent.ignore) {
      this.ignoredElement = this.parent.ignore.nativeElement;
    }
  }

  private configurePopover(): void {
    this.anchorPoint = Point.BOTTOM_LEFT;
    this.popoverPoint = Point.LEFT_TOP;
    this.closeOnOutsideClick = true;
  }
}
