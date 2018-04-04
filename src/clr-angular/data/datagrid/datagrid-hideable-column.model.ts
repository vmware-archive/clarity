/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

/**
 *
 * @description
 * A utility class for that adds hide/show functionality to a column, its cells and enables a toggler in the
 * DatagridColumnToggle Component.
 *
 */
export class DatagridHideableColumnModel {
  /**
   * @property hiddenChanges
   *
   * @description
   * A stream of state changes an instance of DatagridHideableColumnModel will broadcast to subscribers.
   *
   */
  private hiddenChangesState: Subject<boolean> = new Subject<boolean>();

  /**
   *
   * @description
   * The init function for DatagridHideableColumnModel instances that does the following:
   *
   * 1. Set values for the private variables that enable a hideable column
   * 2. Broadcast the next hidden change for anyone (already) subscribed to this DatagridHideableColumnModel
   *
   */
  constructor(private _template: TemplateRef<any>, private _id: string, private _hidden: boolean = false) {}

  /**
   *
   * @description
   * A getter function that returns an TemplateRef of the DatagridColumn that is hideable. This is currently used to
   * populate the DatagridColumnToggle UI with the correct Column name.
   *
   */
  get template() {
    return this._template;
  }

  /**
   *
   * @description
   * public function that returns the id of a HideableCOlumn instance. Used by the HideableCOlumnService for passing
   * state and actions between DateGridColumns, DataGridCells & the DatagridColumnToggle Components.
   *
   */
  get id(): string {
    return this._id;
  }

  /**
   *
   * @description
   * A getter that returns the hidden value of a DatagridHideableColumnModel instance.
   *
   */
  get hidden(): boolean {
    return this._hidden;
  }

  /**
   *
   * @description
   * The setter for setting the hidden state of a DatagridHideableColumnModel instance.
   * It also broadcasts the change after its set.
   *
   */
  set hidden(value: boolean) {
    if (this._hidden === value) {
      return;
    }
    this._hidden = value;
    this.hiddenChangesState.next(value);
  }

  /**
   *
   * @description
   * An Observable for the HideableColumns hidden changes.
   *
   */
  get hiddenChangeState(): Observable<boolean> {
    return this.hiddenChangesState.asObservable();
  }

  // Flag this true when the service only has one visible column open.

  public lastVisibleColumn: boolean = false;
}
