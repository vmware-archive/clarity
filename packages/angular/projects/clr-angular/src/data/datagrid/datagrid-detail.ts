/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChild, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import { DetailService } from './providers/detail.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { ClrDatagridDetailHeader } from './datagrid-detail-header';
import { ESC } from '../../utils/key-codes/key-codes';

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
export class ClrDatagridDetail implements OnDestroy {
  @ContentChild(ClrDatagridDetailHeader) public header: ClrDatagridDetailHeader;

  private unlisten: VoidFunction;

  constructor(
    public detailService: DetailService,
    public commonStrings: ClrCommonStringsService,
    ngZone: NgZone,
    renderer: Renderer2
  ) {
    ngZone.runOutsideAngular(() => {
      this.unlisten = renderer.listen('document', 'keyup', (event: KeyboardEvent) => {
        // We could've actually used `render.listener('document', 'keyup.esc')`, and that would definitely work.
        // Unfortunately, Angular delegates the event handling to the `KeyEventsPlugin` when it meets the `.` (dot)
        // in the event name. The `KeyEventsPlugin` calls `ngZone.runGuarded`, which triggers change detection anyway
        // (no matter if we added event listeners in the root zone).
        // In that case, the change detection will be run only when the user clicks the `esc` button.
        if (event.keyCode === ESC) {
          ngZone.run(() => {
            this.detailService.close();
          });
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.unlisten();
  }
}
