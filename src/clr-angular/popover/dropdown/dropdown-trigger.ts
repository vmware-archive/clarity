/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, HostListener } from '@angular/core';

import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';

import { ClrDropdown } from './dropdown';
import { DropdownFocusHandler } from './providers/dropdown-focus-handler.service';

@Directive({
  // We support both selectors for legacy reasons
  selector: '[clrDropdownTrigger],[clrDropdownToggle]',
  host: {
    '[class.dropdown-toggle]': 'isRootLevelToggle',
    '[class.dropdown-item]': '!isRootLevelToggle',
    '[class.expandable]': '!isRootLevelToggle',
    '[class.active]': 'active',
    '[attr.aria-haspopup]': '"menu"',
    '[attr.aria-expanded]': 'active',
  },
})
export class ClrDropdownTrigger {
  public isRootLevelToggle = true;

  constructor(
    dropdown: ClrDropdown,
    private toggleService: ClrPopoverToggleService,
    el: ElementRef<HTMLElement>,
    focusHandler: DropdownFocusHandler
  ) {
    // if the containing dropdown has a parent, then this is not the root level one
    if (dropdown.parent) {
      this.isRootLevelToggle = false;
    }
    focusHandler.trigger = el.nativeElement;
  }

  get active(): boolean {
    return this.toggleService.open;
  }

  @HostListener('click', ['$event'])
  onDropdownTriggerClick(event: any): void {
    this.toggleService.toggleWithEvent(event);
  }
}
