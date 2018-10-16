/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

import { DatagridRenderStep } from '../enums/render-step.enum';

import { DatagridColumnResizer } from './column-resizer';
import { STRICT_WIDTH_CLASS } from './constants';
import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';
import { DatagridRenderOrganizer } from './render-organizer';

@Directive({ selector: 'clr-dg-column' })
export class DatagridHeaderRenderer implements OnDestroy {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private organizer: DatagridRenderOrganizer,
    private domAdapter: DomAdapter,
    private columnResizer: DatagridColumnResizer
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
    if (this.widthSet && !this.columnResizer.columnResizeBy) {
      this.renderer.setStyle(this.el.nativeElement, 'width', null);
    }
  }

  private detectStrictWidth() {
    if (this.columnResizer.columnResizeBy) {
      this.strictWidth = this.columnResizer.columnRectWidth + this.columnResizer.columnResizeBy;
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
      if (this.columnResizer.columnResizeBy) {
        this.renderer.setStyle(this.el.nativeElement, 'width', width + 'px');
        this.columnResizer.columnResizeBy = 0;
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
