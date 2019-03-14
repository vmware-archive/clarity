/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DatagridColumnState } from '../interfaces/column-state.interface';
import { DatagridRenderStep } from '../enums/render-step.enum';
import { DatagridRenderOrganizer } from '../render/render-organizer';

@Injectable()
export class ColumnsService implements OnDestroy {
  subscriptions: Subscription[] = [];
  columns: BehaviorSubject<DatagridColumnState>[] = [];

  constructor(private organizer: DatagridRenderOrganizer) {
    this.subscriptions.push(
      this.organizer.filterRenderSteps(DatagridRenderStep.CLEAR_WIDTHS).subscribe(() => this.reset())
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private reset() {
    this.columns.forEach((column, index) => {
      this.emitStateChange(index, { width: 0 });
    });
  }

  // Helper method to emit a change to a column only when there is an actual diff to process for that column
  emitStateChange(columnIndex: number, diff: Partial<DatagridColumnState>) {
    if (!this.columns[columnIndex]) {
      return;
    }
    const current = this.columns[columnIndex].value;
    const hasChange = Object.keys(diff).filter(key => diff[key] !== current[key]);

    if (hasChange) {
      this.columns[columnIndex].next({ ...current, ...diff });
    }
  }
}
