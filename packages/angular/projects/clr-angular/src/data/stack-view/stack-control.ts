/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * Undocumented experimental feature: inline editing.
 */

import { EventEmitter } from '@angular/core';
import { ClrStackView } from './stack-view';

export class StackControl {
  model: any;
  modelChange: EventEmitter<any> = new EventEmitter<any>(false);

  constructor(protected stackView: ClrStackView) {
    // Make the ClrStackView editable, since it contains a StackControl
    this.stackView.editable = true;
    this.stackView.editingChange.subscribe((editing: boolean) => {
      // Edit mode was closed
      if (!editing) {
        this.modelChange.emit(this.model);
      }
    });
  }
}
