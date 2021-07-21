/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ReactiveElement, ReactiveController } from 'lit';
import { getOffesetDifference } from '../utils/math.js';

export type Touch = ReactiveElement;

/**
 * @internal Provides all nessesary events for basic touch gestures
 *
 * @event cdsTouchStart
 * @event cdsTouchMove
 * @event cdsTouchEnd
 */
export function touch<T extends Touch>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new TouchController(instance));
}

export class TouchController<T extends Touch> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  private startPosition: { x: number; y: number };
  private moveHandler = this.move.bind(this);
  private endHandler = this.end.bind(this);

  async hostConnected() {
    await this.host.updateComplete;
    this.host.addEventListener('pointerdown', (e: any) => this.start(e), { passive: true });
  }

  private start(e: PointerEvent) {
    if ((e as any).path.find((el: any) => el === this.host)) {
      this.startPosition = { x: e.clientX, y: e.clientY };
      document.addEventListener('pointerup', this.endHandler, { passive: true });
      document.addEventListener('pointermove', this.moveHandler, { passive: true });
      this.host.dispatchEvent(new CustomEvent('cdsTouchStart', { detail: { ...this.startPosition } }));
    }
  }

  private end(e: PointerEvent) {
    if (this.startPosition) {
      const detail = this.getCoordinates(e);
      document.removeEventListener('pointerup', this.endHandler, false);
      document.removeEventListener('pointermove', this.moveHandler, false);
      this.host.dispatchEvent(new CustomEvent('cdsTouchEnd', { detail }));
    }
  }

  private move(e: PointerEvent) {
    requestAnimationFrame(() => {
      const detail = this.getCoordinates(e);
      this.startPosition = { x: e.clientX, y: e.clientY };
      this.host.dispatchEvent(new CustomEvent('cdsTouchMove', { detail }));
    });
  }

  private getCoordinates(e: PointerEvent) {
    return {
      x: e.clientX,
      y: e.clientY,
      offsetX: getOffesetDifference(this.startPosition.x, e.clientX),
      offsetY: getOffesetDifference(this.startPosition.y, e.clientY),
    };
  }
}
