/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, HostListener } from '@angular/core';

import { IfOpenService } from '../../utils/conditional/if-open.service';

import { ClrDropdown } from './dropdown';

@Directive({
  // We support both selectors for legacy reasons
  selector: '[clrDropdownTrigger],[clrDropdownToggle]',
  host: {
    '[class.dropdown-toggle]': 'isRootLevelToggle',
    '[class.dropdown-item]': '!isRootLevelToggle',
    '[class.expandable]': '!isRootLevelToggle',
    '[class.active]': 'active',
  },
})
export class ClrDropdownTrigger {
  public isRootLevelToggle: boolean = true;

  constructor(dropdown: ClrDropdown, private ifOpenService: IfOpenService) {
    // if the containing dropdown has a parent, then this is not the root level one
    if (dropdown.parent) {
      this.isRootLevelToggle = false;
    }
  }

  get active(): boolean {
    return this.ifOpenService.open;
  }

  @HostListener('click', ['$event'])
  onDropdownTriggerClick(event: any): void {
    this.ifOpenService.toggleWithEvent(event);
  }
}
