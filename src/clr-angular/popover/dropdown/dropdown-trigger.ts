/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import { IfOpenService } from '../../utils/conditional/if-open.service';

import { ClrDropdown } from './dropdown';
import { DropdownFocusHandler } from './providers/dropdown-focus-handler.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';

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
    '[attr.aria-label]': 'ariaLabel',
  },
})
export class ClrDropdownTrigger {
  public isRootLevelToggle: boolean = true;

  constructor(
    dropdown: ClrDropdown,
    private ifOpenService: IfOpenService,
    el: ElementRef<HTMLElement>,
    focusHandler: DropdownFocusHandler,
    private commonStringsService: ClrCommonStringsService
  ) {
    // if the containing dropdown has a parent, then this is not the root level one
    if (dropdown.parent) {
      this.isRootLevelToggle = false;
    }
    focusHandler.trigger = el.nativeElement;
  }

  get active(): boolean {
    return this.ifOpenService.open;
  }

  get ariaLabel() {
    return this.active ? this.clrAriaLabelDropdownClose : this.clrAriaLabelDropdownOpen;
  }

  @HostListener('click', ['$event'])
  onDropdownTriggerClick(event: any): void {
    this.ifOpenService.toggleWithEvent(event);
  }

  @Input('clrAriaLabelDropdownOpen') clrAriaLabelDropdownOpen: string;
  @Input('clrAriaLabelDropdownClose') clrAriaLabelDropdownClose: string;

  ngOnInit() {
    if (!this.clrAriaLabelDropdownOpen) {
      this.clrAriaLabelDropdownOpen = this.commonStringsService.keys.dropdownOpenAriaLabel;
    }
    if (!this.clrAriaLabelDropdownClose) {
      this.clrAriaLabelDropdownClose = this.commonStringsService.keys.dropdownCloseAriaLabel;
    }
  }
}
