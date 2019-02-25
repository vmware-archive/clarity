/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { ClrTab } from '../tab';
import { TabsLayout } from '../enums/tabsLayout';

@Injectable()
export class TabsService {
  private _children: ClrTab[] = [];

  layout: TabsLayout = TabsLayout.HORIZONTAL;

  register(tab: ClrTab) {
    this._children.push(tab);
  }

  get children() {
    return this._children;
  }

  get activeTab() {
    return this.children.find((tab: ClrTab) => {
      return tab.active;
    });
  }

  get overflowTabs() {
    return this.children.filter((tab: ClrTab) => {
      return this.layout !== TabsLayout.VERTICAL && tab.tabLink.inOverflow;
    });
  }

  unregister(tab: ClrTab) {
    const index = this.children.indexOf(tab);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }
}
