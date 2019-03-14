/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { DatagridRenderStep } from '../enums/render-step.enum';

import { HIDDEN_COLUMN_CLASS, STRICT_WIDTH_CLASS } from './constants';
import { DatagridRenderOrganizer } from './render-organizer';
import { ColumnState } from '../interfaces/column-state.interface';
import { ALL_COLUMN_CHANGES, DatagridColumnChanges } from '../enums/column-changes.enum';

@Directive({ selector: 'clr-dg-cell' })
export class DatagridCellRenderer implements OnDestroy {
  private stateSubscription: Subscription;

  private runAllChanges: DatagridColumnChanges[];

  // @TODO(JEREMY) Work out how to dedupe some of this code between header and cell renderers
  set columnState(columnState: BehaviorSubject<ColumnState>) {
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
    }

    this.runAllChanges = ALL_COLUMN_CHANGES;
    this.stateSubscription = columnState.subscribe(state => this.stateChanges(state));
  }

  constructor(private el: ElementRef, private renderer: Renderer2, organizer: DatagridRenderOrganizer) {
    this.subscriptions.push(
      organizer.filterRenderSteps(DatagridRenderStep.CLEAR_WIDTHS).subscribe(() => this.clearWidth())
    );
  }

  private subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
    }
  }

  private stateChanges(state: ColumnState) {
    if (this.runAllChanges) {
      state.changes = this.runAllChanges;
      delete this.runAllChanges;
    }
    if (state.changes && state.changes.length) {
      state.changes.forEach(change => {
        switch (change) {
          case DatagridColumnChanges.WIDTH:
            this.setWidth(state);
            break;
          case DatagridColumnChanges.HIDDEN:
            this.setHidden(state);
            break;
          default:
            break;
        }
      });
    }
  }

  private clearWidth() {
    this.renderer.removeClass(this.el.nativeElement, STRICT_WIDTH_CLASS);
    this.renderer.setStyle(this.el.nativeElement, 'width', null);
  }

  private setWidth(state: ColumnState) {
    if (state.strictWidth) {
      this.renderer.addClass(this.el.nativeElement, STRICT_WIDTH_CLASS);
    } else {
      this.renderer.removeClass(this.el.nativeElement, STRICT_WIDTH_CLASS);
    }
    this.renderer.setStyle(this.el.nativeElement, 'width', state.width + 'px');
  }

  private setHidden(state: ColumnState) {
    if (state.hidden) {
      this.renderer.addClass(this.el.nativeElement, HIDDEN_COLUMN_CLASS);
    } else {
      this.renderer.removeClass(this.el.nativeElement, HIDDEN_COLUMN_CLASS);
    }
  }
}
