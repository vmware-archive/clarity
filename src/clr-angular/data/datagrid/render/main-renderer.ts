/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
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
import { BehaviorSubject, Subscription } from 'rxjs';

import { DatagridRenderStep } from '../enums/render-step.enum';
import { Items } from '../providers/items';
import { Page } from '../providers/page';
import { TableSizeService } from '../providers/table-size.service';

import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';
import { DatagridHeaderRenderer } from './header-renderer';
import { NoopDomAdapter } from './noop-dom-adapter';
import { DatagridRenderOrganizer } from './render-organizer';
import { ColumnsService } from '../providers/columns.service';
import { DatagridColumnState } from '../interfaces/column-state.interface';
import { DatagridColumnChanges } from '../enums/column-changes.enum';
import { DatagridRowRenderer } from './row-renderer';

// Fixes build error
// @dynamic (https://github.com/angular/angular/issues/19698#issuecomment-338340211)
export const domAdapterFactory = (platformId: Object) => {
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
export class DatagridMainRenderer<T = any> implements AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor(
    private organizer: DatagridRenderOrganizer,
    private items: Items,
    private page: Page,
    private domAdapter: DomAdapter,
    private el: ElementRef,
    private renderer: Renderer2,
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
    this.subscriptions.push(this.items.change.subscribe(() => (this.shouldStabilizeColumns = true)));
  }

  @ContentChildren(DatagridHeaderRenderer) private headers: QueryList<DatagridHeaderRenderer>;
  @ContentChildren(DatagridRowRenderer) private rows: QueryList<DatagridRowRenderer>;

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

    this.subscriptions.push(
      this.rows.changes.subscribe(() => {
        this.rows.forEach(row => row.setupColumns());
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
    this.headers.forEach((header, index) => {
      // We want to get the initial state
      this.columnsService.columns[index] = new BehaviorSubject<DatagridColumnState>(header.getColumnWidthState());
      header.columnState = this.columnsService.columns[index];
    });
    this.columnsService.columns.splice(this.headers.length); // Trim any old columns
    this.rows.forEach(row => row.setupColumns());
  }

  private _heightSet: boolean = false;

  private shouldComputeHeight(): boolean {
    if (!this._heightSet && this.page.size > 0) {
      if (this.items.displayed.length === this.page.size) {
        return true;
      }
    }
    return false;
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
      const state: Partial<DatagridColumnState> = {
        changes: [DatagridColumnChanges.WIDTH],
        ...header.getColumnWidthState(),
      };

      if (!state.strictWidth) {
        allStrict = false;
      }

      if (nbColumns === index + 1 && allStrict) {
        state.strictWidth = 0;
      }

      this.columnsService.emitStateChange(index, state);
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
