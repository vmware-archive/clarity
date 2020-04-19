/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, ElementRef, Optional } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Directive({
  selector: '.clr-treenode-link',
  host: { '[attr.aria-selected]': 'routerLinkActive?.isActive' },
})
export class ClrTreeNodeLink {
  constructor(private el: ElementRef, @Optional() public routerLinkActive: RouterLinkActive) {}

  activate() {
    if (this.el.nativeElement && this.el.nativeElement.click) {
      this.el.nativeElement.click();
    }
  }
}
