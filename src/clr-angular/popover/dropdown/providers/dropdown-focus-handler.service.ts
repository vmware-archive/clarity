/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, Optional, PLATFORM_ID, Renderer2, SkipSelf } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IfOpenService } from '../../../utils/conditional/if-open.service';
import { customFocusableItemProvider } from '../../../utils/focus/focusable-item/custom-focusable-item-provider';
import { UNIQUE_ID } from '../../../utils/id-generator/id-generator.service';
import { ArrowKeyDirection } from '../../../utils/focus/arrow-key-direction.enum';
import { FocusService } from '../../../utils/focus/focus.service';
import { FocusableItem } from '../../../utils/focus/focusable-item/focusable-item';
import { linkParent, linkVertical } from '../../../utils/focus/focusable-item/linkers';
import { wrapObservable } from '../../../utils/focus/wrap-observable';
import { take } from 'rxjs/operators';

@Injectable()
export class DropdownFocusHandler implements FocusableItem {
  constructor(
    @Inject(UNIQUE_ID) public id: string,
    private renderer: Renderer2,
    @SkipSelf()
    @Optional()
    private parent: DropdownFocusHandler,
    private ifOpenService: IfOpenService,
    private focusService: FocusService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.resetChildren();
    this.moveToFirstItemWhenOpen();
    if (!this.parent) {
      this.handleRootFocus();
    }
  }

  /**
   * If the dropdown was opened by clicking on the trigger, we automatically move to the first item
   */
  moveToFirstItemWhenOpen() {
    this.ifOpenService.openChange.subscribe(open => {
      if (open && this.ifOpenService.originalEvent) {
        // Even if we properly waited for ngAfterViewInit, the container still wouldn't be attached to the DOM.
        // So setTimeout is the only way to wait for the container to be ready to move focus to first item.
        setTimeout(() => {
          this.focusService.moveTo(this);
          if (this.parent) {
            this.focusService.move(ArrowKeyDirection.RIGHT);
          } else {
            this.focusService.move(ArrowKeyDirection.DOWN);
          }
        });
      }
    });
  }

  private focusBackOnTrigger = false;

  /**
   * Focus on the menu when it opens, and focus back on the root trigger when the whole dropdown becomes closed
   */
  handleRootFocus() {
    this.ifOpenService.openChange.subscribe(open => {
      if (open) {
        // Even if we properly waited for ngAfterViewInit, the container still wouldn't be attached to the DOM.
        // So setTimeout is the only way to wait for the container to be ready to focus it.
        setTimeout(() => {
          if (this.container && isPlatformBrowser(this.platformId)) {
            this.container.focus();
          }
        });
      }
      if (!open) {
        // We reset the state of the focus service both on initialization and when closing.
        this.focusService.reset(this);
        // But we only actively focus the trigger when closing, not on initialization.
        if (this.focusBackOnTrigger) {
          this.focus();
        }
      }
      this.focusBackOnTrigger = open;
    });
  }

  private _trigger: HTMLElement;
  get trigger() {
    return this._trigger;
  }
  set trigger(el: HTMLElement) {
    this._trigger = el;
    this.renderer.setAttribute(el, 'id', this.id);
    if (this.parent) {
      // The root trigger needs to be in the tab flow, but nested ones are removed like any other dropdown item.
      this.renderer.setAttribute(el, 'tabindex', '-1');
    } else {
      // The root trigger is the only one outside of the menu, so it needs to its own key listeners.
      this.focusService.listenToArrowKeys(el);
    }
  }

  private _container: HTMLElement;
  get container() {
    return this._container;
  }
  set container(el: HTMLElement) {
    this._container = el;
    if (!this.parent) {
      // The root container is the only one we register to the focus service, others do not need focus
      this.focusService.registerContainer(el);
      // For dropdowns, the menu shouldn't actually be in the tab order. We manually focus it when opening.
      this.renderer.setAttribute(el, 'tabindex', '-1');
      // When the user moves focus outside of the menu, we close the dropdown
      this.renderer.listen(el, 'blur', event => {
        // we clear out any existing focus on the items
        this.children.pipe(take(1)).subscribe(items => items.forEach(item => item.blur()));

        // focusout + relatedTarget because a simple blur event would trigger
        // when the user clicks an item inside of the menu, closing the dropdown.
        if (event.relatedTarget && isPlatformBrowser(this.platformId)) {
          if (el.contains(event.relatedTarget) || event.relatedTarget === this.trigger) {
            return;
          }
        }
        // We let the user move focus to where the want, we don't force the focus back on the trigger
        this.focusBackOnTrigger = false;
        this.ifOpenService.open = false;
      });
    }
  }

  focus() {
    if (this.trigger) {
      if (this.parent) {
        this.renderer.addClass(this.trigger, 'clr-focus');
      } else if (isPlatformBrowser(this.platformId)) {
        this.trigger.focus();
      }
    }
  }
  blur() {
    if (this.trigger) {
      if (this.parent) {
        this.renderer.removeClass(this.trigger, 'clr-focus');
      } else if (isPlatformBrowser(this.platformId)) {
        this.trigger.blur();
      }
    }
  }

  activate() {
    if (isPlatformBrowser(this.platformId)) {
      this.trigger.click();
    }
  }

  private children: ReplaySubject<FocusableItem[]>;
  right?: Observable<FocusableItem>;
  down?: Observable<FocusableItem>;
  up?: Observable<FocusableItem>;

  private openAndGetChildren() {
    return wrapObservable(this.children, () => (this.ifOpenService.open = true));
  }
  private closeAndGetThis() {
    return wrapObservable(of(this), () => (this.ifOpenService.open = false));
  }

  resetChildren() {
    this.children = new ReplaySubject<FocusableItem[]>(1);
    if (this.parent) {
      this.right = this.openAndGetChildren().pipe(map(all => all[0]));
    } else {
      this.down = this.openAndGetChildren().pipe(map(all => all[0]));
      this.up = this.openAndGetChildren().pipe(map(all => all[all.length - 1]));
    }
  }

  addChildren(children: FocusableItem[]) {
    linkVertical(children);
    if (this.parent) {
      linkParent(children, this.closeAndGetThis(), ArrowKeyDirection.LEFT);
    }
    this.children.next(children);
  }
}

export const DROPDOWN_FOCUS_HANDLER_PROVIDER = customFocusableItemProvider(DropdownFocusHandler);
