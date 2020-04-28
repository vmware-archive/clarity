/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ComboboxDomAdapter {
  clearChildren(element: any): void {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  cloneNode(element: any): any {
    return element.cloneNode(true);
  }

  focus(element: any): void {
    element.focus();
  }
}
