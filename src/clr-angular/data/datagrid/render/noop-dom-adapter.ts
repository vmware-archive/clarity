/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/*
 * This version of the DomAdapter is for use on non-browser platforms, where there are no
 * nativeElements to use for calculations.
 */

import { Injectable } from '@angular/core';
import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';

@Injectable()
export class NoopDomAdapter implements DomAdapter {
  // @ts-ignore
  userDefinedWidth(element: any): number {
    return 0;
  }

  // @ts-ignore
  scrollBarWidth(element: any) {
    return 0;
  }

  // @ts-ignore
  scrollWidth(element: any) {
    return 0;
  }

  // @ts-ignore
  computedHeight(element: any): number {
    return 0;
  }

  // @ts-ignore
  clientRect(element: any): ClientRect {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0,
    };
  }

  // @ts-ignore
  minWidth(element: any): number {
    return 0;
  }

  // @ts-ignore
  focus(element: any): void {
    // Do nothing
  }
}
