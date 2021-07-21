/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ReactiveController, ReactiveElement } from 'lit';
import { listenForAttributeChange } from '../utils/events.js';
import { GlobalStateService } from '../services/global.service.js';

/**
 * LayerController provides manage layer tracking for components. Ensures any component
 * that may be a layer on top of other components is given a ordered index relative
 * to other existing layers on the page.
 *
 * This makes layer tracking easier for CSS, such as targeting the top or bottom
 * layer element or setting a z-index ordering.
 */
export function layer<T extends ReactiveElement>(): ClassDecorator {
  return (target: any) => {
    target.addInitializer((instance: T & { layerController?: LayerController<T> }) => {
      if (!instance.layerController) {
        instance.layerController = new LayerController(instance);
      }
    });
  };
}

export class LayerController<T extends ReactiveElement> implements ReactiveController {
  private observer: MutationObserver;

  constructor(private host: T) {
    this.host.addController(this);
  }

  get isActiveLayer() {
    return this.layers[this.layers.length - 1] === this.host;
  }

  get layerIndex() {
    const index = this.layers.indexOf(this.host);
    return index === -1 ? null : index;
  }

  private get layers() {
    return [...GlobalStateService.state.layerElements];
  }

  private set layers(layers: HTMLElement[]) {
    GlobalStateService.state.layerElements = [...layers];
  }

  hostConnected() {
    if (!this.host.hasAttribute('_demo-mode')) {
      this.updateLayer();
      this.observer = listenForAttributeChange(this.host, 'hidden', () => this.updateLayer());
    }
  }

  hostDisconnected() {
    this.observer?.disconnect();
    this.removeLayer();
  }

  private updateLayer() {
    if (this.host.hasAttribute('hidden')) {
      this.removeLayer();
    } else {
      this.addLayer();
    }

    this.layers.forEach((layer, i) => layer.setAttribute('cds-layer', `${i}`));
  }

  private addLayer() {
    if (!this.layers.find(layer => this.host === layer)) {
      this.layers = [...this.layers, this.host];

      // We do this so that screen-readers can make their way through nested/layered overlays.
      // It sets a virtual cursor trap on the top-most overlay.
      if (this.host.ariaModal === 'true') {
        this.layers.filter(layer => layer.ariaModal === 'true').forEach(layer => (layer.role = 'region'));
        this.host.role = 'dialog';
      }
    }
  }

  private removeLayer() {
    this.layers = this.layers.filter(layer => layer !== this.host);
    this.host.removeAttribute('cds-layer');

    const nextModal = this.layers.find(layer => layer.ariaModal === 'true');
    if (nextModal) {
      nextModal.role = 'dialog';
    }
  }
}
