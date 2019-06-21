/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Inject, OnDestroy, PLATFORM_ID, Renderer2 } from '@angular/core';
import { DetailService } from './providers/detail.service';
import { ESC } from '../../utils/key-codes/key-codes';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'clr-dg-detail',
  host: {
    '[class.datagrid-detail-pane]': 'true',
  },
  // We put the *ngIf on the clrFocusTrap so it doesn't always exist on the page
  template: `
    <div clrFocusTrap class="datagrid-detail-pane-content" *ngIf="detailService.isOpen">
      <ng-content></ng-content>
    </div>
    `,
})
export class ClrDatagridDetail implements OnDestroy {
  private listener: () => void;

  // For some reason was not getting the HostListener to fire in tests...need to investigate
  constructor(
    public detailService: DetailService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.listener = this.renderer.listen('document', 'keydown', event => {
      if (event.keyCode === ESC) {
        this.detailService.close();
      }
    });
  }

  ngOnDestroy() {
    if (this.listener) {
      this.listener();
      delete this.listener;
    }
    const button: HTMLButtonElement = document.querySelector('.datagrid-detail-caret-button.is-open');
    if (isPlatformBrowser(this.platformId) && button) {
      button.focus();
    }
  }
}
