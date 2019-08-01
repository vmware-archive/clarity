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

  private _unlistenFuncs = [];
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
    this._unlistenFuncs.push(
      this.renderer.listen(el, 'keydown.arrowup', event => !this.move(ArrowKeyDirection.UP, event))
    );
    this._unlistenFuncs.push(
      this.renderer.listen(el, 'keydown.arrowdown', event => !this.move(ArrowKeyDirection.DOWN, event))
    );
    this._unlistenFuncs.push(
      this.renderer.listen(el, 'keydown.arrowleft', event => !this.move(ArrowKeyDirection.LEFT, event))
    );
    this._unlistenFuncs.push(
      this.renderer.listen(el, 'keydown.arrowright', event => !this.move(ArrowKeyDirection.RIGHT, event))
    );
  }

  registerContainer(el: HTMLElement) {
    this.renderer.setAttribute(el, 'tabindex', '0');
    this.listenToArrowKeys(el);
    // The following listeners return false when there was an action to take for the key pressed,
    // in order to prevent the default behavior of that key.
    this._unlistenFuncs.push(this.renderer.listen(el, 'keydown.space', () => !this.activateCurrent()));
    this._unlistenFuncs.push(this.renderer.listen(el, 'keydown.enter', () => !this.activateCurrent()));
  }

  moveTo(item: FocusableItem) {
    if (this.current) {
      this.current.blur();
    }
    item.focus();
    this._current = item;
  }

  move(direction: ArrowKeyDirection, event: any = undefined) {
    if (this.current) {
      // We want to prevent default behavior that results from the keydown,
      // which may undesirably move the cursor around when using a screen reader
      if (event) {
        event.preventDefault();
      }

      const next = this.current[direction];
      if (next) {
        // Turning the value into an Observable isn't great, but it's the fastest way to avoid code duplication.
        // If performance ever matters for this, we can refactor using additional private methods.
        const nextObs = isObservable(next) ? next : of(next);
        nextObs.subscribe(item => {
          this.moveTo(item);
          return true;
        });
      }
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

  public detachListeners() {
    this._unlistenFuncs.forEach((unlisten: () => void) => unlisten());
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
