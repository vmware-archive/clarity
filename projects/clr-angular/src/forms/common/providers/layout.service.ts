/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';

export enum ClrFormLayout {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
  COMPACT = 'compact',
}

@Injectable()
export class LayoutService {
  readonly minLabelSize = 1;
  readonly maxLabelSize = 12;
  layout: ClrFormLayout | string = ClrFormLayout.HORIZONTAL;

  // This is basically a replacement for Object.values(), which IE11 and Node <9 don't support :(
  // String enums cannot be reverse-mapped, meaning ClrFormLayout['COMPACT'] does not return 'compact' so
  // this exists to deal with this little caveat to get the list of the values as an array.
  private layoutValues: string[] = Object.keys(ClrFormLayout).map(key => (ClrFormLayout as Record<string, any>)[key]);
  private _labelSize = 2;

  set labelSize(size: number) {
    if (this.labelSizeIsValid(size)) {
      this._labelSize = size;
    }
  }

  get labelSize(): number {
    return this._labelSize;
  }

  isVertical(): boolean {
    return this.layout === ClrFormLayout.VERTICAL;
  }

  isHorizontal(): boolean {
    return this.layout === ClrFormLayout.HORIZONTAL;
  }

  isCompact(): boolean {
    return this.layout === ClrFormLayout.COMPACT;
  }

  get layoutClass(): string {
    return `clr-form-${this.layout}`;
  }

  isValid(layout: string): boolean {
    return this.layoutValues.indexOf(layout) > -1;
  }

  labelSizeIsValid(labelSize: number): boolean {
    return Number.isInteger(labelSize) && labelSize >= this.minLabelSize && labelSize <= this.maxLabelSize;
  }
}
