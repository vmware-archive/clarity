/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { DomAdapter } from './dom-adapter';

export class MockDomAdapter extends DomAdapter {
  _userDefinedWidth = 0;
  userDefinedWidth(element: any): number {
    return this._userDefinedWidth;
  }

  _scrollBarWidth = 0;
  scrollBarWidth(element: any) {
    return this._scrollBarWidth;
  }

  _scrollWidth = 0;
  scrollWidth(element: any) {
    return this._scrollWidth;
  }

  _computedHeight = 0;
  computedHeight(element: any) {
    return this._computedHeight;
  }
}

export const MOCK_DOM_ADAPTER_PROVIDER = {
  provide: DomAdapter,
  useClass: MockDomAdapter,
};
