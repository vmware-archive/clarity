/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChild, Inject } from '@angular/core';

import { Point } from '../../popover/common/popover';

import { ClrDatagridColumnToggleButton } from './datagrid-column-toggle-button';
import { ClrDatagridColumnToggleTitle } from './datagrid-column-toggle-title';

import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
import { ColumnsService } from './providers/columns.service';
import { ColumnState } from './interfaces/column-state.interface';
import { DatagridColumnChanges } from './enums/column-changes.enum';

import { UNIQUE_ID_PROVIDER, UNIQUE_ID } from '../../utils/id-generator/id-generator.service';

@Component({
  selector: 'clr-dg-column-toggle',
  template: `
    <button
      #anchor
      (click)="toggleSwitchPanel()"
      class="btn btn-sm btn-link column-toggle--action"
      [attr.aria-controls]="columnSwitchId" 
      type="button">
      <clr-icon shape="view-columns" [attr.title]="commonStrings.pickColumns"></clr-icon>
    </button>
    <div [id]="columnSwitchId" class="column-switch"
         *clrPopoverOld="open; anchor: anchor; anchorPoint: anchorPoint; popoverPoint: popoverPoint">
      <div class="switch-header">
        <ng-container *ngIf="!customToggleTitle">{{commonStrings.showColumns}}</ng-container>
        <ng-content select="clr-dg-column-toggle-title"></ng-content>
        <button
          class="btn btn-sm btn-link toggle-switch-close-button"
          (click)="toggleSwitchPanel()"
          [attr.aria-label]="commonStrings.close"
          type="button">
          <clr-icon shape="close" [attr.title]="commonStrings.close"></clr-icon>
        </button>
      </div>
      <ul class="switch-content list-unstyled">
        <li *ngFor="let columnState of hideableColumnStates;">
          <clr-checkbox-wrapper>
            <input clrCheckbox type="checkbox"
                   [disabled]="hasOnlyOneVisibleColumn && !columnState.hidden"
                   [ngModel]="!columnState.hidden"
                   (ngModelChange)="toggleColumnState(columnState, !$event)">
            <label>
              <ng-template [ngTemplateOutlet]="columnState.titleTemplateRef"></ng-template>
            </label>
          </clr-checkbox-wrapper>
        </li>
      </ul>
      <div class="switch-footer">
        <ng-content select="clr-dg-column-toggle-button"></ng-content>
        <clr-dg-column-toggle-button *ngIf="!customToggleButton">{{commonStrings.selectAll}}</clr-dg-column-toggle-button>
      </div>
    </div>
  `,
  host: { '[class.column-switch-wrapper]': 'true', '[class.active]': 'open' },
  providers: [UNIQUE_ID_PROVIDER],
})
/** @deprecated since 2.0, remove in 3.0 */
export class ClrDatagridColumnToggle {
  /***
   * Popover init
   */
  public anchorPoint: Point = Point.TOP_LEFT;
  public popoverPoint: Point = Point.LEFT_BOTTOM;
  public open: boolean = false;

  @ContentChild(ClrDatagridColumnToggleTitle, { static: false })
  customToggleTitle: ClrDatagridColumnToggleTitle;
  @ContentChild(ClrDatagridColumnToggleButton, { static: false })
  customToggleButton: ClrDatagridColumnToggleButton;

  constructor(
    public commonStrings: ClrCommonStrings,
    private columnsService: ColumnsService,
    @Inject(UNIQUE_ID) public columnSwitchId: string
  ) {}

  get hideableColumnStates(): ColumnState[] {
    const hideables = this.columnsService.columns.filter(column => column.value.hideable);
    return hideables.map(column => column.value);
  }

  get hasOnlyOneVisibleColumn(): boolean {
    const nbNonHideableColumns = this.columnsService.columns.length - this.hideableColumnStates.length;
    // this should only return true when there is no non-hideable columns.
    return (
      nbNonHideableColumns === 0 && this.hideableColumnStates.filter(columnState => !columnState.hidden).length === 1
    );
  }

  toggleColumnState(columnState: ColumnState, event: boolean) {
    const columnToToggle = this.columnsService.columns.filter(column => column.value === columnState)[0];
    this.columnsService.emitStateChange(columnToToggle, {
      hidden: event,
      changes: [DatagridColumnChanges.HIDDEN],
    });
  }

  toggleSwitchPanel() {
    this.open = !this.open;
  }
}
