/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, EventEmitter, OnDestroy, Output, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';
import { DatagridRenderStep } from '../enums/render-step.enum';
import { ColumnResizerService } from '../providers/column-resizer.service';
import { STRICT_WIDTH_CLASS } from './constants';
import { DatagridRenderOrganizer } from './render-organizer';

@Directive({ selector: 'clr-dg-column', providers: [ColumnResizerService] })
export class DatagridHeaderRenderer implements OnDestroy {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private organizer: DatagridRenderOrganizer,
    private domAdapter: DomAdapter,
    private columnResizerService: ColumnResizerService
  ) {
    this.subscriptions.push(
      this.organizer.filterRenderSteps(DatagridRenderStep.CLEAR_WIDTHS).subscribe(() => this.clearWidth())
    );
    this.subscriptions.push(
      this.organizer
        .filterRenderSteps(DatagridRenderStep.DETECT_STRICT_WIDTHS)
        .subscribe(() => this.detectStrictWidth())
    );
  }

  @Output('clrDgColumnResize') resizeEmitter: EventEmitter<number> = new EventEmitter();

  /**
   * Indicates if the column has a strict width, so it doesn't shrink or expand based on the content.
   */
  public strictWidth: number;
  private widthSet: boolean = false;

  private subscriptions: Subscription[] = [];
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private clearWidth() {
    // remove the width only if we set it, and it is not changed by dragging.
    if (this.widthSet && !this.columnResizerService.resizedBy) {
      this.renderer.setStyle(this.el.nativeElement, 'width', null);
    }
  }

  private detectStrictWidth() {
    if (this.columnResizerService.resizedBy) {
      this.strictWidth = this.columnResizerService.widthAfterResize;
    } else {
      this.strictWidth = this.domAdapter.userDefinedWidth(this.el.nativeElement);
    }
  }

  public computeWidth(): number {
    let width: number = this.strictWidth;
    if (!width) {
      width = this.domAdapter.scrollWidth(this.el.nativeElement);
    }
    return width;
  }

  public setWidth(width: number) {
    if (this.strictWidth) {
      if (this.columnResizerService.resizedBy) {
        this.resizeEmitter.emit(width);
        this.renderer.setStyle(this.el.nativeElement, 'width', width + 'px');
        this.widthSet = false;
      }
      // Don't set width if there is a user-defined one. Just add the strict width class.
      this.renderer.addClass(this.el.nativeElement, STRICT_WIDTH_CLASS);
      return;
    }
    this.renderer.removeClass(this.el.nativeElement, STRICT_WIDTH_CLASS);
    this.renderer.setStyle(this.el.nativeElement, 'width', width + 'px');
    this.widthSet = true;
  }
}
