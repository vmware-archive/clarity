/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

import { ClrDragEvent } from '../../utils/drag-and-drop/drag-event';
import { ColumnResizerService } from './providers/column-resizer.service';
import { TableSizeService } from './providers/table-size.service';
import { UNIQUE_ID_PROVIDER, UNIQUE_ID } from '../../utils/id-generator/id-generator.service';

@Component({
  selector: 'clr-dg-column-separator',
  template: `
    <div
      class="datagrid-column-handle"
      aria-hidden="true"
      clrDraggable
      [clrGroup]="columnSeparatorId"
      (clrDragStart)="showTracker(resizeTrackerEl)"
      (clrDragMove)="moveTracker($event, resizeTrackerEl)"
      (clrDragEnd)="hideTracker(resizeTrackerEl)"
    ></div>
    <div class="datagrid-column-resize-tracker" #resizeTrackerEl></div>
  `,
  host: {
    '[class.datagrid-column-separator]': 'true',
  },
  providers: [UNIQUE_ID_PROVIDER],
})
export class ClrDatagridColumnSeparator {
  // Every column draggable separator should have its own unique ID
  // in order to not conflict with other draggables/droppables.
  constructor(
    private columnResizerService: ColumnResizerService,
    private renderer: Renderer2,
    private tableSizeService: TableSizeService,
    @Inject(DOCUMENT) private document: any,
    @Inject(UNIQUE_ID) public columnSeparatorId: string
  ) {}

  public showTracker(resizeTrackerEl: HTMLElement) {
    this.columnResizerService.startResize();
    const tableHeight = this.tableSizeService.getColumnDragHeight();
    this.renderer.setStyle(resizeTrackerEl, 'height', tableHeight);
    this.renderer.setStyle(resizeTrackerEl, 'display', 'block');
  }

  public moveTracker(event: ClrDragEvent<any>, resizeTrackerEl: HTMLElement) {
    this.columnResizerService.calculateResize(event);
    this.renderer.setStyle(resizeTrackerEl, 'transform', `translateX(${this.columnResizerService.resizedBy}px)`);
    this.renderer.setStyle(this.document.body, 'cursor', 'col-resize');
    this.redFlagTracker(resizeTrackerEl);
  }

  public hideTracker(resizeTrackerEl: HTMLElement) {
    this.columnResizerService.endResize();
    this.renderer.setStyle(resizeTrackerEl, 'display', 'none');
    this.renderer.setStyle(resizeTrackerEl, 'transform', `translateX(0px)`);
    this.renderer.setStyle(this.document.body, 'cursor', 'auto');
  }

  private redFlagTracker(resizeTrackerEl: HTMLElement) {
    let isWithinMaxResizeRange: boolean;
    // @TODO(JEREMY) Review this, it will always be true because above is always null
    if (isWithinMaxResizeRange !== this.columnResizerService.isWithinMaxResizeRange) {
      isWithinMaxResizeRange = this.columnResizerService.isWithinMaxResizeRange;
      if (!isWithinMaxResizeRange) {
        this.renderer.addClass(resizeTrackerEl, 'exceeded-max');
      } else {
        this.renderer.removeClass(resizeTrackerEl, 'exceeded-max');
      }
    }
  }
}
