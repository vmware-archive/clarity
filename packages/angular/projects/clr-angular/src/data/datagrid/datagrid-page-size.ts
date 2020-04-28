/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from '@angular/core';
import { Page } from './providers/page';

@Component({
  selector: 'clr-dg-page-size',
  template: `
    <ng-content></ng-content>
    <div class="clr-select-wrapper">
      <select [class.clr-page-size-select]="true" [(ngModel)]="page.size">
        <option *ngFor="let option of pageSizeOptions" [ngValue]="option">{{option}}</option>
      </select>
    </div>
  `,
})
export class ClrDatagridPageSize {
  @Input('clrPageSizeOptions') pageSizeOptions: number[];

  constructor(public page: Page) {}

  ngOnInit() {
    if (!this.pageSizeOptions || this.pageSizeOptions.length === 0) {
      this.pageSizeOptions = [this.page.size];
    }
  }
}
