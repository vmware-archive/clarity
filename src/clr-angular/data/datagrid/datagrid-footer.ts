/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ChangeDetectorRef, Component, ContentChild, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ClrDatagridColumnToggle } from './datagrid-column-toggle';
import { HideableColumnService } from './providers/hideable-column.service';
import { Selection, SelectionType } from './providers/selection';

@Component({
  selector: 'clr-dg-footer',
  template: `
        <ng-container
            *ngIf="(selection.selectionType === SELECTION_TYPE.Multi) && (selection.current.length > 0)">
          <div class="clr-form-control-disabled">
              <clr-checkbox-wrapper class="datagrid-footer-select">
                <input clrCheckbox type="checkbox" checked="checked" disabled>
                <label>{{selection.current.length}}</label>
            </clr-checkbox-wrapper>
          </div>
        </ng-container>
        <ng-content select="clr-dg-column-toggle"></ng-content>
        <clr-dg-column-toggle *ngIf="!toggle && activeToggler"></clr-dg-column-toggle>
        <div class="datagrid-footer-description">
            <ng-content></ng-content>
        </div>
        <ng-content select="clr-dg-pagination"></ng-content>
    `,
  host: {
    '[class.datagrid-footer]': 'true',
  },
})
export class ClrDatagridFooter<T = any> implements OnInit {
  constructor(
    public selection: Selection<T>,
    public hideableColumnService: HideableColumnService,
    public cdr: ChangeDetectorRef
  ) {}

  public activeToggler: boolean;
  private subscriptions: Subscription[] = [];

  /* reference to the enum so that template can access */
  public SELECTION_TYPE = SelectionType;

  @ContentChild(ClrDatagridColumnToggle) toggle: ClrDatagridColumnToggle;

  ngOnInit() {
    this.subscriptions.push(
      this.hideableColumnService.columnListChange.subscribe(change => {
        const hiddenColumnsInSub = change.filter(col => col);
        if (hiddenColumnsInSub.length > 0) {
          this.activeToggler = true;
        }
      })
    );

    const hiddenColumns = this.hideableColumnService.getColumns().filter(col => col);

    if (hiddenColumns.length > 0) {
      this.activeToggler = true;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
