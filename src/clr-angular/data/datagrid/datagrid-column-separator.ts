/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

import { ColumnResizerService } from './providers/column-resizer.service';
import { TableSizeService } from './providers/table-size.service';

let nbCount: number = 0;

@Component({
  selector: 'clr-dg-column-separator',
  template: `
    <button class="datagrid-column-handle" tabindex="-1" type="button"
      clrDraggable 
      [clrGroup]="columnSeparatorId" 
      (clrDragStart)="columnResizerService.startResize(); showTracker(resizeTrackerEl)" 
      (clrDragMove)="columnResizerService.calculateResize($event); moveTracker(resizeTrackerEl)" 
      (clrDragEnd)="columnResizerService.endResize(); hideTracker(resizeTrackerEl)"></button>
    <div class="datagrid-column-resize-tracker" #resizeTrackerEl></div>
    `,
  host: {
    '[class.datagrid-column-separator]': 'true',
  },
})
export class ClrDatagridColumnSeparator {
  // Every column draggable separator should have its own unique ID
  // in order to not conflict with other draggables/droppables.
  public columnSeparatorId: string;

  constructor(
    public columnResizerService: ColumnResizerService,
    private renderer: Renderer2,
    private tableSizeService: TableSizeService,
    @Inject(DOCUMENT) private document: any
  ) {
    this.columnSeparatorId = 'dg-col-separator-' + nbCount++;
  }

  public showTracker(resizeTrackerEl: HTMLElement) {
    const tableHeight = this.tableSizeService.getColumnDragHeight();
    this.renderer.setStyle(resizeTrackerEl, 'height', tableHeight);
    this.renderer.setStyle(resizeTrackerEl, 'display', 'block');
  }

  public moveTracker(resizeTrackerEl: HTMLElement) {
    this.renderer.setStyle(resizeTrackerEl, 'transform', `translateX(${this.columnResizerService.resizedBy}px)`);
    this.renderer.setStyle(this.document.body, 'cursor', 'col-resize');
    this.redFlagTracker(resizeTrackerEl);
  }

  public hideTracker(resizeTrackerEl: HTMLElement) {
    this.renderer.setStyle(resizeTrackerEl, 'display', 'none');
    this.renderer.setStyle(resizeTrackerEl, 'transform', `translateX(0px)`);
    this.renderer.setStyle(this.document.body, 'cursor', 'auto');
  }

  private redFlagTracker(resizeTrackerEl: HTMLElement) {
    let isWithinMaxResizeRange: boolean;
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
