/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Input, Renderer2 } from '@angular/core';
import { TableSizeService } from './providers/table-size.service';
import { ColumnOrderModelService } from './providers/column-order-model.service';
import { ColumnHeaderSides } from './enums/header-sides.enum';
import { ClrDropToleranceInterface } from '@clr/angular';

@Component({
  selector: 'clr-dg-column-reorder-droppable',
  template: `<div class="datagrid-column-reorder-droppable" clrDroppable 
                  [clrGroup]="columnOrderDropKey"
                  [clrDropTolerance]="dropTolerance" 
                  (clrDragStart)="setDropTolerance($event)" 
                  (clrDragEnter)="showHighlight(dropLine)" 
                  (clrDragLeave)="hideHighlight(dropLine)"
                  (clrDrop)="updateOrder($event, dropLine)">
    <div class="datagrid-column-drop-line" #dropLine></div>
  </div>`,
})
export class ClrDatagridColumnReorderDroppable {
  constructor(
    private tableSizeService: TableSizeService,
    private columnOrderModel: ColumnOrderModelService,
    private renderer: Renderer2
  ) {}

  public get columnOrderDropKey(): string {
    return this.columnOrderModel.columnGroupId;
  }

  public dropTolerance: -1 | ClrDropToleranceInterface;

  // Each column headers will have this clr-dg-column-reorder-droppable component on each of its sides.
  // We need a way to distinguish which side of the header that this droppable is on.

  @Input('side') side: ColumnHeaderSides;

  public showHighlight(dropLineEl: any): void {
    // The drop line is 2px wide and appears right between columns with left: -1px.
    this.renderer.setStyle(dropLineEl, 'height', `${this.tableSizeService.getColumnDragHeight()}`);

    // the drop line should fully appear at first and end columns
    if (this.columnOrderModel.isAtFirst) {
      this.renderer.setStyle(dropLineEl, 'left', `0px`);
    }
    if (this.columnOrderModel.isAtEnd) {
      this.renderer.setStyle(dropLineEl, 'left', `-2px`);
    }
  }

  public hideHighlight(dropLineEl: any): void {
    this.renderer.setStyle(dropLineEl, 'height', `0px`);
    this.renderer.setStyle(dropLineEl, 'left', `-1px`);
  }

  public updateOrder(droppedColumnModel: ColumnOrderModelService, dropLineEl: any): void {
    this.columnOrderModel.dropReceived(droppedColumnModel);
    this.hideHighlight(dropLineEl);
  }

  public setDropTolerance(event: any): void {
    const draggedFrom: number = event.dragDataTransfer.flexOrder;

    if (draggedFrom < this.columnOrderModel.flexOrder) {
      // if the dragged header is from the left side, the droppable at the right side in the current header
      // would get a proper dropTolerance value and the left side one would be disabled with value of -1.

      if (this.side === ColumnHeaderSides.RIGHT) {
        this.dropTolerance = {
          left: this.columnOrderModel.headerWidth,
          right: 0,
        };
      } else if (this.side === ColumnHeaderSides.LEFT) {
        this.dropTolerance = -1; // a negative drop tolerance means no drop area
      }
    } else if (draggedFrom > this.columnOrderModel.flexOrder) {
      // if the dragged header is from the right side, the droppable at the left side in the current header
      // would get a proper dropTolerance value and the right side one would be disabled with value of -1.

      if (this.side === ColumnHeaderSides.LEFT) {
        this.dropTolerance = {
          right: this.columnOrderModel.headerWidth,
          left: 0,
        };
      } else if (this.side === ColumnHeaderSides.RIGHT) {
        this.dropTolerance = -1; // a negative drop tolerance means no drop area
      }
    } else {
      // A reorder droppable shouldn't have a droppable area for the draggable header from the same column.
      // So if the draggable is from the same header, disable the dropTolerance
      this.dropTolerance = -1; // a negative drop tolerance means no drop area
    }
  }
}
