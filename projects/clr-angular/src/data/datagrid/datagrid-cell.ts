/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChildren, Injector, OnInit, QueryList, ViewContainerRef } from '@angular/core';

import { ClrSignpost } from '../../popover/signpost/signpost';
import { HostWrapper } from '../../utils/host-wrapping/host-wrapper';
import { WrappedCell } from './wrapped-cell';

@Component({
  selector: 'clr-dg-cell',
  template: ` <ng-content></ng-content> `,
  host: {
    '[class.datagrid-cell]': 'true',
    '[class.datagrid-signpost-trigger]': 'signpost.length > 0',
    role: 'gridcell',
  },
})
export class ClrDatagridCell implements OnInit {
  /*********
   * @property signpost
   *
   * @description
   * @ContentChild is used to detect the presence of a Signpost in the projected content.
   * On the host, we set the .datagrid-signpost-trigger class on the cell when signpost.length is greater than 0.
   *
   */
  @ContentChildren(ClrSignpost) signpost: QueryList<ClrSignpost>;

  constructor(private vcr: ViewContainerRef) {}

  private wrappedInjector: Injector;

  ngOnInit() {
    this.wrappedInjector = new HostWrapper(WrappedCell, this.vcr);
  }

  public get _view() {
    return this.wrappedInjector.get(WrappedCell, this.vcr).cellView;
  }
}
