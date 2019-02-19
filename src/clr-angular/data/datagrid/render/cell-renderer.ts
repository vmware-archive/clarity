/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

import { DatagridRenderStep } from '../enums/render-step.enum';

import { STRICT_WIDTH_CLASS } from './constants';
import { DatagridRenderOrganizer } from './render-organizer';
import { ColumnOrderModelService } from '../providers/column-order-model.service';

@Directive({ selector: 'clr-dg-cell' })
export class DatagridCellRenderer implements OnDestroy {
  columnOrderModel: ColumnOrderModelService;

  constructor(private el: ElementRef, private renderer: Renderer2, organizer: DatagridRenderOrganizer) {
    this.subscriptions.push(
      organizer.filterRenderSteps(DatagridRenderStep.CLEAR_WIDTHS).subscribe(() => this.clearWidth())
    );
  }

  private subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private clearWidth() {
    this.renderer.removeClass(this.el.nativeElement, STRICT_WIDTH_CLASS);
    this.renderer.setStyle(this.el.nativeElement, 'width', null);
  }

  public setWidth(strict: boolean, value: number) {
    if (strict) {
      this.renderer.addClass(this.el.nativeElement, STRICT_WIDTH_CLASS);
    } else {
      this.renderer.removeClass(this.el.nativeElement, STRICT_WIDTH_CLASS);
    }
    this.renderer.setStyle(this.el.nativeElement, 'width', value + 'px');
  }

  private _columnModelRef: ColumnOrderModelService;

  public setColumnModel(columnModel: ColumnOrderModelService) {
    if (this._columnModelRef !== columnModel) {
      this._columnModelRef = columnModel;
      this.renderOrder(this._columnModelRef.flexOrder);
      this.subscriptions.push(
        this._columnModelRef.orderChange.subscribe(() => {
          this.renderOrder(this._columnModelRef.flexOrder);
        })
      );
    }
  }

  public renderOrder(flexOrder: number) {
    this.renderer.setStyle(this.el.nativeElement, 'order', flexOrder);
  }
}
