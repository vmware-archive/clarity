/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

import { Point } from '../../popover/common/popover';

import { RowActionService } from './providers/row-action-service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';

@Component({
  selector: 'clr-dg-action-overflow',
  template: `
        <button (click)="toggle($event)" type="button" class="datagrid-action-toggle" #anchor>
            <clr-icon shape="ellipsis-vertical" [attr.title]="commonStrings.rowActions"></clr-icon>
        </button>
        <ng-template [(clrPopoverOld)]="open" [clrPopoverOldAnchor]="anchor" [clrPopoverOldAnchorPoint]="anchorPoint"
                     [clrPopoverOldPopoverPoint]="popoverPoint">
            <div #menu class="datagrid-action-overflow" (clrOutsideClick)="close($event)" [clrStrict]="true">
                <ng-content></ng-content>
            </div>
        </ng-template>
    `,
})
export class ClrDatagridActionOverflow implements OnDestroy {
  public anchorPoint: Point = Point.RIGHT_CENTER;
  public popoverPoint: Point = Point.LEFT_CENTER;

  constructor(private rowActionService: RowActionService, public commonStrings: ClrCommonStrings) {
    this.rowActionService.register();
  }

  ngOnDestroy() {
    this.rowActionService.unregister();
  }

  /**
   * Tracks whether the action overflow menu is open or not
   */
  private _open = false;
  public get open() {
    return this._open;
  }

  @Input('clrDgActionOverflowOpen')
  public set open(open: boolean) {
    const boolOpen = !!open;
    if (boolOpen !== this._open) {
      this._open = boolOpen;
      this.openChanged.emit(boolOpen);
    }
  }

  @Output('clrDgActionOverflowOpenChange') public openChanged = new EventEmitter<boolean>(false);

  /*
     * We need to remember the click that opens the menu, to make sure it doesn't close the menu instantly
     * when the event bubbles up the DOM all the way to the document, which we also listen to.
     */
  private openingEvent: any;

  /**
   * Shows/hides the action overflow menu
   */
  public toggle(event: any) {
    this.openingEvent = event;
    this.open = !this.open;
  }

  public close(event: MouseEvent) {
    /*
         * Because this listener is added synchonously, before the event finishes bubbling up the DOM,
         * we end up firing on the very click that just opened the menu, p
         * otentially closing it immediately every time. So we just ignore it.
         */
    if (event === this.openingEvent) {
      delete this.openingEvent;
      return;
    }
    this.open = false;
  }
}
