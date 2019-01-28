/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  Output,
  ElementRef,
  NgZone,
  Inject,
  PLATFORM_ID } from '@angular/core';

import { RowActionService } from './providers/row-action-service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { isPlatformBrowser } from '@angular/common';
import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { ClrSmartPosition } from '../../utils/smart-popover/interfaces/smart-position.interface';
import { ClrAlignment } from '../../utils/smart-popover/enums/alignment.enum';
import { ClrSide } from '../../utils/smart-popover/enums/side.enum';
import { ClrAxis } from '../../utils/smart-popover/enums/axis.enum';
import { ClrSmartPopoverToggleService } from '../../utils/smart-popover/providers/smart-popover-toggle.service';
import { ClrSmartPopoverEventsService } from '../../utils/smart-popover/providers/smart-popover-events.service';
import { ClrSmartPopoverPositionService } from '../../utils/smart-popover/providers/smart-popover-position.service';
import { Subscription } from 'rxjs';

let clrDgActionId = 0;

@Component({
  selector: 'clr-dg-action-overflow',
  providers: [
    UNIQUE_ID_PROVIDER,
    ClrSmartPopoverToggleService,
    ClrSmartPopoverEventsService,
    ClrSmartPopoverPositionService,
  ],
  template: `
      <button class="datagrid-action-toggle"
              type="button"
              role="button"
              aria-haspopup="true" 
              #anchor 
              [attr.aria-controls]="popoverId" 
              [attr.aria-expanded]="open"
              [attr.aria-label]="commonStrings.keys.rowActions">
              clrSmartAnchor
              clrSmartOpenCloseButton
          <clr-icon shape="ellipsis-vertical" [attr.title]="commonStrings.keys.rowActions"></clr-icon>
      </button>

      <div class="datagrid-action-overflow"
           role="menu" 
           [id]="popoverId"
           [clrStrict]="true"
           [attr.aria-hidden]="!open"
           [attr.id]="popoverId" 
           clrFocusTrap
           *clrSmartPopoverContent="open at smartPosition; outsideClickToClose: true; scrollToClose: true">
          <ng-content></ng-content>
      </div>
  `,
})
export class ClrDatagridActionOverflow implements OnDestroy {
  private subscriptions: Subscription[] = [];
  public smartPosition: ClrSmartPosition = {
    axis: ClrAxis.HORIZONTAL,
    side: ClrSide.AFTER,
    anchor: ClrAlignment.CENTER,
    content: ClrAlignment.CENTER,
  };

  constructor(
    private rowActionService: RowActionService,
    public commonStrings: ClrCommonStringsService,
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    private zone: NgZone,
    private smartToggleService: ClrSmartPopoverToggleService,
    @Inject(UNIQUE_ID) public popoverId: string
  ) {
    this.rowActionService.register();
    this.subscriptions.push(
      this.smartToggleService.openChange.subscribe(change => {
        this.open = change;
      })
    );
    this.popoverId = 'clr-action-menu' + clrDgActionId++;
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
    const boolOpen = !!open;
    if (boolOpen !== this.smartToggleService.open) {
      this.smartToggleService.open = boolOpen;
      this.openChange.emit(boolOpen);
      if (boolOpen && isPlatformBrowser(this.platformId)) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            const firstButton = this.elementRef.nativeElement.querySelector('button.action-item');
            if (firstButton) {
              firstButton.focus();
            }
          });
        });
      }
    }
  }

  @Output('clrDgActionOverflowOpenChange') public openChange = new EventEmitter<boolean>(false);
}
