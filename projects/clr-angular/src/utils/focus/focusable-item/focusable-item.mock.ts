/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Observable } from 'rxjs';
import { FocusableItem } from './focusable-item';

export class MockFocusableItem implements FocusableItem {
  constructor(public id: string) {}

  disabled = false;

  focus() {
    // Do nothing
  }
  blur() {
    // Do nothing
  }
  activate() {
    // Do nothing
  }

  up?: FocusableItem | Observable<FocusableItem>;
  down?: FocusableItem | Observable<FocusableItem>;
  left?: FocusableItem | Observable<FocusableItem>;
  right?: FocusableItem | Observable<FocusableItem>;
}
