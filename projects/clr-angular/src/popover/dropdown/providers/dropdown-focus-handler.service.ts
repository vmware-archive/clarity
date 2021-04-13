/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, Optional, PLATFORM_ID, Renderer2, SkipSelf } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ClrPopoverToggleService } from '../../../utils/popover/providers/popover-toggle.service';
import { customFocusableItemProvider } from '../../../utils/focus/focusable-item/custom-focusable-item-provider';
import { UNIQUE_ID } from '../../../utils/id-generator/id-generator.service';
import { ArrowKeyDirection } from '../../../utils/focus/arrow-key-direction.enum';
import { FocusService } from '../../../utils/focus/focus.service';
import { FocusableItem } from '../../../utils/focus/focusable-item/focusable-item';
import { Linkers } from '../../../utils/focus/focusable-item/linkers';
import { wrapObservable } from '../../../utils/focus/wrap-observable';

@Injectable()
export class DropdownFocusHandler implements FocusableItem {
  constructor(
    @Inject(UNIQUE_ID) public id: string,
    private renderer: Renderer2,
    @SkipSelf()
    @Optional()
    private parent: DropdownFocusHandler,
    private toggleService: ClrPopoverToggleService,
    private focusService: FocusService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.resetChildren();
    this.moveToFirstItemWhenOpen();
    if (!this.parent) {
      this.handleRootFocus();
    }
  }

  private _unlistenFuncs: Function[] = [];

  /**
   * If the dropdown was opened by clicking on the trigger, we automatically move to the first item
   */
  moveToFirstItemWhenOpen() {
    this.toggleService.openChange.subscribe(open => {
      if (open && this.toggleService.originalEvent) {
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
    this.toggleService.openChange.subscribe(open => {
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

    if (this.parent) {
      this._unlistenFuncs.push(
        this.renderer.listen(el, 'keydown.arrowright', event => this.toggleService.toggleWithEvent(event))
      );
    } else {
      this._unlistenFuncs.push(
        this.renderer.listen(el, 'keydown.arrowup', event => this.toggleService.toggleWithEvent(event))
      );
      this._unlistenFuncs.push(
        this.renderer.listen(el, 'keydown.arrowdown', event => this.toggleService.toggleWithEvent(event))
      );
      this.focusService.listenToArrowKeys(el);
    }
  }

  private _container: HTMLElement;
  get container() {
    return this._container;
  }
  set container(el: HTMLElement) {
    this._container = el;

    // whether root container or not, tab key should always toggle (i.e. close) the container
    this._unlistenFuncs.push(
      this.renderer.listen(el, 'keydown.tab', event => this.toggleService.toggleWithEvent(event))
    );

    if (this.parent) {
      // if it's a nested container, pressing esc has the same effect as pressing left key, which closes the current
      // popup and moves up to its parent. Here, we stop propagation so that the parent container
      // doesn't receive the esc keydown
      this._unlistenFuncs.push(
        this.renderer.listen(el, 'keydown.esc', event => {
          this.focusService.move(ArrowKeyDirection.LEFT);
          event.stopPropagation();
        })
      );
    } else {
      // The root container is the only one we register to the focus service, others do not need focus
      this.focusService.registerContainer(el);

      // The root container will simply close the container when esc key is pressed
      this._unlistenFuncs.push(
        this.renderer.listen(el, 'keydown.esc', event => this.toggleService.toggleWithEvent(event))
      );

      // When the user moves focus outside of the menu, we close the dropdown
      this._unlistenFuncs.push(
        this.renderer.listen(el, 'blur', event => {
          // we clear out any existing focus on the items
          this.children.pipe(take(1)).subscribe(items => items.forEach(item => item.blur()));

          // event.relatedTarget is null in IE11. In that case we use document.activeElement which correctly points
          // to the element we want to check. Note that other browsers might point document.activeElement to the
          // wrong element. This is ok, because all the other browsers we support relies on event.relatedTarget.
          const target = event.relatedTarget || document.activeElement;

          // If the user clicks on an item which triggers the blur, we don't want to close it since it may open a submenu.
          // In the case of needing to close it (i.e. user selected an item and the dropdown menu is set to close on
          // selection), dropdown-item.ts handles it.
          if (target && isPlatformBrowser(this.platformId)) {
            if (el.contains(target) || target === this.trigger) {
              return;
            }
          }
          // We let the user move focus to where the want, we don't force the focus back on the trigger
          this.focusBackOnTrigger = false;
          this.toggleService.open = false;
        })
      );
    }
  }

  focus() {
    if (this.trigger && isPlatformBrowser(this.platformId)) {
      this.trigger.focus();
    }
  }
  blur() {
    if (this.trigger && isPlatformBrowser(this.platformId)) {
      this.trigger.blur();
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
    return wrapObservable(this.children, () => (this.toggleService.open = true));
  }
  private closeAndGetThis() {
    return wrapObservable(of(this), () => (this.toggleService.open = false));
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
    Linkers.linkVertical(children);
    if (this.parent) {
      Linkers.linkParent(children, this.closeAndGetThis(), ArrowKeyDirection.LEFT);
    }
    this.children.next(children);
  }

  ngOnDestroy() {
    this._unlistenFuncs.forEach((unlisten: Function) => unlisten());
    this.focusService.detachListeners();
  }
}

export const DROPDOWN_FOCUS_HANDLER_PROVIDER = customFocusableItemProvider(DropdownFocusHandler);
