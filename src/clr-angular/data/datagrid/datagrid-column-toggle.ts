/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChild, ContentChildren, OnDestroy, OnInit, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';

import { Point } from '../../popover/common/popover';

import { ClrDatagridColumnToggleButton } from './datagrid-column-toggle-button';
import { ClrDatagridColumnToggleTitle } from './datagrid-column-toggle-title';
import { DatagridHideableColumnModel } from './datagrid-hideable-column.model';
import { ColumnToggleButtonsService } from './providers/column-toggle-buttons.service';
import { HideableColumnService } from './providers/hideable-column.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';

@Component({
  selector: 'clr-dg-column-toggle',
  template: `
        <button
                #anchor
                (click)="toggleUI()"
                class="btn btn-sm btn-link column-toggle--action"
                type="button">
            <clr-icon shape="view-columns" [attr.title]="commonStrings.pickColumns"></clr-icon>
        </button>
        <div class="column-switch"
             *clrPopoverOld="open; anchor: anchor; anchorPoint: anchorPoint; popoverPoint: popoverPoint">
            <div class="switch-header">
                <ng-container *ngIf="!title">Show Columns</ng-container>
                <ng-content select="clr-dg-column-toggle-title"></ng-content>
                <button
                    class="btn btn-sm btn-link"
                    (click)="toggleUI()"
                    type="button">
                    <clr-icon shape="close" [attr.title]="commonStrings.close"></clr-icon>
                </button>
            </div>
            <ul class="switch-content list-unstyled">
                <li *ngFor="let column of columns">
                    <clr-checkbox-wrapper>
                        <input clrCheckbox type="checkbox"
                          [disabled]="column.lastVisibleColumn"
                          [ngModel]="!column.hidden"
                          (ngModelChange)="toggleColumn($event, column)">
                        <label><ng-template [ngTemplateOutlet]="column.template"></ng-template></label>
                    </clr-checkbox-wrapper>
                </li>
            </ul>
            <div class="switch-footer" *ngIf="buttons.length > 0">
                <ng-content select="clr-dg-column-toggle-button"></ng-content>
            </div>
            <div class="switch-footer" *ngIf="buttons.length === 0">
                <div>
                    <button
                            class="btn btn-sm btn-link p6 text-uppercase"
                            [disabled]="allColumnsVisible"
                            (click)="selectAll()"
                            type="button">Select All
                    </button>
                </div>
            </div>
        </div>
    `,
  host: { '[class.column-switch-wrapper]': 'true', '[class.active]': 'open' },
})
export class ClrDatagridColumnToggle implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private _allColumnsVisible: boolean;

  /***
   * Popover init
   */
  public anchorPoint: Point = Point.TOP_LEFT;
  public popoverPoint: Point = Point.LEFT_BOTTOM;
  public open: boolean = false;

  /****
   * DatagridHideableColumnModel init
   */
  public columns: DatagridHideableColumnModel[] = [];

  public get allColumnsVisible(): boolean {
    return this._allColumnsVisible;
  }

  public set allColumnsVisible(value: boolean) {
    this._allColumnsVisible = value;
  }

  @ContentChild(ClrDatagridColumnToggleTitle) title: ClrDatagridColumnToggleTitle;
  @ContentChildren(ClrDatagridColumnToggleButton) buttons: QueryList<ClrDatagridColumnToggleButton>;

  constructor(
    public hideableColumnService: HideableColumnService,
    private columnToggleButtons: ColumnToggleButtonsService,
    public commonStrings: ClrCommonStrings
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.hideableColumnService.columnListChange.subscribe(columnList => {
        // Reset the list of columns
        this.columns.length = 0;
        this.hideableColumnService.updateForLastVisibleColumn();
        this.allColumnsVisible = this.hideableColumnService.checkForAllColumnsVisible;
        this.columnToggleButtons.selectAllDisabled = this.allColumnsVisible;

        // Add only the hidden columns to the toggler.
        columnList.forEach(col => {
          if (col) {
            this.columns.push(col);
          }
        });
      })
    );

    this.subscriptions.push(
      this.columnToggleButtons.selectAllButtonClicked.subscribe(() => {
        this.selectAll();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  selectAll() {
    this.hideableColumnService.showHiddenColumns();
    this.allColumnsVisible = this.hideableColumnService.checkForAllColumnsVisible;
    this.columnToggleButtons.selectAllDisabled = this.allColumnsVisible;
  }

  toggleColumn(event: boolean, column: DatagridHideableColumnModel) {
    column.hidden = !event;
    this.allColumnsVisible = this.hideableColumnService.checkForAllColumnsVisible;
    this.columnToggleButtons.selectAllDisabled = this.allColumnsVisible;
    this.hideableColumnService.updateForLastVisibleColumn();
  }

  toggleUI() {
    this.open = !this.open;
  }
}
