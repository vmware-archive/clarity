/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Inject, ContentChild, ElementRef, NgZone, PLATFORM_ID, ViewChild } from '@angular/core';

import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { ClrPopoverPosition } from '../../utils/popover/interfaces/popover-position.interface';
import { ClrAxis } from '../../utils/popover/enums/axis.enum';
import { ClrAlignment } from '../../utils/popover/enums/alignment.enum';
import { ClrSide } from '../../utils/popover/enums/side.enum';
import { ClrPopoverEventsService } from '../../utils/popover/providers/popover-events.service';
import { ClrPopoverPositionService } from '../../utils/popover/providers/popover-position.service';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { ColumnsService } from './providers/columns.service';
import { ColumnState } from './interfaces/column-state.interface';
import { DatagridColumnChanges } from './enums/column-changes.enum';
import { isPlatformBrowser } from '@angular/common';
import { ClrDatagridColumnToggleTitle } from './datagrid-column-toggle-title';
import { ClrDatagridColumnToggleButton } from './datagrid-column-toggle-button';

@Component({
  selector: 'clr-dg-column-toggle',
  template: `
    <button
      role="button"
      type="button"
      class="btn btn-sm btn-link column-toggle--action"
      clrPopoverAnchor
      clrPopoverOpenCloseButton
      [attr.aria-controls]="popoverId"
      [attr.aria-owns]="popoverId"
    >
      <clr-icon shape="view-columns" [attr.title]="commonStrings.keys.pickColumns"></clr-icon>
    </button>
    <div
      class="column-switch"
      role="dialog"
      [id]="popoverId"
      clrFocusTrap
      *clrPopoverContent="openState; at: smartPosition; outsideClickToClose: true; scrollToClose: true"
    >
      <div class="switch-header">
        <div class="clr-sr-only" tabindex="-1" #menuDescription>
          {{ commonStrings.keys.showColumnsMenuDescription }}
        </div>
        <div class="clr-sr-only" tabindex="-1" #allSelected>{{ commonStrings.keys.allColumnsSelected }}</div>
        <ng-container *ngIf="!customToggleTitle">{{ commonStrings.keys.showColumns }}</ng-container>
        <ng-content select="clr-dg-column-toggle-title"></ng-content>
        <button
          class="btn btn-sm btn-link toggle-switch-close-button"
          clrPopoverCloseButton
          type="button"
          [attr.aria-label]="commonStrings.keys.close"
        >
          <clr-icon shape="close" [attr.title]="commonStrings.keys.close"></clr-icon>
        </button>
      </div>
      <ul class="switch-content list-unstyled">
        <li *ngFor="let columnState of hideableColumnStates; trackBy: trackByFn">
          <clr-checkbox-wrapper>
            <input
              clrCheckbox
              type="checkbox"
              [disabled]="hasOnlyOneVisibleColumn && !columnState.hidden"
              [ngModel]="!columnState.hidden"
              (ngModelChange)="toggleColumnState(columnState, !$event)"
            />
            <label>
              <ng-template [ngTemplateOutlet]="columnState.titleTemplateRef"></ng-template>
            </label>
          </clr-checkbox-wrapper>
        </li>
      </ul>
      <div class="switch-footer">
        <ng-content select="clr-dg-column-toggle-button"></ng-content>
        <clr-dg-column-toggle-button *ngIf="!customToggleButton" (clrAllSelected)="allColumnsSelected()">
          {{ commonStrings.keys.selectAll }}
        </clr-dg-column-toggle-button>
      </div>
    </div>
  `,
  host: { '[class.column-switch-wrapper]': 'true', '[class.active]': 'openState' },
  providers: [UNIQUE_ID_PROVIDER, ClrPopoverEventsService, ClrPopoverPositionService, ClrPopoverToggleService],
})
/** @deprecated since 2.0, remove in 3.0 */
export class ClrDatagridColumnToggle {
  private _allColumnsVisible: boolean;

  // Smart Popover
  public smartPosition: ClrPopoverPosition = {
    axis: ClrAxis.VERTICAL,
    side: ClrSide.BEFORE,
    anchor: ClrAlignment.START,
    content: ClrAlignment.START,
  };
  public openState: boolean;

  @ContentChild(ClrDatagridColumnToggleTitle) customToggleTitle: ClrDatagridColumnToggleTitle;
  @ContentChild(ClrDatagridColumnToggleButton) customToggleButton: ClrDatagridColumnToggleButton;
  @ViewChild('menuDescription', { read: ElementRef })
  private menuDescriptionElement: ElementRef<HTMLElement>;
  @ViewChild('allSelected', { read: ElementRef })
  private allSelectedElement: ElementRef<HTMLElement>;

  public get allColumnsVisible(): boolean {
    return this._allColumnsVisible;
  }

  public set allColumnsVisible(value: boolean) {
    this._allColumnsVisible = value;
  }

  constructor(
    public commonStrings: ClrCommonStringsService,
    private columnsService: ColumnsService,
    @Inject(UNIQUE_ID) public columnSwitchId: string,
    @Inject(PLATFORM_ID) private platformId: any,
    private zone: NgZone,
    @Inject(UNIQUE_ID) public popoverId: string
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
    this.openState = !this.openState;
    if (this.openState && isPlatformBrowser(this.platformId) && this.menuDescriptionElement) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.menuDescriptionElement.nativeElement.focus();
        });
      });
    }
  }

  allColumnsSelected() {
    this.allSelectedElement.nativeElement.focus();
  }

  // Without tracking the checkboxes get rerendered on model update, which leads
  // to loss of focus after checkbox toggle.
  trackByFn(index: number) {
    return index;
  }
}
