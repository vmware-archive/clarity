/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EventEmitter, Inject, Input, OnDestroy, Output, NgZone, PLATFORM_ID } from '@angular/core';

import { RowActionService } from './providers/row-action-service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { isPlatformBrowser } from '@angular/common';
import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { ClrPopoverPosition } from '../../utils/popover/interfaces/popover-position.interface';
import { ClrAlignment } from '../../utils/popover/enums/alignment.enum';
import { ClrSide } from '../../utils/popover/enums/side.enum';
import { ClrAxis } from '../../utils/popover/enums/axis.enum';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { ClrPopoverEventsService } from '../../utils/popover/providers/popover-events.service';
import { ClrPopoverPositionService } from '../../utils/popover/providers/popover-position.service';
import { Subscription } from 'rxjs';

let clrDgActionId = 0;

@Component({
  selector: 'clr-dg-action-overflow',
  providers: [UNIQUE_ID_PROVIDER, ClrPopoverToggleService, ClrPopoverEventsService, ClrPopoverPositionService],
  template: `
    <button
      class="datagrid-action-toggle"
      type="button"
      role="button"
      aria-haspopup="true"
      #anchor
      [attr.aria-controls]="popoverId"
      [attr.aria-expanded]="open"
      [attr.aria-label]="commonStrings.keys.rowActions"
      clrPopoverAnchor
      clrPopoverOpenCloseButton
    >
      <clr-icon shape="ellipsis-vertical" [attr.title]="commonStrings.keys.rowActions"></clr-icon>
    </button>

    <div
      class="datagrid-action-overflow"
      role="menu"
      [id]="popoverId"
      [attr.aria-hidden]="!open"
      [attr.id]="popoverId"
      clrFocusTrap
      (click)="closeOverflowContent($event)"
      *clrPopoverContent="open; at: smartPosition; outsideClickToClose: true; scrollToClose: true"
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class ClrDatagridActionOverflow implements OnDestroy {
  private subscriptions: Subscription[] = [];
  public smartPosition: ClrPopoverPosition = {
    axis: ClrAxis.HORIZONTAL,
    side: ClrSide.AFTER,
    anchor: ClrAlignment.CENTER,
    content: ClrAlignment.CENTER,
  };

  constructor(
    private rowActionService: RowActionService,
    public commonStrings: ClrCommonStringsService,
    @Inject(PLATFORM_ID) private platformId: any,
    private zone: NgZone,
    private smartToggleService: ClrPopoverToggleService,
    @Inject(UNIQUE_ID) public popoverId: string
  ) {
    this.rowActionService.register();
    this.subscriptions.push(
      this.smartToggleService.openChange.subscribe(openState => {
        this.open = openState;
        if (openState) {
          this.focusFirstButton();
        }
      })
    );
    this.popoverId = 'clr-action-menu' + clrDgActionId++;
  }

  ngOnDestroy() {
    this.rowActionService.unregister();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  closeOverflowContent(event: Event): void {
    this.smartToggleService.toggleWithEvent(event);
  }

  private focusFirstButton(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          const firstButton: HTMLButtonElement | null = document.querySelector('button.action-item');
          if (firstButton) {
            firstButton.focus();
          }
        });
      });
    }
  }

  private _open = false;
  public get open() {
    return this._open;
  }

  @Input('clrDgActionOverflowOpen')
  public set open(open: boolean) {
    const openState = !!open;
    if (!!openState !== this.open) {
      // prevents chocolate mess
      this.smartToggleService.open = openState;
      this.openChange.emit(openState);
      this._open = openState;
    }
  }

  @Output('clrDgActionOverflowOpenChange') public openChange = new EventEmitter<boolean>(false);
}
