/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DetailService } from './providers/detail.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';

@Component({
  selector: 'clr-dg-detail-header',
  host: {
    '[class.datagrid-detail-header]': 'true',
  },
  template: `
    <div class="datagrid-detail-header-title" tabindex="0" #title [id]="detailService.id + '-title'">
      <ng-content></ng-content>
    </div>
    <div class="datagrid-detail-pane-close">
      <button type="button" 
              class="btn btn-link" 
              (click)="detailService.close()" 
              [attr.aria-label]="commonStrings.close">
        <clr-icon size="24" shape="times"></clr-icon>
      </button>
    </div>
  `,
})
export class ClrDatagridDetailHeader {
  constructor(
    public detailService: DetailService,
    public commonStrings: ClrCommonStrings,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  @ViewChild('title') title;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.title.nativeElement.focus();
    }
  }
}
