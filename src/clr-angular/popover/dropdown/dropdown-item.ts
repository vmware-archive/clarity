/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import { ClrDropdown } from './dropdown';
import { BASIC_FOCUSABLE_ITEM_PROVIDER } from '../../utils/focus/focusable-item/basic-focusable-item.service';
import { FocusableItem } from '../../utils/focus/focusable-item/focusable-item';
import { RootDropdownService } from './providers/dropdown.service';

@Directive({
  selector: '[clrDropdownItem]',
  host: {
    '[class.dropdown-item]': 'true',
    '[attr.role]': '"menuitem"',
    '[attr.aria-disabled]': 'disabled',
  },
  providers: [BASIC_FOCUSABLE_ITEM_PROVIDER],
})
export class ClrDropdownItem implements AfterViewInit {
  constructor(
    private dropdown: ClrDropdown,
    private el: ElementRef<HTMLElement>,
    private _dropdownService: RootDropdownService,
    private renderer: Renderer2,
    private focusableItem: FocusableItem
  ) {}

  private unlisten;

  @Input()
  set disabled(value: boolean | string) {
    // Empty string attribute evaluates to false but should disable the item, so we need to add a special case for it.
    this.focusableItem.disabled = !!value || value === '';
  }

  get disabled() {
    return this.focusableItem.disabled;
  }

  ngAfterViewInit() {
    this.unlisten = this.renderer.listen(this.el.nativeElement, 'click', () => this.onDropdownItemClick());
  }

  onDropdownItemClick(): void {
    if (this.dropdown.isMenuClosable && !this.el.nativeElement.classList.contains('disabled')) {
      this._dropdownService.closeMenus();
    }
  }

  ngOnDestroy() {
    this.unlisten();
  }
}
