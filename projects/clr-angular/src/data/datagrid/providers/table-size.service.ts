/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { isPlatformBrowser } from '@angular/common';
import { ElementRef, Inject, Injectable, PLATFORM_ID } from '@angular/core';

/**
 * @description
 * Internal datagrid service that holds a reference to the clr-dg-table element and exposes a method to get height.
 */
@Injectable()
export class TableSizeService {
  private _tableRef: HTMLElement;

  public get tableRef(): HTMLElement {
    return this._tableRef;
  }

  public set tableRef(element: HTMLElement) {
    this._tableRef = element;
  }

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
  public set table(table: ElementRef) {
    if (isPlatformBrowser(this.platformId) && table.nativeElement) {
      this.tableRef = table.nativeElement.querySelector('.datagrid-table');
    }
  }

  // Used when resizing columns to show the column border being dragged.
  getColumnDragHeight(): string {
    if (!this.tableRef) {
      return null;
    }
    return `${this.tableRef.clientHeight}px`;
  }
}
