/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EventEmitter, Inject, Input, OnDestroy, Output } from '@angular/core';

import { RowActionService } from './providers/row-action-service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { ClrPopoverPosition } from '../../utils/popover/interfaces/popover-position.interface';
import { ClrAlignment } from '../../utils/popover/enums/alignment.enum';
import { ClrSide } from '../../utils/popover/enums/side.enum';
import { ClrAxis } from '../../utils/popover/enums/axis.enum';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { ClrPopoverEventsService } from '../../utils/popover/providers/popover-events.service';
import { ClrPopoverPositionService } from '../../utils/popover/providers/popover-position.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clr-dg-action-overflow',
  providers: [UNIQUE_ID_PROVIDER, ClrPopoverToggleService, ClrPopoverEventsService, ClrPopoverPositionService],
  template: `
      <button class="datagrid-action-toggle"
              clrPopoverAnchor
              clrPopoverOpenCloseButton
              [attr.aria-label]="commonStrings.rowActions">
          <clr-icon shape="ellipsis-vertical"></clr-icon>
      </button>

      <div class="datagrid-action-overflow"
           [id]="popoverId"
           clrFocusTrap
           *clrPopoverContent="open at smartPosition; outsideClickToClose: true; scrollToClose: true">
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
    public commonStrings: ClrCommonStrings,
    private smartToggleService: ClrPopoverToggleService,
    @Inject(UNIQUE_ID) public popoverId: string
  ) {
    this.rowActionService.register();
    this.subscriptions.push(
      this.smartToggleService.openChange.subscribe(change => {
        this.open = change;
      })
    );
  }

  ngOnDestroy() {
    this.rowActionService.unregister();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  public get open() {
    return this.smartToggleService.open;
  }

  @Input('clrDgActionOverflowOpen')
  public set open(open: boolean) {
    this.smartToggleService.open = !!open;
    this.openChange.emit(open);
  }

  @Output('clrDgActionOverflowOpenChange') public openChange = new EventEmitter<boolean>(false);
}
