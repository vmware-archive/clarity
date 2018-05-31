/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, Injector, SkipSelf } from '@angular/core';

import { AbstractPopover } from '../../popover/common/abstract-popover';
import { Point } from '../../popover/common/popover';

@Component({
  selector: 'clr-tab-overflow-content',
  template: `
        <ng-content></ng-content>
    `,
  host: {
    '[class.dropdown-menu]': 'true',
  },
})
export class ClrTabOverflowContent extends AbstractPopover {
  constructor(injector: Injector, @SkipSelf() parentHost: ElementRef) {
    super(injector, parentHost);
    this.anchorPoint = Point.BOTTOM_RIGHT;
    this.popoverPoint = Point.RIGHT_TOP;
    this.closeOnOutsideClick = true;
  }
}
