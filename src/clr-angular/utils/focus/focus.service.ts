/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable, Optional, Renderer2, SkipSelf } from '@angular/core';
import { isObservable, of } from 'rxjs';

import { ArrowKeyDirection } from './arrow-key-direction.enum';
import { FocusableItem } from './focusable-item/focusable-item';

@Injectable()
export class FocusService {
  constructor(private renderer: Renderer2) {}

  private container: HTMLElement;

  private _current: FocusableItem;
  public get current() {
    return this._current;
  }

  reset(first: FocusableItem) {
    this._current = first;
  }

  listenToArrowKeys(el: HTMLElement) {
    // The following listeners return false when there was an action to take for the key pressed,
    // in order to prevent the default behavior of that key.
    this.renderer.listen(el, 'keydown.arrowup', () => !this.move(ArrowKeyDirection.UP));
    this.renderer.listen(el, 'keydown.arrowdown', () => !this.move(ArrowKeyDirection.DOWN));
    this.renderer.listen(el, 'keydown.arrowleft', () => !this.move(ArrowKeyDirection.LEFT));
    this.renderer.listen(el, 'keydown.arrowright', () => !this.move(ArrowKeyDirection.RIGHT));
  }

  registerContainer(el: HTMLElement) {
    this.container = el;
    this.renderer.setAttribute(el, 'tabindex', '0');
    this.listenToArrowKeys(el);
    // The following listeners return false when there was an action to take for the key pressed,
    // in order to prevent the default behavior of that key.
    this.renderer.listen(el, 'keydown.space', () => !this.activateCurrent());
    this.renderer.listen(el, 'keydown.enter', () => !this.activateCurrent());
  }

  moveTo(item: FocusableItem) {
    this.renderer.setAttribute(this.container, 'aria-activedescendant', item.id);
    if (this.current) {
      this.current.blur();
    }
    item.focus();
    this._current = item;
  }

  /**
   * The second parameter, optional, is here to allow recursion to skip disabled items.
   */
  move(direction: ArrowKeyDirection, current = this.current) {
    const next = current[direction];
    if (next) {
      // Turning the value into an Observable isn't great, but it's the fastest way to avoid code duplication.
      // If performance ever matters for this, we can refactor using additional private methods.
      const nextObs = isObservable(next) ? next : of(next);
      nextObs.subscribe(item => {
        if (item.disabled) {
          return this.move(direction, item);
        } else {
          this.moveTo(item);
          return true;
        }
      });
    }
    return false;
  }

  activateCurrent() {
    if (this.current && this.current.activate) {
      this.current.activate();
      return true;
    }
    return false;
  }
}

export function clrFocusServiceFactory(existing: FocusService, renderer: Renderer2) {
  return existing || new FocusService(renderer);
}

export const FOCUS_SERVICE_PROVIDER = {
  provide: FocusService,
  useFactory: clrFocusServiceFactory,
  deps: [[new Optional(), new SkipSelf(), FocusService], Renderer2],
};
