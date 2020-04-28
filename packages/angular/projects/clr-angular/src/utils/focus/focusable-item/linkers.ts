/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Observable } from 'rxjs';
import { ArrowKeyDirection } from '../arrow-key-direction.enum';
import { FocusableItem } from './focusable-item';

export class Linkers {
  /**
   * Links a set of focusable items to a parent along one direction
   */
  static linkParent(
    items: FocusableItem[],
    parent: FocusableItem | Observable<FocusableItem>,
    direction: ArrowKeyDirection
  ) {
    items.forEach(item => (item[direction] = parent));
  }

  /**
   * Double-links a set of focusable items vertically, possibly looping
   */
  static linkVertical(items: FocusableItem[], loop = true) {
    items.forEach((item, index) => {
      if (index > 0) {
        item.up = items[index - 1];
      }
      if (index < items.length - 1) {
        item.down = items[index + 1];
      }
    });
    if (loop && items.length > 1) {
      items[0].up = items[items.length - 1];
      items[items.length - 1].down = items[0];
    }
  }
}

// Right now I only need the two linkers above, but we can easily add more linkers. A couple examples:
// export function linkHorizontal(items: FocusableItem[], loop = true);
// export function linkTable(items: FocusableItem[][]);
