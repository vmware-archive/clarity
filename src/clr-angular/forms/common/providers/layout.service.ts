/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';

export enum Layouts {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
  COMPACT = 'compact',
}

@Injectable()
export class LayoutService {
  layout: Layouts = Layouts.HORIZONTAL;
  // This is basically a replacement for Object.values(), which IE11 and Node <9 don't support :(
  // String enums cannot be reverse-mapped, meaning Layouts['COMPACT'] does not return 'compact' so
  // this exists to deal with this little caveat to get the list of the values as an array.
  private layoutValues: string[] = Object.keys(Layouts).map(key => Layouts[key]);

  isVertical(): boolean {
    return this.layout === Layouts.VERTICAL;
  }

  isHorizontal(): boolean {
    return this.layout === Layouts.HORIZONTAL;
  }

  isCompact(): boolean {
    return this.layout === Layouts.COMPACT;
  }

  get layoutClass(): string {
    return `clr-form-${this.layout}`;
  }

  isValid(layout: string): boolean {
    return this.layoutValues.indexOf(layout) > -1;
  }
}
