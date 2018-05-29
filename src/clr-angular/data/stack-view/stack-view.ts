/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'clr-stack-view',
  template: `
        <ng-content select="clr-stack-header"></ng-content>
        <dl class="stack-view"><ng-content></ng-content></dl>
    `,
  // Custom elements are inline by default.
  styles: [
    `
        :host { display: block; }
    `,
  ],
})
export class ClrStackView {
  /**
   * Undocumented experimental feature: inline editing.
   */
  editable: boolean = false;

  @Output('clrStackSave') save: EventEmitter<void> = new EventEmitter<void>(false);

  private _editMode: boolean = false;

  editingChange: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  get editing(): boolean {
    return this.editable && this._editMode;
  }

  set editing(value: boolean) {
    if (this.editable) {
      this._editMode = value;
      this.editingChange.emit(value);
      if (!value) {
        this.save.emit(null);
      }
    }
  }
  /**
   * End of undocumented experimental feature.
   */
}
