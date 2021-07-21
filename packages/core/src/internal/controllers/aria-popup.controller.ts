/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ReactiveController, ReactiveElement } from 'lit';
import { listenForAttributeChange } from '../utils/events.js';
import { TriggerController } from './trigger.controller.js';

export type AriaPopup = ReactiveElement & { trigger?: HTMLElement };

/**
 * Provides all nessesary aria-* attributes to create a vaild aria popup.
 * Used in combination of the `@ariaPopupTrigger` controller.
 */
export function ariaPopup<T extends AriaPopup>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new AriaPopupController(instance));
}

export class AriaPopupController<T extends AriaPopup> implements ReactiveController {
  private observer: MutationObserver;

  private trigger: TriggerController<T>;

  constructor(private host: T) {
    this.host.addController(this);
    this.trigger = new TriggerController(this.host, { focus: false });
  }

  async hostConnected() {
    await this.host.updateComplete;
    this.observer = listenForAttributeChange(this.host, 'hidden', () => this.updateTrigger(!this.host.hidden));
  }

  async hostUpdate() {
    await this.host.updateComplete;
    this.updateTrigger(!this.host.hidden);
  }

  hostDisconnected() {
    this.updateTrigger(false);
    this.observer.disconnect();
  }

  private updateTrigger(expanded: boolean) {
    if (this.trigger.current?.hasAttribute('popup')) {
      this.trigger.current.ariaExpanded = `${expanded}`;
    }

    if (this.trigger.prev?.hasAttribute('popup') && this.trigger.prev !== this.trigger.current) {
      this.trigger.prev.ariaExpanded = 'false';
    }
  }
}
