/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, NgZone, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { KeyCodes, IEKeyCodes } from '../../utils/enums/key-codes.enum';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { ColumnResizerService } from './providers/column-resizer.service';
import { TableSizeService } from './providers/table-size.service';

// Default resize length on each keyboard move event
const KEYBOARD_RESIZE_LENGTH = 12;

@Component({
  selector: 'clr-dg-column-separator',
  template: `
    <button
      type="button"
      class="datagrid-column-handle"
      [attr.aria-label]="commonString.keys.columnSeparatorAriaLabel"
      [attr.aria-describedby]="descriptionId"
      clrDraggable
      [clrGroup]="columnSeparatorId"
      (clrDragStart)="showTracker()"
      (clrDragMove)="moveTracker($event.dragPosition.moveX)"
      (clrDragEnd)="hideTracker()"
      #columnHandle
    ></button>
    <span class="clr-sr-only" [attr.id]="descriptionId">
      {{ commonString.keys.columnSeparatorDescription }}
    </span>
    <div class="datagrid-column-resize-tracker" #resizeTracker></div>
  `,
  host: {
    '[class.datagrid-column-separator]': 'true',
  },
  providers: [UNIQUE_ID_PROVIDER],
})
export class ClrDatagridColumnSeparator implements AfterViewInit, OnDestroy {
  @ViewChild('resizeTracker') private resizeTrackerRef: ElementRef;

  private get resizeTrackerEl() {
    return this.resizeTrackerRef.nativeElement;
  }

  @ViewChild('columnHandle') private columnHandleRef: ElementRef;

  private get columnHandleEl() {
    return this.columnHandleRef.nativeElement;
  }

  private resizeStartedOnKeyDown = false;

  private isWithinMaxResizeRange: boolean;

  private unlisteners: (() => void)[] = [];

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

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.unlisteners.push(
        this.renderer.listen(this.columnHandleEl, 'keydown', event => {
          this.showTrackerOnFirstKeyDown(event);
          this.moveTrackerOnKeyDown(event);
        })
      );
      this.unlisteners.push(
        this.renderer.listen(this.columnHandleEl, 'keyup', event => {
          this.hideTrackerOnKeyUp(event);
        })
      );
    });
  }

  get descriptionId(): string {
    return `${this.columnSeparatorId}-aria-describedby`;
  }

  public showTracker(): void {
    this.columnResizerService.startResize();
    const tableHeight = this.tableSizeService.getColumnDragHeight();
    this.renderer.setStyle(this.resizeTrackerEl, 'height', tableHeight);
    this.renderer.setStyle(this.resizeTrackerEl, 'display', 'block');
  }

  public moveTracker(movedBy: number): void {
    this.columnResizerService.calculateResize(movedBy);
    this.renderer.setStyle(this.resizeTrackerEl, 'transform', `translateX(${this.columnResizerService.resizedBy}px)`);
    this.renderer.setStyle(this.document.body, 'cursor', 'col-resize');
    this.redFlagTracker();
  }

  public hideTracker(): void {
    this.columnResizerService.endResize();
    this.renderer.setStyle(this.resizeTrackerEl, 'display', 'none');
    this.renderer.setStyle(this.resizeTrackerEl, 'transform', `translateX(0px)`);
    this.renderer.setStyle(this.document.body, 'cursor', 'auto');
  }

  private showTrackerOnFirstKeyDown(event: KeyboardEvent): void {
    if (!this.resizeStartedOnKeyDown && (this.isArrowLeftKeyEvent(event) || this.isArrowRightKeyEvent(event))) {
      this.resizeStartedOnKeyDown = true;
      this.renderer.addClass(this.resizeTrackerEl, 'on-arrow-key-resize');
      this.showTracker();
    }
  }

  private moveTrackerOnKeyDown(event: KeyboardEvent): void {
    if (this.isArrowLeftKeyEvent(event)) {
      this.moveTracker(this.columnResizerService.resizedBy - KEYBOARD_RESIZE_LENGTH);
    } else if (this.isArrowRightKeyEvent(event)) {
      this.moveTracker(this.columnResizerService.resizedBy + KEYBOARD_RESIZE_LENGTH);
    }
  }

  private hideTrackerOnKeyUp(event: KeyboardEvent): void {
    if (this.resizeStartedOnKeyDown && (this.isArrowLeftKeyEvent(event) || this.isArrowRightKeyEvent(event))) {
      this.resizeStartedOnKeyDown = false;
      this.renderer.removeClass(this.resizeTrackerEl, 'on-arrow-key-resize');
      this.hideTracker();
      this.columnHandleEl.focus();
    }
  }

  private redFlagTracker(): void {
    if (this.isWithinMaxResizeRange !== this.columnResizerService.isWithinMaxResizeRange) {
      this.isWithinMaxResizeRange = this.columnResizerService.isWithinMaxResizeRange;
      if (!this.isWithinMaxResizeRange) {
        this.renderer.addClass(this.resizeTrackerEl, 'exceeded-max');
      } else {
        this.renderer.removeClass(this.resizeTrackerEl, 'exceeded-max');
      }
    }
  }

  private isArrowLeftKeyEvent(event: KeyboardEvent) {
    return event.key === KeyCodes.ArrowLeft || event.key === IEKeyCodes.ArrowLeft;
  }

  private isArrowRightKeyEvent(event: KeyboardEvent) {
    return event.key === KeyCodes.ArrowRight || event.key === IEKeyCodes.ArrowRight;
  }

  ngOnDestroy() {
    this.unlisteners.forEach(unlistener => unlistener());
  }
}
