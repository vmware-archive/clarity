/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, HostListener } from '@angular/core';
import { DetailService } from './providers/detail.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';

@Component({
  selector: 'clr-dg-detail',
  host: {
    '[class.datagrid-detail-pane]': 'true',
    '[style.height.px]': 'detailService.height',
  },
  // We put the *ngIf on the clrFocusTrap so it doesn't always exist on the page
  template: `
    <div clrFocusTrap class="datagrid-detail-pane-content" *ngIf="detailService.isOpen" role="dialog" 
         [id]="detailService.id" aria-modal="true" [attr.aria-describedby]="detailService.id + '-title'">
      <div class="clr-sr-only">{{commonStrings.detailPaneStart}}</div>
      <ng-content></ng-content>
      <div class="clr-sr-only">{{commonStrings.detailPaneEnd}}</div>
    </div>
    `,
})
export class ClrDatagridDetail {
  constructor(public detailService: DetailService, public commonStrings: ClrCommonStrings) {}

  @HostListener('document:keyup', ['$event'])
  closeCheck(event: KeyboardEvent) {
    // @TODO refactor when IE11 is dead
    if ((event && (event.key && event.key === 'Escape')) || (event.key && event.key === 'Esc')) {
      this.detailService.close();
    }
  }
}
