/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { Subscription } from 'rxjs';

import { DatagridHideableColumnModel } from './datagrid-hideable-column.model';
import { ColumnToggleButtonsService } from './providers/column-toggle-buttons.service';
import { HideableColumnService } from './providers/hideable-column.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { ClrPopoverPosition } from '../../utils/popover/interfaces/popover-position.interface';
import { ClrAxis } from '../../utils/popover/enums/axis.enum';
import { ClrAlignment } from '../../utils/popover/enums/alignment.enum';
import { ClrSide } from '../../utils/popover/enums/side.enum';
import { ClrPopoverEventsService } from '../../utils/popover/providers/popover-events.service';
import { ClrPopoverPositionService } from '../../utils/popover/providers/popover-position.service';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';

@Component({
  selector: 'clr-dg-column-toggle',
  template: `    
      <button
              role="button"
              type="button"
              class="btn btn-sm btn-link column-toggle--action"
              clrPopoverAnchor
              clrPopoverOpenCloseButton
              [attr.aria-owns]="popoverId">
          <clr-icon shape="view-columns" [attr.title]="commonStrings.pickColumns"></clr-icon>
      </button>
      <div class="column-switch"
           role="dialog"
           [id]="popoverId"
           clrFocusTrap
           *clrPopoverContent="openState at smartPosition; outsideClickToClose: true; scrollToClose: true">
          <div class="switch-header">
              <!-- TODO(matt): Use common strings here --> 
              <span>Show Columns</span>
              <button
                      class="btn btn-sm btn-link"
                      clrPopoverCloseButton
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
                      <label>
                          <ng-template [ngTemplateOutlet]="column.template"></ng-template>
                      </label>
                  </clr-checkbox-wrapper>
              </li>
          </ul>
          <div class="switch-footer">
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
  host: { '[class.column-switch-wrapper]': 'true', '[class.active]': 'openState' },
  providers: [UNIQUE_ID_PROVIDER, ClrPopoverEventsService, ClrPopoverPositionService, ClrPopoverToggleService],
})
export class ClrDatagridColumnToggle implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private _allColumnsVisible: boolean;

  // Smart Popover
  public smartPosition: ClrPopoverPosition = {
    axis: ClrAxis.VERTICAL,
    side: ClrSide.BEFORE,
    anchor: ClrAlignment.START,
    content: ClrAlignment.START,
  };
  public openState;

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

  constructor(
    public hideableColumnService: HideableColumnService,
    private columnToggleButtons: ColumnToggleButtonsService,
    public commonStrings: ClrCommonStrings,
    @Inject(UNIQUE_ID) public popoverId: string
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
  }
}
