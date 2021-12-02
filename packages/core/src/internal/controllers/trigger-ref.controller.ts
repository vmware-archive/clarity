/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// todo: cory tests
import { ReactiveController, ReactiveElement } from 'lit';
import { listenForAttributeChange } from '../utils/events.js';

/**
 * The TriggerRefController will track the last known element that was interacted
 * when the host component was created or shown. This is used for when a component
 * needs to know the element that "triggered" the interaction.
 *
 * Examples include, popover types, closable types and draggable types.
 */
export class TriggerRefController<T extends ReactiveElement & { trigger?: HTMLElement }> implements ReactiveController {
  private observer: MutationObserver;

  constructor(private host: T) {
    this.host.addController(this);
  }

  private activeElement = (this.host.getRootNode() as any).activeElement;

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
      if (!this.host.hidden) {
        this.activeElement = (this.host.getRootNode() as any).activeElement;
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
    this.observer.disconnect();
  }
}
