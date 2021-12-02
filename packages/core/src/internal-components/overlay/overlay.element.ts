/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  Animatable,
  AnimationModalEnterName,
  animate,
  baseStyles,
  event,
  EventEmitter,
  i18n,
  I18nService,
  state,
  property,
  reverseAnimation,
  ClosableController,
  focusTrap,
  CloseChangeType,
  LayerController,
  ariaModal,
  firstFocus,
  layer,
  closable,
} from '@cds/core/internal';
import { html, LitElement } from 'lit';
import styles from './overlay.element.scss';
import sharedStyles from './shared.element.scss';

@layer<CdsInternalStaticOverlay>()
@closable<CdsInternalStaticOverlay>()
@focusTrap<CdsInternalStaticOverlay>()
@ariaModal<CdsInternalStaticOverlay>()
@firstFocus<CdsInternalStaticOverlay>()
export class CdsInternalStaticOverlay extends LitElement {
  @property({ type: Boolean }) closable = false;

  @state({ type: Boolean, reflect: true }) protected demoMode = false;

  @i18n() i18n = I18nService.keys.overlay;

  protected layerController: LayerController<this>;

  protected closableController: ClosableController<this>;

  // renderRoot needs delegatesFocus so that focus can cross the shadowDOM inside an element with aria-modal set to true
  static get shadowRootOptions(): any {
    return { ...super.shadowRootOptions, delegatesFocus: true };
  }

  protected get closeButtonTemplate() {
    return html`<cds-internal-close-button
      cds-layout="align:top"
      aria-label=${this.i18n.closeButtonAriaLabel}
      @click=${() => this.closeOverlay('close-button-click')}
    ></cds-internal-close-button>`;
  }

  protected get backdropTemplate() {
    return html`<div class="overlay-backdrop" aria-hidden="true" @click=${() => this.backdropClick()}></div>`;
  }

  protected render() {
    return html`
      ${this.backdropTemplate}
      <div class="private-host" tabindex="-1">
        <slot></slot>
      </div>
    `;
  }

  protected backdropClick() {
    if (this.layerController.isActiveLayer) {
      this.closeOverlay('backdrop-click');
    }
  }

  closeOverlay(trigger: CloseChangeType = 'custom') {
    this.closableController.close(trigger);
  }

  static get styles() {
    return [baseStyles, styles, sharedStyles];
  }
}

/**
 *
 * ```typescript
 * import '@cds/core/internal-components/overlay/register.js';
 * ```
 *
 * ```html
 * <cds-internal-overlay>
 *  <section cds-layout="vertical align:horizontal-stretch">
 *    <div cds-layout="vertical pad:md gap:md">
 *      <h2 cds-text="display">A Title</h2>
 *      <div>
 *        <p cds-text="body">
 *          Content inside a generic overlay.
 *        </p>
 *      </div>
 *    </div>
 *  </section>
 * </cds-internal-overlay>
 * ```
 *
 * @beta
 * @element cds-internal-overlay
 * @slot - Content slot for the content inside the overlay's panel
 * @event closeChange - Notify user when close event has occurred
 * @cssprop --backdrop-background
 * @cssprop --layered-backdrop-background
 * @cssprop --animation-duration
 * @cssprop --animation-easing
 *
 * KNOWN ISSUE: Safari jumps through the exit animation but only when the ESC key is pressed.
 *
 */
@animate({
  hidden: {
    true: reverseAnimation(AnimationModalEnterName),
    false: AnimationModalEnterName,
  },
})
export class CdsInternalOverlay extends CdsInternalStaticOverlay implements Animatable {
  @property({ type: String })
  cdsMotion = 'on';

  @event()
  cdsMotionChange: EventEmitter<string>;
}
