/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { ColumnsService } from './providers/columns.service';
import { ColumnState } from './interfaces/column-state.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { DatagridColumnChanges } from './enums/column-changes.enum';

@Component({
  selector: 'clr-dg-column-toggle-button',
  template: `
    <button
      class="btn btn-sm btn-link switch-button"
      (click)="selectAll()"
      [disabled]="allHideablesVisible"
      type="button"
    >
      <ng-content></ng-content>
    </button>
  `,
})
/** @deprecated since 2.0, remove in 3.0 */
export class ClrDatagridColumnToggleButton {
  constructor(private columnsService: ColumnsService) {}

  private allSelected: Subject<boolean> = new EventEmitter();

  @Output('clrAllSelected')
  get clrAllSelected(): Observable<boolean> {
    return this.allSelected.asObservable();
  }

  private hideableColumns(): BehaviorSubject<ColumnState>[] {
    return this.columnsService.columns.filter(column => column.value.hideable);
  }

  get allHideablesVisible() {
    return this.hideableColumns().filter(column => column.value.hidden).length === 0;
  }

  selectAll() {
    this.hideableColumns().forEach(hideableColumn =>
      this.columnsService.emitStateChange(hideableColumn, {
        hidden: false,
        changes: [DatagridColumnChanges.HIDDEN],
      })
    );
    this.allSelected.next(true);
  }
}
