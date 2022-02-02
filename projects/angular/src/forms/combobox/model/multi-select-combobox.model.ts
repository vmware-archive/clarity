/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ComboboxModel } from './combobox.model';

export class MultiSelectComboboxModel<T> implements ComboboxModel<T> {
  model: T[];

  containsItem(item: T): boolean {
    return this.model ? this.model.includes(item) : false;
  }

  select(item: T): void {
    this.addItem(item);
  }

  unselect(item: T): void {
    this.removeItem(item);
  }

  isEmpty(): boolean {
    return !(this.model && this.model.length > 0);
  }

  pop(): T {
    let item;
    if (this.model && this.model.length > 0) {
      item = this.model[this.model.length - 1];
      this.removeItem(item);
    }
    return item;
  }

  toString(displayField?: string, index = -1): string {
    let displayString = '';

    if (this.model) {
      // If the model is array, we can use a specific item from it, to retrieve the display value.
      if (index > -1) {
        if (this.model[index]) {
          // If we have a defined display field, we'll use it's value as display value
          if (displayField && (this.model[index] as any)[displayField]) {
            displayString += (this.model[index] as any)[displayField];
          } else {
            // If we don't have a defined display field, we'll use the toString representation of the
            // item as display value.
            displayString += this.model[index].toString();
          }
        }
      } else {
        this.model.forEach((model: T) => {
          // If we have a defined display field, we'll use it's value as display value
          if (displayField && (model as any)[displayField]) {
            displayString += (model as any)[displayField];
          } else {
            // If we don't have a defined display field, we'll use the toString representation of the
            // model as display value.
            displayString += model.toString();
          }
          displayString += ' ';
        });
      }
    }

    return displayString.trim();
  }

  private addItem(item: T) {
    if (!this.containsItem(item)) {
      this.model = this.model || [];
      this.model.push(item);
    }
  }

  private removeItem(item: T) {
    if (this.model === null || this.model === undefined) {
      return;
    }

    const index = this.model.indexOf(item);

    if (index > -1) {
      this.model.splice(index, 1);
    }

    // we intentionally set the model to null for form validation
    if (this.model.length === 0) {
      this.model = null;
    }
  }
}
