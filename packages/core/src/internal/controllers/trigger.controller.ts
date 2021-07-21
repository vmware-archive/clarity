/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ReactiveController, ReactiveElement } from 'lit';
import { listenForAttributeChange } from '../utils/events.js';
import { getActiveElement } from '../utils/focus.js';

export type Triggerable = ReactiveElement & { trigger?: HTMLElement };

/**
 * The TriggerController will track the last known interacted element
 * when the host component was created or shown. This is used for when a component
 * needs to know the element that "triggered" the interaction.
 *
 * Examples include, popover types, closable types and draggable types.
 */
export function triggerable<T extends Triggerable>(config = { focus: true }): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new TriggerController(instance, config));
}

export class TriggerController<T extends Triggerable> implements ReactiveController {
  private observer: MutationObserver;

  constructor(private host: T, private config = { focus: true }) {
    this.host.addController(this);
  }

  private activeElement = getActiveElement() as HTMLElement;

  private _current: HTMLElement;
  get current() {
    return this.host.trigger ? this._current : this.activeElement;
  }

  private _prev: HTMLElement;
  get prev() {
    return this._prev;
  }

  async hostConnected() {
    this.observer = listenForAttributeChange(this.host, 'hidden', () => {
      const activeElement = getActiveElement() as HTMLElement;

      if (!this.host.hidden && activeElement) {
        this.activeElement = activeElement;
      } else {
        this.focusCurrent();
      }
    });
  }

  hostUpdate() {
    if (this._current !== this.host.trigger) {
      this._prev = this._current;
      this._current = this.host.trigger ? this.host.trigger : this.activeElement;
    }
  }

  hostDisconnected() {
    this.focusCurrent();
    this.observer.disconnect();
  }

  private focusCurrent() {
    if (this.config.focus) {
      this.current?.focus();
    }
  }
}
