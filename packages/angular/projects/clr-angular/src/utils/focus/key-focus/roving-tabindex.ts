/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ElementRef, Renderer2, Input } from '@angular/core';

import { KeyCodes } from '../../../utils/enums/key-codes.enum';
import { ClrKeyFocus } from './key-focus';
import { FocusableItem } from './interfaces';

@Component({
  selector: '[clrRovingTabindex]',
  template: '<ng-content></ng-content>',
})
export class ClrRovingTabindex extends ClrKeyFocus {
  constructor(elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef);
  }

  // Proxy the input, as the selector name from parent class will still be "clrKeyFocus".
  @Input('clrRovingTabindex')
  set rovingIndexItems(elements: Array<FocusableItem> | string) {
    this.focusableItems = elements as Array<FocusableItem>;
  }

  get rovingIndexItems(): Array<FocusableItem> | string {
    return this.focusableItems;
  }

  private disabled = false;

  @Input('clrRovingTabindexDisabled')
  set rovingTabindexDisabled(disabled: boolean) {
    this.disabled = disabled;
    if (this.currentItem) {
      this.setTabindex(this.currentItem, disabled ? -1 : 0);
    }
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.prevKeyPressed(event) && this.currentFocusIsNotFirstItem()) {
      this.updateTabindex(this.current - 1);
    } else if (this.nextKeyPressed(event) && this.currentFocusIsNotLastItem()) {
      this.updateTabindex(this.current + 1);
    } else if (event.code === KeyCodes.Home) {
      this.updateTabindex(0);
    } else if (event.code === KeyCodes.End) {
      this.updateTabindex(this.focusableItems.length - 1);
    }
    super.handleKeyboardEvent(event);
  }

  setClickedItemCurrent(event: any) {
    let position: number;

    if (this.focusableItems[0].nativeElement) {
      position = this.focusableItems.map(item => item.nativeElement).indexOf(event.target);
    } else {
      position = this.focusableItems.indexOf(event.target);
    }

    if (position > -1) {
      this.updateTabindex(position);
    }
    super.setClickedItemCurrent(event);
  }

  protected initializeFocus() {
    if (this.focusableItems && this.focusableItems.length) {
      this.focusableItems.forEach(item => {
        this.setTabindex(item, -1);
      });

      // It is possible that the focus was on an element, whose index is no longer available.
      // This can happen when some of the focusable elements are being removed.
      // In such cases, the new focus is initialized on the last focusable element.
      if (this.current >= this.focusableItems.length) {
        this.current = this.focusableItems.length - 1;
      }
      if (!this.disabled && this.currentItem) {
        this.setTabindex(this.currentItem, 0);
      }
    }
    super.initializeFocus();
  }

  private updateTabindex(newIndex: number) {
    this.setTabindex(this.currentItem, -1);
    this.setTabindex(this.focusableItems[newIndex], 0);
  }

  private setTabindex(item: FocusableItem, value: number) {
    if (item instanceof HTMLElement) {
      this.renderer.setAttribute(item, 'tabindex', value.toString());
    } else {
      this.renderer.setAttribute(item.nativeElement, 'tabindex', value.toString());
    }
  }
}
