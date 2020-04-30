/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, NgZone, Renderer2, ViewChild } from '@angular/core';
import { ClrDragEvent } from '../../utils/drag-and-drop/drag-event';
import { ColumnResizerService } from './providers/column-resizer.service';
import { TableSizeService } from './providers/table-size.service';
import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { DragEventType } from '../../utils/drag-and-drop/interfaces/drag-event.interface';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';

@Component({
  selector: 'clr-dg-column-separator',
  template: `
    <button
      type="button"
      class="datagrid-column-handle"
      [attr.aria-label]="commonString.keys.columnResizeHandlerAriaLabel"
      [attr.aria-describedby]="descriptionId"
      clrDraggable [clrGroup]="columnSeparatorId"
      (clrDragStart)="showTracker(resizeTrackerEl)"
      (clrDragMove)="moveTracker($event, resizeTrackerEl)"
      (clrDragEnd)="hideTracker(resizeTrackerEl)"
      #columnHandle>
    </button>
    <span class="clr-sr-only"
    [attr.aria-label]="columnSeparatorAriaDescription"
    [attr.id]="descriptionId">
      </span>
    <div class="datagrid-column-resize-tracker" #resizeTrackerEl></div>
  `,
  host: {
    '[class.datagrid-column-separator]': 'true',
  },
  providers: [UNIQUE_ID_PROVIDER],
})
export class ClrDatagridColumnSeparator implements AfterViewInit {
  @ViewChild('resizeTrackerEl', { static: false })
  resizeTrackerEl: ElementRef;

  @ViewChild('columnHandle', { static: false })
  columnHandle: ElementRef;

  private _moveStarted = false;
  public columnSeparatorAriaDescription = this.commonString.keys.columnSeparatorAriaLabel;

  // Every column draggable separator should have its own unique ID
  // in order to not conflict with other draggables/droppables.
  constructor(
    private columnResizerService: ColumnResizerService,
    private renderer: Renderer2,
    private ngZone: NgZone,
    private tableSizeService: TableSizeService,
    public commonString: ClrCommonStringsService,
    @Inject(DOCUMENT) private document: any,
    @Inject(UNIQUE_ID) public columnSeparatorId: string
  ) {}

  public ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.renderer.listen(this.columnHandle.nativeElement, 'keydown', event => {
        this.onKeyPress(event);
      });

      this.renderer.listen(this.columnHandle.nativeElement, 'keyup', event => {
        this.onKeyUp(event);
      });
    });
  }

  get descriptionId(): string {
    return `${this.columnSeparatorId}-aria-describedby`;
  }

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

  public onKeyPress(event: KeyboardEvent): void {
    if (event.code !== 'ArrowLeft' && event.code !== 'ArrowRight') {
      return;
    }

    if (!this._moveStarted) {
      this.showTracker(this.resizeTrackerEl.nativeElement);
      this._moveStarted = true;
    }

    let step = 5;
    if (event.code === 'ArrowLeft') {
      step = -5;
    }

    const dragEvent = new ClrDragEvent({
      type: DragEventType.DRAG_MOVE,
      group: this.columnHandle.nativeElement.id,
      dragPosition: {
        pageX: this.columnResizerService.resizedBy,
        pageY: 0,
        moveX: this.columnResizerService.resizedBy + step,
        moveY: 0,
      },
    });

    this.moveTracker(dragEvent, this.resizeTrackerEl.nativeElement);
  }

  public onKeyUp(event: KeyboardEvent): void {
    if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
      this._moveStarted = false;
      this.hideTracker(this.resizeTrackerEl.nativeElement);
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => this.columnHandle.nativeElement.focus(), 300);
      });
    }
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
