/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, HostListener, Optional } from '@angular/core';
import { VerticalNavGroupService } from './providers/vertical-nav-group.service';

@Component({
  selector: '[clrVerticalNavLink]',
  template: `
        <ng-content select="[clrVerticalNavIcon]"></ng-content>
        <span class="nav-text">
            <ng-content></ng-content>    
        </span>
    `,
  host: { class: 'nav-link' },
})
export class ClrVerticalNavLink {
  constructor(@Optional() private _navGroupService: VerticalNavGroupService) {}

  @HostListener('click')
  public expandParentNavGroup(): void {
    if (this._navGroupService) {
      this._navGroupService.expand();
    }
  }
}
