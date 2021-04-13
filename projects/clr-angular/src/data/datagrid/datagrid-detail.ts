/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChild, HostListener } from '@angular/core';
import { DetailService } from './providers/detail.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { ClrDatagridDetailHeader } from './datagrid-detail-header';

@Component({
  selector: 'clr-dg-detail',
  host: {
    '[class.datagrid-detail-pane]': 'true',
  },
  // We put the *ngIf on the clrFocusTrap so it doesn't always exist on the page
  // have to test for presence of header for aria-describedby because it was causing unit tests to crash
  template: `
    <div
      [clrFocusTrap]="{ strict: false }"
      class="datagrid-detail-pane-content"
      *ngIf="detailService.isOpen"
      role="dialog"
      [id]="detailService.id"
      aria-modal="true"
      [attr.aria-describedby]="header ? header.titleId : ''"
    >
      <div class="clr-sr-only">{{ commonStrings.keys.detailPaneStart }}</div>
      <ng-content></ng-content>
      <div class="clr-sr-only">{{ commonStrings.keys.detailPaneEnd }}</div>
    </div>
  `,
})
export class ClrDatagridDetail {
  @ContentChild(ClrDatagridDetailHeader) public header: ClrDatagridDetailHeader;

  constructor(public detailService: DetailService, public commonStrings: ClrCommonStringsService) {}

  @HostListener('document:keyup.esc')
  closeCheck(): void {
    this.detailService.close();
  }
}
