/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  Component,
  ContentChildren,
  ElementRef,
  Injector,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { ClrSignpost } from '../../popover/signpost/signpost';
import { HostWrapper } from '../../utils/host-wrapping/host-wrapper';

import { HideableColumnService } from './providers/hideable-column.service';
import { WrappedCell } from './wrapped-cell';

@Component({
  selector: 'clr-dg-cell',
  template: `
        <ng-content></ng-content>
    `,
  host: {
    '[class.datagrid-cell]': 'true',
    '[class.datagrid-signpost-trigger]': 'signpost.length > 0',
    role: 'cell',
  },
})
export class ClrDatagridCell implements OnInit, OnDestroy {
  /*********
   * @property signpost
   *
   * @description
   * @ContentChild is used to detect the presence of a Signpost in the projected content.
   * On the host, we set the .datagrid-signpost-trigger class on the cell when signpost.length is greater than 0.
   *
   */
  @ContentChildren(ClrSignpost) signpost: QueryList<ClrSignpost>;

  /**
   * @property id
   *
   * @description
   * An identifier for an instance of this cell that maps it to a specific column
   *
   */
  private _id: string;

  set id(value: string) {
    this._id = value;
    this.mapHideableColumn(this._id);
  }

  private hiddenStateSubscription: Subscription;

  constructor(
    public hideableColumnService: HideableColumnService,
    private _el: ElementRef,
    private _renderer: Renderer2,
    private vcr: ViewContainerRef
  ) {}

  private mapHideableColumn(columnId: string) {
    if (!columnId) {
      return;
    }

    const hideableColumn = this.hideableColumnService.getColumnById(this._id);

    this.setHiddenClass(hideableColumn.hidden);
    this.hiddenStateSubscription = hideableColumn.hiddenChangeState.subscribe(() => {
      this.setHiddenClass(hideableColumn.hidden);
    });
  }

  private setHiddenClass(hideableColumnValue: boolean) {
    if (hideableColumnValue) {
      this._renderer.addClass(this._el.nativeElement, 'datagrid-cell--hidden');
    } else {
      this._renderer.removeClass(this._el.nativeElement, 'datagrid-cell--hidden');
    }
  }

  private wrappedInjector: Injector;

  ngOnInit() {
    this.wrappedInjector = new HostWrapper(WrappedCell, this.vcr);
  }

  ngOnDestroy() {
    if (this.hiddenStateSubscription) {
      this.hiddenStateSubscription.unsubscribe();
    }
  }

  public get _view() {
    return this.wrappedInjector.get(WrappedCell, this.vcr).cellView;
  }
}
