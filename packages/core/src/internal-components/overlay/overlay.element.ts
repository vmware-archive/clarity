/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  baseStyles,
  createId,
  CdsBaseFocusTrap,
  event,
  EventEmitter,
  FocusTrapTracker,
  internalProperty,
  onKey,
  property,
} from '@cds/core/internal';
import { html, query } from 'lit-element';
import { styles } from './overlay.element.css.js';

export function isNestedOverlay(myId: string, overlayPrefix: string, trapIds: string[]): boolean {
  const overlayIds = trapIds.filter(id => id.indexOf(overlayPrefix) > -1);
  return overlayIds.indexOf(myId) > 0; // id is present and not the first one...
}

export function overlayIsActive(overlayId: string, focusTrapService = FocusTrapTracker) {
  return focusTrapService.getCurrentTrapId() === overlayId;
}

type CloseChangeSources = 'backdrop-click' | 'escape-keypress' | 'close-button-click' | 'custom';

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
 */
export class CdsInternalOverlay extends CdsBaseFocusTrap {
  @property({ type: String })
  ariaModal = 'true';

  @property({ type: String })
  role = 'dialog';

  // renderRoot needs delegatesFocus so that focus can cross the shadowDOM
  // inside an element with aria-modal set to true
  protected createRenderRoot(): Element | ShadowRoot {
    return this.attachShadow({ mode: 'open', delegatesFocus: true });
  }

  private overlayIdPrefix = '_overlay-';

  @event() protected closeChange: EventEmitter<CloseChangeSources>;

  @internalProperty({ type: Boolean })
  protected isLayered = false;

  @query('.overlay-backdrop') protected backdrop: HTMLElement;

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.backdrop.addEventListener('click', this.fireEventOnBackdropClick);
  }

  updated(props: Map<string, any>) {
    super.updated(props);
    const oldLayered = this.isLayered;
    const isNested = isNestedOverlay(this.focusTrapId, this.overlayIdPrefix, FocusTrapTracker.getTrapIds());
    const newLayered = this.focusTrap.active && isNested;

    if (oldLayered !== newLayered) {
      this.isLayered = newLayered;
      this.requestUpdate('isLayered', oldLayered);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this.fireEventOnEscape);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.fireEventOnEscape);
    this.backdrop.removeEventListener('click', this.fireEventOnBackdropClick);
  }

  constructor() {
    super();

    // override focus-trap base id so we know this is an overlay
    this.focusTrapId = createId(this.overlayIdPrefix);
  }

  closeOverlay(trigger: CloseChangeSources = 'custom') {
    this.closeChange.emit(trigger);
  }

  protected get backdropTemplate() {
    return html`<div
      class="${this.isLayered ? 'overlay-backdrop layered' : 'overlay-backdrop'}"
      aria-hidden="true"
    ></div>`;
  }

  protected render() {
    return html`
      ${this.backdropTemplate}
      <div class="private-host" tabindex="-1" aria-modal="true" role="dialog">
        <slot></slot>
      </div>
    `;
  }

  get overlayIsActive() {
    return FocusTrapTracker.getCurrentTrapId() === this.focusTrapId;
  }

  protected fireEventOnBackdropClick = () => {
    if (overlayIsActive(this.focusTrapId)) {
      this.closeOverlay('backdrop-click');
    }
  };

  protected fireEventOnEscape = (e: KeyboardEvent) => {
    if (overlayIsActive(this.focusTrapId)) {
      onKey('escape', e, () => {
        this.closeOverlay('escape-keypress');
      });
    }
  };

  static get styles() {
    return [baseStyles, styles];
  }
}
