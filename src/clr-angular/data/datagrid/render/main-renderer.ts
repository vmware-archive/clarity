/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { isPlatformBrowser } from '@angular/common';
import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ContentChildren,
  Directive,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  QueryList,
  Renderer2,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { DatagridRenderStep } from '../enums/render-step.enum';
import { Items } from '../providers/items';
import { Page } from '../providers/page';
import { TableSizeService } from '../providers/table-size.service';

import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';
import { DatagridHeaderRenderer } from './header-renderer';
import { NoopDomAdapter } from './noop-dom-adapter';
import { DatagridRenderOrganizer } from './render-organizer';
import { ColumnsService } from '../providers/columns.service';
import { DatagridColumnChanges } from '../enums/column-changes.enum';
import { DatagridRowRenderer } from './row-renderer';
import { ColumnStateDiff } from '../interfaces/column-state.interface';
import { DetailService } from '../providers/detail.service';

// Fixes build error
// @dynamic (https://github.com/angular/angular/issues/19698#issuecomment-338340211)
export const domAdapterFactory = (platformId: Record<string, any>) => {
  if (isPlatformBrowser(platformId)) {
    return new DomAdapter();
  } else {
    return new NoopDomAdapter();
  }
};

// Fixes build error
// @dynamic (https://github.com/angular/angular/issues/19698#issuecomment-338340211)
@Directive({
  selector: 'clr-datagrid',
  providers: [{ provide: DomAdapter, useFactory: domAdapterFactory, deps: [PLATFORM_ID] }],
})
export class DatagridMainRenderer implements AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor(
    private organizer: DatagridRenderOrganizer,
    private items: Items,
    private page: Page,
    private domAdapter: DomAdapter,
    private el: ElementRef,
    private renderer: Renderer2,
    private detailService: DetailService,
    private tableSizeService: TableSizeService,
    private columnsService: ColumnsService
  ) {
    this.subscriptions.push(
      this.organizer
        .filterRenderSteps(DatagridRenderStep.COMPUTE_COLUMN_WIDTHS)
        .subscribe(() => this.computeHeadersWidth())
    );

    this.subscriptions.push(
      this.page.sizeChange.subscribe(() => {
        if (this._heightSet) {
          this.resetDatagridHeight();
        }
      })
    );
    this.subscriptions.push(this.detailService.stateChange.subscribe(state => this.toggleDetailPane(state)));
    this.subscriptions.push(this.items.change.subscribe(() => (this.shouldStabilizeColumns = true)));
  }

  @ContentChildren(DatagridHeaderRenderer) private headers: QueryList<DatagridHeaderRenderer>;
  @ContentChildren(DatagridRowRenderer, { descendants: true })
  private rows: QueryList<DatagridRowRenderer>; // if expandable row is expanded initially, query its cells too.

  ngAfterContentInit() {
    this.setupColumns();

    this.subscriptions.push(
      this.headers.changes.subscribe(() => {
        // TODO: only re-stabilize if a column was added or removed. Reordering is fine.
        // Need to setup columns before stabalizing them
        this.setupColumns();
        this.columnsSizesStable = false;
        this.stabilizeColumns();
      })
    );
  }

  // Initialize and set Table width for horizontal scrolling here.
  ngAfterViewInit() {
    this.tableSizeService.table = this.el;
  }

  ngAfterViewChecked() {
    if (this.shouldStabilizeColumns) {
      this.stabilizeColumns();
    }
    if (this.shouldComputeHeight()) {
      setTimeout(() => {
        this.computeDatagridHeight();
      });
    }
  }

  private setupColumns() {
    this.headers.forEach((header, index) => header.setColumnState(index));
    this.columnsService.columns.splice(this.headers.length); // Trim any old columns
    this.rows.forEach(row => row.setColumnState());
  }

  private _heightSet = false;

  private shouldComputeHeight(): boolean {
    if (!this._heightSet && this.page.size > 0) {
      if (this.items.displayed.length === this.page.size) {
        return true;
      }
    }
    return false;
  }

  public toggleDetailPane(state: boolean) {
    if (this.headers) {
      if (state && !this.columnsService.hasCache()) {
        this.columnsService.cache();
        this.headers.forEach((_header, index) => {
          if (index > 0) {
            this.columnsService.emitStateChangeAt(index, {
              changes: [DatagridColumnChanges.HIDDEN],
              hidden: state,
            });
          }
        });
      } else if (!state) {
        this.columnsService.resetToLastCache();
      }
    }
  }

  /**
   * Computes the height of the datagrid.
   *
   * NOTE: We had to choose to set the height instead of the min-height because
   * IE 11 requires the height on the parent for the children flex grow/shrink properties to work.
   * When we used min-height, 1 1 auto doesn't used to work in IE11 :-(
   * But this doesn't affect the fix. It works in both fixed & variable height datagrids.
   *
   * Refer: http://stackoverflow.com/questions/24396205/flex-grow-not-working-in-internet-explorer-11-0
   */
  private computeDatagridHeight() {
    // IE doesn't return correct value for getComputedStyle(element).getPropertyValue("height")
    const value: number = this.domAdapter.clientRect(this.el.nativeElement).height;
    this.renderer.setStyle(this.el.nativeElement, 'height', value + 'px');
    this._heightSet = true;
  }

  private resetDatagridHeight() {
    this.renderer.setStyle(this.el.nativeElement, 'height', '');
    this._heightSet = false;
  }

  private subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Makes each header compute its width.
   */
  private computeHeadersWidth() {
    const nbColumns: number = this.headers.length;
    let allStrict = true;
    this.headers.forEach((header, index) => {
      // On the last header column check whether all columns have strict widths.
      // If all columns have strict widths, remove the strict width from the last column and make it the column's
      // minimum width so that when all previous columns shrink, it will get a flexible width and cover the empty
      // gap in the Datagrid.
      const state: ColumnStateDiff = {
        changes: [DatagridColumnChanges.WIDTH],
        ...header.getColumnWidthState(),
      };

      if (!state.strictWidth) {
        allStrict = false;
      }

      if (nbColumns === index + 1 && allStrict) {
        state.strictWidth = 0;
      }

      this.columnsService.emitStateChangeAt(index, state);
    });
  }

  /**
   * Indicates if we want to re-compute columns width. This should only happen:
   * 1) When headers change, with columns being added or removed
   * 2) When rows are lazily loaded for the first time
   */
  private columnsSizesStable = false;

  private shouldStabilizeColumns = true;

  /**
   * Triggers a whole re-rendring cycle to set column sizes, if needed.
   */
  private stabilizeColumns() {
    this.shouldStabilizeColumns = false;
    if (this.columnsSizesStable) {
      // Nothing to do.
      return;
    }
    // Resize when the rows are loaded.
    if (this.items.displayed.length > 0) {
      this.organizer.resize();
      this.columnsSizesStable = true;
    }
  }
}
