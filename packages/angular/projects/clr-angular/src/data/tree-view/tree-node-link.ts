/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '.clr-treenode-link',
})
export class ClrTreeNodeLink {
  constructor(private el: ElementRef) {}

  activate() {
    if (this.el.nativeElement && this.el.nativeElement.click) {
      this.el.nativeElement.click();
    }
  }
}
