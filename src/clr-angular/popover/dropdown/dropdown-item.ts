/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
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
    '[class.disabled]': 'disabled',
    '[class.dropdown-item]': 'true',
    '[attr.role]': '"menuitem"',
    '[attr.aria-disabled]': 'disabled',
    '[attr.disabled]': "(disabled && setByDeprecatedDisabled)? '' : null",
    '[attr.id]': 'dropdownItemId',
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

  private unlisten: () => void;
  public setByDeprecatedDisabled = false;

  @Input('clrDisabled')
  set disabled(value: boolean | string) {
    // Empty string attribute evaluates to false but should disable the item, so we need to add a special case for it.
    this.focusableItem.disabled = !!value || value === '';
  }

  get disabled() {
    return this.focusableItem.disabled;
  }

  /*
   * @deprecated since 3.0, remove in 4.0. the presence of this attribute makes it not-focusable in IE11. Use [clrDisabled] input instead.
   */
  @Input('disabled')
  set disabledDeprecated(value: boolean | string) {
    // Empty string attribute evaluates to false but should disable the item, so we need to add a special case for it.
    this.focusableItem.disabled = !!value || value === '';
    this.setByDeprecatedDisabled = true;
  }

  get disabledDeprecated() {
    return this.focusableItem.disabled;
  }

  /**
   * Let you overwrite the focusable auto increment id.
   */
  @Input('id')
  set dropdownItemId(value: string) {
    this.focusableItem.id = value;
  }
  get dropdownItemId() {
    return this.focusableItem.id;
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
