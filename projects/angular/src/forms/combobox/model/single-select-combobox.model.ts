/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ComboboxModel } from './combobox.model';

export class SingleSelectComboboxModel<T> implements ComboboxModel<T> {
  model: T;

  containsItem(item: T): boolean {
    return this.model === item;
  }

  select(item: T): void {
    this.model = item;
  }

  unselect(item: T): void {
    if (this.containsItem(item)) {
      this.model = null;
    }
  }

  isEmpty(): boolean {
    return !this.model;
  }

  pop(): T {
    const item = this.model;
    this.model = null;
    return item;
  }

  toString(displayField?: string): string {
    if (!this.model) {
      return '';
    }
    if (displayField && (this.model as any)[displayField]) {
      return (this.model as any)[displayField];
    } else {
      return this.model.toString();
    }
  }
}
