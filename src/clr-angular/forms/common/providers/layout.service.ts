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
  layout: Layouts = Layouts.VERTICAL;

  isVertical() {
    return this.layout === Layouts.VERTICAL;
  }

  get layoutClass(): string {
    return `clr-form-${this.layout}`;
  }
}
