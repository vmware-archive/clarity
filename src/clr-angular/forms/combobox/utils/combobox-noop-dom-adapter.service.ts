/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/*
 * This version of the DomAdapter is for use on non-browser platforms, where there are no
 * nativeElements to use for calculations.
 */

import { Injectable } from '@angular/core';
import { ComboboxDomAdapter } from './combobox-dom-adapter.service';

@Injectable()
export class ComboboxNoopDomAdapter implements ComboboxDomAdapter {
  focus(element: any): void {}

  clearChildren(element: any): void {}

  cloneNode(element: any): any {
    return null;
  }
}
