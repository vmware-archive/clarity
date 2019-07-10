/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { EventEmitter, HostListener, Input, Output, Component, ContentChildren, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';

import { ClrKeyFocusItem } from './key-focus-item';
import { ClrFocusDirection } from './enums/focus-direction.enum';
import { KeyCodes } from './../key-codes.enum';
import { FocusableItem } from './interfaces';
import { preventArrowKeyScroll, getKeyCodes } from './util';

@Component({
  selector: '[clrKeyFocus]',
  template: '<ng-content></ng-content>',
})
export class ClrKeyFocus {
  @Input('clrDirection') direction = ClrFocusDirection.VERTICAL;
  @Input('clrFocusOnLoad') focusOnLoad = false;
  @Output('clrFocusChange') private focusChange: EventEmitter<void> = new EventEmitter<void>();
  @ContentChildren(ClrKeyFocusItem, { descendants: true })
  private clrKeyFocusItems: QueryList<ClrKeyFocusItem>;

  private _focusableItems: Array<FocusableItem>;
  @Input('clrKeyFocus')
  set focusableItems(elements: Array<FocusableItem>) {
    // We accept a list of focusable elements (HTMLElements or existing Directives) or auto query for clrKeyFocusItem
    // We accept a list reference in the cases where we cannot use ContentChildren to query
    // ContentChildren can be unavailable if content is projected outside the scope of the component (see tabs).
    if (elements && elements.length) {
      this._focusableItems = elements;
      this.initializeFocus();
    }
  }

  get focusableItems() {
    if (this._focusableItems) {
      return this._focusableItems;
    } else {
      return this.clrKeyFocusItems.toArray();
    }
  }

  private _current: number = 0;
  get current() {
    return this._current;
  }

  private subscriptions: Subscription[] = [];

  ngAfterContentInit() {
    this.subscriptions.push(this.listenForItemUpdates());
    this.initializeFocus();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  @HostListener('keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.prevKeyPressed(event) && this.currentFocusIsNotFirstItem()) {
      this.keyAction(() => this._current--);
    } else if (this.nextKeyPressed(event) && this.currentFocusIsNotLastItem()) {
      this.keyAction(() => this._current++);
    } else if (event.code === KeyCodes.Home) {
      this.keyAction(() => (this._current = 0));
    } else if (event.code === KeyCodes.End) {
      this.keyAction(() => (this._current = this.focusableItems.length - 1));
    }

    preventArrowKeyScroll(event);
  }

  @HostListener('click', ['$event'])
  setClickedItemCurrent(event: any) {
    let position: number;

    if (this.focusableItems[0].nativeElement) {
      position = this.focusableItems.map(item => item.nativeElement).indexOf(event.target);
    } else {
      position = this.focusableItems.indexOf(event.target);
    }

    if (position > -1) {
      this._current = position;
    }
  }

  resetTabFocus() {
    this.currentItem.tabIndex = -1;
    this._current = 0;
    this.currentItem.tabIndex = 0;
  }

  moveTo(position: number) {
    if (this.positionInRange(position) && position !== this._current) {
      this.keyAction(() => (this._current = position));
    }
  }

  private positionInRange(position: number) {
    return position >= 0 && position < this.focusableItems.length;
  }

  private get currentItem() {
    if (this._current >= this.focusableItems.length) {
      return null;
    }

    return this.focusableItems[this._current];
  }

  private currentFocusIsNotFirstItem() {
    return this._current - 1 >= 0;
  }

  private currentFocusIsNotLastItem() {
    return this._current + 1 < this.focusableItems.length;
  }

  private initializeFocus() {
    if (this.focusableItems && this.focusableItems.length) {
      this.focusableItems.forEach(i => (i.tabIndex = -1));
      this.currentItem.tabIndex = 0;
    }

    if (this.focusOnLoad) {
      this.currentItem.focus();
      this.focusChange.next();
    }
  }

  private listenForItemUpdates() {
    return this.clrKeyFocusItems.changes.subscribe(() => {
      this.focusableItems.forEach(item => (item.tabIndex = -1));
      this._current = 0;
      this.currentItem.tabIndex = 0;
    });
  }

  private keyAction(action: Function) {
    this.currentItem.tabIndex = -1;
    action.call(this);
    this.currentItem.tabIndex = 0;
    this.currentItem.focus();
    this.focusChange.next();
  }

  private nextKeyPressed(event: KeyboardEvent) {
    const keyCodes = getKeyCodes(event);

    switch (this.direction) {
      case ClrFocusDirection.VERTICAL:
        return event.key === keyCodes.ArrowDown;
      case ClrFocusDirection.HORIZONTAL:
        return event.key === keyCodes.ArrowRight;
      case ClrFocusDirection.BOTH:
        return event.key === keyCodes.ArrowDown || event.key === keyCodes.ArrowRight;
      default:
        return false;
    }
  }

  private prevKeyPressed(event: KeyboardEvent) {
    const keyCodes = getKeyCodes(event);

    switch (this.direction) {
      case ClrFocusDirection.VERTICAL:
        return event.key === keyCodes.ArrowUp;
      case ClrFocusDirection.HORIZONTAL:
        return event.key === keyCodes.ArrowLeft;
      case ClrFocusDirection.BOTH:
        return event.key === keyCodes.ArrowUp || event.key === keyCodes.ArrowLeft;
      default:
        return false;
    }
  }
}
